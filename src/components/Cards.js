import React from 'react'
import { useDispatch } from 'react-redux'
import { add ,remove} from '../store/CartSlice';

const Cards = (props) => {
    const dispatch=useDispatch();
    
    return (
        <div className='d-flex  flex-column align-items-center' >
            <div className="card mx-2  my-4 d-flex flex-column align-items-center justify-content-center" style={{width:"18rem",height:"18rem"}}>
                <img className="card-img-top " style={{width:"5rem"}} src={props.image} alt="Card image cap" />
                <div className="card-body d-flex align-items-center flex-column">
                    <h5 className="card-title ">{props.title}</h5>
                    <button className="btn btn-primary" onClick={()=>{props.remove?dispatch(remove(props.Product.id)):dispatch(add(props.Product));console.log(props.Product)}}>{props.remove?"Remove":"ADD"} to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
