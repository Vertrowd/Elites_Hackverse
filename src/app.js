import React, { useState, useEffect } from 'react';
import ChartComponent from './chartComponent'; // Corrected import // Import the dynamic chart component
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const App = () => {
    const [dailyData, setDailyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const db = getFirestore();
    const auth = getAuth();

    useEffect(() => {
        const fetchData = async () => {
            if (!auth.currentUser) {
                setLoading(false);
                return;
            }
            const userId = auth.currentUser.uid;
            const dailyDataRef = collection(db, 'users', userId, 'daily_data');
            const q = query(dailyDataRef, where('date', '>=', '2024-01-01'));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map((doc) => ({
                date: doc.id,
                exercise: doc.data().exercise || 0,
                water: doc.data().water || 0,
                calories: doc.data().calories || 0,
            }));
            setDailyData(data);
            setLoading(false);
        };
        fetchData();
    }, [db, auth.currentUser]);

    if (loading) {
        return <div>Loading charts...</div>;
    }

    return (
        <div>
            <ChartComponent
                chartData={dailyData}
                chartType="line"
                title="Daily Exercise"
                dataLabel="exercise"
                yAxisLabel="Minutes"
            />
            <ChartComponent
                chartData={dailyData}
                chartType="bar"
                title="Daily Water Intake"
                dataLabel="water"
                yAxisLabel="Milliliters"
            />
            <ChartComponent
                chartData={dailyData}
                chartType="line"
                title="Daily Calories"
                dataLabel="calories"
                yAxisLabel="Calories"
            />
        </div>
    );
};

export default App;

