import { Link } from "react-router-dom";
const RoutineList = ({ routines, title }) => {
    // const routines = props.routines;
    // const title = props.title;
    return (
        <div className="routine-List">
            <h2>{ title }</h2>
            {routines.map((routine) => (
                <div className="routine-preview" key={routine.id}>
                    <Link to={`/routines/${routine.id}`}>
                        <h2>{ routine.exercise }</h2>
                        <p>Your max: { routine.weight }</p>
                    </Link>
                    
                </div>
            ))}
        </div>
      );
}
 
export default RoutineList;