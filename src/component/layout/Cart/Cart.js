import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import ShippingInfo from '../ShippingInfo/ShippingInfo'

const Cart = () => {
    const [Data, setData] = useState()
    const [filter, setfilter] = useState(false)
    const [Price,setPrice]=useState(0)
     const [Cart, setCart] = useState()
     const [quantity, setquantity] = useState()
     const [address, setadress] = useState()
     const [city, setcity] = useState()
     const [state, setstate] = useState()
     const [country, setcountry] = useState()
     const [pinCode, setpincode] = useState()
     const [phoneNo, setphoneno] = useState()
     const [shippinginfo, setshippinginfo] = useState(true)
     
    // const cart=useSelector((state)=>state.cart)
    // console.log(cart)
    const navigate=useNavigate()

    const shippingInfo={
        address,city,state,country,pinCode,phoneNo
    }

    const Shippinginfo=()=>{
      setshippinginfo(false)
      console.log(shippinginfo)
    }




    // const orderItems={

    // }

    const orderhandler=(e)=>{
      e.preventDefault()


      const data1=JSON.parse(localStorage.getItem('data'))
      console.log(data1)

      // console.log(data[0].price)
      var price=0;
      var name='';
      var image='';
      var product='';
      var orderItems=[]
      if(data1){

      
      for(let i=0;i<data1.length;i++)
      {
          // name=name+" ";
          // image=image+' ';
          price=data1[i].price
          name=data1[i].name
          image=data1[i].images.url
          product=data1[i]._id
          
          orderItems.push({name,price,image,product})
      }
      localStorage.setItem('orderitems',JSON.stringify(orderItems))
      // console.log(name,price,data1.length,image)
      console.log(orderItems)
  }
      // setPrice(price)
      // if(data){

      //     setquantity(data.length)
      // }
      // console.log(price)

      
        // e.preventDefault()
        localStorage.setItem('shippinginfo',JSON.stringify(shippingInfo))
       
        const config={headers:{"Content-Type":"application/json"}}

        // const data=axios.post('/api/v1/order/new',{shippingInfo,orderItems},config)
        navigate("/payment",{replace:true})
    



    }


    const getdata=()=>{

      const data=JSON.parse(localStorage.getItem('data'))
      console.log(data)
      totalprice()
        setData(data)
      
    }

    const removecarthandler=(id)=>{

        console.log(id)
        // const Data=localStorage.getItem('data')
        // console.log(Data[1])
        const filteredata = Data.filter((elem)=>{
            console.log(elem._id)
            return elem._id!==id
        })
        localStorage.setItem('cart',filteredata.length)

        console.log(filteredata)

        localStorage.setItem('data',JSON.stringify(filteredata))
        const data=JSON.parse(localStorage.getItem('data'))
        console.log(data)
        const length=data.length
        localStorage.setItem('cart',length)
        setCart(length)
        setData(data)
        setfilter(true)




        const data1=JSON.parse(localStorage.getItem('data'))

        // console.log(data[0].price)
        var price=0;
        if(data1){

        
        for(let i=0;i<data1.length;i++)
        {
            price=price+data1[i].price
        }
    }
        setPrice(price)
        if(data1){

            setquantity(data1.length)
        }
        console.log(price)




    }

    const totalprice=()=>{
        // var l=Data.length
        const data=JSON.parse(localStorage.getItem('data'))

        // console.log(data[0].price)
        var price=0;
        if(data){

        
        for(let i=0;i<data.length;i++)
        {
            price=price+data[i].price
        }
    }
        setPrice(price)
        localStorage.setItem('price',Price)
        if(data){

            setquantity(data.length)
        }
        console.log(price)
        // setfilter(false)
    }

    useEffect(()=>{

        // totalprice()
        getdata()
        // removecarthandler()
        // setCart(cart)
        // setfilter(true)

    },[filter,Price,quantity])
  return (
    <div>
        
           
        
        <div className='container4  flex '>

        <div className="col-md-4 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>{quantity && quantity}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping Charge
            <span>Free (Rs 0)</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>Rs { Price}</strong></span>
          </li>
        </ul>

        <button type="button" className="btn btn-primary btn-lg btn-block text-black" onClick={Shippinginfo}>
          Make purchase
        </button>
      </div>
    </div>
  </div>

<div className='container3' style={{width: "50rem",height: "32rem"}}>
{shippinginfo===false &&

<div className="row" >
    <div className="col-md-8 mb-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Biling details</h5>
        </div>
        <div className="card-body"style={{width: "15rem",height: "32rem"}}>
          <form>
            
            <div className="form-outline mb-4">
              <input type="text" id="form7Example4" className="form-control" onChange={(e)=>{setadress(e.target.value)}}/>
              <label className="form-label" for="form7Example4">Address</label>
            </div>
  
            
            <div className="form-outline mb-4">
              <input type="text" id="form7Example5" className="form-control" onChange={(e)=>{setcity(e.target.value)}}/>
              <label className="form-label" for="form7Example5">City</label>
            </div>
  
            {/* <!-- Number input --> */}
            <div className="form-outline mb-4">
              <input type="text" id="form7Example6" className="form-control" onChange={(e)=>{setstate(e.target.value)}} />
              <label className="form-label" for="form7Example6">State</label>
            </div>
  
            {/* <!-- Message input --> */}
            <div className="form-outline mb-4">
              <input type="text" id="form7Example6" className="form-control" onChange={(e)=>{setcountry(e.target.value)}} />
              <label className="form-label" for="form7Example6">Country</label>
            </div>
            <div className="form-outline mb-4">
              <input type="number" id="form7Example6" className="form-control" onChange={(e)=>{setpincode(e.target.value)}} />
              <label className="form-label" for="form7Example6">Pincode</label>
            </div>

            <div className="form-outline mb-4">
              <input type="number" id="form7Example6" className="form-control" onChange={(e)=>{setphoneno(e.target.value)}} />
              <label className="form-label" for="form7Example6">Phone No</label>
            </div>
  
  
        
            <div className="form-check d-flex justify-content-center mb-2">
              {/* <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8" checked /> */}
              <label className="form-check-label" for="form7Example8">
                <button className='btn btn-primary' onClick={orderhandler}>Submit</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>}


         </div>
</div>


{/* <ShippingInfo/> */}




      {/* <div className="card-body">
        <h5 className="card-title"><h1>Total Price<span className="badge badge-secondary">Rs {Price && Price}</span></h1></h5>
        <p className="card-text"><h3>Quantity<span className="badge badge-secondary">{quantity && quantity}</span></h3></p>
        <a  className="btn btn-primary">Checkout</a>
      </div>
    
         */}
          <div className='cont flex flex-wrap'>
            {console.log(Data)}
           
        {
            Data&& Data.map((elem)=>{
                return(
                  
                    <div className='container flex flex-wrap' key={elem._id}>

                         
        <div className="card" style={{width: '18rem'}}>
  <img src={elem.images.url} className="card-img-top" alt="..."  style={{width: '18rem',height: "10rem"}}/>
  <div className="card-body"  style={{width: '18rem',height:"10rem"}}>
    <h5  className="card-title text-center">Name:{elem.name} </h5>
    
    <p className="center" ></p>
    <h6 className="center text-center" >Price: Rs{elem.price} </h6>

    {/* <p className="center" >Description: {elem.description}</p> */}
    {/* <p className="center" >Category: {elem.category}</p> */}
    {/* <p className="center" >Rating: {elem.ratings}</p> */}
    
    {/* <p className="center" >Stock: {elem.Stock}</p> */}
    <div className='align-items-center'>
    <button className='btn btn-primary' onClick={()=>{removecarthandler(elem._id)}}>Remove From Cart</button>
    </div>

    {/* <a href="#" className="btn btn-primary" onClick={()=>{addtocarthandler(elem)}}>Add to Cart</a> */}
  </div>
</div>




                    </div>
                )
              })
            
        }
              </div>


        {/* <div classNameName='text-center'>
            <h1>Total Price</h1>
               <h3>{Price && Price}</h3>
        </div> */}
        

    
    </div>
    // </div>
  )
}

export default Cart