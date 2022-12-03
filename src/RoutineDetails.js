import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const RoutineDetails = () => {
    const { id } = useParams();
    const { data: routine, error, isPending } = useFetch('http://localhost:8000/routines/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/routines/' + routine.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="routine-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { routine && (
                <article>
                    <h2>{ routine.exercise }</h2>
                    <p>Your max is: { routine.weight }</p>
                    
                    <div>Reps: { routine.reps }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            
        </div>
      );
}
 
export default RoutineDetails;