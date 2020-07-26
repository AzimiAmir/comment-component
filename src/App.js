import React, { Component } from "react";
import CommentBoxForm from './components/CommentBoxForm';
import CommentList from './components/CommentList';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    this.state = {
      comments: [
          {
            name: "Amir",
            message: `So what the German automaker is likely to focus on today is the bigger picture.This will be the first time we see the Taycan free from any prototype`,
            time: "2 MINUTES AGO",
          }
        ]
    };
  }

  addComment(comment) {
    this.setState({
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.App_Header}>
          <h1>
            Comment Component
          </h1>
        </header>
        <div className={classes.App_CommentBoxForm}>
          <CommentBoxForm addComment={this.addComment}/>
        </div>
        <div className={classes.App_CommentList}>
          <CommentList comments={this.state.comments}/>
        </div>
      </div>
    );
  }
};

export default App;
