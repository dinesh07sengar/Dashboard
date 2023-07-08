'use client'

import React, { useEffect, useState } from 'react'
import { signIn, useSession } from "next-auth/react"
import style from "@/app/styles/login.module.css"
import { FcGoogle } from "react-icons/fc"
import { PiAppleLogoThin } from 'react-icons/pi'
import Link from 'next/link'
import {useRouter} from 'next/navigation'




const Login = () => {
    const [state, setstate] = useState({ email: "", password: "" });
    const session = useSession();
    const router=useRouter();
    console.log(session)

    const handlechange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })

    }
    const handlesignin = () => {
        signIn("google")


    }
    useEffect(()=>{
        if(session.status==="authenticated"){
            router.push("/dashboard")

        }

    },[session.status])
    return (
        <div className={style.container}>

            <div className={style.box}>

                <h1>
                    Board.
                </h1>

            </div>
            <div className={style.boxl}>
                <div>
                    <div>
                        <h1>Signin</h1>
                        <p>signin your account</p>
                    </div>
                    <div className={style.signinbtns}>
                        <div>
                            <button onClick={handlesignin} ><FcGoogle className={style.icons} />Sign in with Google</button>
                        </div>
                        <div>
                            <button disabled style={{ opacity: "0.6" }}><PiAppleLogoThin className={style.icons} />Sign in with apple</button>
                        </div>
                    </div>
                    <div>
                        <form className={style.forms}>
                            <label htmlFor="email">Email address</label>
                            <input type='email' name='email' value={state.email} onChange={handlechange} />
                            <label htmlFor="">
                                password</label>
                            <input type='password' name='password' value={state.password} onChange={handlechange} />
                            <Link href={"#"} className={style.flink}>forget your password?</Link>
                            <input type='submit' value={"Sign in"} style={{ backgroundColor: "black", color: "white", cursor: "pointer" }} />
                        </form>
                        <div className={style.create}>
                            <p>Don't have an account? <Link href={"#"} className={style.links}>Create here</Link></p>
                        </div>


                    </div>

                </div>



            </div>
        </div>
    )
}
export default Login
