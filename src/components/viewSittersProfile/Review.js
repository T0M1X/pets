import React, { Component } from 'react'
import "./review.css"
export default class Review extends Component {

    constructor(props){
        super(props);
        this.number = this.number.bind(this);

    }

    number(x){
        if (x==5){
        return(
            <>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            </>
        )}
        else if (x==4){
            return(
                <>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            </>

        )}
        else if (x==3){
            return(
                <>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </>

        )}
        else if (x==2){
            return(
                <>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </>

        )}
        else if (x==2){
            return(
                <>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </>

        )}
        }
        
    
    render() {
        
        return (
          
        <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="Review-Container">
                <div className="title-container">
                    <div className="title-review">{this.props.review.title}</div>
                   {this.props.review.recommend==="yes"? <div className="True"><h2 className="tick">&#10004;</h2> Sitter Recommended</div>:<div className="False"><h2 className="cross">&#x2613;</h2> Sitter Not Recommended</div>}
                   

                </div>
                <div className="ratings">
                            <div>Quality:{this.props.review.quality}/5</div>
                            <div>Price:{this.props.review.price}/5</div>
                            <div>Timeliness:{this.props.review.timeliness}/5</div>
                            <div>Overall: {this.number(this.props.review.overall)} </div>
                    </div>
                    <div className="Review-Desc">
                        {this.props.review.text}

                    </div>
            </div>

        </div>
        )
    }
}
