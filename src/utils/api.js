import axios from "axios";

const userRequest = axios.create({
  baseURL: "http://localhost:8000",
});

export const postChat = data => userRequest.post("/speech", data);
export const getHistory = scenario => userRequest.get(`/prev_chat/${scenario}`);
