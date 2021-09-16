import React from 'react';
import firebase from 'firebase/compat/app';

const SignOut = () => {
    const auth = firebase.auth();
    const signOutGoogle = () => {
        auth.signOut();
    }
    console.log(auth.currentUser)
    return auth.currentUser && (
        <div>
            <button onClick={signOutGoogle}>Sign Out</button>
        </div>

    );
}
export default SignOut;