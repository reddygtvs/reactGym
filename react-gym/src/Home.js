import { useState } from 'react';

const Home = () => {
    const [routines, setRoutines] = useState([
        { exercise: 'Deadlift', weight: '100 kg', reps: '5', id: 1 },
        { exercise: 'Squat', weight: '80 kg', reps: '7', id: 2 },
        { exercise: 'Bench Press', weight: '60 kg', reps: '3', id: 1 },
        { exercise: 'Shoulder Press', weight: '50 kg', reps: '1', id: 1 }
    ]);
    return (
        <div className="home">
            {routines.map((routine) => (
                <div className="routine-preview" key={routine.id}>
                    <h2>{ routine.exercise }</h2>
                    <p>Your max: { routine.weight }</p>
                </div>
            ))}
        </div>
      );
}
 
export default Home;