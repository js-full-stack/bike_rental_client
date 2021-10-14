import { useState, useEffect } from "react";

import Container from "./components/Container";
import RentalForm from "./components/RentalForm";
import { getBikes, addBike, deleteBike } from "./api/apiBikes";
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
        <RentalForm onSubmit={handleSubmit} />
        <AvailableListBikes bikeList={bikeList} onRemove={handleRemoveBike} />
      </Container>
    </div>
  );
}

export default App;
