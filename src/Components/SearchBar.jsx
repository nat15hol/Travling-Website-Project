import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBar.css";
import { destinations } from "../data/destinations";

function SearchBar({ onSearch, startCity = "London", startGuests = 2 }) {

  const [searchError, setSearchError] = useState("");
  const [searchText, setSearchText] = useState(startCity);
  const [guestCount, setGuestCount] = useState(startGuests);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const availableCities = [...new Set(destinations.map((d) => d.city))];

  const filteredSuggestions = availableCities.filter((city) => city.toLowerCase().startsWith(searchText.toLowerCase()));

  useEffect(() => {

    function handleClickOutside() {
      setShowSuggestions(false);
      setIsCheckInOpen(false);
      setIsCheckOutOpen(false);
    }

    document.addEventListener("click", handleClickOutside);

    return () => { document.removeEventListener("click", handleClickOutside); };
  }, []);

  function handleSearch() {

  const matchedCity = availableCities.find((city) => city.toLowerCase() === searchText.trim().toLowerCase());
  if (!matchedCity) { setSearchError("Please choose a valid destination."); setShowSuggestions(false); return; }
  setSearchError("");
  if (onSearch) { onSearch(matchedCity, guestCount, checkInDate, checkOutDate); }
  setShowSuggestions(false);

  }

  return (

    <div className="searchBox" onClick={(event) => event.stopPropagation()}>
      
      <div className="destinationSearch">
        <span>Destination</span>

        <input type="text" 
          value={searchText} onChange={(event) => { setSearchText(event.target.value); setShowSuggestions(true); }}
          onFocus={() => setShowSuggestions(true)} onKeyDown={(event) => {
            if (event.key === "Enter") { handleSearch(); } }} 
            placeholder="Search city..."
        />

        {showSuggestions && searchText && filteredSuggestions.length > 0 && (
          <div className="suggestions">
            {filteredSuggestions.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {
                  setSearchText(city);
                  setShowSuggestions(false);
                }}
              >
                {city}
              </button>
            ))}
          </div>
        )}

        {searchError && (<p className="searchError">{searchError}</p>)}  

      </div>

      <div className="dateSelector">
        <span>Check in</span>
        <strong
          onClick={() => {
            setIsCheckInOpen(!isCheckInOpen);
            setIsCheckOutOpen(false);
          }}
        >
          {checkInDate ? checkInDate.toLocaleDateString() : "Select date ▼"}
        </strong>

        {isCheckInOpen && (
          <div className="calendarDropdown">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                setIsCheckInOpen(false);
              }}
              inline
            />
          </div>
        )}
      </div>

      <div className="dateSelector">
        <span>Check out</span>
        <strong
          onClick={() => {
            setIsCheckOutOpen(!isCheckOutOpen);
            setIsCheckInOpen(false);
          }}
        >
          {checkOutDate ? checkOutDate.toLocaleDateString() : "Select date ▼"}
        </strong>

        {isCheckOutOpen && (
          <div className="calendarDropdown">
            <DatePicker
              selected={checkOutDate}
              minDate={checkInDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setIsCheckOutOpen(false);
              }}
              inline
            />
          </div>
        )}
      </div>

      <div className="guestSelector">
        <span>Nr. of ppl</span>
        <button type="button" onClick={() => setGuestCount(Math.max(1, guestCount - 1))}>
          -
        </button>
        <strong>{guestCount} guests</strong>
        <button type="button" onClick={() => setGuestCount(guestCount + 1)}>
          +
        </button>
      </div>

      <button className="button-primary" onClick={handleSearch}>Search →</button>

    </div>
  );
}

export default SearchBar;