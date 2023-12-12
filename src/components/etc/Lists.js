import React from 'react'

const Lists = ({ lists }) => {

    console.log(lists)

    return (
        <div>
            <ul>
                {
                    lists?.map((item, idx) => (
                        <li key={`list__${idx}`}>
                            <p>id: {item['id']}</p>
                            <p>pw: {item['pw']}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default React.memo(Lists)
