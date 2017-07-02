import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function LogoHeader() {
    return <img src="http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" />;
}

function Button(props) {
    return <button className={props.classes} onClick={props.onClick}>{props.label}</button>;
}

function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return <span>This is a warning!</span>;
}

function DivContainer(props) {
    var className = "";
    if(typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "container";
    return <div className={className}>{props.children}</div>;
}

function MainContainer(props) {
    return <div className="div-main">{props.children}</div>;
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

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            showLoginForm: false,
            showWarning: false,
            username: "",
            password: ""
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleShowLoginFormClick = this.handleShowLoginFormClick.bind(this);
        this.handleHideLoginFormClick = this.handleHideLoginFormClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleShowLoginFormClick() {
        this.setState({ showLoginForm: true });
    }
    
    handleHideLoginFormClick() {
        this.setState({ showLoginForm: false });
    }
    
    handleLogoutClick() {
        fetch("http://myproject.app/logout").then(function (response) {
            return response.json();
        }).then(function () {
            this.setState({ isLoggedIn: false });
        }.bind(this));
    }
    
    handleChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState({[name]: value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch("http://myproject.app/login").then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.loggedIn == "true") {
                this.setState({ isLoggedIn: true });
                this.handleHideLoginFormClick();
            }
        }.bind(this));
    }

    render() {
        var isLoggedIn = this.state.isLoggedIn;
        var showLoginForm = this.state.showLoginForm;

        var logoutButton = null;
        var loginButton = null;
        var loginForm = null;
        //const loginFormClasses = ["div-login-form"];
        if (isLoggedIn) {
            logoutButton = <Button classes="button-authentication" label="Logout" onClick={this.handleLogoutClick} />;
        } else {
            if (showLoginForm) {
                loginForm = (
                    <div className="div-login-form">
                        <form onSubmit={this.handleSubmit}>
                            <label> Username: </label>
                            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                            <label> Password: </label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                            <input type="submit" value="Submit" />
                            <Button key="hideLoginForm" label="Cancel" onClick={this.handleHideLoginFormClick} />
                        </form>
                    </div>);
            } else {
                loginButton = <Button classes="button-authentication" label="Login" onClick={this.handleShowLoginFormClick} />;
            }
        }
        return (
            <DivContainer classes="div-header">
                <div>
                    <LogoHeader />
                    <ReactCSSTransitionGroup 
                        transitionName="div-login-form" 
                        transitionEnterTimeout={700} 
                        transitionLeaveTimeout={700}>
                        {loginForm}
                    </ReactCSSTransitionGroup>
                    
                    <ReactCSSTransitionGroup 
                        transitionName="button-authentication"
                        transitionEnterTimeout={700} 
                        transitionLeaveTimeout={700}>
                        {loginButton}
                        {logoutButton}
                    </ReactCSSTransitionGroup>
                </div>
            </DivContainer>
        );
    }
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

ReactDOM.render(
    <MainApp />,
    document.getElementById("root")
);
