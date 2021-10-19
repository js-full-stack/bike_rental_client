import classNames from "classnames";
import { useState, useEffect, useRef } from "react";

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

  function getTotalPrice() {
    const formattedRentalTime = moment(updatedAt);
    const formattedCurrentTime = moment(currentTime);

    const deltaTime = formattedCurrentTime.diff(formattedRentalTime);

    const hours = Math.floor(
      (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));

    const totalTimeRent = hours * 60 + mins;
    const totalPrice = ((price / 60) * totalTimeRent).toFixed(2);
    return totalPrice;
  }

  const totalPrice = getTotalPrice();

  return (
    <li className="rental-list-item">
      <p className="rental-bike-data">
        {name} / {type} / ${price}
      </p>
      <>
        <span className="start-rent-capture">Start rent: </span>
        <span className="start-rent-time">
          <Moment format="HH:mm">{updatedAt}</Moment>
        </span>
      </>

      <Button
        className={classNames("button button-count-rent")}
        onClick={() => {
          toggleModal();
        }}
      >
        Count price
      </Button>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <div className="time-rent-block">
            <span className="passed-time-capture">Time passed:</span>
            <span className="passed-time-display">
              <Moment format="HH:mm:ss" durationFromNow interval="1000">
                {updatedAt}
              </Moment>
            </span>
          </div>
          <div className="count-price-block">
            <span className="total-price-capture">Total price:</span>
            <span className="total-price-count">${totalPrice}</span>
          </div>

          <div className="buttons-block">
            <Button
              className={classNames("button button-continue-rent")}
              type="button"
              onClick={toggleModal}
            >
              Continue Rent
            </Button>
            <Button
              onClick={() => onUpdate(id)}
              type="button"
              className={classNames("button button-stop-rent")}
            >
              Stop Rent
            </Button>
          </div>
        </Modal>
      )}
    </li>
  );
}
