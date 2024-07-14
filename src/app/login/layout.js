"use client"
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";



const Layout = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <>
            <h2>common file for login page</h2>
            {pathName !== "/login/student" ? (
                <ul className="comm_link_wrapper">
                    <li><h4>Login Links</h4></li>
                    <li className="login_list">
                        <Link className="login_link" href="/login">Go to login page</Link><br />
                    </li>
                    <li className="login_list">
                        <Link className="login_link" href="/login/student">Go to student page</Link><br />
                    </li>
                    <li className="login_list">
                        <Link className="login_link" href="/login/teacher">Go to teacher page</Link><br />
                    </li>
                </ul>
            ) : null}
            {children}
        </>
    )
};

export default Layout;