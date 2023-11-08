import {Suspense} from "react";

const Loadable = (Components) => (props) => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Components {...props} />
        </Suspense>
    )
}

export default Loadable
