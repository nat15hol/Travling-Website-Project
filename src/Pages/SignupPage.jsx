import { useState } from "react";
import "../Styles/Auth.css";
import "../Styles/buttons.css";
import "../Styles/global.css";

export default function SignupPage({ setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSignup() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const newUser = {
    username,
    email,
    password
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created!");
  setCurrentPage("login"); // valfritt men bra UX
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
            onChange={(e) => setEmail(e.target.value)}
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

          <button className="button-primary" onClick={handleSignup}>
            Create Account
          </button>
          <button className="button-primary" onClick={() => setCurrentPage("login")}>
            Back to Login
          </button>

        </div>

      </header>
    </div>
  );
}