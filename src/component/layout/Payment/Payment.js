import { useElements, useStripe,CardNumberElement, CardCvcElement,
    CardExpiryElement, } from '@stripe/react-stripe-js'
    // import { CardNumberElement } from '@stripe/react-stripe-js';
    import './Payment.css'
    import { createOrder } from '../../action/orderaction'
    
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Typography } from '@mui/material/styles/createTypography'
// import {useAlert} from "react-alert"
// import EventIcon from "@mui/material-ui/Icon/Event"
import { useEffect } from 'react'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom'
const Payment = () => {
    const [progress, setprogress] = useState(0)
    // const [stripeApikey, setstripeApikey] = useState("")

    // const stripePromise = loadStripe('pk_test_51LXQsKSGo4vEVcqdbAVATP5zzMF1ZacoUbS6lXRSTUgWGzh0QCTyEYIrN6lQj2Uo29LfZ12BXKd0JxeYVG2OxZ0D00JNaM6SQR');

    // const options = {
        // passing the client secret obtained from the server
        // clientSecret: '{{sk_test_51LXQsKSGo4vEVcqdISEzeBOl026ReO7bOGWlaROdMze0cUNCWpaPBA62JGRDiPPxKL1QIZTVCvwuENn6q0uSmwYF00HrJfK9eR}}',
    //   };
// const Wrapper = (props) => (
//   <Elements stripe={stripePromise}>
//     <MyComponent {...props} />
//   </Elements>
// );

    // const getstripeApikey=async()=>{
        
    //     const {data}=await axios.get("/api/v1/stripeapikey")
    //     setstripeApikey(data.stripeApiKey)
    //     console.log(stripeApikey)

    // }

    // useEffect(() => {
    //     getstripeApikey()
      
    // }, [])
    const { user } = useSelector((state) => state.user);
    
    // const { error, isLoading, isAuthenticated ,user:userdata} = useSelector(
    //     (state) => state.user
    //     );
        console.log(user)

    const stripe=useStripe()
    const elements=useElements()
    const dispatch=useDispatch()

    const shippingInfo=JSON.parse(localStorage.getItem('shippinginfo'))
    const cartItems=JSON.parse(localStorage.getItem('orderitems'))

    const order = {
        shippingInfo,
        orderItems: cartItems,
        // itemsPrice: orderInfo.subtotal,
        // taxPrice: orderInfo.tax,
        // shippingPrice: orderInfo.shippingCharges,
        // totalPrice: orderInfo.totalPrice,
      };
      const navigate=useNavigate()

    const submithandler=async()=>{
        console.log(order)

        const config={
            headers:{
                "Content-Type":"application/json",
            },
        }
        var amount=localStorage.getItem('price')
        var amount=amount*100
        const paymentData={
            amount: Math.round(amount)
        }
        console.log( typeof(amount))
        const {data}=await axios.post("/api/v1/payment/process",paymentData)
          setprogress(300)
        const client_secret=data.client_secret;
        console.log(client_secret)

        if (!stripe || !elements) return;
        const shippingInfo=JSON.parse(localStorage.getItem('shippinginfo'))
        const result=await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardNumberElement),
                billing_details: {
                  name: user.name,
                  email: user.email,
                  address: {
                    line1: shippingInfo.address,
                    city: shippingInfo.city,
                    state: shippingInfo.state,
                    postal_code: shippingInfo.pinCode,
                    country: shippingInfo.country,
                  },
                },
                
            },
        })
        setprogress(400)

        
      if (result.error) {
        // payBtn.current.disabled = false;

        alert(true);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          console.log(order)

          dispatch(createOrder(order));
          setprogress(1000)
          navigate('/success',{replace:true})

        //   history.push("/success");
        } else {
          alert(true)
        }
      }
     

    }

    
    


  return (
    //   <Elements stripe={stripePromise} options={options}>
              <div>
               
          
        
        <div className="container py-5">
        <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: progress}}></div>
</div>
    
    <div className="row mb-4">
   
    </div> 
    <div className="row">
        <div className="col-lg-6 mx-auto">
            <div className="card ">
                <div className="card-header">
                    <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                        
                        <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                            <li className="nav-item"> <a data-toggle="pill" href="#credit-card" className="nav-link active "> <i className="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                            {/* <li className="nav-item"> <a data-toggle="pill" href="#paypal" className="nav-link "> <i className="fab fa-paypal mr-2"></i> Paypal </a> </li> */}
                            {/* <li className="nav-item"> <a data-toggle="pill" href="#net-banking" className="nav-link "> <i className="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li> */}
                        </ul>
                    </div> 
        
                    <div className="tab-content">
                        
                        <div id="credit-card" className="tab-pane fade show active pt-3">
                            <form role="form" onsubmit="event.preventDefault()"/>
                                {/* <div className="form-group">
                                     <label for="username">
                                        <h6>Card Owner</h6>
                                    </label> <input type="text" name="username" placeholder="Card Owner Name" required className="form-control "/> </div> */}
                                <div className="form-group"> <label for="cardNumber">
                                        <h6>Card number</h6>
                                    </label>
                                    <div className="input-group">    <CardNumberElement className="paymentInput"/>
                                        <div className="input-group-append"> <span className="input-group-text text-muted"> <i className="fab fa-cc-visa mx-1"></i> <i className="fab fa-cc-mastercard mx-1"></i> <i className="fab fa-cc-amex mx-1"></i> </span> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group"> <label><span className="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                            <div className="input-group">  <CardExpiryElement className="paymentInput" /> </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                            </label>  <CardCvcElement className="paymentInput" /> </div>
                                    </div>
                                </div>
                                <div className="card-footer"> 
                                <button type="button" className="subscribe btn btn-primary btn-block shadow-sm"onClick={submithandler}>Pay Rs {localStorage.getItem('price')}</button>
                                </div>
                           
                            {/* </form> */}
                        </div>
                    </div> 
                    
                   
                        
                        {/* <p className="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p> */}
                    </div> 
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    // </Elements>
    // </div>

    
  )
}

export default Payment