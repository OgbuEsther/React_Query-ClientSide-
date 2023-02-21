import axios from "axios";

interface data {
  title: string;
  description: string;
}

const endPoints = `http://localhost:3400/api/post`;

export const getAll = async () => {
  return await axios.get(`${endPoints}/getposts`).then((res) => res.data);
};

export const newPost = async ({ title, description }: data) => {
  return await axios.post(`${endPoints}/createpost`, { title, description });
};
