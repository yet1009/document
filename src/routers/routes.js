import {Blog, Detail} from "./component";
import Loadable from "../components/Loadable/Loadable";
import {lazy} from "react";


//layout
const Layout = Loadable(lazy(() => import('@pages/layout/Layout')));
const Login = Loadable(lazy(() => import('@pages/login/Login')));
const SignUp = Loadable(lazy(() => import('@pages/login/SignUp')))


export const defaultRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'blog',
                element: <Blog />,
                children: [
                    {
                        path: ':id',
                        element: <Detail />,
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]


export const pathLists = [
    {path: '/'},
    {path: '/blog', name: '이모저모', inner: {}},
    {path: '/settings', name: 'Setting', inner: {}},
]