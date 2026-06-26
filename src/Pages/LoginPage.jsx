import { useState } from "react";
import "../Styles/buttons.css";
import "../Styles/global.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function Login({ setIsLoggedIn, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

function handleLogin() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const match = users.find(
    (u) => u.username === username && u.password === password
  );

  if (match) {
    setIsLoggedIn(true);
    setCurrentPage("home"); // om ni har en sån
  } else {
    alert("Wrong username or password");
  }
}

  return (
    <div className="search-page">
      <Header setCurrentPage={setCurrentPage} />
      <header className="hero">

        <nav className="navbar">
          <h2>✈ Wanderlust</h2>
        </nav>

        <div className="heroText">
          <h1>Welcome back</h1>
          <p>Please log in to continue</p>
        </div>

        <div className="loginBox">

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button-primary" onClick={handleLogin}>
            Log in
          </button>

          <p>
  New user?
</p>

<button className="button-primary"onClick={() => setCurrentPage("signup")}>
  Create Account
</button>

        </div>

      </header>
      <Footer />
    </div>
  );
}