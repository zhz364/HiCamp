import React from 'react'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zip: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
            // .then(()=>this.props.history.push())
    }

    render(){
        return (
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={}>
                    <label>First_name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput("first_name")}/>
                    </label>
                    <label>Last_name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput("last_name")}/>
                    </label>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                    </label>
                    <label>Zip Code:
                        <input type="text" value={this.state.zip} onChange={this.handleInput("zip")}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup