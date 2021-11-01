import { useState } from "react"
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Store from "./Store"

function App() {
  const [token, settoken] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            Home Page
          </NavLink>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" to="/register">
            Register
          </NavLink>
          <NavLink activeClassName="active" to="/store">
            Store
          </NavLink>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              component={() => <Login settoken={settoken} />}
            />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/store"
              component={() => <Store token={token} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
