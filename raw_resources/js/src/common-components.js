function LogoHeader() {
    return <img src="http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" />;
}

function Button(props) {
    return <button className={props.classes} onClick={props.onClick}>{props.label}</button>;
}
function SubmitButton(props) {
    var value;
    if(props.value == null) {
        value = "Submit";
    }
    return <input type="submit" value={value} />;
}
function TextInput(props) {
    if(props.name == null) {
        props.name = props.id;
    }
    return <input id={props.id} name={props.name} type="text" value={props.value} onChange={props.onChange} />;
}
function PasswordInput(props) {
    if(props.name == null) {
        props.name = props.id;
    }
    return <input id={props.id} name={props.name} type="password" value={props.value} onChange={props.onChange} />;
}
function Label(props) {
    return <label htmlFor={props.for}>{props.text}</label>;
}
function DivContainer(props) {
    var className = "";
    if(typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return <div className={className}>{props.children}</div>;
}
function MainContainer(props) {
    return <div className="div-main">{props.children}</div>;
}