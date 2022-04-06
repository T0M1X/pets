import React from 'react'
import "./Review.css"
import { useLocation } from "react-router-dom"
import Review from './writeReview2.js';


function WriteReview() {
  const location = useLocation();


return (
  <div>
    {console.log(location.state)}
  <div>{location.state.test}</div>
  <Review />
  </div>
  
  )

}
export default WriteReview
