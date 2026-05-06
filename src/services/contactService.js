import axios from "axios";

const BASE_URL = "https://api.shilakumari.com/api/contact";

export const sendMessage = async (contactData) => {
  const response = await axios.post(BASE_URL, contactData);
  return response.data;
};