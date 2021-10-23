import React from 'react';
import SawoLogin from 'sawo-react';
import './Leaderboard.css';

const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: 'email', //required must be one of: 'email', 'phone_number_sms',
    apiKey: '0d706ef6-4338-4337-aa58-36352dc1347c', //required get it from sawo dev.sawolabs.com,
    containerHeight: '300px', //required the login container height, default is 300px
}

function sawoLoginCallback(payload) {
    console.log(payload)
}
function sawoLogin() {
    return (
        <div id="login">
         <SawoLogin config={sawoConfig}/>
         </div>    
    )
}

export default sawoLogin
