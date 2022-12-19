import React from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../alert/Alert';
import { Logouthandler } from '../../action/useraction';

const Navbar = (props) => {
  const [Cart, setCart] = useState()
  const [filter, setfilter] = useState()
  const [search, setsearch] = useState()
  const [alert, setalert] = useState(false)
  
  const { error, loading, isAuthenticated ,user:userdata} = useSelector(
    (state) => state.user
  );


  const navigate=useNavigate()


  const searchhandler=()=>{
    console.log(search)
    localStorage.setItem('search',search)
  }
  
  // const {cart}=useSelector((state)=>state.cart)
  // console.log(cart)

  const dispatch=useDispatch()
  
  const logouthandler=()=>{
    dispatch(Logouthandler())
    // if(!isAuthenticated){
      window.localStorage.clear()
      navigate("/",{replace:true})
    // }
    // axios.get('api/v1/logout')
    // navigate('/',{replace:true})
    setalert(true)
    setTimeout(()=>{
      setalert(false)

    },2000)
    

  }
  
  useEffect(() => {
    carthandler()

    // if(!isAuthenticated){
    //   navigate("/user",{replace:true})
    // }
    
    // onchangehandler()
    
  },[filter,isAuthenticated])
  

  const carthandler=()=>{
    const cart=localStorage.getItem('cart')
    console.log(cart)
    setCart(cart)
    
  }
  return (
    <div>
      {alert && <Alert result='success' message="logged out successfully"/>}
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to='/' style={{ textDecoration: 'none' }}>
    <h1 className="navbar-brand" >Ecommerce</h1>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         {isAuthenticated  && <Link to='/user' style={{ textDecoration: 'none' }}>
          <h1 className="nav-link active" aria-current="page" >Profile</h1>
          </Link>}
        </li>
        <li className="nav-item">
        {isAuthenticated  && <Link to='/order'  style={{ textDecoration: 'none' }}>
          <h1 className="nav-link active" aria-current="page">My Order</h1>
          </Link>}
          
          {/* <a className="nav-link" >Link</a> */}
        </li>
        
        
    
      </ul>
   
        
      <form className="d-flex mx-2" role="search">
        
   
        <input className="form-control me-2" onChange={(e)=>{setsearch(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
        
        <button className="btn btn-outline-success" type="submit" onClick={searchhandler}>Search</button>
        
        <div className='cart'>
        <span className="badge bg-secondary ms-1">{localStorage.getItem('cart')}</span>
        <Link to='/cart'>
        <i className="bi bi-cart4"></i>
       </Link> 
        </div>
      </form>
      <div className='button'>
      {!isAuthenticated&& 
        <Link to='/Register'>
      <button type="button" className="btn btn-info">Register</button>
        </Link>}
        
      {!isAuthenticated &&
      <Link to='/UserLogin'>
      <button type="button" className="btn btn-info" > User Login</button>
      </Link>}
      {isAuthenticated&&
      <button onClick={logouthandler} type="button" className="btn btn-info" >LogOut</button>
      }
      
      </div>

      
      
        
    </div>
  </div>
</nav>







    </div>
  )
}

export default Navbar