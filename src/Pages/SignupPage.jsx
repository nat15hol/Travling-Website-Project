import { useState } from "react";
import { signup, getUsers } from "../Services/authService";
import "../Styles/Auth.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PasswordStatus from "../Components/PasswordStatus";

export default function SignupPage({ setCurrentPage }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const users = getUsers();

  // 🔥 ENKELT: bara basic enable/disable
  const canSubmit =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  function handleSignup() {
    const result = signup({
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    });

    if (!result.ok) {
      alert(result.error);
      return;
    }

    setCurrentPage("login");
  }

  return (
    <div className="search-page">
      <Header setCurrentPage={setCurrentPage} />

      <header className="hero">
        <div className="auth-container">
          <h1>Create Account</h1>
          <p className="auth-subtitle">
            Sign up to start exploring destinations
          </p>
        </div>

        <div className="loginBox">
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

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

          <PasswordStatus
            password={password}
            confirmPassword={confirmPassword}
            username={username}
            email={email}
            users={users}
          />

          <div className="button-row">
            <button
              className="button button-primary"
              onClick={handleSignup}
              disabled={!canSubmit}
            >
              Create Account
            </button>

            <button
              className="button button-secondary"
              onClick={() => setCurrentPage("login")}
            >
              Back to Login
            </button>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}