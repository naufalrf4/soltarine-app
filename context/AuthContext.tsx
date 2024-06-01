'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/utils/firebase';
import { AuthContextType, UserType } from '@/constants/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = doc(firestore, 'users', firebaseUser.uid);
        const userSnap = await getDoc(userDoc);

        if (!userSnap.exists()) {
          const userData: UserType = {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            phoneNumber: firebaseUser.phoneNumber ? parseInt(firebaseUser.phoneNumber.replace('+62', '')) : 0,
            role: 'user',
            photoURL: null
          };
          await setDoc(userDoc, userData);
          setUser(userData);
        } else {
          setUser(userSnap.data() as UserType);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
