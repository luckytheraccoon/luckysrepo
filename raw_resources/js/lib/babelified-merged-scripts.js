"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return _react2.default.createElement(
        "span",
        null,
        "This is a warning!"
    );
}

function HotTopics() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-hot-topics" },
        _react2.default.createElement(
            "div",
            null,
            "wegwegweg"
        ),
        _react2.default.createElement(
            "div",
            null,
            "fffff"
        )
    );
}

function HowWeWork() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-how-we-work" },
        _react2.default.createElement(
            "div",
            null,
            "wegwegweg"
        ),
        _react2.default.createElement(
            "div",
            null,
            "fffff"
        )
    );
}

function Featured() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-featured" },
        _react2.default.createElement(
            "div",
            null,
            "wegwegweg"
        ),
        _react2.default.createElement(
            "div",
            null,
            "fffff"
        )
    );
}

var GrowBar = function (_React$Component) {
    _inherits(GrowBar, _React$Component);

    function GrowBar(props) {
        _classCallCheck(this, GrowBar);

        var _this = _possibleConstructorReturn(this, (GrowBar.__proto__ || Object.getPrototypeOf(GrowBar)).call(this, props));

        _this.state = {
            barSize: 0
        };
        _this.growBar = _this.growBar.bind(_this);
        return _this;
    }

    _createClass(GrowBar, [{
        key: "growBar",
        value: function growBar() {
            if (this.state.barSize < 5) {
                this.setState({ barSize: this.state.barSize + 1 });
                barGrow();
            }
        }
    }, {
        key: "render",
        value: function render() {

            var bar;
            var starWrap;

            if (this.state.barSize > 0) {
                bar = _react2.default.createElement(
                    "div",
                    { className: "progressBar progressBar-animate-" + this.state.barSize },
                    this.state.barSize
                );
                starWrap = _react2.default.createElement("div", { id: "progressEffectsStarWrap", className: "progressEffectsStarWrap progressEffectsStarWrap-animate-" + this.state.barSize });
            } else {
                bar = _react2.default.createElement(
                    "div",
                    { className: "progressBar" },
                    this.state.barSize
                );
                starWrap = _react2.default.createElement("div", { id: "progressEffectsStarWrap", className: "progressEffectsStarWrap" });
            }

            return _react2.default.createElement(
                DivContainer,
                { classes: "div-user-progress" },
                _react2.default.createElement(
                    "div",
                    { style: { position: "relative" } },
                    _react2.default.createElement(Button, { label: "Grow Bar!", onClick: this.growBar }),
                    _react2.default.createElement(
                        "div",
                        { className: "progressBarWrap" },
                        bar,
                        starWrap
                    )
                )
            );
        }
    }]);

    return GrowBar;
}(_react2.default.Component);

function Footer() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-footer" },
        _react2.default.createElement(
            "div",
            null,
            "wegwegweg"
        ),
        _react2.default.createElement(
            "div",
            null,
            "fffff"
        )
    );
}

function Header() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-header" },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(LogoHeader, null)
        ),
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(AuthMenu, null)
        )
    );
}

var WelcomeMat = function (_React$Component2) {
    _inherits(WelcomeMat, _React$Component2);

    function WelcomeMat(props) {
        _classCallCheck(this, WelcomeMat);

        var _this2 = _possibleConstructorReturn(this, (WelcomeMat.__proto__ || Object.getPrototypeOf(WelcomeMat)).call(this, props));

        _this2.handleWarningButton = _this2.handleWarningButton.bind(_this2);
        _this2.state = { showWarning: false };
        return _this2;
    }

    _createClass(WelcomeMat, [{
        key: "handleWarningButton",
        value: function handleWarningButton() {
            this.setState(function (prevState) {
                return {
                    showWarning: !prevState.showWarning
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                DivContainer,
                { classes: "div-welcome-mat" },
                _react2.default.createElement(Button, { label: "Show Warning", onClick: this.handleWarningButton }),
                _react2.default.createElement(Warning, { warn: this.state.showWarning })
            );
        }
    }]);

    return WelcomeMat;
}(_react2.default.Component);

function Modal(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-modal", onClick: props.closeMethod },
        _react2.default.createElement(
            "div",
            { className: "container bg-white box-md" },
            _react2.default.createElement(
                "div",
                { className: "title" },
                props.title
            ),
            _react2.default.createElement(
                "div",
                { className: "message" },
                props.message
            ),
            props.children,
            _react2.default.createElement(
                "button",
                { onClick: props.closeMethod, className: "close-modal" },
                "Close"
            )
        )
    );
}

var MainApp = function (_React$Component3) {
    _inherits(MainApp, _React$Component3);

    function MainApp() {
        _classCallCheck(this, MainApp);

        return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
    }

    _createClass(MainApp, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                MainContainer,
                null,
                _react2.default.createElement(Header, null),
                _react2.default.createElement(GrowBar, null),
                _react2.default.createElement(WelcomeMat, null),
                _react2.default.createElement(HotTopics, null),
                _react2.default.createElement(HowWeWork, null),
                _react2.default.createElement(Featured, null),
                _react2.default.createElement(Footer, null)
            );
        }
    }]);

    return MainApp;
}(_react2.default.Component);

