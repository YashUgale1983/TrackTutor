import Image from "next/image";
import {
    LoginLink,
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
  } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from "next/link";

const Navbar = ()=>{
    const { getUser } = getKindeServerSession()
    const user = getUser()
    
    return (
        <div className="navbar px-16 py-5 text-white">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-lg">TrackTutor</Link>
            </div>
            <div >
                {!user? (
                    <>  
                    <div className="flex space-x-16">
                        <div><Link href='/pricing'>Pricing</Link></div>
                        <div><LoginLink>Sign in</LoginLink></div>
                        <div><RegisterLink>Get started{' '}</RegisterLink></div>
                    </div>
                    </>
                ) : (
                    <>
                        <div className="flex-1 mx-8">
                            <Link href='/dashboard' className="btn btn-ghost text-md">Dashboard</Link>
                        </div>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                            <Image src="/profilePic.png" width={50} height={50} alt="logo"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href='/profile'>Profile</Link></li>
                            <li><Link href='/settings'>Settings</Link></li>
                            <li><LogoutLink>Log out</LogoutLink></li>
                        </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar;