import axios from "axios";

axios.defaults.baseURL = "https://bicycles-rent.herokuapp.com/";

export const getBikes = async () => {
  try {
    const { data } = await axios.get("/bikes");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addBike = async (bike) => {
  try {
    const { data } = await axios.post("/bikes", bike);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteBike = async (bikeId) => {
  try {
    const { data } = await axios.delete(`/bikes/${bikeId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateBikeStatus = async (bikeId, updatedStatus) => {
  try {
    const { data } = await axios.patch(`bikes/${bikeId}`, updatedStatus);
    return data;
  } catch (error) {
    console.error(error);
  }
};
