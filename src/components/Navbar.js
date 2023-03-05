import { useEffect,useState } from "react"
import React  from 'react'
import Cards from "./Cards"
import { useSelector } from "react-redux"

import { Link} from "react-router-dom";

const Navbar = () => {
    
    let i=useSelector((state)=>{return state.lelo});
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand " to="/"><h5>React Redux</h5> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart">Cart</Link>
                        </li>
                        
                    </ul>
                    </div>  
                    <div>
                        <li className="navbar-nav  nav-item">
                            <Link className="nav-link active" to="/">items :{i.length}</Link>
                        </li></div>
                </div>
            </nav>
            
            
        </div>
    )
}

export default Navbar
