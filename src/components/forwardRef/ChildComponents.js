import {forwardRef} from "react";

const ChildComponents = forwardRef((props, ref) => {

    const handleClick = () => {
        console.log('click')
    }

    ref.current = {
        click: handleClick
    }

    return (
        <div>
            Children
        </div>
    );
});

export default ChildComponents;
