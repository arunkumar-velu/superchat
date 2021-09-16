import React from 'react';
import firebase from 'firebase/compat/app';

const SignIn = () => {
    const auth = firebase.auth();
    const signInGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={signInGoogle}>Sign In</button>
    )
}
export default SignIn;