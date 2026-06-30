import { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/TermsPage.css";

function TermsPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="termsPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            <main className="termsContainer">

                <h1>Terms of Service</h1>

                <p className="intro">
                    By using Wanderlust, you agree to the following terms and conditions.
                    Please read them carefully before using our services.
                </p>

                <section className="termsCard">
                    <h2>Bookings</h2>

                    <p>
                        All bookings are subject to availability. Prices and availability
                        may change without prior notice until a reservation has been
                        confirmed.
                    </p>
                </section>

                <section className="termsCard">
                    <h2>User Responsibilities</h2>

                    <p>
                        Users are responsible for providing accurate personal information
                        and complying with all applicable travel regulations and local laws.
                    </p>
                </section>

                <section className="termsCard">
                    <h2>Payments</h2>

                    <p>
                        Payments are processed securely through trusted payment providers.
                        Wanderlust does not store your complete payment details.
                    </p>
                </section>

                <section className="termsCard">
                    <h2>Cancellation Policy</h2>

                    <p>
                        Cancellation policies vary depending on the destination and
                        accommodation. Please review the cancellation terms before
                        confirming your booking.
                    </p>
                </section>

                <section className="termsCard">
                    <h2>Changes to These Terms</h2>

                    <p>
                        Wanderlust reserves the right to update these Terms of Service at
                        any time. Continued use of the website indicates acceptance of any
                        future changes.
                    </p>
                </section>

            </main>

            <Footer setCurrentPage={setCurrentPage} />

        </div>
    );
}

export default TermsPage;