import { useState } from "react";
import "../Styles/SearchLandingPage.css";
import { destinations } from "../data/destinations";

function SearchLandingPage() {

  function handleSearch() {
  setSearchedCity(searchText);
  setShowSuggestions(false);
  }

  const [searchText, setSearchText] = useState("London");
  const [searchedCity, setSearchedCity] = useState("London");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const availableCities = [...new Set(destinations.map((destination) => destination.city))];
  const filteredSuggestions = availableCities.filter((city) => city.toLowerCase().startsWith(searchText.toLowerCase()));
  const filteredDestinations = destinations.filter((destination) => destination.city.toLowerCase() === searchedCity.toLowerCase()
);

  return (
    <div className="search-page">

      <header className="hero">

        <nav className="navbar">
          <h2>✈ Wanderlust</h2>
          <button>Access Account</button>
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

        <div>
          <span>Nr. of ppl</span>
          <strong>2 guests</strong>
        </div>

        <button onClick={handleSearch}>Search →</button>
        </div>

      </header>

      

      <main className="content">
        <aside className="sidebar">
          <div className="mapBox">
            <p>Map preview</p>
            <button>View on Google Maps</button>
          </div>

          <div className="filters">
            <h3>Filter options</h3>

            <div className="priceFilter">
            <h4>Price range</h4>
            <p>Max price per night</p>
            <strong>$250</strong>

            <input
              type="range"
              min="50"
              max="500"
              defaultValue="250"
              className="priceSlider"
            />
            </div>

            <h4>Property type</h4>
            <label><input type="checkbox" /> Hotels</label>
            <label><input type="checkbox" /> Resorts</label>
            <label><input type="checkbox" /> Villas</label>
            <label><input type="checkbox" /> Apartments</label>

            <h4>Guest rating</h4>
            <label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label>
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label>
            <label><input type="checkbox" /> ⭐⭐⭐</label>

            <h4>Amenities</h4>
            <label><input type="checkbox" /> Free Wi-Fi</label>
            <label><input type="checkbox" /> Swimming Pool</label>
            <label><input type="checkbox" /> Breakfast Included</label>

            <button className="filterButton">Show results</button>
          </div>
        </aside>

        <section className="results">
          <div className="resultsHeader">
            <h2>{filteredDestinations.length} places to stay in {searchedCity}</h2>
            <button>Sort by: Recommended ˅</button>
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