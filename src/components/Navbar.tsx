import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="border-b-[1px] ">
      <div className="flex mx-5 my-4 min-h-5">
        <div>Logo</div>
        <div>Kuch toh Hai</div>
      </div>
    </nav>
  );
}


export default Navbar;