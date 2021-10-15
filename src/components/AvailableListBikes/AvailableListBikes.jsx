import "./AvailableListBikes.scss";
import AvailableListItemBikes from "./AvailableListItemBikes";

export default function AvailableListBikes({ bikes, onRemove }) {
  const filteredAvailableBikes = bikes.filter(({ isRented }) => !isRented);
  const availableBikesCount = filteredAvailableBikes.length;
  return (
    <section>
      <h2 className="rental-section-title">
        Available bicycles ({availableBikesCount})
      </h2>
      <ul className="available-list">
        {filteredAvailableBikes.map(
          ({ _id, bikeName, bikeType, rentPrice }) => (
            <AvailableListItemBikes
              key={_id}
              id={_id}
              name={bikeName}
              type={bikeType}
              price={rentPrice}
              onRemove={onRemove}
            />
          )
        )}
      </ul>
    </section>
  );
}
