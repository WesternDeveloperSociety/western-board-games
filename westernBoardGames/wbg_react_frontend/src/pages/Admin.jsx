import data from "../data/adminDummyData.json";
import RentalHistory from "../components/RentalHistory";
import "../styles/AdminPage.css";

export default function AdminDashboard() {
  return (
    <>
      <main className="admin-container">
        <div className="admin-content">
          <div className="dashboard-layout">
            <RentalHistory rentals={data.rentals} />

            <section className="stats-grid">
              <div className="stat-card">
                <h1>{data.stats.gamesRentedOut}</h1>
                <p>Games rented out</p>
              </div>

              <div className="stat-card">
                <h1>{data.stats.gamesPastDue}</h1>
                <p>Games past due</p>
              </div>

              <div className="stat-card">
                <h1>{data.stats.gamesInCatalogue}</h1>
                <p>Games in catalogue</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
