
import axios from "axios";

// Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
      dispatch({type:"CREATE_ORDER_REQUEST"});
      
      const config = {
          headers: {
              "Content-Type": "application/json",
            },
          withCredentials:true

        };
        console.log(order)
    const { data } = await axios.post("https://ecommerce-backend-lime.vercel.app/api/v1/order/new", order, config);

    dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};



export const getOrder = () => async (dispatch) => {
  try {
      dispatch({type:"GET_ORDER_REQUEST"});

      const config = {
        headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
      };
      
      
      
      const { data } = await axios.get("https://ecommerce-backend-lime.vercel.app/api/v1/orders/me");
      console.log(data)

    dispatch({ type: "GET_ORDER_SUCCESS", payload: data.orders});
  } catch (error) {
    dispatch({
      type: "GET_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

