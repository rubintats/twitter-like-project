import { useState } from "react";
import { db, auth } from "../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import { doc, setDoc } from "firebase/firestore";

async function addUser(user) {
  // Add a new document with a generated id.
  await setDoc(doc(db, "users", user.uid), {
    displayName: user.email,
    userName: user.email,
    uid: user.uid,
  });
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const [user, setUser] = useState("");

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        addUser(res.user);
        dispatch({ type: "LOGIN", payload: res.user });
        setUser(res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, signup, dispatch };
};
