import React, { useState } from 'react';
import Icon from './link.svg'
import './linkedin.css'

// mode: full | short
function LinkedinButton({ mode = "full" }){
  const [disabled, setDisabled] = useState(false);

  function openPage() {
    setDisabled(true)
    window.open('/authenticate', "_blank", "height=600,width=600,location=no")
    const zz = new BroadcastChannel('linkedin-auth')

    zz.onmessage = function(s) {
      switch (s) {
        case "error":
          setDisabled(false)
          alert('could not authenticate');
          break;
      
        default:
          console.log(s);
          setDisabled(false)
          alert('authenticated!')
          break;
      }
    }
  }

  return (
    <button
      id="signin-linkedin-button"
      onClick={openPage}
      disabled={disabled}
      style={{ cursor: disabled ? 'wait' : 'default' }}
    >
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
