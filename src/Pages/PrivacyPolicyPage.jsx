import { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../Styles/PrivacyPolicyPage.css";

function PrivacyPolicyPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className="privacyPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            <main className="privacyContainer">

                <h1>Privacy Policy</h1>

                <p className="intro">
                    At Wanderlust, we value your privacy and are committed to
                    protecting your personal information. This Privacy Policy
                    explains how we collect, use, and safeguard your data while
                    you use our website.
                </p>

                <section className="privacyCard">

                    <h2>Information We Collect</h2>

                    <p>
                        We may collect personal information such as your name,
                        email address, booking details, and contact information
                        when you use our services.
                    </p>

                </section>

                <section className="privacyCard">

                    <h2>How We Use Your Information</h2>

                    <p>
                        Your information helps us process bookings, improve our
                        services, provide customer support, and communicate
                        important updates regarding your reservations.
                    </p>

                </section>

                <section className="privacyCard">

                    <h2>Data Security</h2>

                    <p>
                        We take appropriate security measures to help protect
                        your personal information against unauthorized access,
                        alteration, disclosure, or destruction.
                    </p>

                </section>

                <section className="privacyCard">

                    <h2>Third-Party Services</h2>

                    <p>
                        Some services, such as payment processing, may be
                        provided by trusted third-party partners. These services
                        operate under their own privacy policies.
                    </p>

                </section>

                <section className="privacyCard">

                    <h2>Your Rights</h2>

                    <p>
                        You may request access to, correction of, or deletion of
                        your personal information by contacting our support
                        team.
                    </p>

                </section>

            </main>

            <Footer setCurrentPage={setCurrentPage} />

        </div>

    );
}

export default PrivacyPolicyPage;