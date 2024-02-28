import { signIn } from 'next-auth/react';
import { BannerIcon } from './Icons';
import Link from 'next/link';

type TAction<T> = {
    action: T
}

type TAuthenticate = TAction<boolean>
type TSite = TAction<string>
type TCredentials = TAction<string>
const passWordRegex = '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'


const Authenticate = ({ action }: TAuthenticate) => {

    const authenticateOptions = {
        message: action ? 'Log in' : 'Sign up',
        authenticateClickButton: action ? 'Log in' : 'Sign up with Email'
    }
    const loginWith = ['Google', 'Facebook', 'Discord'];
    const credentials = ['Email', 'Password']
    return (
        // <button onClick={() => signIn()}>
        //     {action ? <SignInLogic /> : <SignUpLogic />}
        // </button>
        <div className='px-[2rem] py-[2rem] flex justify-center flex-shrink-1'>
            <div className='w-[35em]'>
                <Link href={`/`}>
                    <BannerIcon width={80} height={70} />
                </Link>
                <div className='flex mt-7 flex-col gap-[3rem]'>
                    <h3 className='text-5xl font-semibold'>{authenticateOptions.message}</h3>
                    <div className='flex flex-col gap-4'>
                        {loginWith.map((site) => <LoginWith action={site} />)}
                    </div>
                    <hr className="border-gray-300" />
                    <form className='flex flex-col gap-4'>
                        {credentials.map((credentialType) => <CredentialType action={credentialType} />)}
                        <button type='submit' className='border border-gray-600 p-4 rounded-xl'>CLick Me</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

const LoginWith = ({ action }: TSite) => {
    return (
        <button onClick={() => signIn()}>
            <Link href={'/'} className='flex justify-center items-center text-2xl font-semibold border min-h-[2.25em] rounded-xl'>
                Continue with {action}
            </Link>
        </button>
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

const SignUpLogic = () => <div>Sign Up</div>

const SignInLogic = () => <div>Sign In</div>

export default Authenticate;