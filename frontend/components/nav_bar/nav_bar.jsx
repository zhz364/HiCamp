import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="inner-right-div">
      <div style={{width:"40px"}}><h3>Welcome {currentUser.username}!</h3></div>
      <div className="user-dropdown">
        <img className="user-icon" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/user_icon.png"></img>
        <div className="user-dropdown-content">
            <Link className="link" to={`/users/${currentUser.id}/bookings`}><div className="user-dropdown-item">
              Bookings
            </div></Link>
        </div>
      </div>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="inner-right-div">
      <div className="right-signup">
        <Link className="btn" to="/signup">Sign Up</Link>
      </div>
      <div className="empty"></div>
      <div className="right-login">
        <Link className="btn" to="/login">Log In</Link>
      </div>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to="/"><img className="logo" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/hicamp2.PNG"/></Link>
      <div className="right-div">
        {display}
      </div>
    </header>
  )
}
