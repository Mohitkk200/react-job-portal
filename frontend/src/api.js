import axios from "axios";

const API = axios.create({
  baseURL: "https://job-backend-5lj2.onrender.com/", // Replace with your actual Render backend URL
  withCredentials: true,
});

export default API;
