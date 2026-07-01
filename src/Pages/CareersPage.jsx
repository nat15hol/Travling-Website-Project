import { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../Styles/CareersPage.css";

function CareersPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className="careersPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            <main className="careersContainer">

                <h1>Careers at Wanderlust</h1>

                <p className="intro">
                    At Wanderlust, we're passionate about creating unforgettable
                    travel experiences. We're always looking for talented,
                    motivated, and creative people who share our passion for
                    travel and innovation.
                </p>

                <section className="careerCard">

                    <h2>Why Join Wanderlust?</h2>

                    <p>
                        We believe that great ideas come from great people. Our
                        team works in a collaborative environment where
                        creativity, learning, and professional growth are
                        encouraged every day.
                    </p>

                </section>

                <section className="careerCard">

                    <h2>Current Opportunities</h2>

                    <ul>
                        <li>Travel Consultant</li>
                        <li>Customer Support Specialist</li>
                        <li>Front-End Web Developer</li>
                    </ul>

                </section>

                <section className="careerCard">

                    <h2>Our Values</h2>

                    <p>
                        We value teamwork, honesty, innovation, diversity, and
                        excellent customer service. Every employee contributes
                        to creating memorable experiences for our travelers.
                    </p>

                </section>

                <section className="careerCard">

                    <h2>How to Apply</h2>

                    <p>
                        Interested in joining our team? Send your CV and cover
                        letter to:
                    </p>

                    <p>
                        <strong>careers@wanderlust.com</strong>
                    </p>

                    <p>
                        We review applications throughout the year and will
                        contact suitable candidates when opportunities become
                        available.
                    </p>

                </section>

            </main>

            <Footer setCurrentPage={setCurrentPage} />

        </div>

    );
}

export default CareersPage;