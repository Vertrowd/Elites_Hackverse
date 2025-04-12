import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const handleFirebaseLogin = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Logged in successfully!', user);
    return user; // Return the user object
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error so the component can handle it
  }
};

export default handleFirebaseLogin;