import { useState, useEffect } from "react";
import "../Styles/AccessAccountPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AccessAccountPage({
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage
}) {
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return;

    setCurrentUser(user);
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setEmail(user.email || "");
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

// 1. Båda tomma
if (newPassword.length === 0 && confirmPassword.length === 0) {
  passwordMessage = "";
  passwordStatus = "empty";

// 2. För kort lösenord
} else if (newPassword.length < MIN_PASSWORD_LENGTH) {
  passwordMessage = "Password must be at least 12 characters";
  passwordStatus = "error";

// 3. Samma som gamla lösenordet
} else if (sameAsOldPassword) {
  passwordMessage = "Choose a new password — not the old one";
  passwordStatus = "error";

// 4. Första rutan klar, andra tom
} else if (confirmPassword.length === 0) {
  passwordMessage = "Password length accepted — please confirm as soon as you've choosen your password";
  passwordStatus = "warning";

// 5. Exakt match
} else if (newPassword === confirmPassword) {
  passwordMessage =
    "Done! Your password is strong — press save to the right above to finalize";
  passwordStatus = "success";

// 6. Den ena är fortfarande bara en början av den andra
} else if (isPrefix) {
  passwordMessage =
    "So far correct — please complete the password confirmation";
  passwordStatus = "warning";

// 7. De skiljer sig åt
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

  // =========================
  // ROW COMPONENT STYLE (logiskt samma layout överallt)
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
          <p>Manage your profile and bookings</p>
        </div>
      </header>

      <main className="account-content">

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
    <>
      <div className="row-inline">
        <div className="inputs-inline">
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="button-inline">
          <button 
  onClick={handleSaveProfile}
  disabled={!canSaveProfile}
>
  Save
</button>
          <button onClick={() => setEditName(false)}>Cancel</button>
        </div>
      </div>
    </>
  )}

  {/* message ALWAYS under row */}
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
        {/* PASSWORD */}
<div className="profile-row">
  {!editPassword ? (
    <div className="row-inline">
      <p><strong>Password:</strong> ************</p>

      <div className="button-inline">
        <button onClick={() => setEditPassword(true)}>
          Edit
        </button>
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
        <button 
  onClick={handlePasswordSave}
  disabled={!canSavePassword}
>
  Save
</button>
        <button onClick={resetPasswordEdit}>Cancel</button>
      </div>
    </div>
  )}

  {/* message ALWAYS under the row */}
  {editPassword && (

    <p className={`account-message ${passwordStatus}`}>
  {passwordMessage}
</p>
  )}
</div>

      </main>

      <Footer />
    </div>
  );
}