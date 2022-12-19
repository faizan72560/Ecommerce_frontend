import React from 'react'
import { getOrder } from '../../action/orderaction'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import OrderItems from './OrderItems'

const Order = () => {
    // const [orders, setorders] = useState()
    const [orderItem,setorderItem]=useState([])

    const {getorder,isLoading}=useSelector((state)=>state.getorder)
    console.log(getorder)


    const rows = [];

    // setorderItem(getOrder.orderItems)
    console.log(orderItem)

    



    getorder &&
    getorder.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        // status: item.orderStatus,
        // amount: item.totalPrice,
      });
    });

    console.log(rows)

    const orderItems=[]

    
    //  for(var i=0;i<{rows.itemsQty};i++)
    // // getorder.forEach((item, index) => {
    //   orderItems.push({
    //     name: item.orderItems.name,
    //     price: item.orderItems.price,
    //     id: item.orderItems.quantity,
    //     image: item.orderItems.image,
        


    //     // status: item.orderStatus,
    //     // amount: item.totalPrice,
    //   });
    // // });
    // console.log(orderItems)



    // const Orders=()=>{
        // const order=getorder.orders
        // setorders(getorder.orders)
        // console.log(orders)
    // }
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getOrder())
        // setorderItem(getorder.orderItems)
        // console.log(orderItem)
        // Orders()
        // const order=getorder.orders
        // console.log(order)
        // setorders(order)
        // console.log(orders)
        

    
      
    }, [dispatch])
    


  return (
    <div className='container5'>

      
{
  getorder&& getorder.map((item)=>(

    // console.log(item.orderItems)
    item.orderItems.map((elem)=>

    

      // console.log(elem)

      
      
       (<OrderItems key={elem._id} elem={elem}/>) 
        
      
      
  //       <>
        
                                
  //                               <div className="card" style={{width: '18rem'}}>
                                  
  // <img src={elem.image} className="card-img-top" alt="..."  style={{width: '18rem',height: "10rem"}}/>
  // <div className="card-body"  style={{width: '18rem',height:"10rem"}}>
  //   <h5  className="card-title text-center">Name:{elem.name}</h5>
    
  //   <p className="center" ></p>
  //   <h6 className="center text-center" >id:{elem.price} </h6>
  //   </div></div>

  //        </>
      
    )
  ))
}
{/* 
 {getorder &&  getorder.map((elem)=>{
  {
    console.log(elem)
  }
            (
                <>
                               
        <div className="card" style={{width: '18rem'}}>
  <img src={elem.image} className="card-img-top" alt="..."  style={{width: '18rem',height: "10rem"}}/>
  <div className="card-body"  style={{width: '18rem',height:"10rem"}}>
    <h5  className="card-title text-center">Name:{elem.name}</h5>
    
    <p className="center" ></p>
    <h6 className="center text-center" >id:{elem.price} </h6>
    </div></div>

                </>
            )
        })

        } 

  */}

    </div>
  )
}

export default Order
