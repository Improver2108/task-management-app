import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Task Management App</title>
        <meta name="description" content="this is a  task management app" />
      </Head>
      <div className="font-mono min-h-fit">
        <Component {...pageProps} />
      </div>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);