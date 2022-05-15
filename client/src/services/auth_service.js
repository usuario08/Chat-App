import axios from "axios";

const signup = (username, email, password) => {
  return axios
    .post(`/users`, { username, email, password })
    .then(({ data: { message } }) => {
      if (message) return message;
      else return false;
    });
};

const login = async (email, password) => {
  try {
    let { data } = await axios.post(`/users/login`, { email, password });
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = { signup, login, logout, getCurrentUser };

export default authService;
