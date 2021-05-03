import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import s from './Topbar.module.scss';


function topbar() {
    const state = useSelector(state => state.auth)
    let content_right;
    if (state.user) {
        content_right = (
            <>
                <div className={s.item}>
                    <Link href="/logout">
                        <a>Logout</a>
                    </Link>
                </div>
                <div className={s.item}>
                    <Link href="/dashboard">
                        <a>Dashboard</a>
                    </Link>
                </div>
            </>
        );
    } else {
        content_right = (
            <>
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
            </>
        );
    }

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={`${s.section} ${s.left}`}>
                    <div className={s.item}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className={s.item}>
                        <Link href="/">
                            <a>Link 1</a>
                        </Link>
                    </div>
                    <div className={s.item}>
                        <Link href="/">
                            <a>Link 2</a>
                        </Link>
                    </div>
                </div>
                <div className={`${s.section} ${s.right}`}>
                    {content_right}
                </div>
            </div>
        </div>
    )
}


export default topbar;