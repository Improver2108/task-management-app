import { useSession } from "next-auth/react";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.task.hello.useQuery('manoj');
  const { data } = useSession()
  return (
    <>
      <Navbar />
      <button>{hello.data}</button>
    </>

  );
}