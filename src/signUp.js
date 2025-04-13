import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from './firebaseSetup'; // Import Firestore
import { collection, doc, setDoc } from "firebase/firestore";

/**
 * Function to sign up a new user and store their data in Firestore.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {string} displayName - The user's display name.
 * @returns {object} The created user object.
 */
async function signUp(email, password, displayName) {
    try {
        console.log('Starting sign-up process...');
        const auth = getAuth();

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User created successfully:', user);

        // Add user data to Firestore
        const userRef = doc(collection(db, "users"), user.uid); // Use user.uid as the document ID
        await setDoc(userRef, {
            uid: user.uid,
            email: email,
            displayName: displayName,
            createdAt: new Date().toISOString(), // Add a timestamp for when the user was created
        });
        console.log("User data stored in Firestore successfully.");

        return user; // Return the user object if needed
    } catch (error) {
        console.error("Error during sign-up process:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export { signUp };
