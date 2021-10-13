import classNames from "classnames";

import { useState } from "react";
import "./RentalForm.scss";

import Button from "../Button";

export default function RentalForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [rentData, setRentData] = useState([]);

  const handleInputName = (e) => setName(e.target.value);
  const handleInputPrice = (e) => setPrice(e.target.value);

  const handleSubmitRent = (e) => {
    e.preventDefault();
    const bike = {
      name,
      price,
    };
    setRentData((prev) => [...prev, bike]);
  };

  return (
    <>
      <form className="form-rental" onSubmit={handleSubmitRent}>
        <label htmlFor="bike-name-id" className="form-label">
          Bike name
          <input
            id="bike-name-id"
            type="text"
            value={name}
            onChange={handleInputName}
          />
        </label>
        <label className="form-label" htmlFor="bike-type-id">
          Bike type
          <select id="bike-type-id" form name="bike-type">
            <option value="Road">Road</option>
            <option value="Mount">Mount</option>
            <option value="BMX">BMX</option>
          </select>
        </label>
        <label className="form-label" htmlFor="bike=price-id">
          Rent Price
          <input
            id="bike-price-id"
            type="number"
            step="10"
            value={price}
            onChange={handleInputPrice}
          />
        </label>
        <Button type="submit" className="button-submit">
          Submit rent
        </Button>
      </form>
    </>
  );
}
