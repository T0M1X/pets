import React, { Component } from 'react'
import "./Review.css"
import { Link,Location } from "react-router-dom";
import Sitter from "../../lib/sitters.json";
import {writeJsonFile} from 'write-json-file';

export default class writeReview extends Component {
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);    
      this.onValueChange=this.onValueChange.bind(this);
      this.onValueChange2=this.onValueChange2.bind(this);
      this.onValueChange3=this.onValueChange3.bind(this);
      this.onValueChange4=this.onValueChange4.bind(this);
      this.onValueChange5=this.onValueChange5.bind(this);


      this.state={
        text:'',
        quality:'',
        price:'',
        timeliness:'',
        overall:'',
        recommend:'',
        sitter:Sitter

      }
    }
  
    handleChange(event) {
      this.setState({text: event.target.value});
    }

    
  
      handleSubmit = (event) =>{
        event.preventDefault();
        console.log("The name you entered was:"+this.state.text);
        console.log("the quality was "+this.state.quality);
        console.log("the price was "+this.state.price);
        console.log("the timeliness was "+this.state.timeliness);
        console.log("the overall was "+this.state.overall);
        console.log("the recommend was "+this.state.recommend);
        var Review={
            text:this.state.text,
            quality:this.state.quality,
            timeliness:this.state.timeliness,
            overall:this.state.overall,
            recommend:this.state.recommend,
        }
        console.log(Review)
        var result = this.state.sitter.findIndex(obj => obj.id===this.props.sitterId);
        console.log(result);
        Sitter[result].review.push(Review);
        console.log(Sitter)

  
      }
      onValueChange(event) {
        this.setState({quality:event.target.value});
      }
      onValueChange2(event) {
      this.setState({price:event.target.value});
    }
    onValueChange3(event) {
      this.setState({timeliness:event.target.value});
    }
    onValueChange4(event) {
      this.setState({overall:event.target.value});
    }
    onValueChange5(event) {
        this.setState({recommend:event.target.value});
      }
            
    render() {
      return (
        <div className="Background">
            {console.log("sitter id :"+this.props.sitterId)}
          <div className="Container-title">
          <div className="review-title">Submit your Review</div>
        <form className="ReviewForm" onSubmit={this.handleSubmit}>
        <h2>Rate Your expierence</h2>
          <div className="Rating-Container">
          <div class="quality">Quality of service</div>
          <div>
          <fieldset className="rating" >
      <input type="radio" id="q5" name="Quality" value="5" onChange={this.onValueChange} checked={this.state.quality ==="5"}/><label  htmlFor="q5" title="5 stars" required></label>
      <input type="radio" id="q4" name="Quality" value="4" onChange={this.onValueChange} checked={this.state.quality ==="4"}/><label htmlFor="q4" title="4 stars"></label>
      <input type="radio" id="q3" name="Quality" value="3" onChange={this.onValueChange} checked={this.state.quality ==="3"}/><label  htmlFor="q3" title="3 stars"></label>
      <input type="radio" id="q2" name="Quality" value="2" onChange={this.onValueChange} checked={this.state.quality === "2"}/><label  htmlFor="q2" title="2 stars"></label>
      <input type="radio" id="q1" name="Quality" value="1" onChange={this.onValueChange} checked={this.state.quality === "1"}/><label  htmlFor="q1" title="1 star"></label>
          </fieldset>
          </div>
          <div class="quality">Price</div>
          <div>
          <fieldset className="rating">
            <input type="radio" id="p5" name="Price" value="5" onChange={this.onValueChange2} checked={this.state.price === "5"} /><label  htmlFor="p5" title="5 stars"></label>
            <input type="radio" id="p4" name="Price" value="4"onChange={this.onValueChange2} checked={this.state.price === "4"} /><label  htmlFor="p4" title="4 stars"></label>
            <input type="radio" id="p3" name="Price" value="3"onChange={this.onValueChange2} checked={this.state.price === "3"} /><label  htmlFor="p3" title="3 stars"></label>
            <input type="radio" id="p2" name="Price" value="2" onChange={this.onValueChange2} checked={this.state.price === "2"}/><label  htmlFor="p2" title="2 stars"></label>
            <input type="radio" id="p1" name="Price" value="1" onChange={this.onValueChange2} checked={this.state.price === "1"} /><label  htmlFor="p1" title="1 star"></label>
          </fieldset>
          </div>
          
          <div class="quality">Timeliness</div>
          <div>
          <fieldset className="rating">
            <input type="radio" id="t5" name="Timeliness" value="5" onChange={this.onValueChange3} checked={this.state.timeliness === "5"} /><label  htmlFor="t5" title="5 stars"></label>
            <input type="radio" id="t4" name="Timeliness" value="4" onChange={this.onValueChange3} checked={this.state.timeliness === "4"} /><label  htmlFor="t4" title="4 stars"></label>
            <input type="radio" id="t3" name="Timeliness" value="3"onChange={this.onValueChange3} checked={this.state.timeliness === "3"} /><label  htmlFor="t3" title="3 stars"></label>
            <input type="radio" id="t2" name="Timeliness" value="2" onChange={this.onValueChange3} checked={this.state.timeliness === "2"} /><label  htmlFor="t2" title="2 stars"></label>
            <input type="radio" id="t1" name="Timeliness" value="1"onChange={this.onValueChange3} checked={this.state.timeliness === "1"} /><label  htmlFor="t1" title="1 star"></label>
          </fieldset>
          </div>
          <div class="quality">Overall Rating</div>
          <div>
          <fieldset className="rating">
            <input type="radio" id="w5" name="Overall" value="5" onChange={this.onValueChange4} checked={this.state.overall === "5"}/><label  htmlFor="w5" title="5 stars"></label>
            <input type="radio" id="w4" name="Overall" value="4" onChange={this.onValueChange4} checked={this.state.overall === "4"}/><label  htmlFor="w4" title="4 stars"></label>
            <input type="radio" id="w3" name="Overall" value="3" onChange={this.onValueChange4} checked={this.state.overall === "3"}/><label  htmlFor="w3" title="3 stars"></label>
            <input type="radio" id="w2" name="Overall" value="2" onChange={this.onValueChange4} checked={this.state.overall === "2"}/><label  htmlFor="w2" title="2 stars"></label>
            <input type="radio" id="w1" name="Overall" value="1" onChange={this.onValueChange4} checked={this.state.overall === "1"}/><label  htmlFor="w1" title="1 star"></label>
          </fieldset>
          </div>
          </div>
  
  
          <div className="recommend-container"> 
          <h2>Would you recommend this product?</h2>
          <div class="button-container">
          <input type="radio" id="Yes" name="recommend" value="yes"  onChange={this.onValueChange5} checked={this.state.recommend === "yes"}required/>
          <label htmlFor="Yes">Yes</label>
          <input type="radio" id="No" name="recommend" value="no" onChange={this.onValueChange5} checked={this.state.recommend === "no"}/>
          <label htmlFor="No">No</label>
          </div>
          </div>
          <div className="Description">
            <h2>Description</h2>
          <textarea id="desc" name="description"placeholder='Enter review' value={this.state.text} onChange={this.handleChange} required></textarea>
        </div>
        <div>

        <button type="submit" className="submitButton">Submit</button>

        </div>
      </form>
      </div>
      </div>
      )
    }
  }
  