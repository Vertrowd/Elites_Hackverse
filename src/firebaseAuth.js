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
    console.log('SignUp function called with:', { email, password, displayName }); // Debug log

    try {
        const auth = getAuth();
        console.log('Attempting to create user...');
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log('User created successfully:', user); // Debug log

        // Add user data to Firestore
        console.log('Attempting to store user data in Firestore...');
        const userRef = doc(collection(db, "users"), user.uid); // Use user.uid as the document ID
        await setDoc(userRef, {
            uid: user.uid,
            email: email,
            displayName: displayName,
            createdAt: new Date().toISOString(), // Add a timestamp for when the user was created
        });

        console.log("User data stored in Firestore successfully."); // Debug log
        return user; // Return the user object
    } catch (error) {
        console.error("Error during sign-up process:", error); // Debug log
        throw error; // Re-throw the error to be handled by the caller
    }
}

export { signUp }; // Export the signUp function

