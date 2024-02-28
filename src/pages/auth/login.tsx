import { signIn } from "next-auth/react"
import Authenticate from "~/components/Authenticate";
const Login = () => {

    return (
        <Authenticate action={true} />
    )
}

export default Login