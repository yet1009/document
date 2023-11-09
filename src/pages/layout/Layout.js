import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Layout = ({ children }) => {


    // const [isLogin, setLogin] = useState(false);
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if(!isLogin) {
    //         navigate('/login')
    //     }
    // }, [isLogin]);


    return (
        <div className='layout'>
            <Header />
            <Sidebar />
            {children}
            <Outlet />
        </div>
    )
}

export default Layout;