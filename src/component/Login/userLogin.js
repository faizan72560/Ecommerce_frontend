import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../action/useraction'
import { useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import { useEffect } from 'react'
import Loader from '../layout/Loader/Loader'


const UserLogin = () => {
  const [alert, setalert] = useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  // const {user:userdata}=useSelector((state)=>state.user)
  // console.log(userdata)

  const { error, isLoading, isAuthenticated ,user:userdata} = useSelector(
    (state) => state.user
  );



  


const [email, setemail] = useState('')
const [password, setpassword] = useState('')

const signhandler= async(e)=>{
  e.preventDefault()
  await dispatch(loginUser(email,password))
  console.log(isAuthenticated)


  // if(!userdata)
  // {
  //   setalert(true)

  // }
  // else{
    
  //   navigate('/user',{replace:true})
  // }
  // console.log(alert)

  // setInterval(() => {
  //   setalert(false)
  // }, 4000);

  


  // const res=await axios.post('api/v1/login',{email,password})
  // console.log(res)
  
  // const role=JSON.parse(localStorage.getItem("admin"))
  
  //   console.log(role)
  //   if(role=='admin'){
  //     navigate('/admin',{replace:true})
  
  //   }
  //   else
  //   {
  //     navigate('/user',{replace:true})
  //   }
  // // const {user:userdata}=useSelector((state)=>state.user)

  

  


}



useEffect(() => {
  if (error) {
    setalert(true)
    console.log(error)
    // alert.error(error);
    // dispatch(clearErrors());
  }
  if (isAuthenticated) {
    navigate('/',{replace:true})
  }
   setTimeout(() => {
     setalert(false)
   }, 4000);

  console.log(isAuthenticated)


  
}, [dispatch, error,isAuthenticated,navigate]);

  return (
    
    <div>
      { alert &&
        <Alert result="warning" message="please enter data properly"/>

      }
      {isLoading?(<Loader/>):(
    <div className='container1'>
        <div className='text-center'>
        <h1> Login</h1>
        </div>
        <div>
        <form>
            <div className='text-center'>

  
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
    <label className="form-label" htmlFor="form2Example2">Password</label>
  

    </div>

    <div className="form-outline mb-4">
      
      {/* < href="#!">Forgot password?</a> */}
  </div>


  <button type="button" className="btn btn-primary btn-block mb-4 text-black" onClick={signhandler}>Sign in</button>
            </div>

  
</form>
    </div>
    </div>)}
    </div>
  )
}

export default UserLogin