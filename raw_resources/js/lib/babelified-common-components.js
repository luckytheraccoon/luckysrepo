"use strict";

function LogoHeader() {
    return React.createElement("img", { src: "http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" });
}

function Button(props) {
    return React.createElement(
        "button",
        { className: props.classes, onClick: props.onClick },
        props.label
    );
}
function SubmitButton(props) {
    var value;
    if (props.value == null) {
        value = "Submit";
    }
    return React.createElement("input", { type: "submit", value: value });
}
function TextInput(props) {
    if (props.name == null) {
        props.name = props.id;
    }
    return React.createElement("input", { id: props.id, name: props.name, type: "text", value: props.value, onChange: props.onChange });
}
function PasswordInput(props) {
    if (props.name == null) {
        props.name = props.id;
    }
    return React.createElement("input", { id: props.id, name: props.name, type: "password", value: props.value, onChange: props.onChange });
}
function Label(props) {
    return React.createElement(
        "label",
        { htmlFor: props.for },
        props.text
    );
}
function DivContainer(props) {
    var className = "";
    if (typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return React.createElement(
        "div",
        { className: className },
        props.children
    );
}
function MainContainer(props) {
    return React.createElement(
        "div",
        { className: "div-main" },
        props.children
    );
}