"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter();
    return (
        <>
            welcome to Login page <br />
            <Link href="/">Go to Home page</Link><br /><br />
            <button onClick={() => router.push("/")}>Go to Home page</button><br /><br />

            <Link href="/login/student">Go to student page</Link><br /><br />
            <button onClick={() => router.push("/login/teacher")}>Go to teacher page</button>


        </>
    )
};

export default Login;