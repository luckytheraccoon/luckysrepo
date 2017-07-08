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

var AuthMenu = function (_React$PureComponent) {
    _inherits(AuthMenu, _React$PureComponent);

    function AuthMenu(props) {
        _classCallCheck(this, AuthMenu);

        var _this2 = _possibleConstructorReturn(this, (AuthMenu.__proto__ || Object.getPrototypeOf(AuthMenu)).call(this, props));

        _this2.state = {
            isLoggedIn: false,
            loggedInAs: null,
            showLoginForm: false,
            email: "",
            password: "",
            modal: false,
            modalDismissed: false,
            checkAuthDone: false
        };

        _this2.handleLogoutClick = _this2.handleLogoutClick.bind(_this2);
        _this2.handleShowLoginFormClick = _this2.handleShowLoginFormClick.bind(_this2);
        _this2.handleHideLoginFormClick = _this2.handleHideLoginFormClick.bind(_this2);
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.handleLoginError = _this2.handleLoginError.bind(_this2);
        _this2.handleOpenModal = _this2.handleOpenModal.bind(_this2);
        _this2.handleCloseModal = _this2.handleCloseModal.bind(_this2);
        return _this2;
    }

    _createClass(AuthMenu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            ajaxGet("/checkAuth", null, function (response) {
                _this3.setState({
                    isLoggedIn: response.loggedIn,
                    loggedInAs: response.loggedInAs,
                    checkAuthDone: true
                });
            });
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
            var _this4 = this;

            ajaxPost("/logout", null, function () {
                _this4.setState({
                    checkAuthDone: false
                });
            }, function (response) {
                _this4.setState({
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
            var name = target.name;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleOpenModal",
        value: function handleOpenModal() {
            this.setState({ modal: true, modalDismissed: false });
        }
    }, {
        key: "handleCloseModal",
        value: function handleCloseModal(event) {
            var target = event.target;
            if (["close-modal", "div-modal"].includes(target.className)) {
                this.setState({ modal: false, modalDismissed: true });
            }
        }
    }, {
        key: "handleLoginError",
        value: function handleLoginError() {
            this.handleOpenModal();
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var _this5 = this;

            event.preventDefault();
            ajaxPost("/login", $("#loginForm").serializeObject(), function () {
                _this5.setState({
                    checkAuthDone: false
                });
            }, function (response) {
                _this5.setState({
                    isLoggedIn: response.loggedIn,
                    loggedInAs: response.loggedInAs
                });

                if (_this5.state.isLoggedIn === true) {
                    _this5.setState({
                        checkAuthDone: true
                    });
                    if (_this5.state.modal) {
                        _this5.setState({ modal: false, modalDismissed: true });
                        return;
                    }
                    _this5.handleHideLoginFormClick();
                    return;
                }

                _this5.handleLoginError();
            });
        }
    }, {
        key: "render",
        value: function render() {

            var modalState = this.state.modal;
            var modalDismissed = this.state.modalDismissed;
            var isLoggedIn = this.state.isLoggedIn;
            var loggedInAs = this.state.loggedInAs;
            var showLoginForm = this.state.showLoginForm;
            var checkAuthDone = this.state.checkAuthDone;
            var modal = null;
            var userMenu = null;
            var loginMenu = null;
            var guestMenu = null;

            if (modalState) {
                modal = _react2.default.createElement(
                    Modal,
                    { title: "Oops...!", message: "Incorrect username or password.", onClick: this.handleCloseModal },
                    _react2.default.createElement(
                        LoginMenu,
                        null,
                        _react2.default.createElement(LoginForm, {
                            fields: { email: this.state.email, password: this.state.password },
                            onSubmit: this.handleSubmit,
                            onInputChange: this.handleChange })
                    )
                );
            }
            if (checkAuthDone || modalDismissed) {

                if (isLoggedIn) {
                    userMenu = _react2.default.createElement(LoggedUserMenu, { onClickLogout: this.handleLogoutClick, username: loggedInAs });
                } else {
                    if (showLoginForm) {
                        loginMenu = _react2.default.createElement(
                            LoginMenu,
                            null,
                            _react2.default.createElement(LoginForm, {
                                fields: { email: this.state.email, password: this.state.password },
                                onSubmit: this.handleSubmit,
                                cancelButton: { onCancel: this.handleHideLoginFormClick },
                                onInputChange: this.handleChange })
                        );
                    } else {
                        guestMenu = _react2.default.createElement(
                            GuestUserMenu,
                            null,
                            _react2.default.createElement(Button, { label: "Login", onClick: this.handleShowLoginFormClick })
                        );
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

function LoginMenu(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-login-menu" },
        props.children
    );
}
function GuestUserMenu(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-guest-menu" },
        props.children
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
        _react2.default.createElement(Button, { label: "Logout", onClick: props.onClickLogout })
    );
}

var WelcomeMat = function (_React$Component2) {
    _inherits(WelcomeMat, _React$Component2);

    function WelcomeMat(props) {
        _classCallCheck(this, WelcomeMat);

        var _this6 = _possibleConstructorReturn(this, (WelcomeMat.__proto__ || Object.getPrototypeOf(WelcomeMat)).call(this, props));

        _this6.handleWarningButton = _this6.handleWarningButton.bind(_this6);
        _this6.state = { showWarning: false };
        return _this6;
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
        { className: "div-modal", onClick: props.onClick },
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
                { onClick: props.onClick, className: "close-modal" },
                "Close"
            )
        )
    );
}

function LoginForm(props) {

    var cancelButton = null;
    if (props.cancelButton != null) {
        cancelButton = _react2.default.createElement(Button, { key: "hideLoginForm", label: "Cancel", onClick: props.cancelButton.onCancel });
    }

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "form",
            { id: "loginForm", onSubmit: props.onSubmit },
            _react2.default.createElement(
                "label",
                null,
                " Email: "
            ),
            _react2.default.createElement("input", { name: "email", type: "text", value: props.fields.email, onChange: props.onInputChange }),
            _react2.default.createElement(
                "label",
                null,
                " Password: "
            ),
            _react2.default.createElement("input", { name: "password", type: "password", value: props.fields.password, onChange: props.onInputChange }),
            _react2.default.createElement("input", { type: "submit", value: "Submit" })
        ),
        cancelButton
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

_reactDom2.default.render(_react2.default.createElement(MainApp, null), document.getElementById("root"));

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