import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import SignUp from './pages/signup';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <div className="header-left">
            <h2>Welcome to React</h2>
          </div>
          <div className="header-right">
            <Link to={'/'}><Button buttonName="Home"/></Link>
            <Link to={'/login'}><Button buttonName="Log In"/></Link>
            <Link to={'/signup'}><Button buttonName="Sign-Up"/></Link>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
