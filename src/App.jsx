import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import DestinationsPage from "./Pages/DestinationsPage";
import HomePage from "./Pages/homePage";
//Frans: Import the new booking and confirmation pages, and alsoa dded search data functionality for the search bar
import BookingPage from "./Pages/BookingPage";
import ConfirmationPage from "./Pages/ConfirmationPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [searchData, setSearchData] = useState({ city: "London", guests: 2,checkInDate: null, checkOutDate: null,});
  const [selectedDestination, setSelectedDestination] = useState(null);

  // 1. Skydda sidor (t.ex. skicka oinloggade till login om de försöker nå "search")
  if (!isLoggedIn && (currentPage === "search" || currentPage === "home")) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
  }

  //Frans: New pages added
  if (currentPage === "search") { return <SearchLandingPage setCurrentPage={setCurrentPage} searchData={searchData} />; }
  if (currentPage === "booking") { return (<BookingPage setCurrentPage={setCurrentPage} selectedDestination={selectedDestination}/>); }
  if (currentPage === "confirmation") { return (<ConfirmationPage setCurrentPage={setCurrentPage} selectedDestination={selectedDestination}/>  );
}

  return <HomePage setCurrentPage={setCurrentPage} setSearchData={setSearchData}/>;

}

export default App;

