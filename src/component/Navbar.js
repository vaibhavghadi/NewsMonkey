import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'


export default function Navbar() {
   
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">NewsMonkey</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Business">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/General">Genarals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Health">Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Technology">Technology</NavLink>
                        </li>
                      
                    </ul>
                    <div className='find'>
                        <form role="search">
                            <input className="form-control mx-0" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        <button type="button" className="btn btn-outline-warning mx-2" >Search</button>
                    </div>
                    
                </div>
            </div>
        </nav>

        </>
      
    )
  }

