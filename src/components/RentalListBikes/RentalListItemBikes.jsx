import Button from "../Button/";
import "./RentalListBikes.scss";
import classNames from "classnames";

export default function RentalListItemBikes({ id, name, type, price }) {
  return (
    <li className="rental-list-item">
      <p className="rental-bike-data">
        {name} / {type} / ${price}
      </p>
    </li>
  );
}
