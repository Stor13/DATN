import React, { useState } from 'react';
import '../../styles/Login.css';
import { Link } from "react-router-dom";
import axios from 'axios'
function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:15000/login',{username, password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <section className="hero_section">
      <div className="login-container">
          <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                <button type="submit">Login</button>
                <Link to="/signup" className='other-func'>
                    Dont have account ? Sign Up 
                </Link>
                <br/>
                <Link to="/forgot" className='other-func' >
                    Forgot Password ?
                </Link>
            </form>
        </div>
    </section>
  );
}

export default LoginForm;
