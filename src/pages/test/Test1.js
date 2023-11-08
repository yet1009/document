import {Outlet} from "react-router-dom";

const Test1 = () => {

    console.log('1')

    return (
        <div>
            test1
            <Outlet />
        </div>
    );
};

export default Test1;
