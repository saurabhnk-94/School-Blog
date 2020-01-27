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
    axios.get("http://127.0.0.1:8000/posts/")
      .then(res => this.setState({posts: res.data}))

      .catch(err => console.log("Error didmount:", err))
  }

  handlesubmit(title, post) {
    console.log("title:", title, "post:", post);
    axios.post("http://127.0.0.1:8000/posts/", {
        title,
        post
  })
  .then(res => console.log("Result post:", res.data))
  .catch(err => console.log("Error posting", err))
  }

  render() {
    const postItems = this.state.posts
    .map((items, index) => (
      <div key={index}>
        <h3> {items.title} </h3> <p> {items.post} </p>{" "}
      </div>
    ));
    
    return (
      <div>
        <h1> 
          Posts 
        </h1> 
        <div className="posting">
          {console.log("Feteched posts :", this.state.posts)}
          <h2>Wanna Post Anything!</h2>
          <div>Title:</div>
          <input type="text" 
            placeholder="Please enter the title" 
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}/>
          <div>Description:</div>
          <input type="text" 
            placeholder="Short Description"
            value={this.state.body}
            onChange={(event) => this.setState({body: event.target.value})}
            />
          <input type="button" value="POST" onClick={() => this.handlesubmit(this.state.title, this.state.body)}/>
        </div>
        <div style={{border: "2px solid black", padding:"10px"}}>
         {postItems}{" "}
        </div>
      </div>
    );
  }
}

export default Posts;
