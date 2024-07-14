"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Teacher = () => {
    const router = useRouter();
    return (
        <>
            welcome to Teacher Login page <br />
            <Link href="/login">Go to Login page</Link><br /><br />
        </>
    )
};

export default Teacher;