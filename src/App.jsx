import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  if (isLoggedIn) {
    return <SearchLandingPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "signup") {
    return <SignupPage setCurrentPage={setCurrentPage} />;
  }

  return (
    <LoginPage
      setIsLoggedIn={setIsLoggedIn}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;

