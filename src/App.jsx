
import SearchLandingPage from "./pages/SearchLandingPage";
import Login from "./Pages/Login";


function App() {
  const showLogin = true;

  return showLogin ? <Login /> : <SearchLandingPage />;
}

export default App;