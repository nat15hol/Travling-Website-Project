import { useEffect, useState } from "react";

import "../Styles/ContactPage.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ContactPage({
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [confirmation, setConfirmation] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            subject.trim() === "" ||
            message.trim() === ""
        ) {
            setConfirmation("Please fill in all fields.");
            return;
        }

        setConfirmation("✅ Thank you! Your message has been sent successfully.");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }



    return (
        <div className="contactPage">

            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentPage={setCurrentPage}
            />

            {/* Hero Section */}

            <section className="contactHero">

                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you. Whether you have a question,
                    need assistance, or simply want to share your travel
                    experience, our team is here to help.
                </p>

            </section>

            {/* Contact Information */}

            <section className="contactSection">

                <h2>Get in Touch</h2>

                <div className="contactGrid">

                    <div className="contactCard">

                        <h3>📍 Office Address</h3>

                        <p>
                            Wanderlust Travel Ltd.<br />
                            221 Explorer Street<br />
                            Stockholm 111 20<br />
                            Sweden
                        </p>

                    </div>

                    <div className="contactCard">

                        <h3>📞 Phone</h3>

                        <p>+46 8 123 456 78</p>

                        <p>Monday – Friday</p>

                        <p>09:00 – 18:00</p>

                    </div>

                    <div className="contactCard">

                        <h3>✉ Email</h3>

                        <p>support@wanderlust.com</p>

                        <p>bookings@wanderlust.com</p>

                    </div>

                    <div className="contactCard">

                        <h3>🕒 Business Hours</h3>

                        <p>Monday – Friday</p>

                        <p>09:00 – 18:00</p>

                        <p>Saturday: 10:00 – 15:00</p>

                        <p>Sunday: Closed</p>

                    </div>

                </div>

            </section>

            {/* Contact Form */}

            <section className="contactSection">

                <h2>Send Us a Message</h2>

                <form className="contactForm" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <textarea
                        rows="6"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                    {confirmation && (
                        <p className="confirmationMessage">
                            {confirmation}
                        </p>
                    )}

                </form>

            </section>

            <Footer setCurrentPage={setCurrentPage} />

        </div>
    );
}

export default ContactPage;