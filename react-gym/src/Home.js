import { useState, useEffect } from 'react';
import RoutineList from './routineList';

const Home = () => {
    const [routines, setRoutines] = useState([
        { exercise: 'Deadlift', weight: '100 kg', reps: '5', id: 1 },
        { exercise: 'Squat', weight: '80 kg', reps: '7', id: 2 },
        { exercise: 'Bench Press', weight: '60 kg', reps: '3', id: 3 },
        { exercise: 'Shoulder Press', weight: '50 kg', reps: '1', id: 4 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newRoutines = routines.filter(routine => routine.id !== id);
        setRoutines(newRoutines);
    }
    useEffect(() => {
        console.log("use effect ran")
    }, []);
    return (
        <div className="home">
            <RoutineList routines={routines} title="All Routines" handleDelete={handleDelete}/>
        </div>
      );
}
 
export default Home;