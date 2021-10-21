import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { extractParams } from "./utils";
const {
  REACT_APP_STATE,
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_LINKEDIN_AUTHORIZATION_URL,
} =  process.env;


function Callback({ location }) {
  const zz = new BroadcastChannel('linkedin-auth')

  useEffect(() => {
    axios.get('https://ayo-api.herokuapp.com/proxy', {
      params: {
        url: `${REACT_APP_LINKEDIN_AUTHORIZATION_URL}?response_type=code&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&state=${REACT_APP_STATE}&scope=r_liteprofile`
      }
    })
    .then(res => {
      console.log(res.data)
      window.location.assign(res.data.url)
    })
    .catch(res => {
      console.log(res)
      alert('some error occured')
      zz.postMessage('error')
      window.close();
    })
  })

  return (
    <div className="App" style={{ cursor: "progress" }}>
      redirecting to linkedin...
    </div>
  );
}

export default Callback;
