import { WaitlistData } from "@/types/waitlist-type";
import axios from "axios";
const BACKEND_URL = process.env.NODE_ENV === "production"
? process.env.NEXT_PUBLIC_PROD_BACKEND_URL : process.env.NEXT_PUBLIC_DEV_BACKEND_URL;
console.log(BACKEND_URL, "BACKEND_URL");

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createWaitlist = async (data: WaitlistData) => {
    try {
        const response = await axiosInstance.post("/waitlist", data);
        return response.data;
    } catch (error) {
        console.error("Error creating waitlist:", error);
        throw error;
    }
}