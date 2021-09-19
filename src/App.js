import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login/Login"
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


function App() {

  return (

    <Container className="d-flex flex-row align-items-center justify-content-center min-vh-100">

      <div className="w-100" style={{ maxWidth: "400px" }} >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}/>
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>

    </Container>

  );
}

export default App;
