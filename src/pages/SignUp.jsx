import "../App.css";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { db, auth } from "../lib/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup, dispatch } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  const signInWithGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    getRedirectResult(auth);

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
        });
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2 className="signuptitle">Sign up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="email">
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>

        <label className="password">
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </label>
        <button className="button">sign up</button>
        <button className="button-google" onClick={(e) => signInWithGoogle(e)}>
          Sign up with Google
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
