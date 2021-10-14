import classNames from "classnames";

import { useState, useEffect } from "react";
import "./RentalForm.scss";
import "../Button/Button.scss";
import Button from "../Button";
import AvailableListBikes from "../AvailableListBikes";
import { getBikes, addBike, deleteBike } from "../../api/apiBikes";

export default function RentalForm({ onSubmit }) {
  const [bikeName, setbikeName] = useState("");
  const [bikeType, setBikeType] = useState("Road");
  const [rentPrice, setRentPrice] = useState(0);
  // const [bikeList, setBikeList] = useState([]);

  // useEffect(() => {
  //   getBikes().then(({ payload }) => setBikeList(payload));
  // }, []);

  const handleInputName = (e) => setbikeName(e.target.value);
  const handleSelectType = (e) => setBikeType(e.target.value);
  const handleInputPrice = (e) => setRentPrice(e.target.value);

  const handleSubmitBike = async (e) => {
    e.preventDefault();

    const bike = {
      bikeName,
      bikeType,
      rentPrice,
    };
    await onSubmit(bike);
    // await addBike(bike).then((data) => setBikeList((prev) => [...prev, data]));

    // await addBike(bike);
    // await getBikes().then(({ payload }) => setBikeList(payload));
    setbikeName("");
    setRentPrice(0);
  };

  return (
    <>
      <h2 className="form-rental-title">Create new rent</h2>
      <div className="form-wrapper">
        <form className="form-rental" onSubmit={handleSubmitBike}>
          <label className="form-label-name">
            Bike name
            <input
              id="bike-name-id"
              type="text"
              value={bikeName}
              onChange={handleInputName}
            />
          </label>
          <label className="form-label-type">
            Bike type
            <select
              className="select-type"
              id="bike-type-id"
              name="bike-type"
              onChange={handleSelectType}
            >
              <option value="Road">Road</option>
              <option value="Mountain">Mountain</option>
              <option value="BMX">BMX</option>
              <option value="Touring">Touring</option>
              <option value="Folding">Folding</option>
              <option value="Cruiser">Cruiser</option>
            </select>
          </label>
          <label className="form-label-price">
            Rent Price
            <input
              className="input-price"
              id="bike-price-id"
              type="number"
              step="10"
              min="0"
              value={rentPrice}
              onChange={handleInputPrice}
            />
          </label>
          <Button
            type="submit"
            className={classNames("button", "button-submit")}
          >
            Submit rent
          </Button>
        </form>
      </div>
    </>
  );
}
