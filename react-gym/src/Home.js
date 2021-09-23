import { useState, useEffect } from 'react';
import RoutineList from './routineList';

const Home = () => {
    const [routines, setRoutines] = useState([]);

    const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newRoutines = routines.filter(routine => routine.id !== id);
    //     setRoutines(newRoutines);
    // }
    useEffect(() => {
        fetch('http://localhost:8000/routines')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setRoutines(data);
        })
    }, []);
    return (
        <div className="home">
            <RoutineList routines={routines} title="All Routines"/>
        </div>
      );
}
 
export default Home;