import { 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword 
  } from 'firebase/auth';
  import { auth } from './firebase';
  
  export const signInWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  
  export const signOut = () => {
    return firebaseSignOut(auth);
  };
  
  export const registerWithEmail = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  