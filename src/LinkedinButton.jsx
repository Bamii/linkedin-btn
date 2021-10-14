import React from 'react';
import axios from 'axios';
const { CALLBACK_URL, LINKEDIN_AUTHORIZATION_URL, LINKEDIN_ACCESSTOKEN_URL, STATE, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } =  process.env;

function LinkedinButton(){
  function openPage() {
    axios.get(CALLBACK_URL, {
      params: {
        response_type: 'code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: STATE,
        scope: 'r_liteprofile'
      }
    })
    .then(res => {
      // automatically redirects to REDIRECT_URI.
      console.log(res);
    })
  }

  return (
    <button onClick={openPage}>
      this button
    </button>
  )
}

export default LinkedinButton;
