import { useEffect,useState } from "react"
import React  from 'react'
import Cards from "./Cards"

const Navbar = () => {
    const [prod,setprod]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setprod(json))

    },[])
    const i=0;
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand " href="/"><h5>React Redux</h5> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cart</a>
                        </li>
                        
                    </ul>
                    </div>  
                    <div>
                        <li className="navbar-nav  nav-item">
                            <a className="nav-link active" href="/">items :{i}</a>
                        </li></div>
                </div>
            </nav>
            <div className="container">
                <div className="row " style={{display:"flex",justifyContent:"space-around"}} >

            {prod .map((product)=>{return <Cards key={product.id} title={product.title} image={product.image} description={product.description} />})}
            {console.log(prod)}
            </div>
            </div>
            
        </div>
    )
}

export default Navbar
