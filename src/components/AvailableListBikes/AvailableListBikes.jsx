import Button from "../Button/";
import "./AvailableListBikes.scss";
import classNames from "classnames";
export default function AvailableListBikes({ bikeList, onRemove }) {
  const filteredAvailableBikes = bikeList.filter(({ isRented }) => !isRented);
  const availableBikesCount = filteredAvailableBikes.length;
  return (
    <>
      <h2 className="available-section-title">
        Available bicycles ({availableBikesCount})
      </h2>
      <ul className="available-list">
        {filteredAvailableBikes.map(
          ({ _id, bikeName, bikeType, rentPrice }) => (
            <li className="available-list-item" key={_id}>
              <p
                className="available-bike-data
"
              >
                {bikeName} / {bikeType} / ${rentPrice}
              </p>

              <div className="available-buttons-wrapper">
                <Button className={classNames("button button-rent")}>
                  Rent
                </Button>
                <Button
                  onClick={() => onRemove(_id)}
                  className={classNames("button button-delete")}
                >
                  Delete
                </Button>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
}
