import { useState, useEffect } from 'react';
import RoutineList from './routineList';
import useFetch from './useFetch';

const Home = () => {
    const { data: routines, isPending, error} = useFetch('http://localhost:8000/routines');
    return (
        <div className="home">
            {error && <div> { error } </div>}
            { isPending && <div>Loading...</div>}
            { routines && <RoutineList routines={routines} title="All Routines"/> }
        </div>
      );
}
 
export default Home;