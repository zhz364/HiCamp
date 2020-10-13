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
            zip: ""
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:
                            <input type="text" placeholder="Enter first name" value={this.state.first_name} onChange={this.handleInput("first_name")}/>
                        </label>
                    </div>
                    <div>
                        <label>Last Name:
                            <input type="text" placeholder="Enter last name" value={this.state.last_name} onChange={this.handleInput("last_name")}/>
                        </label>
                    </div>
                    <div>
                        <label>Username:
                            <input type="text" placeholder="Enter username for log in" value={this.state.username} onChange={this.handleInput("username")}/>
                        </label>
                    </div>
                    <div>
                        <label>Email:                    
                            <input type="text" placeholder="Enter email" value={this.state.email} onChange={this.handleInput("email")}/>
                        </label>
                    </div>
                    <div>
                        <label>Zip Code:
                            <input type="text" placeholder="Enter zip code" value={this.state.zip} onChange={this.handleInput("zip")}/>
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInput("password")}/>
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup