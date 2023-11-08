import {useParams} from "react-router-dom";


const Test4 = () => {

    let { id } = useParams();

    console.log({ id })

    return (
        <div>
            test4
        </div>
    );
};

export default Test4;
