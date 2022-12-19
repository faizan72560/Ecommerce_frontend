import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { AddProduct, GetAdminProduct } from '../action/productaction'

const AdminPage = () => {
  
  const [del, setdel] = useState(false)
  const [update,setupdate]=useState(false)
  // const [Product, setProduct] = useState(second)
  
  
      const [Name, setName] = useState('')
      const [Description, setDescription] = useState('')
      const [price, setprice] = useState('')
      const [rating, setrating] = useState('')
      const [image, setimage] = useState('')
      const [category, setcategory] = useState('')
      const [stock, setstock] = useState('')
      const [Product, setProduct] = useState()

    const dispatch=useDispatch()
    const {product}=useSelector((state)=>state.product)
    console.log(product)
    
    

    
    // useEffect(() => {
      
    //   setdata(product)
    //   console.log(data)
    // }, [dispatch])

    const deletehandler=(id)=>{
      console.log('deleted')
      console.log(id)
      axios.delete(`https://ecommerce-backend-lime.vercel.app/api/v1/admin/product/${id}`)
      setdel(true)
      dispatch(GetAdminProduct())
      // getadmindata()
      
      
      
      
      
    }

    const updatehandler=(id)=>{
      console.log(id)
      localStorage.setItem('updateid',id)
      if(stock||price||category){
        
        axios.put(`https://ecommerce-backend-lime.vercel.app/api/v1/admin/product/${id}`,{Name,stock,price,Description,category,rating})
      }
      
      setupdate(true)
      dispatch(GetAdminProduct())
      // getadmindata()

    }
    
    
    
    
    
    
    useEffect(()=>{
      
      
      dispatch(GetAdminProduct())
      // const {data}=useSelector((state)=>state.product)
      // setProduct(product)
      // console.log(data)
      
      // const fetchadmindata=async()=>{
        
        //   const data=await axios.get("/api/v1/admin/products")
        //   console.log(data)
        // }
        // fetchadmindata()

    },[dispatch,update])


    
    const pickedhandler=(e)=>{


        // let pickedFile
        // console.log(event.target)
        // if(event.target.files && event.target.files.length===1){
        //   pickedFile=event.target.files[0];
        //   console.log(pickedFile)
        //   setimage(pickedFile);
  
        // }
  
        if (e.target.name === 'image') {
  
          const reader = new FileReader();
  
          reader.onload = () => {
              if (reader.readyState === 2) {
                  setimage(reader.result)
                
              }
          }
  
          reader.readAsDataURL(e.target.files[0])
  
       }
      }

    const submithandler=async (e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.set('name',Name)
        formData.set("description",Description)
        formData.set("price",price)
        formData.set("rating",rating)
        formData.set("image",image)
        formData.set("category",category)
        formData.set("stock",stock)


        const config={
          headers:{
            'Content-Type': 'multipart/form-data',
          }
        }
        // const res= await axios.post('api/v1/admin/product/new',formData,config)
        // console.log(res)

        dispatch(AddProduct(formData,config))
        setName('')
        setcategory('')
        setDescription('')
        setprice('')
        setstock('')
        setrating('')
        dispatch(GetAdminProduct())

    }


  return (
    <div>

<section className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
         
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Product Info</h3>

            <form className="px-md-2">

              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={Description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Description</label>
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={price} onChange={(e)=>{setprice(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Price</label>
              </div>

              
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={rating}onChange={(e)=>{setrating(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Rating</label>
              </div>
              <div className="form-outline mb-4">
                <input type="file" id="form3Example1q" className="form-control"  accept='image/*' name='image' onChange={pickedhandler}/>
            
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Category</label>
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={stock} onChange={(e)=>{setstock(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Stock</label>
              </div>

             




              <button onClick={submithandler}type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Category</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>


    </tr>
  </thead>

  <tbody>
    {product && product.map((elem)=>{
      return(
        <>
        <tr>
      <th scope="row">{elem._id}</th>
      <td>{elem.name}</td>
      <td>{elem.price}</td>
      <td>{elem.Stock}</td>
      <td>{elem.category}</td>
      <td><i onClick={()=>{deletehandler(elem._id)}}className="bi bi-trash-fill"></i></td>
      <td><i onClick={()=>{updatehandler(elem._id)}}className="bi bi-pencil-square"></i></td>
      

    </tr>

        </>
      )
    })}
   
  </tbody>
</table>

<div classNameName='container2'>

{update && 
(<>
<div classNameName='text-center'>
<h1>update</h1>

</div>
<br/>
<div classNameName='text-center'>
{/* <input type="text" id="form3Example1q" placeholder='Name' value={Name} onChange={(e)=>{setName(e.target.value)}}/> */}
{/* <input type="text" id="form3Example1q"  placeholder='Description'  value={Description} onChange={(e)=>{setDescription(e.target.value)}}/> */}
<input type="text" id="form3Example1q"  placeholder='Price' value={price} onChange={(e)=>{setprice(e.target.value)}}/>
{/* <input type="text" id="form3Example1q"   placeholder='Rating'value={rating}onChange={(e)=>{setrating(e.target.value)}}/> */}
<input type="text" id="form3Example1q"   placeholder='Category'value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
<input type="text" id="form3Example1q"  placeholder='Stock' value={stock} onChange={(e)=>{setstock(e.target.value)}}/>
{/* <button classNameName='btn btn-primary'>Submit</button> */}

<i onClick={()=>{updatehandler(localStorage.getItem('updateid'))}}className="bi bi-pencil-square"></i>
</div>

</>

) 
}


</div>






        

    </div>
  )
}

export default AdminPage