import axios from "axios";
import axiosInstance from "../../config/axiosInstance";
import { Endpoints } from "../../config/endpoints";
const { Booklists } = Endpoints;
import { useQuery } from "@tanstack/react-query";

const BookList = async () => {
  try {
    const response = await axiosInstance.get(Booklists);
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
export const UseBookLists = () => {
  return useQuery({
    queryKey: ["bookLists"],
    queryFn: BookList,
    staleTime: 1000,
    refetchInterval: 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });
};
