import "./RentalListBikes.scss";
import RentalListItemBikes from "./RentalListItemBikes";

export default function RentalListBikes({ bikes }) {
  const filteredAvailableBikes = bikes.filter(({ isRented }) => isRented);

  return (
    <section className="rental-section">
      <h2 className="rental-section-title">Your rent</h2>
      <ul>
        {filteredAvailableBikes.length === 0 ? (
          <p>No rented bicycles</p>
        ) : (
          filteredAvailableBikes.map(
            ({ _id, bikeName, bikeType, rentPrice }) => (
              <RentalListItemBikes
                key={_id}
                id={_id}
                name={bikeName}
                type={bikeType}
                price={rentPrice}
              />
            )
          )
        )}
        {}
      </ul>
    </section>
  );
}
