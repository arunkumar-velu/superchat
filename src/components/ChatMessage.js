import React from 'react';
import firebase from 'firebase/compat/app';

const ChatMessage = (props) => {
    const auth = firebase.auth();
    const { text, uid, photoURL } = props.message;
    const messageCls = uid == auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageCls}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
}
export default ChatMessage;