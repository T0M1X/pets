import React, {useState} from 'react';

function RegisterForm({Register, error}) {
    const [details, setDetails] = useState({username:"", password: "", password2: "", type: ""});

    //handles form submission
    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        Register(details);
    }

  return (
      <div class="login">
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Register</h2>
            {/*check for error*/
            (error != "") ? (<div className='error'>{error}</div>) : ""
            }
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={event => setDetails({...details, username: event.target.value})} value={details.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password:</label>
                <input type="password" name="password2" id="password2" onChange={event => setDetails({...details, password2: event.target.value})} value={details.password2}/>
            </div>
            <div className='submitButtons'>
                <input type="submit" value="Register as PetSitter" onClick={event => setDetails({...details, type: event.target.value})}/>
                <input type="submit" value="Register as PetOwner" onClick={event => setDetails({...details, type: event.target.value})}/>
            </div>
        </div>
    </form>
    </div>
  )
}

export default RegisterForm