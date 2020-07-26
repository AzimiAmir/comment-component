import React from "react";
import Comment from "./Comment";
import classes from './CommentList.module.css';

function CommentList(props) {
  return (
    <div>
      {props.comments.map((comment, index) => (
      <div key={index} className={classes.CommentList}>
        <div>
          <Comment comment={comment} />
        </div>
      </div>
      ))};
    </div>
  );
}

export default CommentList;