function ajaxGet(route, before, onComplete) {
    if (before != null) {
        before();
    }

    fetch("http://myproject.app" + route, {
        credentials: "same-origin",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/json charset=UTF-8",
            "X-CSRF-TOKEN": document.querySelector("meta[name='_token']").content
        },
        method: "GET"
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        onComplete(response);
    });
}

function ajaxPost(route, body, before, onComplete) {
    if (before != null) {
        before();
    }

    var csrfToken = document.querySelector("meta[name='_token']").content;

    if (body === null) {
        body = { _token: csrfToken };
    } else {
        body._token = csrfToken;
    }

    fetch("http://myproject.app" + route, {
        credentials: "same-origin",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/json charset=UTF-8",
            "X-CSRF-TOKEN": document.querySelector("meta[name='_token']").content
        },
        method: "POST",
        body: JSON.stringify(body)
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        onComplete(response);
    }.bind(this));
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
    return _react2.default.createElement("img", { src: "http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" });
}

function Button(props) {
    return _react2.default.createElement(
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
    return _react2.default.createElement("input", { type: "submit", value: value });
}
function TextInput(props) {
    if (props.name == null) {
        props.name = props.id;
    }
    return _react2.default.createElement("input", { id: props.id, name: props.name, type: "text", value: props.value, onChange: props.onChange });
}
function PasswordInput(props) {
    if (props.name == null) {
        props.name = props.id;
    }
    return _react2.default.createElement("input", { id: props.id, name: props.name, type: "password", value: props.value, onChange: props.onChange });
}
function Label(props) {
    return _react2.default.createElement(
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
    return _react2.default.createElement(
        "div",
        { className: className },
        props.children
    );
}
function MainContainer(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-main" },
        props.children
    );
}

var AuthMenu = function (_React$PureComponent) {
    _inherits(AuthMenu, _React$PureComponent);

    function AuthMenu(props) {
        _classCallCheck(this, AuthMenu);

        var _this4 = _possibleConstructorReturn(this, (AuthMenu.__proto__ || Object.getPrototypeOf(AuthMenu)).call(this, props));

        _this4.state = {
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

        _this4.handleLogoutClick = _this4.handleLogoutClick.bind(_this4);
        _this4.handleShowLoginFormClick = _this4.handleShowLoginFormClick.bind(_this4);
        _this4.handleHideLoginFormClick = _this4.handleHideLoginFormClick.bind(_this4);
        _this4.handleShowRegisterFormClick = _this4.handleShowRegisterFormClick.bind(_this4);
        _this4.handleHideRegisterFormClick = _this4.handleHideRegisterFormClick.bind(_this4);
        _this4.handleChange = _this4.handleChange.bind(_this4);
        _this4.handleLoginFormSubmit = _this4.handleLoginFormSubmit.bind(_this4);
        _this4.handleRegisterFormSubmit = _this4.handleRegisterFormSubmit.bind(_this4);
        _this4.handleLoginError = _this4.handleLoginError.bind(_this4);
        _this4.handleOpenModal = _this4.handleOpenModal.bind(_this4);
        _this4.handleCloseModal = _this4.handleCloseModal.bind(_this4);
        return _this4;
    }

    _createClass(AuthMenu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this5 = this;

            ajaxGet("/checkAuth", null, function (response) {
                _this5.setState({
                    isLoggedIn: response.loggedIn,
                    loggedInAs: response.loggedInAs,
                    checkAuthDone: true
                });
            });
        }
    }, {
        key: "handleShowRegisterFormClick",
        value: function handleShowRegisterFormClick() {
            this.setState({ showRegisterForm: true });
            this.handleOpenModal();
        }
    }, {
        key: "handleHideRegisterFormClick",
        value: function handleHideRegisterFormClick(event) {
            this.handleCloseModal(event, "register");
        }
    }, {
        key: "handleShowLoginFormClick",
        value: function handleShowLoginFormClick() {
            this.setState({ showLoginForm: true });
        }
    }, {
        key: "handleHideLoginFormClick",
        value: function handleHideLoginFormClick() {
            this.setState({ showLoginForm: false });
        }
    }, {
        key: "handleLogoutClick",
        value: function handleLogoutClick() {
            var _this6 = this;

            ajaxPost("/logout", null, function () {
                _this6.setState({
                    checkAuthDone: false
                });
            }, function (response) {
                _this6.setState({
                    isLoggedIn: response.loggedIn,
                    checkAuthDone: true
                });
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.id;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleOpenModal",
        value: function handleOpenModal() {
            this.setState({ showModal: true, modalDismissed: false });
        }
    }, {
        key: "handleCloseModal",
        value: function handleCloseModal(event, modal) {
            var target = event.target;
            if (["close-modal", "div-modal"].includes(target.className)) {
                this.setState({ showModal: false, modalDismissed: true });
                if (modal === "register") {
                    this.setState({ showRegisterForm: false });
                }
            }
        }
    }, {
        key: "handleLoginError",
        value: function handleLoginError() {
            this.handleOpenModal();
        }
    }, {
        key: "handleRegisterFormSubmit",
        value: function handleRegisterFormSubmit(event) {
            var _this7 = this;

            event.preventDefault();
            ajaxPost("/register", $("#registerForm").serializeObject(), function () {
                _this7.setState({
                    checkAuthDone: false
                });
            }, function (response) {
                alert("hey!");
            });
        }
    }, {
        key: "handleLoginFormSubmit",
        value: function handleLoginFormSubmit(event) {
            var _this8 = this;

            event.preventDefault();
            ajaxPost("/login", $("#loginForm").serializeObject(), function () {
                _this8.setState({
                    checkAuthDone: false
                });
            }, function (response) {
                _this8.setState({
                    isLoggedIn: response.loggedIn,
                    loggedInAs: response.loggedInAs
                });

                if (_this8.state.isLoggedIn === true) {
                    _this8.setState({
                        checkAuthDone: true
                    });
                    if (_this8.state.showModal) {
                        _this8.setState({ showModal: false, modalDismissed: true });
                        return;
                    }
                    _this8.handleHideLoginFormClick();
                    return;
                }

                _this8.handleLoginError();
            });
        }
    }, {
        key: "render",
        value: function render() {

            var showModal = this.state.showModal;
            var modalDismissed = this.state.modalDismissed;
            var isLoggedIn = this.state.isLoggedIn;
            var loggedInAs = this.state.loggedInAs;
            var showLoginForm = this.state.showLoginForm;
            var showRegisterForm = this.state.showRegisterForm;
            var checkAuthDone = this.state.checkAuthDone;
            var modal,
                userMenu,
                loginMenu,
                guestMenu = null;

            if (showModal) {

                if (showRegisterForm) {
                    modal = _react2.default.createElement(
                        Modal,
                        { title: "Sign Up", message: "Use the form below to sign up.", closeMethod: this.handleHideRegisterFormClick },
                        _react2.default.createElement(RegisterMenu, { registerForm: {
                                fields: {
                                    email: this.state.registerForm_email,
                                    password: this.state.registerForm_password
                                },
                                onSubmit: this.handleRegisterFormSubmit,
                                onInputChange: this.handleChange
                            } })
                    );
                } else {
                    modal = _react2.default.createElement(
                        Modal,
                        { title: "Oops...!", message: "Incorrect username or password.", closeMethod: this.handleCloseModal },
                        _react2.default.createElement(LoginMenu, { loginForm: {
                                fields: {
                                    email: this.state.loginForm_email,
                                    password: this.state.loginForm_password
                                },
                                onSubmit: this.handleLoginFormSubmit,
                                onInputChange: this.handleChange
                            } })
                    );
                }
            }
            if (checkAuthDone || modalDismissed) {

                if (isLoggedIn) {
                    userMenu = _react2.default.createElement(LoggedUserMenu, { onClickLogout: this.handleLogoutClick, username: loggedInAs });
                } else {
                    if (showLoginForm) {
                        loginMenu = _react2.default.createElement(LoginMenu, { loginForm: {
                                fields: {
                                    email: this.state.loginForm_email,
                                    password: this.state.loginForm_password
                                },
                                onSubmit: this.handleLoginFormSubmit,
                                onCancel: this.handleHideLoginFormClick,
                                onInputChange: this.handleChange
                            } });
                    } else {
                        guestMenu = _react2.default.createElement(GuestUserMenu, {
                            buttonActions: {
                                signUp: this.handleShowRegisterFormClick,
                                signIn: this.handleShowLoginFormClick
                            } });
                    }
                }
            }
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: "div-user-menu",
                        transitionEnterTimeout: 700,
                        transitionLeaveTimeout: 700 },
                    userMenu
                ),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: "div-login-menu",
                        transitionEnterTimeout: 700,
                        transitionLeaveTimeout: 700 },
                    loginMenu
                ),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: "div-guest-menu",
                        transitionEnterTimeout: 700,
                        transitionLeaveTimeout: 700 },
                    guestMenu
                ),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: "div-modal-a",
                        transitionEnterTimeout: 200,
                        transitionLeaveTimeout: 200 },
                    modal
                )
            );
        }
    }]);

    return AuthMenu;
}(_react2.default.PureComponent);

