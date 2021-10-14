import axios from "axios";

axios.defaults.baseURL = "https://bicycles-rent.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:8085/";

export const getBikes = async () => {
  const { data } = await axios.get("/bikes");
  return data;
};

export const addBike = async (bike) => {
  const { data } = await axios.post("/bikes", bike);
  return data;
};

export const deleteBike = async (bikeId) => {
  const { data } = await axios.delete(`/bikes/${bikeId}`);
  return data;
};

export const updateBikeStatus = async (bikeId) => {
  const { data } = await axios.patch(`bikes/${bikeId}`);
  return data;
};
