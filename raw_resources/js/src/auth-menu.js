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