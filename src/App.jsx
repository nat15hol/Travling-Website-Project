import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import HomePage from "./Pages/homePage";
import BookingPage from "./Pages/BookingPage";
import ConfirmationPage from "./Pages/ConfirmationPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [searchData, setSearchData] = useState({ city: "London", guests: 2,checkInDate: null, checkOutDate: null,});
  const [selectedDestination, setSelectedDestination] = useState(null);

  if (!isLoggedIn) {
    if (currentPage === "signup") { return <SignupPage setCurrentPage={setCurrentPage} />; }

    return ( <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/> );
  }

  if (currentPage === "search") { return <SearchLandingPage setCurrentPage={setCurrentPage} searchData={searchData} />; }
  if (currentPage === "booking") { return (<BookingPage setCurrentPage={setCurrentPage} selectedDestination={selectedDestination}/>); }
  if (currentPage === "confirmation") { return (<ConfirmationPage setCurrentPage={setCurrentPage} selectedDestination={selectedDestination}/>  );
}

  return <HomePage setCurrentPage={setCurrentPage} setSearchData={setSearchData}/>;

}

export default App;

