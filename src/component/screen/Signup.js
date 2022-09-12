import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className="mycard">
    <div class="card auth-card">
      <h2>Instagram</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button class="btn waves-effect waves-light">Signup</button>
    <h5>
        <Link to="/login">Already have an account</Link>
    </h5>
    </div>
  </div>
  )
}

export default Signup