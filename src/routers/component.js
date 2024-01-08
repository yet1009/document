import Loadable from "../components/Loadable/Loadable";
import {lazy} from "react";


export const Blog = Loadable(lazy(() => import('@pages/blog')))
export const Detail = Loadable(lazy(() => import('@pages/blog/Detail')))
export const Lists = Loadable(lazy(() => import('@pages/blog/Lists')))