function UpdateButton(props) {
    return (
        <button className={"btnClass "+ props.className} onClick={props.onClick}>{props.text}</button>
    )
}

export default UpdateButton;