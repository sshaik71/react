import React , {Component} from 'react';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    thid.state={
      username:'';
      password:'';
    }
    this.login = this.login/bind(this);
    this.onchange = this.onchange/bind(this);
  }

  login(){
    console.log("Login Function");
  }

  onChange(){
    console.log("coming here");
  }

  Render() {
    return(
      <div className="Content">
      <div className="column Bodypart">
        <h2>Login Page</h2>
        <label>Username</label>
        <input type="text" name="username" placeholder="username" onChange = {this.onChange}/>
          <label>password</label>
          <input type="password" name="password" placeholder="password" onChange = {this.onChange}/>
          <input type="submit"   value="Login"   className="button" onClick={this.login}/>

      </div>
    </div>
    );
  }
}

export default Login
