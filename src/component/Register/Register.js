// import React from 'react'
// import useState from 'react'
// import axios from 'axios'

// const Register = () => {


//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')


//     const registerhandler=(e)=>{
//         e.preventDefault()
//         const res= axios.post('api/v1/register')


//     }


//   return (
//     <div>
//         <h1>hiii</h1>
   
//     </div>
//   )
// }

// export default Register


import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../action/useraction'
import { useEffect } from 'react'
import Loader from '../layout/Loader/Loader'




const Register = () => {
  const navigate=useNavigate()
  const [alert, setalert] = useState()
  

  
     const [name, setname] = useState('')
     const [email, setemail] = useState('')
     const [password, setpassword] = useState('')
     const [image, setimage] = useState('')

    
  const { error, isLoading, isAuthenticated ,user:userdata} = useSelector(
    (state) => state.user
  );
     

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

    const dispatch=useDispatch()
  

  


       
     const registerhandler= async(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.set('name',name)
        formData.set("email",email)
        formData.set("password",password)
        formData.set("image",image)
        const config={
          headers:{
            'Content-Type': 'multipart/form-data',
          }
        }
        
        // const res=await axios.post('/api/v1/register',formData,config)
        dispatch(registerUser(formData,config))
        //  console.log(res)
        // if(res.data.success===true){
          
        //   navigate('/user',{replace:true})
        //   setalert(true)

        // }
        // else
        // {
        //   setalert(false)
        //   setTimeout(()=>{
        //   setalert()


        //   },3000)
        // }
        
        //  else{
          // setalert(true)
          // console.log(alert)
          //  }
          // setInterval(()=>{
  
          //   setalert(false)
          // },3000)



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
   }, 2000);

  console.log(isAuthenticated)


  
}, [dispatch, error,  isAuthenticated,navigate]);



  return (
    <div>
      {/* {alert&& <Alert message='User Registered Successfully' result='success'/>} */}
      {alert && <Alert message='Please Enter data properly' result='warning'/>}

      {/* <Alert/> */}
      {isLoading?(<Loader/>):(
      <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"  method='POST' encType='multipart/form-data'>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  
                    <div class="form-outline flex-fill mb-0">

                      <input type="file" id="form3Example4cd"  accept='image/*' name='image' onChange={pickedhandler} class="form-control" />
                    
                    </div>
                  </div>


                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg text-black" onClick={registerhandler}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>)}



    </div>
  )
}

export default Register
