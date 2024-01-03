import {useEffect, useState} from "react";
import {Navigate, useNavigate, useRoutes} from "react-router-dom";
import { defaultRoutes } from "./routers/routes";


const App = () => {

    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate()


    // useEffect(() => {
    //     if(!isLogin) {
    //         navigate('/login', { replace: true})
    //     }
    // }, []);


    return (
        useRoutes([...defaultRoutes])
    )
}

export default App;