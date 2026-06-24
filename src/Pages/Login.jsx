import { useState } from "react";
export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
  if (setIsLoggedIn) {
    setIsLoggedIn(true);
  }
  }

  return (
    <div className="search-page">

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

          <button onClick={handleLogin}>
            Log in
          </button>

        </div>

      </header>

    </div>
  );
}