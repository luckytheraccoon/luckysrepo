import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return <span>This is a warning!</span>;
}

function HotTopics() {
    return (
        <DivContainer classes="div-hot-topics">
            <div>wegwegweg</div>
            <div>fffff</div>
        </DivContainer>
    );
}

function HowWeWork() {
    return (
        <DivContainer classes="div-how-we-work">
            <div>wegwegweg</div>
            <div>fffff</div>
        </DivContainer>
    );
}

function Featured() {
    return (
        <DivContainer classes="div-featured">
            <div>wegwegweg</div>
            <div>fffff</div>
        </DivContainer>
    );
}

class GrowBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barSize: 0
        };
        this.growBar = this.growBar.bind(this);
    }
  
    growBar() {
        if(this.state.barSize < 5) {
            this.setState({ barSize: this.state.barSize + 1 });
            barGrow();
        }
    }
    render() {

        var bar;
        var starWrap;

        if(this.state.barSize > 0) {
            bar = <div className={"progressBar progressBar-animate-"+this.state.barSize}>{this.state.barSize}</div>; 
            starWrap = <div id="progressEffectsStarWrap" className={"progressEffectsStarWrap progressEffectsStarWrap-animate-"+this.state.barSize}></div>;
        } else {
            bar = <div className="progressBar">{this.state.barSize}</div>;
            starWrap = <div id="progressEffectsStarWrap" className="progressEffectsStarWrap"></div>;
        }

        return (
            <DivContainer classes="div-user-progress">
                <div style={{position:"relative"}}>
                    <Button label="Grow Bar!" onClick={this.growBar} />
                    <div className="progressBarWrap">
                        {bar}
                        {starWrap}
                    </div>
                </div>
            </DivContainer>
        );
    }
}

function Footer() {
    return (
        <DivContainer classes="div-footer">
            <div>wegwegweg</div>
            <div>fffff</div>
        </DivContainer>
    );
}

function Header() {
    return (
        <DivContainer classes="div-header">
            <div>
                <LogoHeader />
            </div>
            <div>
                <AuthMenu />
            </div>
        </DivContainer>
    );
}

class WelcomeMat extends React.Component {
    constructor(props) {
        super(props);
        this.handleWarningButton = this.handleWarningButton.bind(this);
        this.state = {showWarning: false};
    }

    handleWarningButton() {
        this.setState(function (prevState) {
            return {
                showWarning: !prevState.showWarning
            };
        });
    }

    render() {
        return (
            <DivContainer classes="div-welcome-mat">
                <Button label="Show Warning" onClick={this.handleWarningButton} />
                <Warning warn={this.state.showWarning} />
            </DivContainer>
        );
    }
}
function Modal(props) {
    return (
        <div className="div-modal" onClick={props.closeMethod}>
            <div className="container bg-white box-md">
                <div className="title">{props.title}</div>
                <div className="message">{props.message}</div>
                {props.children}
                <button onClick={props.closeMethod} className="close-modal">Close</button>
            </div>
        </div>
    );
}



class MainApp extends React.Component {
    render() {

        return (
            <MainContainer>
                <Header />
                <GrowBar />
                <WelcomeMat />
                <HotTopics />
                <HowWeWork />
                <Featured />
                <Footer />
            </MainContainer>
        );
    }
}

function ajaxGet(route, before, onComplete) {
    if(before != null) {
        before();
    }

    fetch(
        "http://myproject.app"+route,
        {
            credentials: "same-origin",
            headers: {
                "X-Requested-With": "XMLHttpRequest", 
                "Content-type":"application/json charset=UTF-8",
                "X-CSRF-TOKEN": document.querySelector("meta[name='_token']").content
            },
            method: "GET"
        }
    ).then(function(response) {
        return response.json();
    }).then(function(response) {
        onComplete(response);
    });
}

