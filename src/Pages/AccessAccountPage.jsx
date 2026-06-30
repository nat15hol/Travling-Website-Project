import { useState, useEffect } from "react";
import "../Styles/AccessAccountPage.css";
// Importera även css för favoriter om det behövs (eller slå ihop dem)
// import "../Styles/FavoritePage.css"; 
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AccessAccountPage({
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage,
  setSelectedDestination // Tillagd från FavoritePage för att hantera klick på favoriter
}) {
  // ==========================================
  // STATE & LOGIK FRÅN ACCESSACCOUNT-ORIGINAL
  // ==========================================
  const [currentUser, setCurrentUser] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const MIN_PASSWORD_LENGTH = 12;

  // ==========================================
  // STATE FRÅN FAVORITEPAGE
  // ==========================================
  const [favorites, setFavorites] = useState([]);

  // ==========================================
  // STATE FÖR FLIK-NAVIGERING (TABS)
  // ==========================================
  const [activeTab, setActiveTab] = useState("profile"); // "profile" eller "favorites"

  useEffect(() => {
    // Hämta profil-data
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
    }

    // Hämta favorit-data
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const sameAsOldPassword =
    currentUser?.password &&
    newPassword === currentUser.password;    

  const canSavePassword =
    newPassword.length >= 12 &&
    newPassword === confirmPassword &&
    !sameAsOldPassword;

  // =========================
  // PASSWORD VALIDATION
  // =========================
  function isPrefixMatch(a, b) {
    if (!a || !b) return false;
    return a.startsWith(b) || b.startsWith(a);
  }

  let passwordMessage = "";
  let passwordStatus = "";

  const isPrefix =
    newPassword.startsWith(confirmPassword) ||
    confirmPassword.startsWith(newPassword);

  if (newPassword.length === 0 && confirmPassword.length === 0) {
    passwordMessage = "";
    passwordStatus = "empty";
  } else if (newPassword.length < MIN_PASSWORD_LENGTH) {
    passwordMessage = "Password must be at least 12 characters";
    passwordStatus = "error";
  } else if (sameAsOldPassword) {
    passwordMessage = "Choose a new password — not the old one";
    passwordStatus = "error";
  } else if (confirmPassword.length === 0) {
    passwordMessage = "Password length accepted — please confirm as soon as you've choosen your password";
    passwordStatus = "warning";
  } else if (newPassword === confirmPassword) {
    passwordMessage = "Done! Your password is strong — press save to the right above to finalize";
    passwordStatus = "success";
  } else if (isPrefix) {
    passwordMessage = "So far correct — please complete the password confirmation";
    passwordStatus = "warning";
  } else {
    passwordMessage = "Passwords do not match! Please try again.";
    passwordStatus = "error";
  }

  const emailTaken =
    currentUser &&
    email !== currentUser.email &&
    users.some((u) => u.email === email);

  const canSaveProfile =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    !emailTaken;

  function handleSaveProfile() {
    if (!currentUser) return;

    const updatedUsers = users.map((u) =>
      u.username === currentUser.username
        ? { ...u, firstName, lastName, email }
        : u
    );

    const updatedUser = {
      ...currentUser,
      firstName,
      lastName,
      email
    };

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setCurrentUser(updatedUser);
    setEditName(false);
    setEditEmail(false);
  }

  function resetPasswordEdit() {
    setEditPassword(false);
    setNewPassword("");
    setConfirmPassword("");
  }

  function handlePasswordSave() {
    if (!canSavePassword) return;

    const updatedUsers = users.map((u) =>
      u.username === currentUser.username
        ? { ...u, password: newPassword }
        : u
    );

    const updatedUser = {
      ...currentUser,
      password: newPassword
    };

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setCurrentUser(updatedUser);
    resetPasswordEdit();
  }

  // ==========================================
  // FUNKTIONER FRÅN FAVORITEPAGE
  // ==========================================
  function removeFavorite(id) {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  function openDestination(item) {
    setSelectedDestination(item);
    setCurrentPage("destination");
  }

  // =========================
  // ROW COMPONENT STYLE
  // =========================
  const Row = ({ left, right, message }) => (
    <div className="account-row">
      <div className="account-row-top">
        <div className="account-left">{left}</div>
        <div className="account-right">{right}</div>
      </div>
      {message && <div className={`account-message ${passwordStatus}`}>{message}</div>}
    </div>
  );

  return (
    <div className="account-page">
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
      />

      <header className="hero">
        <div className="heroText">
          <h1>Account</h1>
          <p>Manage your profile and favorites</p>
        </div>
      </header>

      {/* FLIK-NAVIGERING (Inbäddad stil, flytta gärna till AccessAccountPage.css) */}
      <div className="account-tabs" style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "20px 0" }}>
        <button 
          onClick={() => setActiveTab("profile")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: activeTab === "profile" ? "bold" : "normal",
            borderBottom: activeTab === "profile" ? "2px solid black" : "none",
            background: "none",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none"
          }}
        >
          My Profile
        </button>
        <button 
          onClick={() => setActiveTab("favorites")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: activeTab === "favorites" ? "bold" : "normal",
            borderBottom: activeTab === "favorites" ? "2px solid black" : "none",
            background: "none",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none"
          }}
        >
          My Favorites ({favorites.length})
        </button>
      </div>

      <main className="account-content">
        
        {/* ==========================================
            VISAR PROFIL-SEKTIONEN (Om fliken är aktiv)
            ========================================== */}
        {activeTab === "profile" && (
          <>
            <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

            {/* NAME */}
            <div className="profile-row">
              {!editName ? (
                <div className="row-inline">
                  <p><strong>Name:</strong> {firstName} {lastName}</p>
                  <div className="button-inline">
                    <button onClick={() => setEditName(true)}>Edit</button>
                  </div>
                </div>
              ) : (
                <div className="row-inline">
                  <div className="inputs-inline">
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                  <div className="button-inline">
                    <button onClick={handleSaveProfile} disabled={!canSaveProfile}>Save</button>
                    <button onClick={() => setEditName(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </div>

            {/* EMAIL */}
            <div className="profile-row">
              {!editEmail ? (
                <div className="row-inline">
                  <p><strong>Email:</strong> {email}</p>
                  <div className="button-inline">
                    <button onClick={() => setEditEmail(true)}>Edit</button>
                  </div>
                </div>
              ) : (
                <div className="row-inline">
                  <div className="inputs-inline">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="button-inline">
                    <button onClick={handleSaveProfile}>Save</button>
                    <button onClick={() => setEditEmail(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </div>

            {/* PASSWORD */}
            <div className="profile-row">
              {!editPassword ? (
                <div className="row-inline">
                  <p><strong>Password:</strong> ************</p>
                  <div className="button-inline">
                    <button onClick={() => setEditPassword(true)}>Edit</button>
                  </div>
                </div>
              ) : (
                <div className="row-inline">
                  <div className="inputs-inline">
                    <input
                      type="password"
                      placeholder="New password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="button-inline">
                    <button onClick={handlePasswordSave} disabled={!canSavePassword}>Save</button>
                    <button onClick={resetPasswordEdit}>Cancel</button>
                  </div>
                </div>
              )}
              {editPassword && (
                <p className={`account-message ${passwordStatus}`}>{passwordMessage}</p>
              )}
            </div>
          </>
        )}

        {/* ==========================================
            VISAR FAVORIT-SEKTIONEN (Om fliken är aktiv)
            ========================================== */}
        {activeTab === "favorites" && (
          <div className="favorites-content" style={{ width: "100%" }}>
            <h2 style={{ marginBottom: "20px" }}>My Favorites</h2>

            {favorites.length === 0 ? (
              <p>No favorites yet ❤️</p>
            ) : (
              favorites.map((item) => (
                <article key={item.id} className="hotelCard">
                  <img
                    src={item.image}
                    alt={item.name}
                    onClick={() => openDestination(item)}
                    style={{ cursor: "pointer" }}
                  />

                  <div className="hotelInfo">
                    <h3>{item.name}</h3>
                    <p>📍 {item.city}, {item.country}</p>
                    <p>{item.rating} ⭐</p>
                    <p>{item.shortDescription}</p>
                    <p className="amenities">
                      {item.amenities?.join(" · ")}
                    </p>
                  </div>

                  <div className="priceBox">
                    <span>Price per night</span>
                    <h2>${item.pricePerNight}</h2>
                    <button onClick={() => openDestination(item)}>Book now</button>
                    <small>Free cancellation</small>
                    <button onClick={() => removeFavorite(item.id)}>Remove</button>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}