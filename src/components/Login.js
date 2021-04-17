import {axiosWithAuth} from '../helpers/axiosWithAuth'
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const initialState = { username: '', password:'' }
  const history = useHistory()

  const [form , setForm] = useState(initialState)
  const [error , setError] =useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const handleChange = e => {
  setForm({...form , [e.target.name]: e.target.value})
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth().post('/login', form)
  .then( res => {
    console.log(res)
    localStorage.setItem( 'token', res.data.payload)
    history.push('/colors')
  } )
  .catch( err => {
    console.log(err)
    setError('Username or Password not valid')
  })
}

  
  // const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
       <form onSubmit = {handleSubmit}>
         <label>
           Name
           <input 
           type="text"
           name="username"
           data-testid="username"
           onChange={handleChange}
           value={form.name}
           />
         </label>
         <label>
           Password
           <input 
           type="password"
           name="password"
           data-testid="password"
           onChange={handleChange}
           value={form.value}
           />
         </label>
         <button type="submit">Log In</button>
       </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.