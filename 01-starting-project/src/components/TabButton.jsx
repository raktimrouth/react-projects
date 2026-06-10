export default function TabButton(props){
    let classname = props.isActive ? "active" : "";
    return (
        <li>
            <button className={classname} onClick={props.onSelect}>{props.children}</button>
        </li>
    )
}