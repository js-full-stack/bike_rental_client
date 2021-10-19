import Button from "../Button/";
import "./AvailableListBikes.scss";
import classNames from "classnames";

export default function AvailableListItemBikes({
  id,
  name,
  type,
  price,
  onRemove,
  onUpdate,
}) {
  return (
    <li className="available-list-item">
      <p className="available-bike-data">
        {name} / {type} / ${price}
      </p>

      <div className="available-buttons-wrapper">
        <Button
          onClick={() => onUpdate(id)}
          className={classNames("button button-rent")}
        >
          Rent
        </Button>
        <Button
          onClick={() => onRemove(id)}
          className={classNames("button button-delete")}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
