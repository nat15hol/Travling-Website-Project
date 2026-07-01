import "../Styles/AboutPage.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { useEffect } from "react";

function AboutPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="aboutPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            <section className="aboutHero">

                <h1>About Wanderlust</h1>

                <p>
                    At Wanderlust, we believe that every journey should be
                    exciting, simple, and unforgettable. Our goal is to connect
                    travelers with amazing destinations while making travel
                    planning easy and enjoyable.
                </p>

            </section>

            <section className="aboutSection">

                <h2>Our Story</h2>

                <p>
                    Wanderlust was created to help people discover incredible
                    places around the world without the stress of complicated
                    planning. Whether you're dreaming of relaxing on a tropical
                    beach, exploring historic cities, or experiencing new
                    cultures, we aim to inspire your next adventure.
                </p>

                <p>
                    Our platform brings together carefully selected
                    destinations, helpful travel information, and an easy search
                    experience so you can spend more time enjoying your trip and
                    less time planning it.
                </p>

            </section>

            <section className="aboutSection">

                <h2>Why Choose Wanderlust?</h2>

                <div className="featuresGrid">

                    <div className="featureCard">
                        <h3>🌍 Worldwide Destinations</h3>
                        <p>
                            Discover beautiful places from every corner of the
                            globe.
                        </p>
                    </div>

                    <div className="featureCard">
                        <h3>💰 Great Value</h3>
                        <p>
                            Explore destinations with competitive prices and
                            excellent value.
                        </p>
                    </div>

                    <div className="featureCard">
                        <h3>⭐ Trusted Experiences</h3>
                        <p>
                            Browse destinations chosen for their quality and
                            popularity among travelers.
                        </p>
                    </div>

                    <div className="featureCard">
                        <h3>🔒 Safe & Secure</h3>
                        <p>
                            We focus on providing a reliable and secure travel
                            experience.
                        </p>
                    </div>

                </div>

            </section>

            <section className="aboutSection">

                <h2>Our Mission</h2>

                <p>
                    Our mission is to inspire people to explore the world,
                    experience different cultures, and create unforgettable
                    memories. We are committed to making travel accessible,
                    enjoyable, and stress-free for everyone.
                </p>

            </section>

            <Footer setCurrentPage={setCurrentPage} />

        </div>
    );
}

export default AboutPage;