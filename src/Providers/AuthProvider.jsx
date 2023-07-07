import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    user,
    loading,
    error,
  };

  // Function to create a new user with email and password
  function createUser(email, password) {
    setLoading(true);
    setError(null);

    return createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => setUser(user))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  // Function to sign in with Google
  function signInWithGoogle() {
    setLoading(true);
    setError(null);

    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
      .then(({ user }) => setUser(user))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  // Function to log out the current user
  function logOut() {
    setLoading(true);
    setError(null);

    return signOut(auth)
      .then(() => setUser(null))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  // Function to sign in with email and password
  function signIn(email, password) {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => setUser(user))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
