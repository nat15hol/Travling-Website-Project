import { useState } from "react";
import "../Styles/SearchLandingPage.css";
import { destinations } from "../data/destinations";
import "../Styles/buttons.css";
import "../Styles/global.css";

function SearchLandingPage({ setCurrentPage }) {

  /*-------------------------------*/ 
  /*--------Search bar-------------*/ 
  /*-------------------------------*/ 
  const [searchText, setSearchText] = useState("London");
  const [searchedCity, setSearchedCity] = useState("London");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const availableCities = [...new Set(destinations.map((destination) => destination.city))];
  const filteredSuggestions = availableCities.filter((city) => city.toLowerCase().startsWith(searchText.toLowerCase()));

  const [guestCount, setGuestCount] = useState(2);
  const [searchedGuestCount, setSearchedGuestCount] = useState(2);

  function handleSearch() { setSearchedCity(searchText); setShowSuggestions(false); setSearchedGuestCount(guestCount); }

  /*-------------------------------*/ 
  /*--------Filter Options-------------*/ 
  /*-------------------------------*/ 
  const [maxPrice, setMaxPrice] = useState(250);
  const [searchedMaxPrice, setSearchedMaxPrice] = useState(250);

  const [selectedRatings, setSelectedRatings] = useState([1, 2, 3, 4, 5]);
  const [searchedRatings, setSearchedRatings] = useState([1, 2, 3, 4, 5]);

  const allAmenities = ["Free Wi-Fi", "Breakfast", "Kitchen", "Air Conditioning", "Gym", "Balcony",];
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [searchedAmenities, setSearchedAmenities] = useState([]);

  function toggleRating(rating) {
  if (selectedRatings.includes(rating)) { setSelectedRatings(selectedRatings.filter((item) => item !== rating)); } 
  else { setSelectedRatings([...selectedRatings, rating]); }
  }

  function toggleAmenity(amenity) {
  if (selectedAmenities.includes(amenity)) { setSelectedAmenities( selectedAmenities.filter((item) => item !== amenity)); } 
  else { setSelectedAmenities([...selectedAmenities, amenity]) }
  }

  function handleFilterResults() { 
    setSearchedMaxPrice(maxPrice); 
    setSearchedRatings(selectedRatings); 
    setSearchedAmenities(selectedAmenities); 
  }

  /*-------------------------------*/ 
  /*--------Filter Results-------------*/ 
  /*-------------------------------*/ 
  const filteredDestinations = destinations.filter((destination) => 
    { const matchesCity = destination.city.toLowerCase() === searchedCity.toLowerCase();
    const hasRoomForGuests = destination.rooms.some((room) => room.maxGuests >= searchedGuestCount);
    const matchesPrice = destination.pricePerNight <= searchedMaxPrice;  
    const matchesRating = searchedRatings.includes(destination.rating);
    const matchesAmenities = searchedAmenities.length === 0 || searchedAmenities.every((amenity) => destination.amenities.includes(amenity));
    return matchesCity && hasRoomForGuests && matchesPrice && matchesRating && matchesAmenities;
  });

  return (

    <div className="search-page">

      <header className="hero">

        <nav className="navbar">
          <h2>✈ Wanderlust</h2>

          <button className="button-primary" onClick={() => {
            console.log("clicked");
            setCurrentPage("login");
          }}>
            Access Account
          </button>
          
        </nav>

        <div className="heroText">
          <h1>Bali, Indonesia</h1>
          <p>Discover tropical paradise with stunning beaches, rich culture, and unforgettable experiences.</p>
        </div>

        <div className="searchBox">

        <div className="destinationSearch">
          <span>Destination</span>

          <input
          type="text"
          value={searchText}
          onChange={(event) => {setSearchText(event.target.value); setShowSuggestions(true);}}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(event) => { if (event.key === "Enter") { handleSearch(); }}}
          placeholder="Search city..."
          />

          {showSuggestions && searchText && filteredSuggestions.length > 0 && (
          <div className="suggestions">
          {filteredSuggestions.map((city) => (
          <button key={city} type="button" onClick={() => { setSearchText(city); setSearchedCity(city); setShowSuggestions(false); }}>
          {city}
          </button>
          ))}
          </div>
          )}

        </div>

        <div>
          <span>Check in</span>
          <strong>May 20, 2025</strong>
        </div>

        <div>
          <span>Check out</span>
          <strong>May 24, 2025</strong>
        </div>

        <div className="guestSelector">

        <span>Nr. of ppl</span>
        <button type="button" onClick={() => setGuestCount(Math.max(1, guestCount - 1))}>-</button>
        <strong>{guestCount} guests</strong>
        <button type="button" onClick={() => setGuestCount(guestCount + 1)}>+</button>

        </div>

        <button className="button-primary" onClick={handleSearch}>Search →</button>
        </div>

      </header>

      <main className="content">
        <aside className="sidebar">
          <div className="mapBox">
            <p>Map preview</p>
            <button className="button-primary">View on Google Maps</button>
          </div>

          <div className="filters">

            <h3>Filter options</h3>

            <div className="priceFilter">
            <h4>Price range</h4>
            <p>Max price per night</p>
            <strong>${maxPrice}</strong>

            <input
              type="range"
              min="50"
              max="500"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="priceSlider"
            />
            </div>

            <h4>Property type</h4>
            <label><input type="checkbox" /> Hotels</label>
            <label><input type="checkbox" /> Resorts</label>
            <label><input type="checkbox" /> Villas</label>
            <label><input type="checkbox" /> Apartments</label>

            <h4>Guest rating</h4>
            <label><input type="checkbox" checked={selectedRatings.includes(5)} onChange={() => toggleRating(5)}/>⭐⭐⭐⭐⭐</label>
            <label><input type="checkbox" checked={selectedRatings.includes(4)} onChange={() => toggleRating(4)}/>⭐⭐⭐⭐</label>
            <label><input type="checkbox" checked={selectedRatings.includes(3)} onChange={() => toggleRating(3)}/>⭐⭐⭐</label>
            <label><input type="checkbox" checked={selectedRatings.includes(2)} onChange={() => toggleRating(2)}/>⭐⭐</label>
            <label><input type="checkbox" checked={selectedRatings.includes(1)} onChange={() => toggleRating(1)}/>⭐</label>

            <h4>Amenities</h4>
            {allAmenities.map((amenity) => (
              <label key={amenity}>
                <input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => toggleAmenity(amenity)}/>
                {amenity}
              </label>
            ))}

            <button className="filterButton" onClick={handleFilterResults}>Show results</button>

<<<<<<< HEAD
            <button className="button-primary">Show results</button>
=======
>>>>>>> 94533c24bbed49d65a66b533e7ebae6885e03ff6
          </div>
        </aside>

        <section className="results">
          <div className="resultsHeader">
            <h2>{filteredDestinations.length} places to stay in {searchedCity}</h2>
            <button className="button-primary">Sort by: Recommended ˅</button>
          </div>

          {filteredDestinations.map((destination) => (
            <article className="hotelCard" key={destination.id}>
            <img src={destination.image} alt={destination.name} />

            <div className="hotelInfo">
              <h3>{destination.name}</h3>
              <p>📍 {destination.city}, {destination.country}</p>
              <p>{destination.rating} ⭐ <span>({destination.rooms.length} room types)</span></p>
              <p>{destination.shortDescription}</p>
              <p className="amenities">
                {destination.amenities.join(" · ")}
              </p>
            </div>

            <div className="priceBox">
              <span>Price per night</span>
              <h2>${destination.pricePerNight}</h2>
              <button>Book now</button>
              <small>Free cancellation</small>
            </div>
            
            </article>
                  ))}
        </section>
      </main>

    </div>
  );
}

export default SearchLandingPage;