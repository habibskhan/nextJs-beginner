"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Teacher = () => {
    const router = useRouter();
    return (
        <>
            welcome to About College page <br />
            <Link href="/about">Go to About page</Link><br /><br />
        </>
    )
};

export default Teacher;