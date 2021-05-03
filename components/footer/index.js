import React from "react";
import Link from "next/link";
import s from './Footer.module.scss';

function footer() {
    
    return (
        <div className={s.container}>
            <div className={s.item}>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
            <div className={s.item}>
                <Link href="/signup">
                    <a>Sign Up</a>
                </Link>
            </div>
        </div>
    );

}


export default footer;