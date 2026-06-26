import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import HomePage from "./Pages/homePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [searchData, setSearchData] = useState({ city: "London", guests: 2,checkInDate: null, checkOutDate: null,});

  if (!isLoggedIn) {
    if (currentPage === "signup") { return <SignupPage setCurrentPage={setCurrentPage} />; }

    return ( <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/> );
  }

  if (currentPage === "search") { return <SearchLandingPage setCurrentPage={setCurrentPage} searchData={searchData} />; }

  return <HomePage setCurrentPage={setCurrentPage} setSearchData={setSearchData}/>;
}

export default App;

