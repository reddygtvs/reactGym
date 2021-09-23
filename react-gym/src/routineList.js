const RoutineList = ({ routines, title, handleDelete }) => {
    // const routines = props.routines;
    // const title = props.title;
    return (
        <div className="routine-List">
            <h2>{ title }</h2>
            {routines.map((routine) => (
                <div className="routine-preview" key={routine.id}>
                    <h2>{ routine.exercise }</h2>
                    <p>Your max: { routine.weight }</p>
                    <button onClick={() => handleDelete(routine.id)}>delete routine</button>
                </div>
            ))}
        </div>
      );
}
 
export default RoutineList;