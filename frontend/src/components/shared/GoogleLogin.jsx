import React from 'react';
import GoogleLogin from 'react-google-login';

export default function GoogleLoginComponent(props) {
    return (
        <GoogleLogin
            {...props}
            clientId="474894401938-hib8j06eov4t7fu3mpt9a7cc6if0bf8h.apps.googleusercontent.com"
            cookiePolicy={'single_host_origin'}
        />
    )
}