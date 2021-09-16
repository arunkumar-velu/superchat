import React, { useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const focusElement = useRef()
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
        setFormValue('')
        focusElement.current.scrollIntoView({ behaviour: 'smooth' });
    }
    return (
        <div>
            <main>
                {messages && messages.map((message) => {
                    console.log(message);
                    return (<ChatMessage message={message} key={message.id} />)
                })}
                <div ref={focusElement}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input type='text' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit"> Send </button>
            </form>
        </div>
    );
}

export default ChatRoom;