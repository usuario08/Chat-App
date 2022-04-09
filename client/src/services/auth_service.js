import axios from "axios";

const signup = (username, email, password) => {
  return axios
    .post(`/users`, { username, email, password })
    .then(({ data: { message } }) => {
      if (message) return message;
      else return false;
    });
};

const login = (email, password) => {
  return axios.post(`/users/login`, { email, password }).then((response) => {
    if (response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = { signup, login, logout, getCurrentUser };

export default authService;
