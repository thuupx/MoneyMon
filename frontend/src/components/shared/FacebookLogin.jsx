import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
export default function FacebookLoginComponent(props) {
    console.log("FacebookLoginComponent -> props", props)
    return (
        <FacebookLogin
            {...props}
            appId="861282047725896"
            fields="name,email"
            scope="public_profile"
        />
    ) 
}