import { useState } from "react";
import "../Styles/Auth.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { login } from "../Services/authService";
export default function Login({ setIsLoggedIn, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

function handleLogin() {
  if (!username || !password) {
    alert("Please fill in both fields");
    return;
  }

  const user = login(username, password);

  if (!user) {
    alert("Wrong username or password");
    return;
  }

  setIsLoggedIn(true);
  setCurrentPage("home");
}

  return (
    <div className="search-page">
      <Header
        isLoggedIn={false}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
      />
      <header className="hero">

        <div className="auth-container">
          <h1>Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue</p>

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

<div className="button-row">
    <button className="button button-primary" onClick={handleLogin}>
    Log in
  </button>
  <button className="button button-secondary" onClick={() => setCurrentPage("signup")}>
    Create Account
  </button>


</div>

          </div>
          </div>
      </header>
      <Footer />
    </div>
  );
}