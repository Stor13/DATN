import React, { useState } from 'react';
import '../../styles/Login.css';
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt:', { username, password });
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
                        <label>Email:</label>
                        <input
                            type="text"
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
                    <div>
                        <label>Confirmed Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                <button type="submit">Login</button>
                <Link to="/login" className='other-func'>
                    Already have account ? Login Here
                </Link>
            </form>
        </div>
    </section>
  );
}

export default SignUpForm;
