import axios from "axios";

const endPoints = `http://localhost:3400/api/post`;

export const getAll = async () => {
  return await axios.get(`${endPoints}/getposts`).then((res) => res.data);
};

export const newPost = async () => {
  return await axios.post(`${endPoints}/createpost`);
};
