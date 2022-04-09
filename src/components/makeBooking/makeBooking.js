import {Booking} from '../styles/Booking.styled'
import {useState} from 'react'

const Walking = () => {
  return(
    <div>
      <h3>Timing</h3>
      <div>
        <div>
          <label htmlFor="timestart">Start date and time</label>
          <input type="date" id="start" required/>
          <input type="time" id="timestart" name="appt" min="07:00" max="22:00" step="600" required/>
        </div>
        <h3>Length</h3>
        <div className='lengths'>
          <input type="radio" name="walkLength" id="10" value="10" />
          <label htmlFor="10">10 minutes</label>
          <input type="radio" name="walkLength" id="20" value="20" />
          <label htmlFor="20">20 minutes</label>
          <input type="radio" name="walkLength" id="30" value="30" />
          <label htmlFor="30">30 minutes</label>
          <input type="radio" name="walkLength" id="40" value="40" />
          <label htmlFor="40">40 minutes</label>
          <input type="radio" name="walkLength" id="50" value="50" />
          <label htmlFor="50">50 minutes</label>
          <input type="radio" name="walkLength" id="60" value="60" />
          <label htmlFor="60">60 minutes</label>
        </div>
      </div>
    </div>
  )
}
const Sitting = () => {
  return(
    <div>
      <h3>Timing</h3>
      <div>
        <div>
          <label htmlFor="timestart">Start date and time</label>
          <input type="date" id="start" required/>
          <input type="time" id="timestart" name="appt" min="07:00" max="22:00" required/>
        </div>
        <div>
          <label htmlFor="timeend">End date and time</label>
          <input type="date" id="end" required/>
          <input type="time" id="timeend" name="appt" min="07:00" max="22:00" required/>
        </div>
      </div>
    </div>
  )
}

const MakeBooking = () => {
  const [book, setType] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [additional, setAdditional] = useState('');



  return (
    <Booking>
      <h1>Make a booking</h1>
      <form className="bookingForm">
        <h2 className='req'>Select your requirements</h2>
        <div className="type-container"> 
          <h3>What type of booking do you need?</h3>
          <div class="walkSit">
          <input type="radio" id="walk" name="type" value="Walking" onChange={(e) => setType(e.target.value)} required/>
          <label htmlFor="walk">Walking</label>
          <input type="radio" id="sit" name="type" value="Sitting" onChange={(e) => setType(e.target.value)} />
          <label htmlFor="sit">Sitting</label>
          </div>
        </div>
        <div className="dates">
          {book === "Walking" && Walking()}
          {book === "Sitting" && Sitting()}
        </div>
        <div className="Additional">
          <h3>Additional Information</h3>
          <br/>
          <br/>
          <textarea id="add" name="additional" placeholder='Enter additional information...' value={additional} onChange={(e) => setAdditional(e.target.value)} required></textarea>
        </div>

        <button type="submit" className="sButton">Submit</button>
      </form>
    </Booking>
  )
}

export default MakeBooking