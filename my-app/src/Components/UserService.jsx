import axios from 'axios';

const BASE_URL = 'http://localhost:7092/api/user';

const UserService = {
  getAllUsers: () => {
    return axios.get(BASE_URL);
  },

  createUser: (userObject) => {
    return axios.post(BASE_URL, userObject);
  },

  getUserByUserName: (username) => {
    return axios.post(`${BASE_URL}/${username}`);
  }
};

export default UserService;