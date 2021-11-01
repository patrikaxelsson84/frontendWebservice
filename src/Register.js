import React, { useState } from "react"

const Register = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleregister() {
    const user = { username, password }
    const result = await fetch("http://localhost:8080/user/register", {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
    console.log(user)
  }

  return (
    <div>
      <h1>Register</h1> <br />
      <br />
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <br />
        <input type="button" onClick={handleregister} />
      </div>
    </div>
  )
}

export default Register
