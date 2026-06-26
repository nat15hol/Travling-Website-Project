import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import DestinationsPage from "./Pages/DestinationsPage";
import HomePage from "./Pages/homePage";
// Importera dina komponenter här...

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [searchData, setSearchData] = useState({ city: "London", guests: 2, checkInDate: null, checkOutDate: null });

  // 1. Skydda sidor (t.ex. skicka oinloggade till login om de försöker nå "search")
  if (!isLoggedIn && (currentPage === "search" || currentPage === "home")) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
  }

  // 2. Hantera rendering baserat på currentPage
  switch (currentPage) {
    case "home":
      return <HomePage setCurrentPage={setCurrentPage} setSearchData={setSearchData} />;
    
    case "search":
      return <SearchLandingPage setCurrentPage={setCurrentPage} searchData={searchData} />;
    
    case "login":
      return <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
    
    case "signup":
      return <SignupPage setCurrentPage={setCurrentPage} />;
    
    default:
      return <HomePage setCurrentPage={setCurrentPage} setSearchData={setSearchData} />;
  }
}

export default App;

