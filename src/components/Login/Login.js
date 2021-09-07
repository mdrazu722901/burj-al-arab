import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const app = initializeApp(firebaseConfig);
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [data, setData] = useContext(UserContext);
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setData(user);
                history.replace(from);
                console.log(user.email);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <div>
            <h1>this is login page</h1>
            <button onClick={googleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;