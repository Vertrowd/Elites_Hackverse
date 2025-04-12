import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {db} from '.firebaseSetup'; // import firestore
import {collection, doc, setDoc} from "firebase/firestore";
async function signUp(email, password, displayName) {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Add user data to Firestore
        const userRef = doc(collection(db, "users"), user.uid); // Use user.uid as the document ID
        await setDoc(userRef, {
        uid: user.uid,
        email: email,
        displayName: displayName,
        // Add any other user data you want to store (e.g., profilePicUrl)
        });
        console.log("User created and data stored in Firestore");
        return user; // Return the user object if needed
    } catch (error) {
        console.error("Error signing up:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
    }
    
    export { signUp }; // Export the signUp function
    
    