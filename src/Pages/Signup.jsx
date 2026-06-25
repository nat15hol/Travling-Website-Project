import { useState } from "react";
import "../Styles/Auth.css";

export default function Signup({ setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSignup() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      username,
      JSON.stringify({ password })
    );

    alert("Account created!");
  }

  return (
    <div className="search-page">
      <header className="hero">

        <nav className="navbar">
          <h2>✈ Wanderlust</h2>
        </nav>

        <div className="heroText">
          <h1>Create Account</h1>
          <p>Sign up to start exploring destinations</p>
        </div>

        <div className="loginBox">

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button onClick={() => setCurrentPage("signup")}>
            Create Account
          </button>
          <button onClick={() => setCurrentPage("login")}>
  Back to Login
</button>

        </div>

      </header>
    </div>
  );
}