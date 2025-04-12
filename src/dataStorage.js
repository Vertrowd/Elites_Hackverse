import { db } from './firebaseSetup'; // Import Firestore
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Function to add daily tracking data
async function addDailyData(userId, date, exercise, water, calories) {
try {
    const dailyDataRef = collection(db, "users", userId, "daily_data");

    // Check if a document for the given date already exists
    const existingDoc = await getDoc(doc(dailyDataRef, date));

    if (existingDoc.exists()) {
    // Update the existing document
    await updateDoc(doc(dailyDataRef, date), {
        exercise: exercise,
        water: water,
        calories: calories,
        updatedAt: new Date() // Add a timestamp for when the data was last updated
    });
    console.log("Daily data updated for:", date);
    } else {
    // Create a new document for the date
    await setDoc(doc(dailyDataRef, date), {
        exercise: exercise,
        water: water,
        calories: calories,
        createdAt: new Date() // Add a timestamp for when the data was created
    });
    console.log("Daily data added for:", date);
    }
} catch (error) {
    console.error("Error adding/updating daily data:", error);
    throw error;
}
}

// Example usage in a component
function FitnessTrackerForm() {
const [exercise, setExercise] = useState('');
const [water, setWater] = useState('');
const [calories, setCalories] = useState('');
const [date, setDate] = useState('');
const [loading, setLoading] = useState(false);
const auth = getAuth();

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
    alert("Please sign in to record your data."); // Or use a better UI notification
    return;
    }
    setLoading(true);
    try {
    // Get the user's UID
    const userId = auth.currentUser.uid;

    // Call the function to add/update daily data
    await addDailyData(userId, date, exercise, water, calories);

    // Clear the form or show a success message
    setExercise('');
    setWater('');
    setCalories('');
    setDate('');
    alert("Data saved successfully!");
    } catch (error) {
    console.error("Error:", error);
    alert("Failed to save data. Please try again.");
    } finally {
    setLoading(false);
    }
};


}