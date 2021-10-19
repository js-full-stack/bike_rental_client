import "./RentalListBikes.scss";
import RentalListItemBikes from "./RentalListItemBikes";

export default function RentalListBikes({ bikes, onUpdate }) {
  const filteredAvailableBikes = bikes.filter(({ isRented }) => isRented);

  return (
    <section className="rental-section">
      <h2 className="rental-section-title">
        Your rent({filteredAvailableBikes.length})
      </h2>
      <ul className="rental-list">
        {filteredAvailableBikes.length === 0 ? (
          <p>No rented bicycles</p>
        ) : (
          filteredAvailableBikes.map(
            ({ _id, bikeName, bikeType, rentPrice, updatedAt, isRented }) => (
              <RentalListItemBikes
                key={_id}
                id={_id}
                name={bikeName}
                type={bikeType}
                price={rentPrice}
                onUpdate={onUpdate}
                updatedAt={updatedAt}
                isRented={isRented}
              />
            )
          )
        )}
      </ul>
    </section>
  );
}
