import { getProviders } from "next-auth/react";
import Authenticate from "../authenticate";

export default async function Login() {
    const providers = await getProviders()
    return (
        <Authenticate action={true} providers={providers} />
    )
}