import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import Authenticate from "~/components/Authenticate";
import { authOptions } from "~/server/auth";

const Login = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <Authenticate action={false} providers={providers} />
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
    if (session) return { redirect: { destination: "/" } }


    const providers = await getProviders()

    return {
        props: { providers: providers ?? [] },
    }
}

export default Login