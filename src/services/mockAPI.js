import axios from 'axios';

axios.defaults.baseURL = 'https://642a976db11efeb7599cfede.mockapi.io';

const fetchUsers = async (page = 1) => {
  const response = await axios.get(`/users?page=${page}&limit=3`);
  const { data } = response;
  // if (data.length === 0) {
  // }
  return data;
};

const updateUser = async user => {
  const response = await axios.put(`/users/${user.id}`, {
    followers: user.followers,
  });
  return response.data;
};

export { fetchUsers, updateUser };
