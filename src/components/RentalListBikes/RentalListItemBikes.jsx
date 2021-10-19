import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import { useStopwatch } from "react-timer-hook";

import moment from "moment";
import Moment from "react-moment";
import Modal from "../Modal";
import Button from "../Button/";
import "./RentalListBikes.scss";
export default function RentalListItemBikes({
  id,
  name,
  type,
  price,
  onUpdate,
  updatedAt,
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const totalPriceRef = useRef(null);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setCurrentTime(new Date());
  }, [showModal, totalPriceRef]);

  const formattedRentalTime = moment(updatedAt);
  const formattedCurrentTime = moment(currentTime);

  const deltaTime = formattedCurrentTime.diff(formattedRentalTime);

  const hours = Math.floor(
    (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));

  const totalTimeRent = hours * 60 + mins;
  const totalPrice = ((price / 60) * totalTimeRent).toFixed(2);

  return (
    <li className="rental-list-item">
      <p className="rental-bike-data">
        {name} / {type} / ${price}
      </p>
      <>
        <span>Start rent: </span>
        <Moment format="HH:mm">{updatedAt}</Moment>
      </>

      <Button
        className={classNames("button button-cancel-rent")}
        onClick={() => {
          toggleModal();
        }}
      >
        Count price
      </Button>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <button onClick={() => onUpdate(id)} type="button">
            Stop Rent
          </button>
          <button type="button" onClick={toggleModal}>
            Continue Rent
          </button>
          <span>Time passed:</span>
          <Moment
            element="span"
            format="HH:mm:ss"
            durationFromNow
            interval="1000"
          >
            {updatedAt}
          </Moment>
          <br />
          <span>Total price: ${totalPrice}</span>
        </Modal>
      )}
    </li>
  );
}
