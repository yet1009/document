import {Test1, Test2, Test3, Test4, Test5} from "./component";
import Loadable from "../components/Loadable/Loadable";
import {lazy} from "react";


const Layout = Loadable(lazy(() => import('../pages/layout/Layout')));
const Login = Loadable(lazy(() => import('../pages/login/Login')));

export const defaultRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'test',
                element: <Test1 />,
                children: [
                    {
                        path: ':id',
                        element: <Test4 />
                    },
                    {
                        path: 'depth',
                        element: <Test5 />
                    }
                ]
            },
            {
                path: 'test1',
                element: <Test2 />,
            },
            {
                path: 'test2',
                element: <Test3 />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]
