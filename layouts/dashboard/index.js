import React from "react";
import Topbar from '@components/topbar'
import s from './layout.module.scss';

function LayoutDashboard(props) {
    return (
        <div className={s.container}>
            <Topbar />
            <div className={s.content}>
                {props.children}
            </div>
        </div>
    );
}


export default LayoutDashboard;