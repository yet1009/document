import {useState} from "react";
import {Navigate, useNavigate, useRoutes} from "react-router-dom";
import { defaultRoutes } from "./routers/routes";


const App = () => {

    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate()

    return (
        useRoutes([...defaultRoutes])
    )
}

export default App;