import { message } from "antd";
import axiosClient from "../libraries/axiosClient";

const createOrder = async (orderData:any) => {
    try {
      const result = await axiosClient.post("/orders", orderData);
      message.success(result.data.message);
      return result;
    } catch (error:any) {
      message.error(error.response.data.message);
      return error;
    }
  };

  export {createOrder}