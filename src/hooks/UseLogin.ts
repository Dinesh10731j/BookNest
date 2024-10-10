import { Endpoints } from "../../config/endpoints";
const { Login: loginEndpoint } = Endpoints;
import axiosInstance from "../../config/axiosInstance";
import { loginType } from "../../types/Type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Login = async (logindata: loginType): Promise<loginType> => {
  try {
    const response = await axiosInstance.post(loginEndpoint, logindata);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "An unknown error occurred.";
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const UseUserLogin = () => {
  return useMutation({
    mutationKey: ["userLogin"],
    mutationFn: Login,
    onSuccess: () => {
      console.log("Login Successfull");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
};
