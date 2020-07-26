import React, { useState } from "react";
import classes from './Comment.module.css'
import Avatar from './Avatar'

const Comment = (props) => {
  const { name, message, time } = props.comment;
  const [isHovered, setIsHovered] = useState(false)
  let [replies, setReplies] = useState(0)
  let [like, setLike] = useState(0)
  let [dislike, setDislike] = useState(0)

  const style = isHovered ? {color: 'black'} : null
  
  const addReplies = () => {
    replies++
    setReplies(replies)
  }
  const addLike = () => {
    like++
    setLike(like)
  }
  const addDislike = () => {
    dislike++
    setDislike(dislike)
  }
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes.Comment}>
      <Avatar alt={name}/>
      <div>
        <div className={classes.Comment_Details}>
          <span className={classes.Name}>{name}</span>
          <span className={classes.Author}>Author</span>
          <span className={classes.Time}><span className={classes.Dot}>&#8226;</span>{time}</span>
        </div>
        <div className={classes.Message}>
          {message}
        </div>
        <div className={classes.Reply}>
         <ul >
          <li onClick={() => addReplies()}><span style={style}>Reply</span></li>
          <li><span style={style}>{replies} Replies </span></li>
          <li>
            <span style={{marginTop: '-11px'}}>
              <p onClick={() => addLike()} style={style}>
                <i className={`${classes.Arrow} ${classes.Up} ${isHovered? classes.Chevron_Hovered : null}`}></i>
                {like}
              </p>
            </span>
          </li>
          <li>
            <span style={{marginTop: '-11px'}}>
              <p onClick={() => addDislike()} style={style}>
                <i className={`${classes.Arrow} ${classes.Down} ${isHovered? classes.Chevron_Hovered : null}`}></i>
                {dislike}
              </p>
            </span>
          </li>
         </ul>
        </div>
      </div>
    </div>
  );
}

export default Comment