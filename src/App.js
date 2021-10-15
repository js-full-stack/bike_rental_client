import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//*API
import { getBikes, addBike, deleteBike } from "./api/apiBikes";

//* Components
import Container from "./components/Container";
import RentalForm from "./components/RentalForm";
import Header from "./components/Header";
import Banner from "./components/Banner";
import RentalListBikes from "./components/RentalListBikes";
import AvailableListBikes from "./components/AvailableListBikes";
function App() {
  const [bikeList, setBikeList] = useState([]);

  useEffect(() => {
    getBikes().then(({ payload }) => setBikeList(payload));
  }, []);

  const handleSubmit = async (bike) => {
    await addBike(bike);
    await getBikes().then(({ payload }) => setBikeList(payload));
  };

  const handleRemoveBike = async (bikeId) => {
    await deleteBike(bikeId).then(() => {
      setBikeList((prev) => prev.filter(({ _id }) => _id !== bikeId));
    });
  };

  return (
    <div className="app-wrapper">
      <Container>
        <Header />
        <RentalForm onSubmit={handleSubmit} />
        <Banner />
        <RentalListBikes bikes={bikeList} />

        <AvailableListBikes bikes={bikeList} onRemove={handleRemoveBike} />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
