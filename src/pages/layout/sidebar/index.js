
import classNames from "classnames/bind";
import styles from './sidebar.module.scss'
import {useMemo, useState} from "react";
import {NavLink} from "react-router-dom";
import {defaultRoutes, pathLists} from "@/routers/routes";

const cx = classNames.bind(styles)

function NavBarList() {

    console.log(pathLists)

    return (
        <></>
    )

}

const SideBar = () => {

    const [action, setAction] = useState(true)

    return (
        <div className={cx('sidebar_wrapper', action ? 'active' : '')}>
            <nav>
                <ul>
                    {/*<li>*/}
                    {/*    <NavLink to={'/test1'} >move</NavLink>*/}
                    {/*</li>*/}
                    {useMemo(() => <NavBarList/>, [defaultRoutes])}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;