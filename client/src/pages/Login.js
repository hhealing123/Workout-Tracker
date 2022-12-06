import React, { useRef, useState, useEffect } from 'react';
import LoginArea from "../components/LoginArea"

const Logins = () => {
    return (
        <div className="App">
            <h1>Hello</h1>
            <LoginArea />
        </div>
    )
}

export default Logins;

 {/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      } */}