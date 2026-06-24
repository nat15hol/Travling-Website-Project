import { useState } from "react";
import Login from "./Pages/Login";
import SearchLandingPage from "./pages/SearchLandingPage";
import DestinationsPage from "./pages/DestinationsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <SearchLandingPage />
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;