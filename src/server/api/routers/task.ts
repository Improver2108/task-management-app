//routers for tasks
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const task = z.object({
  name: z.string(),
  description: z.string(),
  deadline: z.date(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});

export const taskRouter = createTRPCRouter({
  create: protectedProcedure.input(task).mutation(
    async ({ input: task, ctx }) =>
      await db.task.create({
        data: {
          ...task,
          createdById: ctx.session.user.id,
        },
      }),
  ),
  get: protectedProcedure.query(
    async ({ ctx }) =>
      await ctx.db.task.findMany({
        where: { createdById: ctx.session.user.id },
        select: {
          name: true,
          description: true,
          deadline: true,
          priority: true,
          createdBy: {
            select: { name: true, email: true, image: true },
          },
        },
      }),
  ),
  getToday: protectedProcedure.query(async ({ ctx }) => {
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setUTCHours(23, 59, 59, 999);
    return await ctx.db.task.findMany({
      where: {
        createdById: ctx.session.user.id,
        deadline: {
          gte: todayStart.toISOString(),
          lte: todayEnd.toISOString(),
        },
      },
      select: {
        name: true,
        description: true,
        deadline: true,
        priority: true,
        createdBy: {
          select: { name: true, email: true, image: true },
        },
      },
    });
  }),

  getTodayCount: protectedProcedure.query(async ({ ctx }) => {
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setUTCHours(23, 59, 59, 999);
    return await ctx.db.task.count({
      where: {
        deadline: {
          gte: todayStart.toISOString(),
          lte: todayEnd.toISOString(),
        },
      },
    });
  }),

  getOverdue: protectedProcedure.query(async ({ ctx }) => {
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);
    return await ctx.db.task.findMany({
      where: {
        createdById: ctx.session.user.id,
        deadline: {
          lt: todayStart.toISOString(),
        },
      },
      select: {
        name: true,
        description: true,
        deadline: true,
        priority: true,
        createdBy: {
          select: { name: true, email: true, image: true },
        },
      },
    });
  }),
});
