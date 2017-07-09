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

