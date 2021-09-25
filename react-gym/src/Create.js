import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [exercise, setExercise] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const routine = {exercise, weight, reps};

        setIsPending(true);

        fetch('http://localhost:8000/routines', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(routine)
        }).then(() => {
            console.log('new routine added')
            setIsPending(false);
            history.push('/')
        })
        // console.log(routine);
    } 
    return (
        <div className="create">
            <h2>Add a New Routine</h2>
            <form onSubmit={handleSubmit}>                
                <label>Enter your maximum weight lifted:</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
            
                <label>Enter your maximum reps for that weight:</label>
                <input
                    type="number" 
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required
                />
            
                <label>Choose an exercise:</label>
                <select
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                >
                    <option value="Deadlift">Deadlift</option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Shoulder Press">Shoulder Press</option>
                    <option value="Squat">Squat</option>
                </select>   
                { !isPending && <button>Add Routine</button> }
                { isPending && <button disabled>Adding Routine...</button> }
                
                <p>{weight}</p>
                <p>{reps}</p>  
                <p>{exercise}</p>                         
            </form>
        </div>
      );
}
 
export default Create;