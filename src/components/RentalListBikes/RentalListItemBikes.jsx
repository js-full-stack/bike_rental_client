import classNames from "classnames";
import { useState, useEffect } from "react";
import getTotalPrice from "../../utils/calculatePrice";
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
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const totalPrice = getTotalPrice(updatedAt, currentTime, price);

  useEffect(() => {
    setCurrentTime(new Date());
  }, [showModal]);

  return (
    <li className="rental-list-item">
      <p className="rental-bike-data">
        {name} / {type} / ${price}
      </p>
      <>
        <span className="start-rent-capture">Start rent: </span>
        <span className="start-rent-time">
          <Moment format="DD, MMMM YYYY, HH:mm:ss">{updatedAt}</Moment>
        </span>
      </>

      <Button
        className={classNames("button button-count-rent")}
        onClick={toggleModal}
      >
        Count price
      </Button>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <div className="time-rent-block">
            <span className="passed-time-capture">Time passed:</span>
            <span className="passed-time-display">
              <Moment format="DD:HH:mm:ss" durationFromNow interval="1000">
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
