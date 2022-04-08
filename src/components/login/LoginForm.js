import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username:"", password: ""});

    //handles form submission
    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        Login(details);
    }

  return (
    <div className="login">
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
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
            <input type="submit" value="Login"/>
        </div>
    </form>
    </div>
  )
}

export default LoginForm