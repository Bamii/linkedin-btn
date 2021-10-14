import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { extractParams } from "./utils";
const { CALLBACK_URL, LINKEDIN_AUTHORIZATION_URL, LINKEDIN_ACCESSTOKEN_URL, STATE, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } =  process.env;

function Callback({ location }) {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    // get code and state
    // handle errors...
    // send data to the server..
    // -- post req.
    // -- content-type: x-www-form-urlencoded
    const { code, state } = extractParams(location.search)

    if(state != STATE) {
      // there is something very wrong here. stop the auth process
      return;
    }
    
    axios.post(LINKEDIN_ACCESSTOKEN_URL, {
      headers: { 'Content-Type:': 'x-www-form-urlencoded' },
      params: {
        grant_type: 'authorization_code',
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
      }
    })
    .then(res => {
      // code & expires_in.
      // store the code somewhere... most prefarably the localstorage. then redirect to home?
      console.log(res)
      setAuth(true);
    })
  })

  if(auth) return <Redirect to="/dashboard" />

  return (
    <div className="App">
      <header className="App-header">
        callback
      </header>
    </div>
  );
}

export default Callback;
