const Btn = (props) => {

    let {type, text = '', onClick, title = '' } = props;


    return (
        <button type={type} onClick={onClick} title={title}>{text}</button>
    )
}

export default Btn