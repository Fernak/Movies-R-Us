import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";

import Dashboard from "./dashboard/Dashboard"
import SignUp from "./login/SignUp"
import Login from "./login/Login"
import ForgotPassword from "./login/ForgotPassword"

import Home from "./dashboard/pages/Home"
import Profile from "./dashboard/pages/Profile"
import Movies from "./dashboard/pages/Movies"
import TVShows from "./dashboard/pages/TVShows"
import Subscriptions from "./dashboard/pages/Subscriptions"
import Trending from "./dashboard/pages/Trending"
import Favourites from "./dashboard/pages/Favourites"
import IndivCrew from "./dashboard/pages/IndivCrew"
import IndivMovie from "./dashboard/pages/IndivMovie"

function App() {
  return (

    <Router>
      <AuthProvider>
        <Switch>
          {/*<PrivateRoute exact path="/" component={Dashboard} />*/}
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/movies" component={Movies} />
          <PrivateRoute exact path="/tvshows" component={TVShows} />
          <PrivateRoute exact path="/mysubscriptions" component={Subscriptions} />
          <PrivateRoute exact path="/trending" component={Trending} />
          <PrivateRoute exact path="/favourites" component={Favourites} />
          <PrivateRoute exact path="/indivcrew" component={IndivCrew} />
          <PrivateRoute exact path="/indivMovie" component={IndivMovie} />
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
