export default function RentalItem({ rental }) {
  const isOverdue = rental.status === "overdue";

  return (
    <div className="rental-item">
      <img src={rental.image} alt={rental.game} />

      <div className="rental-info">
        <h2>{rental.game}</h2>
        <p>Borrowed by: {rental.borrower}</p>
        <p>Due on: {new Date(rental.dueDate).toLocaleDateString()}</p>
      </div>

      <div className={`rental-status ${isOverdue ? "overdue" : ""}`}>
        <h2>
          {isOverdue
            ? rental.daysOverdue
            : rental.daysRemaining}
        </h2>
        <p>
          {isOverdue ? "Days overdue" : "Days remaining"}
        </p>
      </div>
    </div>
  );
}
