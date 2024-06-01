// /utils/auth.ts
import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  updateProfile as firebaseUpdateProfile,
  User 
} from 'firebase/auth';
import { auth, firestore } from './firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { UserType } from '@/constants/types';

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const firebaseUser = userCredential.user;

  const userDoc = doc(firestore, 'users', firebaseUser.uid);
  const userDocSnapshot = await getDoc(userDoc);

  if (!userDocSnapshot.exists()) {
    const userData: UserType = {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || '',
      email: firebaseUser.email || '',
      phoneNumber: firebaseUser.phoneNumber ? parseInt(firebaseUser.phoneNumber) : '', 
      role: 'user',
      photoURL: firebaseUser.photoURL || '',
    };
    await setDoc(userDoc, userData);
  }

  return firebaseUser;
};

export const signOut = () => {
  return firebaseSignOut(auth);
};

export const registerWithEmail = async (email: string, password: string, name: string, phoneNumber: string): Promise<UserType> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const firebaseUser = userCredential.user;

  await firebaseUpdateProfile(firebaseUser, { displayName: name });

  const userDoc = doc(firestore, 'users', firebaseUser.uid);
  const userData: UserType = {
    uid: firebaseUser.uid,
    name,
    email: firebaseUser.email || '',
    phoneNumber: parseInt(phoneNumber),
    role: 'user',
    photoURL: firebaseUser.photoURL || '',
  };
  await setDoc(userDoc, userData);

  return userData;
};

export const updateProfile = async (uid: string, data: Partial<UserType>) => {
  const userDoc = doc(firestore, 'users', uid);
  await updateDoc(userDoc, data);

  if (data.name || data.photoURL) {
    const user = auth.currentUser;
    if (user) {
      await firebaseUpdateProfile(user, { displayName: data.name, photoURL: data.photoURL });
    }
  }
};
