"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Student = () => {
    const router = useRouter();
    return (
        <>
            welcome to Student Login page <br />
            <Link href="/login">Go to Login page</Link><br /><br />
        </>
    )
};

export default Student;