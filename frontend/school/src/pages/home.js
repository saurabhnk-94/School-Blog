import React from "react";
import './pages.css';
import Posts from './posts';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home-body">
          <Posts/>
      </div>
    );
  }
}


export default Home;