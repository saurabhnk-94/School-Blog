import React from "react";
import * as actions from "../store/actions/auth";

import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.submitHandler=this.submitHandler.bind(this);
  }

  submitHandler(event){
    event.preventDefault();
    console.log("Logged In");
    if (!this.props.error) {
      let username= this.state.username;
      let password= this.state.password;
      console.log(username,password);
      this.props.onAuth(this.state.username, this.state.password);
    }
    this.props.history.push('/');
  }

  render() {
  
    return (
      <div className="form-details">
        <form className="form-box" onSubmit={this.submitHandler} >
          <label>
            Username: 
            <input type="text" placeholder="Enter your username" name="username" onChange={(event) => this.setState({username: event.target.value})} />
          </label> 
          <label>
            Password :
            <input type="password" placeholder="Enter the password" name="password"  onChange={(event) => this.setState({password: event.target.value})}/>
           </label> 
           <div className="form-bottom">
             <p>Forgot Password?</p>
            <button type="submit">Login</button>
            </div>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

const mapDispatchTorProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps,mapDispatchTorProps) (Login);


