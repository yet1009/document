import React, {useCallback} from 'react'


function compareObj(list, item) {
    console.log(list, item)
}

function compare(a,b) {
    for(let i in a) {
        if(b[i] !== a[i]) {
            return b
        }
    }
}

const Lists = ({ lists, setList }) => {

    function deleteList(list) {
        const res = lists.filter(item => compare(item, list))
        setList([...res])
    }

    return (
        <>
            <ul>
                {
                    lists?.map((item, idx) => (
                        <li key={`list__${idx}`} className={'flex'}>
                            <p>id: {item['id']}</p>
                            <p>pw: {item['pw']}</p>
                            <p>
                                <button type='button' onClick={() => deleteList(item)}>삭제</button>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default React.memo(Lists)
