import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Temp from "./components/Temp";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (

    <Container className="d-flex flex-row align-items-center justify-content-center min-vh-100">

      <div className="w-100" style={{ maxWidth: "400px" }} >
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={dashboard}/>
              <Route path='/signup' component={SignUp} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>

    </Container>

  );
}

export default App;
