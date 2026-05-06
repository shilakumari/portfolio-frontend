import axios from "axios";

//BASE_URL with your deployed backend URL
const BASE_URL = "https://api.shilakumari.com/api/projects";

export const getAllProjects = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};