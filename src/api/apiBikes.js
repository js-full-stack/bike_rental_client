import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://bicycles-rent.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:8085/";

// const errorHandler = (errorMessage) => toast.error(errorMessage);

export const getBikes = async () => {
  try {
    const { data } = await axios.get("/bikes");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addBike = async (bike) => {
  const { data } = await axios.post("/bikes", bike);
  return data;
};

export const deleteBike = async (bikeId) => {
  const { data } = await axios.delete(`/bikes/${bikeId}`);
  return data;
};

export const updateBikeStatus = async (bikeId, updatedStatus) => {
  const { data } = await axios.patch(`bikes/${bikeId}`, updatedStatus);
  return data;
};
