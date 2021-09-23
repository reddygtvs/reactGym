import React from 'react';

class FormData extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weight: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({weight: e.target.weight});
  }

  handleSubmit(e) {
    console.log(this.state.weight);
    e.preventDefault();
  }

  render() {
    return(
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          {/* Input for weight */}
          <label>
            <p>Enter your maximum weight lifted:</p>
            <input 
              type="number" 
              id="weight" 
              value={this.state.weight}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormData;
        //Sample Change for new branch
        // {/* Input for reps */}
        // <label for="reps">
        //   <p>Enter your maximum reps for that weight:</p>
        //   <input type="number" id="reps" name="reps"></input>
        // </label>

        // {/* Input for exercise */}
        // <label for="exercise">
        //   <p>Choose an exercise:</p>
        // </label>

        // {/* Selection list for exercise input */}
        // <select name="excercises" id="excercise">
        //   <option value="Deadlift">Deadlift</option>
        //   <option value="Bench Press">Bench Press</option>
        //   <option value="Shoulder Press">Shoulder Press</option>
        //   <option value="Squat">Squat</option>
        // </select>

        // {/* Submit & Reset Buttons */}
        // <div>
        //   <a>
        //     <button type="submit">Get your routine</button>
        //   </a>
        //   <a>
        //     <button type="reset">Reset</button>
        //   </a>  
        // </div>
