import classNames from "classnames";
import { useState } from "react";
import { useMedia } from "react-use";

import "./RentalForm.scss";
import "../Button/Button.scss";
import Button from "../Button";
import Logo from "../../img/logo.png";
export default function RentalForm({ onSubmit }) {
  const [bikeName, setbikeName] = useState("");
  const [bikeType, setBikeType] = useState("Road");
  const [rentPrice, setRentPrice] = useState(0);

  const tabletMode = useMedia("(min-width: 768px)");

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

    setbikeName("");
    setRentPrice(0);
  };

  return (
    <>
      <div className="form-wrapper">
        <h2 className="form-rental-title">Create new rent</h2>

        <form className="form-rental" onSubmit={handleSubmitBike}>
          <label className="form-label-name">
            Bike name
            <input
              className="input-name"
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
