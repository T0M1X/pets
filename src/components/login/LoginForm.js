import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password: ""});

    //handles form submission
    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {/*check for error*/
            (error != "") ? (<div className='error'>{error}</div>) : ""
            }
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" onChange={event => setDetails({...details, email: event.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="passowrd">Password:</label>
                <input type="password" name="password" id="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Login"/>
        </div>
    </form>
  )
}

export default LoginForm