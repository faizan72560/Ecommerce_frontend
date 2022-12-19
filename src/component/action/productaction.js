import axios from 'axios'

export const AddProduct=(formData,config)=>async(dispatch)=>{
    try{
        dispatch({type:"AddProduct"})
       
        const data=await axios.post("https://ecommerce-backend-lime.vercel.app/api/v1//admin/product/new",formData,config)
        console.log(data)
        dispatch({
            type:"Product Add",
            payload:data
        })
        // localStorage.setItem("user",JSON.stringify(data.userlogin))        
        // localStorage.setItem("islogin",true)
        // window.location.reload()

    

    }catch(e){
        dispatch({
            type:"Product Added Failed",
            payload: e
        })



    }
}


export const GetAdminProduct=()=>async(dispatch)=>{
    console.log("products")
    try{
        dispatch({type:"GetProductRequest"})
        const config = {
            headers: {
                "Content-Type": "application/json",
              },
              withCredentials:true
          };
          
       
        const {data}=await axios.get("https://ecommerce-backend-lime.vercel.app/api/v1/admin/products",config)
        console.log(data)
        
        dispatch({
            type:"GetProductSuccess",
            payload:data.products
        })

        // localStorage.setItem("user",JSON.stringify(data.userlogin))        
        // localStorage.setItem("islogin",true)
        // window.location.reload()

    

    }catch(e){
        dispatch({
            type:"GetProductFailure",
            payload: e
        })



    }

}

export const carthandler=(elem)=>(dispatch)=>{
    dispatch({type:"GetCartRequest"})
    
  let data=localStorage.getItem('data');
  console.log(data)
  if(data===null)
  {
      dataobj=[];
  }
  else
  {
      var dataobj=JSON.parse(data);
    }
    dataobj.push(elem);
    console.log(dataobj)
  
  localStorage.setItem('data',JSON.stringify(dataobj));
//   const Data=JSON.parse(localStorage.getItem(data))
//   console.log(Data)


dispatch({
            type:"GetCartSuccess",
            payload:dataobj
        })





}