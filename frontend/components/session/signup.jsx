import React from 'react'
import { Link } from 'react-router-dom';


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
            .then(()=>this.props.history.push("/"))
    }


    render(){
        return (
            <div className="signup-form">
                <h2>Join Hicamp</h2>
                <p>Discover the best camping near me</p>
                <div className="signup-errors-div">   
                    <ul>{this.props.errors.map(err=>(
                        <li>{err}</li>
                    ))}</ul>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="first-last-name">
                        <label>
                            <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.handleInput("first_name")}/>
                        </label>
                        <label>
                            <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.handleInput("last_name")}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="text" placeholder="User name" value={this.state.username} onChange={this.handleInput("username")}/>
                        </label>
                    </div>
                    <div>
                        <label>                  
                            <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput("email")}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="text" placeholder="Zip code" value={this.state.zip} onChange={this.handleInput("zip")}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput("password")}/>
                        </label>
                    </div>

                    <button type="submit">Join Hicamp</button>
                    <div className="link-signin">
                        Have an account? 
                        <div className="link-div">
                            <Link to="/login">Sign in!</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup