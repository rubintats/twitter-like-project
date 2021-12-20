import "../App.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "../lib/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth);

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2 className="logintitle">Login</h2>
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
        <button className="button">log in</button>
        <button className="button-google" onClick={signInWithGoogle}>
          Log in with Google
        </button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
