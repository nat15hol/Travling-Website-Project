import { useState } from "react";
import "../Styles/SearchLandingPage.css";
import { destinations } from "../data/destinations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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

  /*-------------------------------*/ 
  /*--------Location Data-------------*/ 
  /*-------------------------------*/ 
  const cityHeroInfo = {
  London: {
    title: "London, United Kingdom",
    text: "Explore historic streets, world-class museums, lively markets and iconic landmarks.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  Paris: {
    title: "Paris, France",
    text: "Discover romantic streets, famous cafés, art museums and unforgettable city views.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  Rome: {
    title: "Rome, Italy",
    text: "Walk through ancient history, beautiful piazzas, classic architecture and Italian food culture.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
  },
  Barcelona: {
    title: "Barcelona, Spain",
    text: "Enjoy colorful architecture, beaches, tapas, nightlife and Mediterranean city life.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
  },
  };

  const currentHero = cityHeroInfo[searchedCity] || cityHeroInfo.London;

  return (

    <div className="search-page">

      <Header setCurrentPage={setCurrentPage} />

      <header className="hero" style=
      {{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${currentHero.image})`,}}>

      <div className="heroText">
        <h1>{currentHero.title}</h1>
        <p>{currentHero.text}</p>
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

      <Footer />

    </div>
  );
}

export default SearchLandingPage;