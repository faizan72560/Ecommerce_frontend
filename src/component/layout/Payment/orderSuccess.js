import React from 'react'
import "./orderSuccess.css"

const orderSuccess = () => {
  return (
    <div>
        <div className="container">
   <div className="row">
      <div className="col-md-6 mx-auto mt-5">
         <div className="payment">
            <div className="payment_header">
               <div className="check"><i className="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div className="content">
               <h1>Payment Success !</h1>
               <p> Your Order has been Placed. </p>
               {/* <a h>Go to Home</a> */}
            </div>
            
         </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default orderSuccess