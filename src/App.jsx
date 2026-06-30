import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import HomePage from "./Pages/homePage";
import AccessAccountPage from "./Pages/AccessAccountPage";
import FavoritePage from "./Pages/FavoritePage";

import DestinationsPage from "./Pages/DestinationsPage";
import BookingPage from "./Pages/BookingPage";
import ConfirmationPage from "./Pages/ConfirmationPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [searchData, setSearchData] = useState({
    city: "London",
    guests: 2,
    checkInDate: null,
    checkOutDate: null,
  });

  const [selectedDestination, setSelectedDestination] = useState({
    name: "[Hotel]",
    image: null,
    city: "[City]",
    country: "[Country]",
    longDescription: null,
    rating: 0, pricePerNight: "N/A",
    amenities: null/*, rooms: null */
  });

  switch (currentPage) {
    case "home":
      return (
        <HomePage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          setSearchData={setSearchData}
          setSelectedDestination={setSelectedDestination}
        />
      );

    case "search":
      return (
        <SearchLandingPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          searchData={searchData}
        />
      );

    case "destination":
      return (
        <DestinationsPage
          setCurrentPage={setCurrentPage}
          name={selectedDestination.name}
          image={selectedDestination.image}
          city={selectedDestination.city}
          country={selectedDestination.country}
          longDescription={selectedDestination.longDescription}
          rating={selectedDestination.rating}
          pricePerNight={selectedDestination.pricePerNight}
          amenities={selectedDestination.amenities}
        />
      );
    
    case "booking":
      return (
        <BookingPage
        setCurrentPage={setCurrentPage}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
        />
      );
      
    case "confirmation":
      return (
        <ConfirmationPage
          setCurrentPage={setCurrentPage}
          selectedDestination={null}
        />
      );
    
    case "login":
      return (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    case "signup":
      return <SignupPage setCurrentPage={setCurrentPage} />;

    case "account":
      return (
        <AccessAccountPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

case "favorites":
  return (
    <FavoritePage
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setCurrentPage={setCurrentPage}
      setSelectedDestination={setSelectedDestination}
    />
  );

    default:
      return (
        <HomePage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          setSearchData={setSearchData}
          setSelectedDestination={setSelectedDestination}
        />
      );
  }
}

export default App;

