import React from 'react'
import { useSelector } from "react-redux"
import Cards from './Cards'
const Cart = () => {
    const prod=useSelector((store)=>{return store.lelo})
  return (
    <div>
      <div className="container">
                <div className="row " style={{display:"flex",justifyContent:"space-around"}} >
            {prod .map((product)=>{return <Cards key={product.id} title={product.title} image={product.image} description={product.description} Product={product} remove={true}/>})}
            {/* {console.log(prod)} */}
            </div>
            </div>
    </div>
  )
}

export default Cart
