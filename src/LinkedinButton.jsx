import React from 'react';
import axios from 'axios';

function LinkedinButton(){
  function openPage() {
    const opts = {
      state: 'adsfadfafad',
      client_id: '774nkow2ff9ekq',
      callback: 'https://bamis-experiments.herokuapp.com/callback'
    }
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${opts.client_id}&redirect_uri=${opts.callback}&state=${opts.state}&scope=r_liteprofile`
    axios.get(url)
      .then(res => {
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
