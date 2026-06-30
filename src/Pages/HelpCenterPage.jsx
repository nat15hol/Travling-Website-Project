import { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/HelpCenterPage.css";

function HelpCenterPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    return (
        <div className="helpPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            <main className="helpContainer">

                <h1>Help Center</h1>

                <p className="intro">
                    Welcome to the Wanderlust Help Center. Here you'll find answers to
                    some of the most common questions about using our website and booking
                    your next adventure.
                </p>

                <section className="helpCard">
                    <h2>How do I book a destination?</h2>

                    <p>
                        Browse our destinations, choose your preferred accommodation,
                        select your travel dates, and complete the booking process by
                        following the on-screen instructions.
                    </p>
                </section>

                <section className="helpCard">
                    <h2>Can I cancel my booking?</h2>

                    <p>
                        Many destinations offer free cancellation before a specified date.
                        Please check the cancellation policy shown during booking.
                    </p>
                </section>

                <section className="helpCard">
                    <h2>How can I contact customer support?</h2>

                    <p>
                        If you need assistance, visit our Contact page or email us at
                        support@wanderlust.com.
                    </p>
                </section>

                <section className="helpCard">
                    <h2>Is my payment secure?</h2>

                    <p>
                        Yes. Wanderlust uses secure payment processing to help protect your
                        personal information during every transaction.
                    </p>
                </section>

                <section className="helpCard">
                    <h2>Still need help?</h2>

                    <p>
                        Our support team is always happy to assist. If you cannot find the
                        answer you're looking for, please contact us and we'll respond as
                        soon as possible.
                    </p>
                </section>

            </main>

            <Footer setCurrentPage={setCurrentPage} />

        </div>
    );
}

export default HelpCenterPage;