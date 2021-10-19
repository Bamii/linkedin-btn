import React from 'react';
import axios from 'axios';
import Icon from './link.svg'
import './linkedin.css'
const {
  REACT_APP_STATE,
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_LINKEDIN_AUTHORIZATION_URL,
} =  process.env;

// mode: full | short
function LinkedinButton({ mode = "full" }){
  function openPage() {
    axios.get('http://localhost:3005/proxy', {
      params: {
        url: `${REACT_APP_LINKEDIN_AUTHORIZATION_URL}?response_type=code&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/callback&state=${REACT_APP_STATE}&scope=r_liteprofile`
      }
    })
    .then(res => {
      console.log(res.data)
      window.open(res.data.url)
    })
    .catch(res => {
      console.log(res)
    })
  }

  return (
    <button id="signin-linkedin-button" onClick={openPage}>
      <div className="button-logo">
        <img className="" src={Icon} alt="LinkedIn Icon."/>
      </div>
      <div className="button-text">
        Sign In {mode == 'full' ? `With LinkedIn` : ''}
      </div>
    </button>
  )
}

export default LinkedinButton;
