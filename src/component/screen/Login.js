import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mycard">
      <div class="card auth-card">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button class="btn waves-effect waves-light">Login</button>
        <h5>
        <Link to="/signup">Don't have an account</Link>
    </h5>
      </div>
    </div>
  );
};

export default Login;
