import { useState } from "react";

import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn, setCurrentPage }) {
  
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentPage("home");
  };

  return (
    <header className="mainHeader">
      <nav className="mainNavbar">
        <h2
          onClick={() => setCurrentPage("home")}
          style={{ cursor: "pointer" }}
        >
          ✈ Wanderlust
        </h2>

        <div className="headerLinks">
          {isLoggedIn ? (
            <>
              <button onClick={() => setCurrentPage("account")}>
                Access Account
              </button>

              <button onClick={handleSignOut}>
                Sign out
              </button>
            </>
          ) : (
            <button onClick={() => setCurrentPage("login")}>
              Sign in
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;