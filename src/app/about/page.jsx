"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    return (
        <>
        welcome to about page <br />
        <Link href="/">Go to Home page</Link><br /><br />
        <button onClick={() => router.push("/")}>Go to Home page</button><br /><br />

        <Link href="/about/student">Go to student page</Link><br /><br />
        <button onClick={() => router.push("/about/college")}>Go to college page</button>
        </>
    )
};

export default About;