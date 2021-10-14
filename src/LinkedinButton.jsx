import React from 'react';
import axios from 'axios';
const {
  REACT_APP_LINKEDIN_AUTHORIZATION_URL,
  REACT_APP_CALLBACK_URL,
  REACT_APP_STATE,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  REACT_APP_REDIRECT_URI
} =  process.env;

console.log(REACT_APP_LINKEDIN_AUTHORIZATION_URL)
function LinkedinButton(){
  function openPage() {
    axios.get(REACT_APP_LINKEDIN_AUTHORIZATION_URL, {
      params: {
        response_type: 'code',
        client_id: REACT_APP_CLIENT_ID,
        redirect_uri: REACT_APP_REDIRECT_URI,
        state: REACT_APP_STATE,
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
