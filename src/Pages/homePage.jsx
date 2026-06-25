import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/homepage.css";



function HomePage() {
    const [showGuests, setShowGuests] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const [isCheckInOpen, setIsCheckInOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = () => {
            setShowGuests(false);
            setIsCheckInOpen(false);
            setIsCheckOutOpen(false);
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);




    return (
        <div className="homepage">
            {/* HERO SECTION */}
            <header className="hero">
                <nav className="navbar">
                    <div className="logo">✈ Wanderlust</div>

                    <ul className="navLinks">
                        <li>Home</li>
                        <li>Search</li>
                        <li>Destinations</li>
                        <li>My Account</li>
                        <li>Sign Up</li>
                    </ul>

                    <button className="accountBtn">
                        Access Account
                    </button>
                </nav>

                <div className="heroContent">

                    <div className="searchOptions">

                        <div className="dateSelector">

                            <div
                                className="dateBox"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    setIsCheckInOpen(!isCheckInOpen);
                                    setIsCheckOutOpen(false);
                                    setShowGuests(false);
                                }}
                            >
                                {checkInDate
                                    ? checkInDate.toLocaleDateString()
                                    : "Check In ▼"}
                            </div>

                            {isCheckInOpen && (
                                <div
                                    className="calendarDropdown"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <DatePicker
                                        selected={checkInDate}
                                        onChange={(date) => {
                                            setCheckInDate(date);
                                            setIsCheckInOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>

                        <div className="dateSelector">

                            <div
                                className="dateBox"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    setIsCheckOutOpen(!isCheckOutOpen);
                                    setIsCheckInOpen(false);
                                    setShowGuests(false);
                                }}
                            >
                                {checkOutDate
                                    ? checkOutDate.toLocaleDateString()
                                    : "Check Out ▼"}
                            </div>

                            {isCheckOutOpen && (
                                <div
                                    className="calendarDropdown"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <DatePicker
                                        selected={checkOutDate}
                                        minDate={checkInDate}
                                        onChange={(date) => {
                                            setCheckOutDate(date);
                                            setIsCheckOutOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>



                        <div className="guestSelector">
                            <div
                                className="guestDisplay"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    setShowGuests(!showGuests);
                                    setIsCheckInOpen(false);
                                    setIsCheckOutOpen(false);
                                }}
                            >
                                {adults === 0 && children === 0
                                    ? "Guests ▼"
                                    : `${adults} Adult${adults !== 1 ? "s" : ""}${children > 0
                                        ? `, ${children} Child${children !== 1 ? "ren" : ""
                                        }`
                                        : ""
                                    } ▼`}
                            </div>

                            {showGuests && (
                                <div
                                    className="guestDropdown"
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    <div className="guestRow">
                                        <strong>Adults</strong>

                                        <div className="counter">
                                            <button
                                                onClick={() =>
                                                    setAdults(Math.max(0, adults - 1))
                                                }
                                            >
                                                -
                                            </button>

                                            <span>{adults}</span>

                                            <button
                                                onClick={() =>
                                                    setAdults(adults + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="guestRow">
                                        <strong>Children</strong>

                                        <div className="counter">
                                            <button
                                                onClick={() =>
                                                    setChildren(
                                                        Math.max(0, children - 1)
                                                    )
                                                }
                                            >
                                                -
                                            </button>

                                            <span>{children}</span>

                                            <button
                                                onClick={() =>
                                                    setChildren(children + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        className="doneBtn"
                                        onClick={() =>
                                            setShowGuests(false)
                                        }
                                    >
                                        Done
                                    </button>

                                </div>
                            )}
                        </div>

                    </div>

                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Where are you going?"
                        />

                        <button>Search</button>
                    </div>

                </div>
            </header>

            {/* RECOMMENDED DESTINATIONS */}

            <section className="destinationSection">
                <h2>Recommended Destinations</h2>

                <div className="cardContainer">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            className="destinationCard"
                            key={item}
                        >
                            <div className="imagePlaceholder">
                                Image
                            </div>

                            <h3>Destination Name</h3>

                            <p>
                                Short destination description
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* POPULAR DESTINATIONS */}

            <section className="destinationSection">
                <h2>Popular Destinations</h2>

                <div className="cardContainer">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            className="destinationCard"
                            key={item}
                        >
                            <div className="imagePlaceholder">
                                Image
                            </div>

                            <h3>Destination Name</h3>

                            <p>
                                Short destination description
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}

            <footer className="footer">
                <div>
                    <h3>Wanderlust</h3>
                    <p>Explore. Dream. Discover.</p>
                </div>

                <div>
                    <h4>Explore</h4>
                    <p>Destinations</p>
                    <p>Hotels</p>
                    <p>Flights</p>
                </div>

                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p>Help Center</p>
                    <p>Privacy Policy</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;