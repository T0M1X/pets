import React, { Component } from 'react'
import "./Review.css"

export default class writeReview extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.state={
      description:'',
    }
  }

  handleChange(event) {
    this.setState({description: event.target.value});
  }

    handleSubmit (event){
      event.preventDefault();
      alert("The name you entered was:"+this.state.description);
    }

  render() {
    return (
      <div className="Background">
        <div className="Container-title">
        <div className="review-title">Submit your Review</div>
      <form className="ReviewhtmlForm" onSubmit={this.handleSubmit}>
        <div className="Rating-Container">
        <label>Rate Your expierence</label>
        <div>Quality:
        <div className="rate">
        <fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" htmlFor="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
      </div>

        </div>
        </div>


        <div className="recommend-container"> 
        
        </div>
        <div className="Description">
          <div><label>Description</label></div>
        <textarea id="desc" name="description"placeholder='Enter review'></textarea>
      </div>
      <button type="submit" className="submitButton">Submit</button>
    </form>
    </div>
    </div>
    )
  }
}
