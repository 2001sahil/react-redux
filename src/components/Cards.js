import React from 'react'

const Cards = (props) => {
    return (
        <div className='d-flex  flex-column align-items-center' >
            <div className="card mx-2  my-4 d-flex flex-column align-items-center justify-content-center" style={{width:"18rem",height:"18rem"}}>
                <img className="card-img-top " style={{width:"5rem"}} src={props.image} alt="Card image cap" />
                <div className="card-body d-flex align-items-center flex-column">
                    <h5 className="card-title ">{props.title}</h5>
                    <a href="#" className="btn btn-primary">ADD to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Cards
