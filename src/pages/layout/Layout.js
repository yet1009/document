import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";

import classNames from "classnames/bind";
import styles from './layout.module.scss';


const cx = classNames.bind(styles);

const Layout = ({ children }) => {

    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(!isLogin) {
    //         navigate('/login')
    //     }
    // }, [isLogin]);

    return (
        <div className={cx('layout')}>
            <Header />
            <Sidebar />
            <div className='container'>
                <div className='contents'>
                    {children}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;