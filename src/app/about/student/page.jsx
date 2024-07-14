"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Student = () => {
    const router = useRouter();
    return (
        <>
            welcome to About Student page <br />
            <Link href="/about">Go to About page</Link><br /><br />
        </>
    )
};

export default Student;