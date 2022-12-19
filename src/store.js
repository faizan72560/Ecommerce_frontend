import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./component/reducers/userReducer";
import { cartReducer, ProductReducer } from "./component/reducers/productReducer";
import { GetOrderReducer, OrderReducer } from "./component/reducers/orderreducer";
// import {getPlaceReducer, placeReducer}  from "./reducers/placeReducer"

const store=configureStore({
    reducer:{
        user:userReducer,
        product:ProductReducer,
        cart:cartReducer,
        order:OrderReducer,
        getorder:GetOrderReducer
        // myPlaces:getPlaceReducer
        // postOfFollowing: postOfFollowingReducer,
        // createPost:createNewPost,
        // allUsers: allUsersReducer,
        // myposts:myPostsReducer
    
    }
    , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),   

    })

export default store
