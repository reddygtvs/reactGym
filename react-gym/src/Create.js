import { useState } from "react";

const Create = () => {
    const [maxWeight, setMaxWeight] = useState('');
    const [maxReps, setMaxReps] = useState('');
    const [exercise, setExercise] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const routines = {maxWeight, maxReps, exercise};
        console.log(routines);
    } 
    return (
        <div className="create">
            <h2>Add a New Routine</h2>
            <form onSubmit={handleSubmit}>                
                <label>Enter your maximum weight lifted:</label>
                <input
                    type="number"
                    value={maxWeight}
                    onChange={(e) => setMaxWeight(e.target.value)}
                    required
                />
            
                <label>Enter your maximum reps for that weight:</label>
                <input
                    type="number" 
                    value={maxReps}
                    onChange={(e) => setMaxReps(e.target.value)}
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
                <button>Submit</button> 
                <p>{maxWeight}</p>
                <p>{maxReps}</p>  
                <p>{exercise}</p>                         
            </form>
        </div>
      );
}
 
export default Create;