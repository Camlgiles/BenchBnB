import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        if (this.props.formType === "logIn") {
            return (
                <div className="session-form">
                    <h2>Log In!</h2>
                    <form>
                        <label>Email:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>

                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <button onClick={this.handleSubmit}>Log In!</button>
                        </label>
                    </form>
                </div>
            )
        } else {
            return (
                <div className = "session-form" >
                    <h2>Sign Up!</h2>
                    <form>
                        <label>Email:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <button onClick={this.handleSubmit}>Sign Up!</button>
                        </label>
                    </form>
                </div >
            )
        }

    }
}

export default SessionForm;