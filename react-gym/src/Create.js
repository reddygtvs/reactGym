const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Routine</h2>
            <form >                
                <label>Enter your maximum weight lifted:</label>
                <input type="number" required/>
            
                <label>Enter your maximum reps for that weight:</label>
                <input type="number" required/>
            
                <label>Choose an excercise:</label>
                <select>
                    <option value="Deadlift">Deadlift</option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Shoulder Press">Shoulder Press</option>
                    <option value="Squat">Squat</option>
                </select>   
                <button>Submit</button>                             
            </form>
        </div>
      );
}
 
export default Create;