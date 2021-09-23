import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const RoutineDetails = () => {
    const { id } = useParams();
    const { data: routine, error, isPending } = useFetch('http://localhost:8000/routines/' + id);
    return (
        <div className="routine-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { routine && (
                <article>
                    <h2>{ routine.exercise }</h2>
                    <p>Your max is: { routine.weight }</p>
                    <div>Reps: { routine.reps }</div>
                </article>
            )}
            
        </div>
      );
}
 
export default RoutineDetails;