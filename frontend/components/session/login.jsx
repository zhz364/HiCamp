import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  componentDidMount(){
    this.props.clearErrors(); 
  }

  handleDemo(e){
    e.preventDefault();
    let demoUser = {
      username: "test1",
      password: "123456"
    }

    this.props.login(demoUser)  
        .then(()=>this.props.history.push("/"))
  }

  render() {
    var sectionStyle = {
      width: "100%",
      height: "100%",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${"https://hicamp-seed.s3-us-west-1.amazonaws.com/background_img.jpg"})`
    };
    return (
      <div className="login-form" style={sectionStyle}>
        <h2>Welcome back!</h2>
        <p>Let's get you outside.</p>
        <form>
          <div className="login-errors-div">
            <p>{this.props.errors}</p>
          </div>
          <div className="username-div">
            <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleInput('username')}
          />
          </div>  
          <div className="password-div">
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput('password')}
            />
          </div>
            <button onClick={this.handleSubmit}>Log In!</button>
            <button onClick={this.handleDemo}>Demo user</button>
            <div className="foot-signup">Don't have a Hicamp account? <Link to="signup">Sign up!</Link></div>
        </form>
        <div className="empty">
          
        </div>
      </div>
    );
  }
}

export default Login;