function RegisterMenu(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-register-menu" },
        _react2.default.createElement(RegisterForm, {
            fields: props.registerForm.fields,
            onSubmit: props.registerForm.onSubmit,
            onInputChange: props.registerForm.onInputChange })
    );
}
function LoginMenu(props) {

    return _react2.default.createElement(
        "div",
        { className: "div-login-menu" },
        _react2.default.createElement(LoginForm, {
            fields: props.loginForm.fields,
            onSubmit: props.loginForm.onSubmit,
            onCancel: props.loginForm.onCancel,
            onInputChange: props.loginForm.onInputChange })
    );
}
function GuestUserMenu(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-guest-menu" },
        _react2.default.createElement(Button, { label: "Sign Up", onClick: props.buttonActions.signUp }),
        _react2.default.createElement(Button, { label: "Sign In", onClick: props.buttonActions.signIn })
    );
}
function LoggedUserMenu(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-user-menu" },
        _react2.default.createElement(
            "span",
            null,
            "Hello, ",
            props.username,
            "!"
        ),
        _react2.default.createElement(Button, { label: "Sign Out", onClick: props.onClickLogout })
    );
}
function RegisterForm(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "form",
            { id: "registerForm", onSubmit: props.onSubmit },
            _react2.default.createElement(Label, { "for": "registerForm_email", text: "Email:" }),
            _react2.default.createElement(TextInput, { id: "registerForm_email", name: "email", value: props.fields.email, onChange: props.onInputChange }),
            _react2.default.createElement(Label, { "for": "registerForm_password", text: "Password:" }),
            _react2.default.createElement(PasswordInput, { id: "registerForm_password", name: "password", value: props.fields.password, onChange: props.onInputChange }),
            _react2.default.createElement(SubmitButton, null)
        )
    );
}
function LoginForm(props) {

    var cancelButton = null;
    if (props.onCancel != null) {
        cancelButton = _react2.default.createElement(Button, { key: "hideLoginForm", label: "Cancel", onClick: props.onCancel });
    }

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "form",
            { id: "loginForm", onSubmit: props.onSubmit },
            _react2.default.createElement(Label, { "for": "loginForm_email", text: "Email:" }),
            _react2.default.createElement(TextInput, { id: "loginForm_email", name: "email", value: props.fields.email, onChange: props.onInputChange }),
            _react2.default.createElement(Label, { "for": "loginForm_password", text: "Password:" }),
            _react2.default.createElement(PasswordInput, { id: "loginForm_password", name: "password", value: props.fields.password, onChange: props.onInputChange }),
            _react2.default.createElement(SubmitButton, null)
        ),
        cancelButton
    );
}
console.log("yo");
_reactDom2.default.render(_react2.default.createElement(MainApp, null), document.getElementById("root"));