function ajaxPost(route, body, before, onComplete) {
    if(before != null) {
        before();
    }

    var csrfToken = document.querySelector("meta[name='_token']").content;

    if(body===null) {
        body = {_token:csrfToken};
    } else {
        body._token = csrfToken;
    }
    
    fetch(
        "http://myproject.app"+route,
        {
            credentials: "same-origin",
            headers: {
                "X-Requested-With": "XMLHttpRequest", 
                "Content-type":"application/json charset=UTF-8",
                "X-CSRF-TOKEN": document.querySelector("meta[name='_token']").content
            },
            method: "POST",
            body: JSON.stringify(body)
        }
    ).then(function (response) {
        return response.json();
    }
    ).then(function (response) {
        onComplete(response);
    }.bind(this)
    );
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }      
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


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
class AuthMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            loggedInAs: null,
            showLoginForm: false,
            showRegisterForm: false,
            loginForm_email: "",
            loginForm_password: "",
            registerForm_email: "",
            registerForm_password: "",
            showModal: false,
            modalDismissed: false,
            checkAuthDone: false
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleShowLoginFormClick = this.handleShowLoginFormClick.bind(this);
        this.handleHideLoginFormClick = this.handleHideLoginFormClick.bind(this);
        this.handleShowRegisterFormClick = this.handleShowRegisterFormClick.bind(this);
        this.handleHideRegisterFormClick = this.handleHideRegisterFormClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
        this.handleRegisterFormSubmit = this.handleRegisterFormSubmit.bind(this);
        this.handleLoginError = this.handleLoginError.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        ajaxGet(
            "/checkAuth",
            null,
            (response)=>{
                this.setState({ 
                    isLoggedIn: response.loggedIn, 
                    loggedInAs: response.loggedInAs, 
                    checkAuthDone: true 
                });
            }
        );
    }
  
    handleShowRegisterFormClick() {
        this.setState({ showRegisterForm: true });
        this.handleOpenModal();
    }
    
    handleHideRegisterFormClick(event) {
        this.handleCloseModal(event, "register");
    }
  
    handleShowLoginFormClick() {
        this.setState({ showLoginForm: true });
    }
    
    handleHideLoginFormClick() {
        this.setState({ showLoginForm: false });
    }
    
    handleLogoutClick() {
        ajaxPost(
            "/logout",
            null,
            () => {
                this.setState({ 
                    checkAuthDone: false 
                });
            },
            (response) => {
                this.setState({ 
                    isLoggedIn: response.loggedIn, 
                    checkAuthDone: true 
                });
            }
        );
    }
    
    handleChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.id;
        this.setState({[name]: value});
    }

    handleOpenModal() {
        this.setState({ showModal: true, modalDismissed: false });
    }

    handleCloseModal(event, modal) {
        var target = event.target;
        if(["close-modal","div-modal"].includes(target.className)) {
            this.setState({ showModal: false, modalDismissed: true });
            if(modal === "register") {
                this.setState({ showRegisterForm: false });
            }
        }
    }

    handleLoginError() {
        this.handleOpenModal();
    }

    handleRegisterFormSubmit(event) {
        event.preventDefault();
        ajaxPost(
            "/register",
            $("#registerForm").serializeObject(),
            () => {
                this.setState({ 
                    checkAuthDone: false 
                });
            },
            (response) => {
                alert("hey!");
            }
        );
    }
    
    handleLoginFormSubmit(event) {
        event.preventDefault();
        ajaxPost(
            "/login",
            $("#loginForm").serializeObject(),
            () => {
                this.setState({ 
                    checkAuthDone: false 
                });
            },
            (response) => {
                this.setState({ 
                    isLoggedIn: response.loggedIn, 
                    loggedInAs: response.loggedInAs
                });

                if(this.state.isLoggedIn === true) {
                    this.setState({ 
                        checkAuthDone: true 
                    });
                    if(this.state.showModal) {
                        this.setState({ showModal: false, modalDismissed: true });
                        return;
                    } 
                    this.handleHideLoginFormClick();
                    return;
                }
                    
                this.handleLoginError();
            }
        );
    }
    render() {

        var showModal = this.state.showModal;
        var modalDismissed = this.state.modalDismissed;
        var isLoggedIn = this.state.isLoggedIn;
        var loggedInAs = this.state.loggedInAs;
        var showLoginForm = this.state.showLoginForm;
        var showRegisterForm = this.state.showRegisterForm;
        var checkAuthDone = this.state.checkAuthDone;
        var modal, userMenu, loginMenu, guestMenu = null;

        if(showModal) {

            if(showRegisterForm) {
                modal = (
                    <Modal title="Sign Up" message="Use the form below to sign up." closeMethod={this.handleHideRegisterFormClick}>
                        <RegisterMenu registerForm={{
                            fields:{    
                                email:this.state.registerForm_email,
                                password:this.state.registerForm_password
                            },
                            onSubmit:this.handleRegisterFormSubmit,
                            onInputChange:this.handleChange
                        }} />
                    </Modal>
                );
            } else {
                modal = (
                    <Modal title="Oops...!" message="Incorrect username or password." closeMethod={this.handleCloseModal}>
                        <LoginMenu loginForm={{
                            fields:{    
                                email:this.state.loginForm_email,
                                password:this.state.loginForm_password
                            },
                            onSubmit:this.handleLoginFormSubmit,
                            onInputChange:this.handleChange
                        }} />
                    </Modal>
                );
            }
        }
        if(checkAuthDone || modalDismissed) {
            
            if (isLoggedIn) {
                userMenu = <LoggedUserMenu onClickLogout={this.handleLogoutClick} username={loggedInAs} />;
            } else {
                if (showLoginForm) {
                    loginMenu = (
                        <LoginMenu loginForm={{
                            fields:{    
                                email:this.state.loginForm_email,
                                password:this.state.loginForm_password
                            },
                            onSubmit:this.handleLoginFormSubmit,
                            onCancel:this.handleHideLoginFormClick,
                            onInputChange:this.handleChange
                        }} />
                    );
                } else {
                    guestMenu = (
                        <GuestUserMenu 
                            buttonActions={{
                                signUp:this.handleShowRegisterFormClick, 
                                signIn:this.handleShowLoginFormClick
                            }} />
                    );
                }
            }
        }
        return (
            <div>
                <ReactCSSTransitionGroup 
                    transitionName="div-user-menu" 
                    transitionEnterTimeout={700} 
                    transitionLeaveTimeout={700}>
                    {userMenu}
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup 
                    transitionName="div-login-menu" 
                    transitionEnterTimeout={700} 
                    transitionLeaveTimeout={700}>
                    {loginMenu}
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup 
                    transitionName="div-guest-menu" 
                    transitionEnterTimeout={700} 
                    transitionLeaveTimeout={700}>
                    {guestMenu}
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup 
                    transitionName="div-modal-a" 
                    transitionEnterTimeout={200} 
                    transitionLeaveTimeout={200}>
                    {modal}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

function RegisterMenu(props) {
    return (
        <div className="div-register-menu">
            <RegisterForm 
                fields={props.registerForm.fields} 
                onSubmit={props.registerForm.onSubmit}
                onInputChange={props.registerForm.onInputChange} />
        </div>
    );
}
function LoginMenu(props) {

    return (
        <div className="div-login-menu">
            <LoginForm 
                fields={props.loginForm.fields} 
                onSubmit={props.loginForm.onSubmit}
                onCancel={props.loginForm.onCancel}
                onInputChange={props.loginForm.onInputChange} />
        </div>
    );
}
function GuestUserMenu(props) {
    return (
        <div className="div-guest-menu">
            <Button label="Sign Up" onClick={props.buttonActions.signUp} />
            <Button label="Sign In" onClick={props.buttonActions.signIn} />
        </div>
    );
}
function LoggedUserMenu(props) {
    return (
        <div className="div-user-menu">
            <span>Hello, {props.username}!</span>
            <Button label="Sign Out" onClick={props.onClickLogout} />
        </div>
    );
}
function RegisterForm(props) {
    return (
        <div>
            <form id="registerForm" onSubmit={props.onSubmit}>
                <Label for="registerForm_email" text="Email:" />
                <TextInput id="registerForm_email" name="email" value={props.fields.email} onChange={props.onInputChange} />
                <Label for="registerForm_password" text="Password:" />
                <PasswordInput id="registerForm_password" name="password" value={props.fields.password} onChange={props.onInputChange} />
                <SubmitButton />
            </form>
        </div>
    );
}
function LoginForm(props) {
    
    var cancelButton = null;
    if(props.onCancel != null) {
        cancelButton = <Button key="hideLoginForm" label="Cancel" onClick={props.onCancel} />;
    }

    return (
        <div>
            <form id="loginForm" onSubmit={props.onSubmit}>
                <Label for="loginForm_email" text="Email:" />
                <TextInput id="loginForm_email" name="email" value={props.fields.email} onChange={props.onInputChange} />
                <Label for="loginForm_password" text="Password:" />
                <PasswordInput id="loginForm_password" name="password"  value={props.fields.password} onChange={props.onInputChange} />
                <SubmitButton />
            </form>
            {cancelButton}
        </div>
    );
}
console.log("yo");
ReactDOM.render(
    <MainApp />,
    document.getElementById("root")
);