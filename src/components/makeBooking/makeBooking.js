import {Booking} from '../styles/Booking.styled'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { UserMethods } from "../../lib/users.js";
import { sitters } from "../../lib/Sitters";
import {booked, BookingMethods} from "../acceptDeclineBooking/BookingsByAllSitters"

function timeToMins(time) {
  var b = time.split(':');
  console.log(b)
  return b[0]*60 + +b[1];
}

// Convert minutes to a time in format hh:mm
// Returned value is in range 00  to 24 hrs
function timeFromMins(mins) {
  function z(n){return (n<10? '0':'') + n;}
  var h = (mins/60 |0) % 24;
  var m = mins % 60;
  return z(h) + ':' + z(m);
}

// Add two times in hh:mm format
function addTimes(t0, t1) {
  return timeFromMins(timeToMins(t0) + timeToMins(t1));
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

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
  const redirect = useNavigate();
  const [user, setUser] = useState(null);
  const [sitter,setSitter] = useState(null);
  let { name } = useParams();

  const add = () => {
    setPetType('');
    setPetName('');
  }

  useEffect(() => {
    console.log('IN MAKE BOOKING');
    const id = localStorage.getItem('UserId');
    const user = UserMethods.GetUserById(id)
    console.log(user);
    console.log(name);
    const sit = sitters.filter(sitter => sitter.username.toLowerCase() == name.toLowerCase())[0];
    console.log(sit);
    setSitter(sit);
    if (user) {
        setUser(user);
    }
    else {
        redirect('/');
    }
}, [user])

  function calcprice(){
    if (book === "Walking"){
      var price = parseInt(sitter.walkprice.slice(1));
      price = price/(parseInt(length.slice(3)))
    } else {
      var price = parseInt(sitter.sitprice.slice(1));
      var start = startDate + " " + startTime;
      var end = endDate + " " + endTime;
      const d1 = new Date(start);
      const d2 = new Date(end);
      var difference = d1.getTime() - d2.getTime();
      var days = Math.ceil(difference / (1000 * 3600 * 24));
      price = price*days;
    }
    return price
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var start = startDate + " " + startTime;
    var endtime = endTime;
    var end = "";
    if (book === "Walking") {
      endtime = addTimes(startTime, length);
      end = startDate + " " + endtime;
    } else {
      end = endDate + " " + endtime;
    }
    const d1 = new Date(start);
    const d2 = new Date(end);
    const today = new Date();
    var pets = all.map(x => x.petType);
    if (d1 > d2) {
      alert("Your second date needs to be later than the first date!");
      return false;
    } else if (today > d1) {
      alert("You cannot book in the past!");
      return false;
    } else  {
      var results = {
        sitterId:user.id,
        id:makeid(5),
        title:"Booking " + (BookingMethods.GetLength()+1),
        start:d1,
        end:d2,
        name:sitter.username,
        Address:sitter.postcode,
        Number:sitter.Number,
        typeBooking:book,
        typePet:pets,
        amount:pets.length,
        other:additional,
        Payment:calcprice(),
        accepted: "Not Booked",
      }
      console.log(booked);
      BookingMethods.AddBooking(results);
      console.log(results);
      console.log(booked);
      redirect('/viewCalendar');
    }
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
            <input type="radio" name="walkLength" id="10" onChange={() => setLength('00:10')} />
            <label htmlFor="10">10 minutes</label>
            <input type="radio" name="walkLength" id="20" onChange={() => setLength("00:20")} />
            <label htmlFor="20">20 minutes</label>
            <input type="radio" name="walkLength" id="30" onChange={() => setLength("00:30")} />
            <label htmlFor="30">30 minutes</label>
            <input type="radio" name="walkLength" id="40" onChange={() => setLength("00:40")} />
            <label htmlFor="40">40 minutes</label>
            <input type="radio" name="walkLength" id="50" onChange={() => setLength("00:50")} />
            <label htmlFor="50">50 minutes</label>
            <input type="radio" name="walkLength" id="60" onChange={() => setLength('00:60')} />
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
        <button type="submit" className="sButton" onSubmit={(e) => handleSubmit(e)}>Book</button>
      </form>
    </Booking>
  )
}

export default MakeBooking