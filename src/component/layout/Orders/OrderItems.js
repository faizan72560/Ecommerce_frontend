import React from 'react'

const OrderItems = ({elem}) => {
  return (


    <div className='conatiner5'>
    

    <div className="card" style={{ width: '18rem' }}>

        <img src={elem.image} className="card-img-top" alt="..." style={{ width: '18rem', height: "10rem" }} />
        <div className="card-body" style={{ width: '18rem', height: "10rem" }}>
            <h5 className="card-title text-center">Name:{elem.name}</h5>

            <p className="center" ></p>
            <h6 className="center text-center" >price:{elem.price} </h6>
            <h6 className="center text-center" >id:{elem._id} </h6>

        </div></div>



</div>

  )
}

export default OrderItems