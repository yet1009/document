import Loadable from "../components/Loadable/Loadable";
import {lazy} from "react";


export const Test1 = Loadable(lazy(() => import('../pages/test/Test1')))
export const Test2 = Loadable(lazy(() => import('../pages/test/Test2')))
export const Test3 = Loadable(lazy(() => import('../pages/test/Test3')))
export const Test4 = Loadable(lazy(() => import('../pages/test/Test4')))
export const Test5 = Loadable(lazy(() => import('../pages/test/Test5')))