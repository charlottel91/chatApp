import axios from "axios";

const messengerApiClient = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default messengerApiClient;
