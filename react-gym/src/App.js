import React from 'react';

function App() {
  return (
    <div className="App">
      <form>
        {/* Input for weight */}
        <label for="weight">
          <p>Enter your maximum weight lifted:</p>
          <input type="number" id="weight" name="weight"></input>
        </label>

        {/* Input for reps */}
        <label for="reps">
          <p>Enter your maximum reps for that weight:</p>
          <input type="number" id="reps" name="reps"></input>
        </label>

        {/* Input for exercise */}
        <label for="exercise">
          <p>Choose an exercise:</p>
        </label>

        {/* Selection list for exercise input */}
        <select name="excercises" id="excercise">
          <option value="Deadlift">Deadlift</option>
          <option value="Bench Press">Bench Press</option>
          <option value="Shoulder Press">Shoulder Press</option>
          <option value="Squat">Squat</option>
        </select>

        {/* Submit & Reset Buttons */}
        <div>
          <a>
            <button type="submit">Get your routine</button>
          </a>
          <a>
            <button type="reset">Reset</button>
          </a>  
        </div>
      </form>
    </div>
  );
}

export default App;


{/* <form onsubmit="return printMain()" class="form-container">
                <ul id="noDot">
                    <li>
                        <label for="weight">
                            <p>Enter your maximum weight lifted:</p>
                        </label><br>
                        <input type="number" id="weight" name="weight"><br>
                    </li>
                    <li>
                        <label for="reps">
                            <p>Enter your maximum reps for that weight:</p>
                        </label><br>
                        <input type="number" id="reps" name="reps"><br>
                    </li>

                    <li>
                    </li>
                    </ul>
                    <a>
                        <button type="submit" onclick="window.location='index.html#training-log-section';">Get your routine</button>
                    </a>
                    
                    <a class="button" onclick="resetAll()">
                        <button type=reset>Reset</button>
                    </a>               
</form> */}