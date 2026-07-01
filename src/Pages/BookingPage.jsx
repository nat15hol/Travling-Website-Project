import { useState } from "react";
import "../Styles/BookingPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BookingPage({ isLoggedIn, setIsLoggedIn, setCurrentPage, selectedDestination, setSelectedDestination }) {

  /*Använd "selectedDestination" om det finns, annars använd placeholder*/
  const destination = selectedDestination || {
    name: "Hotel Lumière Paris",
    city: "Paris",
    country: "France",
    rating: 4,
    pricePerNight: 156,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    shortDescription: "Stylish hotel close to classic Paris landmarks.",
    longDescription:
      "A comfortable city hotel with elegant rooms, easy access to cafés, museums and famous Paris attractions.",
    amenities: ["Free Wi-Fi", "Breakfast"],
    rooms: [
      { type: "Standard Room", available: 6, maxGuests: 2 },
      { type: "Family Room", available: 2, maxGuests: 4 },
    ],
  };

  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
});

const [errorMessage, setErrorMessage] = useState("");

function updateFormData(fieldName, value) { setFormData({ ...formData, [fieldName]: value, }); }

function handleConfirmBooking() {

  if (formData.firstName.trim() === "") { setErrorMessage("Please enter your first name."); return; }
  if (formData.lastName.trim() === "") { setErrorMessage("Please enter your last name."); return; }
  if (formData.email.trim() === "") { setErrorMessage("Please enter your email."); return; }
  if (formData.phone.trim() === "") { setErrorMessage("Please enter your phone number."); return; }
  if (formData.address.trim() === "") { setErrorMessage("Please enter your address."); return; }
  if (formData.cardNumber.trim() === "") { setErrorMessage("Please enter your card number."); return; }
  if (formData.expiryDate.trim() === "") { setErrorMessage("Please enter the card expiry date."); return; }
  if (formData.cvv.trim() === "") { setErrorMessage("Please enter the CVV."); return; }

  setErrorMessage("");
  /* setSelectedDestination kan tas bort i framtiden, då det skall egentilgen sättas på destination page */
  setSelectedDestination(destination);
  setCurrentPage("confirmation");
}

  return (
    <div className="bookingPage">
      
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/>

      <main className="bookingContainer">

        <section className="bookingLeftColumn">
          <img className="bookingImage" src={destination.image} alt={destination.name}/>

          <div className="bookingSummary">
            <h2>{destination.name}</h2>
            <p>📍 {destination.city}, {destination.country}</p>
            <p>{"⭐".repeat(destination.rating)}</p>
            <p>{destination.shortDescription}</p>

            <hr/>

            <h3>Booking Summary</h3>
            <p>Price per night: <strong>${destination.pricePerNight}</strong></p>
            <p>Room: {destination.rooms[0].type}</p>
            <p>Guests: 2</p>
            <p className="bookingTotal">Total: ${destination.pricePerNight}</p>
          </div>
        </section>

        <section className="bookingRightColumn">

          {/*---------------------------------*/}
          {/*--------- Guest Details----------*/}
          {/*---------------------------------*/}
          <div className="bookingCard">
            <h2>Guest Details</h2>

            <div className="formGrid">

              {/* Webbläsaren kollar på saker some Placeholder namnet, input type, och label */}
              {/* Och kan med den informationen gissa vad den behöver fylla i */}
              {/* Använd <input autoComplete="email"/> så behöver inte webbläsaren gissa vad som skall inputas */}
              {/* Jag satte manuellt autoComplete överallt, så att google chrome inte skulle auto-filla det */}

              <label>
                First Name<input type="text" placeholder="Enter first name" autoComplete="new-first-name"
                value={formData.firstName} onChange={(event) => updateFormData("firstName", event.target.value)}/>
              </label>

              <label>
                Last Name<input type="text" placeholder="Enter last name" autoComplete="new-last-name"
                value={formData.lastName} onChange={(event) => updateFormData("lastName", event.target.value)}/>
              </label>

              <label>
                Email<input type="text" placeholder="Enter email" autoComplete="new-email"
                value={formData.email} onChange={(event) => updateFormData("email", event.target.value)}/>
              </label>

              <label>
                Phone Number<input type="text" placeholder="Enter phone number" autoComplete="new-phone"
                value={formData.phone} onChange={(event) => updateFormData("phone", event.target.value)}/>
              </label>

              <label className="fullWidth">
                Address<input type="text" placeholder="Enter address" autoComplete="new-address"
                value={formData.address} onChange={(event) => updateFormData("address", event.target.value)}/>
              </label>

            </div>

          </div>

          {/*---------------------------------*/}
          {/*--------- Payment Details----------*/}
          {/*---------------------------------*/}
          <div className="bookingCard">
            <h2>Payment Details</h2>

            <div className="formGrid">

              <label className="fullWidth">
                Card Number<input type="text" placeholder="1234 5678 9012 3456"
                value={formData.cardNumber} onChange={(event) => updateFormData("cardNumber", event.target.value)}/>
              </label>

              <label>
                Expiry Date<input type="text" placeholder="MM/YY"
                value={formData.expiryDate} onChange={(event) => updateFormData("expiryDate", event.target.value)}/>
              </label>

              <label>
                CVV<input type="text" placeholder="123"
                value={formData.cvv} onChange={(event) => updateFormData("cvv", event.target.value)}/>
              </label>

              <label className="fullWidth">Special Requests<textarea placeholder="Write any special requests here..."/></label>

            </div>

            {errorMessage && ( <p className="bookingError">{errorMessage}</p> )}

            <button className="button-primary confirmBookingButton" onClick={handleConfirmBooking}>Confirm Booking</button>
         
          </div>

        </section>


      </main>

      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}

export default BookingPage;