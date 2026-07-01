import { useState } from "react";
import "../Styles/SearchLandingPage.css";
import { destinations } from "../data/destinations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";

function SearchLandingPage({isLoggedIn, setIsLoggedIn, setCurrentPage, searchData, setSelectedDestination,}) {

  /*-------------------------------*/ 
  /*--------Search bar-------------*/ 
  /*-------------------------------*/ 
  const [searchedCity, setSearchedCity] = useState(searchData.city);
  const [searchedGuestCount, setSearchedGuestCount] = useState(searchData.guests);

  function handleSearch(city, guests) {
    setSearchedCity(city);
    setSearchedGuestCount(guests);
  }

  /*-------------------------------*/ 
  /*--------Filter Options---------*/ 
  /*-------------------------------*/ 
  const [maxPrice, setMaxPrice] = useState(250);
  const [selectedRatings, setSelectedRatings] = useState([1, 2, 3, 4, 5]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const allAmenities = ["Free Wi-Fi", "Breakfast", "Kitchen", "Air Conditioning", "Gym", "Balcony"];
  const [sortOption, setSortOption] = useState("recommended");

  function toggleRating(rating) {
    if (selectedRatings.includes(rating)) { 
      setSelectedRatings(selectedRatings.filter((item) => item !== rating)); 
    } else { 
      setSelectedRatings([...selectedRatings, rating]); 
    }
  }

  function toggleAmenity(amenity) {
    if (selectedAmenities.includes(amenity)) { 
      setSelectedAmenities(selectedAmenities.filter((item) => item !== amenity)); 
    } else { 
      setSelectedAmenities([...selectedAmenities, amenity]); 
    }
  }

  /*-------------------------------*/ 
  /*--------Filter Results---------*/ 
  /*-------------------------------*/ 
  const filteredDestinations = destinations.filter((destination) => { 
    const matchesCity = destination.city.toLowerCase() === searchedCity.toLowerCase();
    const hasRoomForGuests = destination.rooms.some((room) => room.maxGuests >= searchedGuestCount);
    const matchesPrice = destination.pricePerNight <= maxPrice;  
    const matchesRating = selectedRatings.includes(destination.rating);
    const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every((amenity) => destination.amenities.includes(amenity));
    
    return matchesCity && hasRoomForGuests && matchesPrice && matchesRating && matchesAmenities;
  });

  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortOption === "priceLow") { return a.pricePerNight - b.pricePerNight; }
    if (sortOption === "priceHigh") { return b.pricePerNight - a.pricePerNight; }
    if (sortOption === "ratingHigh") { return b.rating - a.rating; }
    return 0;
  });


  /*-------------------------------*/ 
  /*--------Destination Cards-------------*/ 
  /*-------------------------------*/ 
  function toggleFavorite(destination) {
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = stored.some(fav => fav.id === destination.id);
  let updated;
  if (exists) { updated = stored.filter(fav => fav.id !== destination.id); } 
  else { updated = [...stored, destination]; }
  localStorage.setItem("favorites", JSON.stringify(updated));
  }

  function openDestination(destination) {
  console.log("Clicked destination:", destination);
  setSelectedDestination(destination);
  setCurrentPage("destination");
  }


  /*-------------------------------*/ 
  /*--------Location Data----------*/ 
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
  
  const matchedCity = Object.keys(cityHeroInfo).find((city) => city.toLowerCase() === searchedCity.toLowerCase()) || "London";
  const currentHero = cityHeroInfo[matchedCity] || cityHeroInfo.London;

  return (
    <div className="search-page">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/>

      <header className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${currentHero.image})` }}>
        <div className="heroText">
          <h1>{currentHero.title}</h1>
          <p>{currentHero.text}</p>
        </div>
        <SearchBar startCity={searchedCity} startGuests={searchedGuestCount} onSearch={handleSearch}/>
      </header>

      <main className="content">
        <aside className="sidebar">
          <div className="mapBox">
            <p>Map preview</p>
            <button className="button button-primary">View on Google Maps</button>
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
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars}>
                <input 
                  type="checkbox" 
                  checked={selectedRatings.includes(stars)} 
                  onChange={() => toggleRating(stars)}
                />
                {"⭐".repeat(stars)}
              </label>
            ))}

            <h4>Amenities</h4>
            {allAmenities.map((amenity) => (
              <label key={amenity}>
                <input 
                  type="checkbox" 
                  checked={selectedAmenities.includes(amenity)} 
                  onChange={() => toggleAmenity(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>
        </aside>

        <section className="results">

          <div className="resultsHeader">
            <h2>{filteredDestinations.length} places to stay in {matchedCity}</h2>
            <select className="sortDropdown" value={sortOption} onChange={(event) => setSortOption(event.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="ratingHigh">Rating: High to Low</option>
            </select>
          </div>

          {sortedDestinations.length === 0 ? (
            <p className="no-results">No places match your filters. Try adjusting your search!</p>
             ) : (
            sortedDestinations.map((destination) => (

            <article className="hotelCard" key={destination.id}>

            <img src={destination.image} alt={destination.name} loading="lazy" onClick={() => openDestination(destination)} style={{ cursor: "pointer" }}/>

            <div className="hotelInfo">
              <h3 onClick={() => openDestination(destination)} style={{ cursor: "pointer" }}>{destination.name}</h3>
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
              <small>Free cancellation</small>
              <button onClick={() => toggleFavorite(destination)}>❤️ Save</button>
            </div>
            
            </article>
                  ))
               )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchLandingPage;