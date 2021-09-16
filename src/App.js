import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';


import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';


firebase.initializeApp({
  apiKey: "AIzaSyDBWuqjcdswEit8drH0h-JzAAhIY9s9XXU",
  authDomain: "superchat-9a5b0.firebaseapp.com",
  projectId: "superchat-9a5b0",
  storageBucket: "superchat-9a5b0.appspot.com",
  messagingSenderId: "21265175702",
  appId: "1:21265175702:web:5f2a325ec0d3bc1f4f9eb7"
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Chat 💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
