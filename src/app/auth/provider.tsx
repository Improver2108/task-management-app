'use client'

import { ClientSafeProvider, signIn } from "next-auth/react";

type ProviderProp = {
    provider: ClientSafeProvider
}
export default function Provider({ provider }: ProviderProp) {
    return (
        <button className='flex justify-center items-center text-2xl font-semibold border min-h-[2.25em] rounded-xl' onClick={() => signIn(provider.id, { callbackUrl: '/tasks/today' })} >
            Continue with {provider.name}
        </button>
    );
}