import React, { Component } from "react";
import moment from 'moment';
import classes from './CommentBoxForm.module.css';

class CommentBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        name: "",
        message: "",
      }
    };
    this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  fieldChangeHandler = event => {
    const { value, name } = event.target;
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };
  onSubmit(event) {
    event.preventDefault();
    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required!" });
      return;
    }
    this.setState({ error: "" });
    let { comment } = this.state;
    comment.time = moment().startOf('minute').fromNow();
    this.props.addComment(comment);
    this.setState({
      comment: { ...comment, message: "" }
    });
  }
  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }
  alertError() {
    return this.state.error ? (
      <div className={classes.Alert}>{this.state.error}</div>
    ) : null;
  }
  render() {
    return (
      <React.Fragment>
        <form className={classes.App_Form} onSubmit={this.onSubmit}>
          <div className={classes.App_Form_Text}>
            <input
              type="text"
              name="name"
              onChange={this.fieldChangeHandler}
              value={this.state.comment.name}
              placeholder="Name"
            />
          </div>
          <div className={classes.App_Form_Text}>
            <textarea
              name="message"
              onChange={this.fieldChangeHandler}
              value={this.state.comment.message}
              placeholder="Comment"
            />
          </div>
          <div>
            <button className={classes.Form_Button}>
              Post Comment
            </button>
          </div>
          {this.alertError()}
        </form>
      </React.Fragment>
    );
  }
}

export default CommentBoxForm;