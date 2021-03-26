import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";

import Dashboard from "./dashboard/Dashboard"
import SignUp from "./login/SignUp"
import Login from "./login/Login"
import ForgotPassword from "./login/ForgotPassword"

function App() {
  return (

    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>

  )
}

export default App;
