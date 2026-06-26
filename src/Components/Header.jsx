import { useState } from "react";
import "./Header.css";

function Header({ setCurrentPage }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="mainHeader">
      <nav className="mainNavbar">
        <h2>✈ Wanderlust</h2> {/* Här skall en link till home page vara i framtiden */}

        <div className="headerLinks">
          {isLoggedIn ? (
            <button onClick={() => setCurrentPage("account")}>Access Account</button>
          ) : (
            <>
              <button onClick={() => setCurrentPage("login")}>Sign in</button>

              <button onClick={() => setCurrentPage("signup")}>Register</button>
            </>
          )}

          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Test Login Toggle</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;