import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Temp from "./components/Temp";

function App() {

  return (
    <AuthProvider>
      <Container className="d-flex flex-row align-items-center justify-content-center min-vh-100">

        <div className="w-100" style={{ maxWidth: "400px" }} >
          <SignUp />
        </div>

      </Container>
    </AuthProvider>

  );
}

export default App;
