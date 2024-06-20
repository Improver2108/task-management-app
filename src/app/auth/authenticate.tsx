import Link from 'next/link';
import Image from 'next/image';
import { getProviders, signIn } from "next-auth/react";
import Provider from './provider';
type TAuthenticate = {
    action: boolean,
    providers: Awaited<ReturnType<typeof getProviders>>
}

type TCredentials = {
    action: string
}
const passWordRegex = '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'

const Authenticate = ({ action, providers }: TAuthenticate) => {

    const authenticateOptions = {
        message: action ? 'Log in' : 'Sign up',
        authenticateClickButton: action ? 'Log in' : 'Sign up with Email'
    }
    const credentials = ['Email', 'Password']
    return (
        <div className='px-[2rem] py-[2rem] flex justify-center flex-shrink-1'>
            <div className='w-[35em]'>
                <Link href={`/`}>
                    <Image src='/Designer.svg' width={100} height={80} alt='logo' />
                </Link>
                <div className='flex mt-7 flex-col gap-[3rem]'>
                    <h3 className='text-5xl font-semibold'>{authenticateOptions.message}</h3>
                    <div className='flex flex-col gap-4'>
                        {providers && Object.values(providers).map(provider =>
                            <Provider provider={provider} key={provider.name} />
                        )}
                    </div>
                    <hr className="border-gray-300" />
                    <form className='flex flex-col gap-4'>
                        {credentials.map((credentialType, index) => <CredentialType action={credentialType} key={index} />)}
                        <button type='submit' className='border border-gray-600 p-4 rounded-xl'>CLick Me</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

const CredentialType = ({ action }: TCredentials) => {
    return (
        <div className='border border-[#e6e6e6] rounded-xl px-3 py-3 hover:border-gray-800'>
            <label htmlFor={`${action.toLowerCase()}`}>
                <div className='pb-3 text-md font-medium'>
                    {action}
                </div>
                <input
                    id={`${action.toLocaleLowerCase()}`}
                    className='min-w-[100%] focus:outline-none text-xl'
                    type={`${action.toLowerCase()}`}
                    placeholder={`Enter your ${action.toLowerCase()}...`}
                    required
                    {...(action === 'Password' && { pattern: passWordRegex })}//learned a good thing here
                />
            </label>
        </div>
    )
}

export default Authenticate;