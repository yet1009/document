import {useCallback, useEffect, useState} from "react";

const Counter = () => {

    const [state, setState] = useState(0)
    const testHandler = useCallback(() => {
        console.log('rendering')
    }, [])

    const plusHandler = () => {
        setState(prev => prev + 1)
    }

    useEffect(() => {
        console.log('더하기')
    }, [testHandler])

    return (
        <div>
            <p>{state}</p>
            <button type='button' onClick={plusHandler}>더하기</button>
        </div>
    );
};

export default Counter;
