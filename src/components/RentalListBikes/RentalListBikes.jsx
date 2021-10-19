import "./RentalListBikes.scss";
import RentalListItemBikes from "./RentalListItemBikes";

export default function RentalListBikes({ bikes, onUpdate }) {
  const filteredRentedBikes = bikes.filter(({ isRented }) => isRented);

  return (
    <section className="rental-section">
      <h2 className="rental-section-title">
        Your rent({filteredRentedBikes.length})
      </h2>
      <ul className="rental-list">
        {filteredRentedBikes.length === 0 ? (
          <p>No rented bicycles</p>
        ) : (
          filteredRentedBikes.map(
            ({ _id, bikeName, bikeType, rentPrice, updatedAt }) => (
              <RentalListItemBikes
                key={_id}
                id={_id}
                name={bikeName}
                type={bikeType}
                price={rentPrice}
                onUpdate={onUpdate}
                updatedAt={updatedAt}
              />
            )
          )
        )}
      </ul>
    </section>
  );
}
