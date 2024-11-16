import Link from "next/link";
import Image from "next/image";
import { getProviders } from "next-auth/react";
import Provider from "./provider";
import { Button } from "~/components/ui/button";
type TAuthenticate = {
  action: boolean;
  providers: Awaited<ReturnType<typeof getProviders>>;
};

type TCredentials = {
  action: string;
};
const passWordRegex =
  "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/";
const providerImage = {
  google: "https://www.svgrepo.com/show/512321/google-178.svg",
};

const Authenticate = ({ action, providers }: TAuthenticate) => {
  const authenticateOptions = {
    message: action ? "Log in" : "Sign up",
    authenticateClickButton: action ? "Log in" : "Sign up with Email",
  };
  const credentials = ["Email", "Password"];
  return (
    <main className="flex-shrink-1 flex justify-center px-[2rem] py-[2rem] sm:px-[3rem]">
      <div className="w-[35em]">
        <Link href={`/`}>
          <Image src="/Designer.svg" width={100} height={80} alt="logo" />
        </Link>
        <div className="mt-7 flex flex-col gap-[1rem]">
          <h3 className="text-5xl font-semibold">
            {authenticateOptions.message}
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {providers &&
              Object.values(providers).map((provider) => (
                <Provider provider={provider} key={provider.name}>
                  <Image
                    src={`/assets/google.svg`}
                    width={20}
                    height={20}
                    alt="provider image"
                  />
                </Provider>
              ))}
          </div>
          <hr className="border-gray-300" />
          <form className="flex flex-col gap-4">
            {credentials.map((credentialType, index) => (
              <CredentialType action={credentialType} key={index} />
            ))}
            <Button
              type="submit"
              className="py-6 text-xl font-semibold"
              variant="destructive"
            >
              {authenticateOptions.message}
            </Button>
          </form>
          <div className="space-y-5 text-[#202020]">
            <Button
              variant="link"
              className="px-0 font-normal text-[#202020] underline"
            >
              Forgot your password?
            </Button>
            <p className="text-sm">
              By continuing with Google, you agree to Todoist’s{" "}
              <span className="cursor-pointer underline underline-offset-2">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer underline underline-offset-2">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

const CredentialType = ({ action }: TCredentials) => {
  return (
    <div className="rounded-xl border border-[#e6e6e6] px-3 py-3 hover:border-gray-800">
      <label htmlFor={`${action.toLowerCase()}`}>
        <div className="text-md pb-3 font-medium">{action}</div>
        <input
          id={`${action.toLocaleLowerCase()}`}
          className="min-w-[100%] text-xl focus:outline-none"
          type={`${action.toLowerCase()}`}
          placeholder={`Enter your ${action.toLowerCase()}...`}
          required
          {...(action === "Password" && { pattern: passWordRegex })} //learned a good thing here
        />
      </label>
    </div>
  );
};

export default Authenticate;
