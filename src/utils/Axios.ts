import axios from "axios";

const Axios = axios.create({
  baseURL: "https://gta-rho.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
  withCredentials: true,
});

export default Axios;