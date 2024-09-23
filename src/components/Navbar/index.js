import {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MdLibraryAdd } from "react-icons/md";

import "./index.css"

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <Link to="/" className="nav-link">
                    <h1 className="navbar-heading">Tasks</h1>
                </Link>
                <div>
                    <Link to="/createTask" className="nav-link">
                        <MdLibraryAdd className="nav-icon"/>
                        <h3>Add Task</h3>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default Navbar