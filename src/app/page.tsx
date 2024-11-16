import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import Navbar from "./navbar";
import TappingButton from "./_components/tappingButton";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/page/today");
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center gap-6 py-10">
        <section className="flex flex-col items-center gap-6 p-4 text-center">
          <h1 className="text-5xl font-bold">
            Tame your work-life chaos because, juggling isn’t your sport!
          </h1>
          <p className="text-lg">
            Simplify life for you and your team—because sticky notes can only do
            so much!
          </p>
        </section>
        <section>
          <TappingButton />
        </section>
        <section className="grid">
          <Image
            src={"/assets/sampleView.svg"}
            width={430}
            height={402}
            alt="image"
            style={{ gridArea: "1/1/2/2", zIndex: "70" }}
            className="items-center self-end justify-self-center"
          />
          <Image
            src={"/assets/background1.svg"}
            width={500}
            height={402}
            alt="image"
            style={{ gridArea: "1/1/2/2" }}
          />
        </section>
      </main>
    </>
  );
}
