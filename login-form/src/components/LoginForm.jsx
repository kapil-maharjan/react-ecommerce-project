import { useState } from 'react';

function LoginForm() {
  // Use State
  const [showPassword, setShowPassword] = useState(false);
  // Create toggle function
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input
          className="input-email"
          placeholder="Email" 
        />
      </div>
      <div>
        <input 
          className="input-password"
          placeholder="Password" 
          type={showPassword ? 'text' : 'password'} // toogle type
        />
        <button
          onClick={toggleShowPassword}
          className="show-button"
        >
          {showPassword ? 'Hide' : 'Show'} 
        </button>
      </div>
      <button className="login-button">
        Login
      </button>
      <button className="signup-button">
        Sign up
      </button>
    </>
  );
}

export default LoginForm;