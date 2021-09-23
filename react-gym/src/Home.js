import { useState } from 'react';

const Home = () => {
    //let name = 'Tushar';
    const[name, setName] = useState('Tushar');
    const handleClick = () => {
        setName('Anannya');
    }
    return (
        <div className="home">
            <h2>Welcome to your Gym Routine</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
      );
}
 
export default Home;