import axios from "axios";
import authHeader from "./auth_header";

const getAllUser = async () => {
  const { data } = await axios.get(`/users`, { headers: authHeader() });
  return data;
};
const getAllChat = () => {
  return axios.get(`/chats`, { headers: authHeader() });
};

const chatsService = { getAllChat, getAllUser };

export default chatsService;
// module.exports = { getAllUser };
