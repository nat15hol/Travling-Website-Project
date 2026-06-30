import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/ConfirmationPage.css";

function ConfirmationPage({ setCurrentPage, selectedDestination }) {
  const destination = selectedDestination || {
    name: "Hotel Lumière Paris",
    city: "Paris",
    country: "France",
    rating: 4,
    pricePerNight: 156,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rooms: [{ type: "Standard Room" }],
  };

  return (
    <div className="confirmationPage">

      <Header setCurrentPage={setCurrentPage}/>

      <main className="confirmationContainer">

        <section className="confirmationCard">

          <div className="successIcon">✓</div>

          <h1>Booking Confirmed!</h1>
          <p className="confirmationText">Thank you for your reservation. Your booking has been successfully completed.</p>

          <img className="confirmationImage" src={destination.image} alt={destination.name}/>

          <div className="confirmationSummary">
            <h2>{destination.name}</h2>
            <p>📍 {destination.city}, {destination.country}</p>
            <p>{"⭐".repeat(destination.rating)}</p>

            <hr />

            <div className="summaryRow"><span>Room</span><strong>{destination.rooms[0].type}</strong></div>

            <div className="summaryRow"><span>Guests</span><strong>2</strong></div>

            <div className="summaryRow"><span>Price per night</span><strong>${destination.pricePerNight}</strong></div>

            <div className="summaryTotal"><span>Total</span><strong>${destination.pricePerNight}</strong></div>

          </div>

          <div className="confirmationButtons">

            <button className="button-primary" onClick={() => setCurrentPage("home")}>Back to Home</button>

            <button className="button-primary" onClick={() => setCurrentPage("search")}>View More Hotels</button>

          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ConfirmationPage;