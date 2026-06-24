<<<<<<< HEAD
import SearchLandingPage from "./pages/SearchLandingPage";
import Login from "./Pages/Login";
=======
import SearchLandingPage from "./Pages/SearchLandingPage";
>>>>>>> e90e0f1384c00caf3662bb4b45d000b6116e6e60

function App() {
  const showLogin = true;

  return showLogin ? <Login /> : <SearchLandingPage />;
}

export default App;