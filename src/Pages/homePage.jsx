import { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "../Styles/homepage.css";

import { destinations } from "../data/destinations";

import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";


function HomePage({
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage,
  setSearchData,
}) {
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

        <Header
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setCurrentPage={setCurrentPage}
        />
            {/* HERO SECTION */}
            <header className="hero">

                <div className="heroContent">

                    {/*---This is the New Search bar---*/}
                    <SearchBar onSearch={(city, guests, checkInDate, checkOutDate) => 
                    { setSearchData({city: city, guests: guests, checkInDate: checkInDate, checkOutDate: checkOutDate, });
                    setCurrentPage("search");}}
                    />

                </div>
            </header>

            {/* RECOMMENDED DESTINATIONS */}

            <section className="destinationSection">
                <h2>Recommended Destinations</h2>

                <div className="cardContainer">
                    {destinations.slice(0, 5).map((destination) => (
                        <div
                            className="destinationCard"
                            key={destination.id}
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="destinationImage"
                            />

                            <div className="cardContent">

                                <h3>{destination.name}</h3>

                                <p className="location">
                                    📍 {destination.city}, {destination.country}
                                </p>

                                <p className="rating">
                                    {"⭐".repeat(destination.rating)}
                                </p>

                                <p className="description">
                                    {destination.shortDescription}
                                </p>

                                <p className="price">
                                    From <strong>${destination.pricePerNight}</strong>/night
                                </p>

                                <div className="cardFooter">
                                    <button className="viewBtn">
                                        View
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* POPULAR DESTINATIONS */}

            <section className="destinationSection">
                <h2>Popular Destinations</h2>

                <div className="cardContainer">
                    {destinations.slice(6, 11).map((destination) => (
                        <div
                            className="destinationCard"
                            key={destination.id}
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="destinationImage"
                            />

                            <div className="cardContent">
                                <h3>{destination.name}</h3>

                                <p className="location">
                                    📍 {destination.city}, {destination.country}
                                </p>

                                <p className="rating">
                                    {"⭐".repeat(destination.rating)}
                                </p>

                                <p className="description">
                                    {destination.shortDescription}
                                </p>

                                <p className="price">
                                    From <strong>${destination.pricePerNight}</strong>/night
                                </p>

                                <div className="cardFooter">
                                    <button className="viewBtn">
                                        View
                                    </button>
                                </div>
                            </div>
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