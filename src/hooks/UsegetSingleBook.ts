
import { Endpoints } from "../../config/endpoints";
const { SingleBook } = Endpoints;
import axiosInstance from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const singleBook = async ({ params }: {params:{bookId:string} }) => {
  try {
    const response = await axiosInstance.get(`${SingleBook}/${params.bookId}`);
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

export const UseSingleBook = (bookId: string) => {
  return useQuery({
    queryKey: ["singleBook"],
    queryFn: () => singleBook({ params: { bookId } }),
   
  });
};
