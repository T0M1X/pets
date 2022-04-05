import React, { Component } from 'react'
import "./Review.css"
import { Link } from "react-router-dom";

export default class writeReview extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    
    this.state={
      text:'',
    }
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

    handleSubmit (event){
      event.preventDefault();
      alert("The name you entered was:"+this.state.text);

    }

  render() {
    return (
      <div className="Background">
        <div className="Container-title">
        <div className="review-title">Submit your Review</div>
      <form className="ReviewForm" onSubmit={this.handleSubmit}>
      <h2>Rate Your expierence</h2>
        <div className="Rating-Container">
        <div class="quality">Quality of service</div>
        <div>
        <fieldset className="rating">
    <input type="radio" id="q5" name="Quality" value="5" /><label  htmlFor="q5" title="5 stars"></label>
    <input type="radio" id="q4" name="Quality" value="4" /><label htmlFor="q4" title="4 stars"></label>
    <input type="radio" id="q3" name="Quality" value="3" /><label  htmlFor="q3" title="3 stars"></label>
    <input type="radio" id="q2" name="Quality" value="2" /><label  htmlFor="q2" title="2 stars"></label>
    <input type="radio" id="q1" name="Quality" value="1" /><label  htmlFor="q1" title="1 star"></label>
        </fieldset>
        </div>
        <div class="quality">Price</div>
        <div>
        <fieldset className="rating">
          <input type="radio" id="p5" name="Price" value="5" /><label  htmlFor="p5" title="5 stars"></label>
          <input type="radio" id="p4" name="Price" value="4" /><label  htmlFor="p4" title="4 stars"></label>
          <input type="radio" id="p3" name="Price" value="3" /><label  htmlFor="p3" title="3 stars"></label>
          <input type="radio" id="p2" name="Price" value="2" /><label  htmlFor="p2" title="2 stars"></label>
          <input type="radio" id="p1" name="Price" value="1" /><label  htmlFor="p1" title="1 star"></label>
        </fieldset>
        </div>
        <div class="quality">Welfare</div>
        <div>
        <fieldset className="rating">
          <input type="radio" id="w5" name="Welfare" value="5" /><label  htmlFor="w5" title="5 stars"></label>
          <input type="radio" id="w4" name="Welfare" value="4" /><label  htmlFor="w4" title="4 stars"></label>
          <input type="radio" id="w3" name="Welfare" value="3" /><label  htmlFor="w3" title="3 stars"></label>
          <input type="radio" id="w2" name="Welfare" value="2" /><label  htmlFor="w2" title="2 stars"></label>
          <input type="radio" id="w1" name="Welfare" value="1" /><label  htmlFor="w1" title="1 star"></label>
        </fieldset>
        </div>
        <div class="quality">Timeliness</div>
        <div>
        <fieldset className="rating">
          <input type="radio" id="t5" name="Timeliness" value="5" /><label  htmlFor="t5" title="5 stars"></label>
          <input type="radio" id="t4" name="Timeliness" value="4" /><label  htmlFor="t4" title="4 stars"></label>
          <input type="radio" id="t3" name="Timeliness" value="3" /><label  htmlFor="t3" title="3 stars"></label>
          <input type="radio" id="t2" name="Timeliness" value="2" /><label  htmlFor="t2" title="2 stars"></label>
          <input type="radio" id="t1" name="Timeliness" value="1" /><label  htmlFor="t1" title="1 star"></label>
        </fieldset>
        </div>
        </div>


        <div className="recommend-container"> 
        <h2>Would you recommend this product?</h2>
        <div class="button-container">
        <input type="radio" id="Yes" name="recommend" value="yes" required/>
        <label htmlFor="Yes">Yes</label>
        <input type="radio" id="No" name="recommend" value="no"/>
        <label htmlFor="No">No</label>
        </div>
        </div>
        <div className="Description">
          <h2>Description</h2>
        <textarea id="desc" name="description"placeholder='Enter review' value={this.state.text} onChange={this.handleChange} required></textarea>
      </div>
      <div>
        <Link to="/viewCalendar">
      <button type="submit" className="submitButton">Submit</button>
      </Link>
      </div>
    </form>
    </div>
    </div>
    )
  }
}
