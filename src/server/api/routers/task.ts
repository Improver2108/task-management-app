//routers for tasks
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.string())
    .query(async ({ input }) => `Hello ${input}`),
});
