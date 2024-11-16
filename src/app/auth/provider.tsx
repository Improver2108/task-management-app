"use client";

import { type ClientSafeProvider, signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

type ProviderProp = {
  provider: ClientSafeProvider;
  children: React.ReactNode;
};
export default function Provider({ provider, children }: ProviderProp) {
  return (
    <Button
      variant="outline"
      className="flex gap-3 py-6 text-xl font-bold"
      onClick={() => signIn(provider.id, { callbackUrl: "/page/today" })}
    >
      {children}
      Continue with {provider.name}
    </Button>
  );
}
