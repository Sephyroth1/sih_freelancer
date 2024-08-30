import React from 'react'

export default function Login() {
    return(
        <form className="login-form">
            <input type="email" placeholder="Enter your email" name="email" id="email" required/>
            <input type="password" placeholder='Enter your password' name="password" id="password" required/>
            <button type="submit">Login</button>
        </form>
    );
}