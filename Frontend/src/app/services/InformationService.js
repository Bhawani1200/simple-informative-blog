import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/informations";

export const listInformations = () => axios.get(BASE_API_URL);

export const createInformation = (information) =>
  axios.post(BASE_API_URL, information);
