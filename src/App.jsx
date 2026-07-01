import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchLandingPage from "./Pages/SearchLandingPage";
import HomePage from "./Pages/homePage";
import AccessAccountPage from "./Pages/AccessAccountPage";
import FavoritePage from "./Pages/FavoritePage";

import DestinationsPage from "./Pages/DestinationsPage";

//Added the import of About Page
import AboutPage from "./Pages/AboutPage";

//Added the import of Contact Page
import ContactPage from "./Pages/ContactPage";

// Added the import of Help Page
import HelpCenterPage from "./Pages/HelpCenterPage";

// Added the import of Terms Page
import TermsPage from "./Pages/TermsPage";

// Added the import of Privacy Page
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";

// Added the import of Careers Page
import CareersPage from "./Pages/CareersPage";


import BookingPage from "./Pages/BookingPage";
import ConfirmationPage from "./Pages/ConfirmationPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [searchData, setSearchData] = useState({
    city: "London",
    guests: 2,
    checkInDate: null,
    checkOutDate: null,
  });

  // const [selectedDestination, setSelectedDestination] = useState({
  // name: "[Hotel]",
  // image: null,
  // city: "[City]",
  // country: "[Country]",
  // longDescription: null,
  // rating: 0,
  // pricePerNight: "N/A",
  // amenities: null
  // });
  const [selectedDestination, setSelectedDestination] = useState(null);

  switch (currentPage) {
    case "home":
      return (
        <HomePage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          setSearchData={setSearchData}
          setSelectedDestination={setSelectedDestination}
        />
      );

    case "search":
      return (
        <SearchLandingPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          searchData={searchData}
          setSelectedDestination={setSelectedDestination}
        />
      );



    case "destination":
      return (
        <DestinationsPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          name={selectedDestination.name}
          image={selectedDestination.image}
          city={selectedDestination.city}
          country={selectedDestination.country}
          longDescription={selectedDestination.longDescription}
          rating={selectedDestination.rating}
          pricePerNight={selectedDestination.pricePerNight}
          amenities={selectedDestination.amenities}
          rooms={selectedDestination.rooms}
        />
      );
    
    case "booking":
      return (
        <BookingPage
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
        />
      );
      
    case "confirmation":
      return (
        <ConfirmationPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          selectedDestination={selectedDestination}
        />
      );
    
    case "login":
      return (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    case "signup":
      return <SignupPage setCurrentPage={setCurrentPage} />;

    case "account":
      return (
        <AccessAccountPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );
    // Added the case for About Page
    case "about":
      return (
        <AboutPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    //Added the case for Contact Page
    case "contact":
      return (
        <ContactPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );
    //Added the case for Contact Page

    case "help":
      return (
        <HelpCenterPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    //Added the case for Terms Page
    case "terms":
      return (
        <TermsPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    //Added the case for Terms Page
    case "privacy":
      return (
        <PrivacyPolicyPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );

    //Added the case for Careers Page

    case "careers":
      return (
        <CareersPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      );


case "favorites":
  return (
    <FavoritePage
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setCurrentPage={setCurrentPage}
      setSelectedDestination={setSelectedDestination}
    />
  );

    default:
      return (
        <HomePage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          setSearchData={setSearchData}
          setSelectedDestination={setSelectedDestination}
        />
      );
  }
}

export default App;

