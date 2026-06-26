import { useState } from "react";

import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn, setCurrentPage }) {
  
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentPage("home"); // Skickar användaren till hemisdan vid utloggning
  };

  return (
    <header className="mainHeader">
      <nav className="mainNavbar">
        <h2 onClick={() => setCurrentPage("home")} style={{ cursor: 'pointer' }}>
          ✈ Wanderlust
        </h2>

        <div className="headerLinks">
          {isLoggedIn ? (
            <>
              <button onClick={() => setCurrentPage("account")}>Access Account</button>
              <button onClick={handleSignOut}>Sign out</button>
            </>
          ) : (
            /* Ändrat här så att den nu navigerar till "login" */
            <button onClick={() => setCurrentPage("login")}>Sign in</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;