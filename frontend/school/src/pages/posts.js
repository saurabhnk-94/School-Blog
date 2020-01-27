import React from "react";
import axios from 'axios';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      body:"",
      posts: [],
    };
    this.handlesubmit=this.handlesubmit.bind(this);
  }
  componentDidMount() {
    axios.get("http://demo7128039.mockable.io/posts")
      .then(res => this.setState({posts: res.data}) )
  }

  handlesubmit() {
    console.log("handling post", this.state)
    axios.post("http://demo7128039.mockable.io/posts", {
      posts: [...this.state, {
        title: this.state.title,
        body:this.state.description
      }]  
    })
  }

  render() {
    const postItems = this.state.posts
    .filter(items => items.id <= 10)
    .map((items, index) => (
      <div key={index}>
        <h3> {items.title} </h3> <p> {items.body} </p>{" "}
      </div>
    ));
    return (
      <div>
        <h1> 
          Posts 
        </h1> 
        <div className="posting">
          <h2>Wanna Post Anything!</h2>
          <div>Title:</div>
          <input type="text" 
            placeholder="Please enter the title" 
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}/>
          <div>Description:</div>
          <input type="text" 
            placeholder="Short Description"
            value={this.state.description}
            onChange={(event) => this.setState({body: event.target.value})}
            />
          <input type="button" value="POST" onClick={this.handlesubmit}/>
        </div>
        {postItems}{" "}

      </div>
    );
  }
}

export default Posts;
