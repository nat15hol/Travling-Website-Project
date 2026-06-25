
import SearchLandingPage from "./pages/SearchLandingPage";
import Login from "./Pages/Login";


function App() {
  const showLogin = false;

  return showLogin ? <Login /> : <SearchLandingPage />;
}

export default App;