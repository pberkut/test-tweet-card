import axios from 'axios';

axios.defaults.baseURL = 'https://642a976db11efeb7599cfede.mockapi.io';

const fetchAllUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};

const fetchUsers = async (page = 1) => {
  const response = await axios.get(`/users?page=${page}&limit=3`);
  const { data } = response;
  const handledNewUsers = data.map(user => {
    user.follow = false;
    return user;
  });
  return handledNewUsers;
};

const updateUser = async (id, followers) => {
  const response = await axios.put(`/users/${id}`);
  return response.data;
};

export { fetchAllUsers, fetchUsers, updateUser };
