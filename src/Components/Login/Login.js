import React, { useContext, useState } from 'react';
import './Login.css';
import AnotherLogin from '../AnotherLogin/AnotherLogin';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import FbLogin from '../FbLogin/FbLogin';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const handleBlur = (e) => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }

    const handleLogin = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(newUserInfo);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(newUserInfo.error);
            });
        e.preventDefault();
    }


    return (
        <div class="container">
            <div className="container mt-5 main-div">
                <h3 class="text-center">Login</h3>
                <form onSubmit={handleLogin}>
                    <div class="mb-3 w-50">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name="email" onBlur={handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                    </div>
                    <div class="mb-3 w-50">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password" onBlur={handleBlur} class="form-control" id="exampleInputPassword1" required />
                    </div>
                    <input class=" log-in-button " type="submit" value="Login" />
                    <p style={{ color: 'red' }}>{user.error}</p>
                </form>
                <div>
                    <p><small>Don't have an account?</small> <Link to="/register">Register</Link></p>
                </div>

            </div>
            <br />
            <h1>------------------Or------------------</h1>
            <div className="connect-button">
                <AnotherLogin ></AnotherLogin>
            </div>

            <div className="connect-button">
                <FbLogin></FbLogin>
            </div>
        </div>

    );
};

export default Login;
