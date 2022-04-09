import {Booking} from '../styles/Booking.styled'
import {useEffect, useState} from 'react'


const MakeBooking = () => {
  const [book, setType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [length, setLength] = useState('');
  const [endTime, setEndTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [additional, setAdditional] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [all, setAll] = useState([]);

  const add = () => {
    setPetType('');
    setPetName('');
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(startDate + " " + startTime);
    var end;
    console.log(endDate > startDate)
    {book === "Walking" ? end = startTime+length : end = endDate + " " + endTime}

  }

  const Walking = () => {
    return(
      <div>
        <h3>Timing</h3>
        <div>
          <div>
            <label htmlFor="timestart">Start date and time</label>
            <input type="date" id="start" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>
            <input type="time" id="timestart" name="appt" min="07:00" max="22:00" value={startTime} onChange={(e) => setStartTime(e.target.value)} required/>
          </div>
          <h3>Length</h3>
          <div className='lengths'>
            <input type="radio" name="walkLength" id="10" check={() => setLength("10")} />
            <label htmlFor="10">10 minutes</label>
            <input type="radio" name="walkLength" id="20" check={() => setLength("20")} />
            <label htmlFor="20">20 minutes</label>
            <input type="radio" name="walkLength" id="30" check={() => setLength("30")} />
            <label htmlFor="30">30 minutes</label>
            <input type="radio" name="walkLength" id="40" check={() => setLength("40")} />
            <label htmlFor="40">40 minutes</label>
            <input type="radio" name="walkLength" id="50" check={() => setLength("50")} />
            <label htmlFor="50">50 minutes</label>
            <input type="radio" name="walkLength" id="60" check={() => setLength("60")} />
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
            <input type="date" id="start" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>
            <input type="time" id="timestart" name="appt" min="07:00" max="22:00" value={startTime} onChange={(e) => setStartTime(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="timeend">End date and time</label>
            <input type="date" id="end" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
            <input type="time" id="timeend" name="appt" min="07:00" max="22:00" value={endTime} onChange={(e) => setEndTime(e.target.value)} required/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Booking>
      <h1>Make a booking</h1>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <h2 className='req'>Select your requirements</h2>
        <div>
          <h3>Add your pets!</h3>
          <div className='addPet'>
            <textarea id="petName" name="petName" placeholder='Name of pet' value={petName} onChange={(e) => setPetName(e.target.value)}></textarea>
            <textarea id="petType" name="petTypes" placeholder='Type of pet' value={petType} onChange={(e) => setPetType(e.target.value)}></textarea>
          </div>
          <button className="addB" onClick={() => {setAll([...all,{petName, petType}]); add(petType);}}>Add</button>
          {all.length > 0 ? all.map((p) => (<p className='pList'>{`${p.petName} : ${p.petType}`}</p>)) : <p>No pets</p>}
        </div>
        <div className="type-container"> 
          <h3>What type of booking do you need?</h3>
          <div className="walkSit">
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