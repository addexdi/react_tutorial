import React from "react";
import { Link, NavLink } from "react-router-dom";

//NavLink puts the class='active' in a tag
const Navbar = (props) => {
    // console.log(props);
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment' href="/">Gloria</a> 
            <div>
                <button className='ui button'><NavLink to="/">Home</NavLink></button>
                <button className='ui button'><Link to="/about">About</Link></button>
                <button className='ui button'><Link to="/contact">Contact</Link></button>
            </div>
        </nav>
    )
}

export default Navbar;

