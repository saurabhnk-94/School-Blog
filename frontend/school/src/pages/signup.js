import React from "react";
import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email_id: '',
            password: '',
            confirm_password:''
        };
      this.validatePassword=this.validatePassword.bind(this);
    }
  handleSubmit = e => {
    e.preventDefault();
    // console.log("Confirmation password : ", this.validatePassword())
    if(this.validatePassword()){
        console.log("handling submit");
        console.log("error", this.props.error)
        if (this.props.error === null) {
          console.log('data from form')
          console.log('signup state value',this.state)
          this.props.onAuth(
            this.state.username,
            this.state.email_id,
            this.state.password,
            this.state.confirm_password
          );
        }
    }
    this.props.history.push("/login");
  };

  validatePassword() {
    if (this.state.password === this.state.confirm_password) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="signup-body">
        <form onSubmit={this.handleSubmit} method="POST">
          <label>
            UserName :
            <input
              type='text'
              placeholder="Enter your username"
              className="input-box"
              value={this.state.username}
              onChange={() => this.setState({ username: event.target.value })}
            />
          </label>
          <br/>
          <label>
            email :
            <br/>
            <input 
              type='text'
              placeholder="Enter your email-id"
              className="input-box"
              value={this.state.email_id}
              onChange={() => this.setState({ email_id: event.target.value })}
            />
          </label>
          <br/>
          <label>
            Password :
            <br/>
            <input 
              type='password'
              placeholder="Enter your password"
              className="input-box"
              value={this.state.password}
              onChange={() => this.setState({ password: event.target.value })}
            />
          </label>
          <br/>
          <label>
            Confirm Password :
            <br/>
            <input 
              type='password'
              placeholder="Confirm password"
              className="input-box"
              value={this.state.confirm_password}
              onChange={() =>
                this.setState({ confirm_password: event.target.value })
              }
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        error: state.error
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username,email_id,password,confirm_password) => dispatch(actions.authSignup(username,email_id, password,confirm_password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
