import ChildComponents from "@components/forwardRef/ChildComponents";
import {useRef} from "react";

const ParentsComponents = () => {
    const ref1 = useRef()

    const checkRef = () => {
        console.log(ref1.current)
        ref1.current.click()
    }

    return (
        <div>
            <button onClick={checkRef} type='button'>ref 확인</button>
            <ChildComponents ref={ref1} />
        </div>
    );
};

export default ParentsComponents;
