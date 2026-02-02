import RentalItem from "./RentalItem";

export default function RentalHistory({ rentals }) {
  return (
    <section className="rental-history">
      <div className="rental-header">
        <h2>Rental History 🎲</h2>
        <input
          type="search"
          placeholder="Search rentals..."
          className="search-input"
        />
      </div>

      <div className="rental-list">
        {rentals.map((rental) => (
          <RentalItem key={rental.id} rental={rental} />
        ))}
      </div>
    </section>
  );
}
