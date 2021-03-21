import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../Login/Firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const FbLogin = () => {
    const [user, setUser] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFbLogIn = () => {
        firebase.auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div>
            <div class="d-flex border w-25 rounded mb-5 btn" onClick={handleFbLogIn}>
                <img style={{width: '25px'}} src="data:image/png;base64,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" class="mr-2" alt="" />
                <h6>Continue with Facebook</h6>
            </div>
        </div>
    );
};

export default FbLogin;