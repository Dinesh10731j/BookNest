import axios from "axios";
import axiosInstance from "../../config/axiosInstance";
import { Endpoints } from "../../config/endpoints";
const { Signup } = Endpoints;
import { signupType } from "../../types/Type";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";


const userRegister = async (signupData: signupType) => {
  try {
    const response = await axiosInstance.post(Signup, signupData);
    return response.data;
  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred";

    if (axios.isAxiosError(err)) {
      errorMessage = err.response?.data?.message || "Request failed";
    }

    throw new Error(errorMessage);
  }
};

export const UseUserSignup = () => {
  return useMutation({
    mutationKey: ["userSignup"],
    mutationFn: userRegister,
    onSuccess: (data) => {
        
      const token = data?.accessToken;
      const userId = data?.id

      Cookies.set("token", token);
      Cookies.set('userId',userId);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
};
