"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

type ProviderProp = {
  provider: ClientSafeProvider;
  children: React.ReactNode;
};
export default function Provider({ provider, children }: ProviderProp) {
  return (
    <button
      className="flex min-h-[2.25em] items-center justify-center gap-3 rounded-xl border text-2xl font-semibold"
      onClick={() => signIn(provider.id, { callbackUrl: "/tasks/today" })}
    >
      {children}
      Continue with {provider.name}
    </button>
  );
}
