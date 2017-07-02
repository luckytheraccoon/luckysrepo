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

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this2 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this2.state = {
            isLoggedIn: false,
            showLoginForm: false,
            showWarning: false,
            username: "",
            password: ""
        };

        _this2.handleLogoutClick = _this2.handleLogoutClick.bind(_this2);
        _this2.handleShowLoginFormClick = _this2.handleShowLoginFormClick.bind(_this2);
        _this2.handleHideLoginFormClick = _this2.handleHideLoginFormClick.bind(_this2);
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(Header, [{
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
            fetch("http://myproject.app/logout").then(function (response) {
                return response.json();
            }).then(function () {
                this.setState({ isLoggedIn: false });
            }.bind(this));
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
        key: "handleSubmit",
        value: function handleSubmit(event) {
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
    }, {
        key: "render",
        value: function render() {
            var isLoggedIn = this.state.isLoggedIn;
            var showLoginForm = this.state.showLoginForm;

            var logoutButton = null;
            var loginButton = null;
            var loginForm = null;
            //const loginFormClasses = ["div-login-form"];
            if (isLoggedIn) {
                logoutButton = _react2.default.createElement(Button, { classes: "button-authentication", label: "Logout", onClick: this.handleLogoutClick });
            } else {
                if (showLoginForm) {
                    loginForm = _react2.default.createElement(
                        "div",
                        { className: "div-login-form" },
                        _react2.default.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            _react2.default.createElement(
                                "label",
                                null,
                                " Username: "
                            ),
                            _react2.default.createElement("input", { name: "username", type: "text", value: this.state.username, onChange: this.handleChange }),
                            _react2.default.createElement(
                                "label",
                                null,
                                " Password: "
                            ),
                            _react2.default.createElement("input", { name: "password", type: "password", value: this.state.password, onChange: this.handleChange }),
                            _react2.default.createElement("input", { type: "submit", value: "Submit" }),
                            _react2.default.createElement(Button, { key: "hideLoginForm", label: "Cancel", onClick: this.handleHideLoginFormClick })
                        )
                    );
                } else {
                    loginButton = _react2.default.createElement(Button, { classes: "button-authentication", label: "Login", onClick: this.handleShowLoginFormClick });
                }
            }
            return _react2.default.createElement(
                DivContainer,
                { classes: "div-header" },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(LogoHeader, null),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        {
                            transitionName: "div-login-form",
                            transitionEnterTimeout: 700,
                            transitionLeaveTimeout: 700 },
                        loginForm
                    ),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        {
                            transitionName: "button-authentication",
                            transitionEnterTimeout: 700,
                            transitionLeaveTimeout: 700 },
                        loginButton,
                        logoutButton
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var WelcomeMat = function (_React$Component3) {
    _inherits(WelcomeMat, _React$Component3);

    function WelcomeMat(props) {
        _classCallCheck(this, WelcomeMat);

        var _this3 = _possibleConstructorReturn(this, (WelcomeMat.__proto__ || Object.getPrototypeOf(WelcomeMat)).call(this, props));

        _this3.handleWarningButton = _this3.handleWarningButton.bind(_this3);
        _this3.state = { showWarning: false };
        return _this3;
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

var MainApp = function (_React$Component4) {
    _inherits(MainApp, _React$Component4);

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