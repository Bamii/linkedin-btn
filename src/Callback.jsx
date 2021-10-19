import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { extractParams } from "./utils";
const {
  REACT_APP_LINKEDIN_ACCESSTOKEN_URL,
  REACT_APP_STATE,
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_REDIRECT_URI
} =  process.env;

function Callback({ location }) {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    // get code and state
    // handle errors...
    // send data to the server..
    // -- post req.
    // -- content-type: x-www-form-urlencoded
    const { code, state } = extractParams(location.search)

    // if(state != REACT_APP_STATE) {
    //   // there is something very wrong here. stop the auth process
    //   return;
    // }
    
    axios.get('https://ayo-api.herokuapp.com/linkedin-access-token', {
      params: {
        headers: { 'Content-Type:': 'x-www-form-urlencoded' },
        url: `${REACT_APP_LINKEDIN_ACCESSTOKEN_URL}?grant_type=authorization_code&code=${code}&client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&redirect_uri=${REACT_APP_REDIRECT_URI}`
      }
    })
    .then(res => {
      console.log("ish", res);
      if(res.status === 200) {
        setAuth(true);
      }
    })
    .catch(result => {
      console.log(result)
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
