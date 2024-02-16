import { useState } from "react";
import "./App.css";
import PhoneOtpForm from "./components/phone-login";

function App() {
  return (
    <div className="app">
      <h1>Login with Phone</h1>
      <PhoneOtpForm />
    </div>
  );
}

export default App;
