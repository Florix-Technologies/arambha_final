import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

/**
 * Sign up a new user with email and password
 */
export const signupUser = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    await setDoc(doc(db, 'users', user.uid), {
      name: name,
      email: email,
      role: 'student',
      joinedAt: serverTimestamp(),
      totalCredits: 0,
      enrolledCoursesCount: 0,
      completedCoursesCount: 0,
      certificatesEarned: 0,
    });

    return user;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

/**
 * Login user with email and password
 */
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
