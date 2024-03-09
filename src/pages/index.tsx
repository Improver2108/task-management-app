import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.task.hello.useQuery('manoj');
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') return <div>...loading</div>
  else if (status === 'authenticated') void router.replace('/app/today')
  else
    return (
      <>
        <Navbar />
        <button>{hello.data}</button>
      </>
    );
}

