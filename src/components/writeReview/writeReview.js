import React, { Component } from 'react'
import {Link, useLocation} from "react-router-dom";
import "./Review.css"

export default class writeReview extends Component {
  constructor(props){
    super(props);
    this.state={
      description:"",
    }
  }

    handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${this.state.description}`);
    }

  render() {
    return (
      <div>Hello
      <form className="ReviewForm" onSubmit={this.handleSubmit}>
        <label>Rating</label>
      <label>Description
        <input 
          type="text" 
          onChange={(e) => this.setState({description:e.target.value})}
        />
      </label>
      <input type="submit" class="submitButton"/>
    </form>
    </div>
    )
  }
}
