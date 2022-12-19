import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../action/useraction'
import { userReducer } from '../reducers/userReducer'
import { getuserData } from '../action/useraction'
import { Navigate, useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'

const UserPage = () => {
  const [data,setdata]=useState()
  const [role, setrole] = useState()
  

  // const dispatch=useDispatch()

  // const id=JSON.parse(localStorage.getItem('id'))
  //   console.log(id)
  //   const fetchuserdata=async()=>{
      
      
  //     const Data=await axios.get(`api/v1/me/62e6a096e4efae50b39bf43c`)
  //     console.log(Data)
  //     setdata(Data)
  //   console.log(data)

      
  //   }

  // const {user:userdata}=useSelector((state)=>state.user)
  // console.log(userdata)

  const { user:userdata, isLoading, isAuthenticated } = useSelector((state) => state.user);
  console.log(userdata)

  // const {user:userdata}=useSelector((state)=>state.user)


  const dispatch=useDispatch()
  const navigate=useNavigate()


//   useEffect(() => {
//     if(isAuthenticated===false){
//       navigate('/',{replace:true})
//     }

//     dispatch(getuserData())
//     // setrole(userdata.user.role)
//     // console.log(role)
// // 
//     // const id=JSON.parse(localStorage.getItem('id'))
//     // console.log(id)

//     // const fetchuserdata=async()=>{
      
      
//     //   const Data=await axios.get(`api/v1/me/62e6a096e4efae50b39bf43c`)
//     //   console.log(Data)
//     //   setdata(Data.data.user)
      
//     // }


//     // fetchuserdata()
//     // console.log(data)

    
//   }, [dispatch])
  

//   return isLoading?(<Loader/>):(
    
//     <>
    
//     <div classNameName=''>

//     <section className="vh-100" >
//   <div className="container-fluid">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-md-6 col-md-4">

//         <div className="card center1">
//           <div className="card-body text-center">
//             <div className="mt-3 mb-4">
//               {/* {userdata.user.role==="user"&&  */}
//               <img src={userdata&& userdata.avatar.url}
//                  className="rounded-circle img-fluid" style={{width: "50vw"}} /> 
//                 {/* } */}
//             </div>
//             <h4 className="mb-2"></h4>
//             <p className="text-muted mb-4">{userdata && userdata.name}<span className="mx-2">|</span> <a
//                 href="#!">mdbootstrap.com</a></p>
//             <div className="mb-4 pb-2">
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-facebook-f fa-lg"></i>
//               </button>
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-twitter fa-lg"></i>
//               </button>
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-skype fa-lg"></i>
//               </button>
//             </div>
           
//             <div className=" justify-content-between  mt-5 mb-2">
//               <div>
//                 <p className="mb-2 h5">Name</p>
//                 <p className="text-muted mb-0">{userdata&& userdata.name}</p>
//               </div>
//               <div className="px-3">
//                 <p className="mb-2 h5">Email</p>
//                 <p className="text-muted mb-0">{userdata&& userdata.email}</p>
//               </div>
//               <div>
//                 <p className="mb-2 h5">Id</p>
//                 <p className="text-muted mb-0">{userdata&& userdata._id}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//     </>
 
    
//   )
// }

return isLoading?(<Loader/>):(
  <>
  <div className="container d-flex justify-content-center align-items-center">
         <div className="card py-4">

            <div className="d-flex justify-content-center align-items-center">
              <div className="round-image">
                <img src={userdata&& userdata.avatar.url} className="rounded-circle" width="160"/>
              </div>
            </div>

            <div className="text-center mx-5">
            <div className=" justify-content-between  mt-5 mb-2">
                  <div>
             <p className="mb-2 h5">Name</p>
                 <p className="text-muted mb-0">{userdata&& userdata.name}</p>
               </div>
               <div className="px-3">
                 <p className="mb-2 h5">Email</p>
                 <p className="text-muted mb-0">{userdata&& userdata.email}</p>
               </div>
               <div>
                 <p className="mb-2 h5">Id</p>
                 <p className="text-muted mb-0">{userdata&& userdata._id}</p>
               </div>
             </div>


              

              
            </div>
           
         </div>
          </div>

  </>
)

}

export default UserPage