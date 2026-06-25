import { useState } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SearchLandingPage from "./Pages/SearchLandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <SearchLandingPage />;
  }

  return <Login setIsLoggedIn={setIsLoggedIn} />;
}

export default App;

