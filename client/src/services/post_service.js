import axios from "axios";
import authHeader from "./auth_header";

const getAllChat = () => {
  return axios.get(`/chats`, { headers: authHeader() });
};

const chatsService = { getAllChat };

export default chatsService;
