import classNames from "classnames";
import moment from "moment";
import Moment from "react-moment";

import Button from "../Button/";
import Timer from "../Timer";
import "./RentalListBikes.scss";
import { useRef, useEffect, useState } from "react";
export default function RentalListItemBikes({
  id,
  name,
  type,
  price,
  onUpdate,
  updatedAt,
  isRented,
}) {
  console.log("updateAt", updatedAt);
  return (
    <li className="rental-list-item">
      <p className="rental-bike-data">
        {name} / {type} / ${price}
      </p>
      {isRented && (
        <>
          <span>Start rent: </span>
          <Moment format={"HH:mm"}>{updatedAt}</Moment>
        </>
      )}

      <Button
        className={classNames("button button-cancel-rent")}
        onClick={() => onUpdate(id)}
      >
        Cancel rent
      </Button>
    </li>
  );
}
