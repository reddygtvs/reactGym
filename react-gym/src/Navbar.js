import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>react-Gym</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/create" >New Routine</Link>
                
            </div>
        </nav>
      );
}
 
export default Navbar;
// style = {{
//     color:"white",
//     backgroundColor: '#f1356d',
//     borderRadius: '8px'
// }}