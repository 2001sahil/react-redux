import React from 'react'
import { useEffect,useState } from "react"
import Cards from './Cards'

const Home = () => {
    const [prod,setprod]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setprod(json))

    },[])
  return (
    <div>
      <div className="container">
                <div className="row " style={{display:"flex",justifyContent:"space-around"}} >

            {prod .map((product)=>{return <Cards key={product.id} title={product.title} image={product.image} description={product.description} Product={product} />})}
            {/* {console.log(prod)} */}
            </div>
            </div>
    </div>
  )
}

export default Home
