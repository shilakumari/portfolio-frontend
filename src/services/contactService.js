import axios from "axios";

const BASE_URL = "http://13.218.215.173:8080/api/contact";

export const sendMessage = async (contactData) => {
  const response = await axios.post(BASE_URL, contactData);
  return response.data;
};