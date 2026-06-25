import { useState } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SearchLandingPage from "./Pages/SearchLandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  if (isLoggedIn) {
    return <SearchLandingPage />;
  }

  if (currentPage === "signup") {
    return <Signup setCurrentPage={setCurrentPage} />;
  }

  return (
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;

