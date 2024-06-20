import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import Navbar from "./navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export default async function Home() {
    const session = await getServerSession(authOptions)
    if (session) redirect('/tasks/today')
    return (
        <main className="">
            <Navbar />
            <section className="flex flex-col p-4 text-center gap-3 items-center">
                <h1 className="text-5xl font-bold">
                    Organize your work and life, finally
                </h1>
                <p className="text-lg">
                    Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.
                </p>
                <Link href={'/auth/signup'} className="rounded-lg bg-orange-600 px-3 py-2 text-white font-bold text-lg">
                    START FOR FREE
                </Link>
            </section>
        </main>
    );
}