import { useState } from 'react';
import "../Styles/DestinationsPage.css";
import { destinations } from "../data/destinations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from '../Components/SearchBar';
import "../Styles/buttons.css";
import "../Styles/global.css";

export default function DestinationsPage({ setCurrentPage, name, image, city,
  country, longDescription, rating, pricePerNight, amenities/*, rooms*/ }) {
  return (
    <>
    <Header setCurrentPage={setCurrentPage} />
      <div style={{backgroundColor: "orange" }}>
        <div className="hero">
        </div>
      </div>

      <section id="next-steps">
        <div id="docs" style={{backgroundColor: "lightblue"}}>
          <div style={{backgroundColor: "blue", alignContent: "center", textAlign: "left", height: "200px", paddingLeft: 20, color: "white"}}>
            { `${name} in ${city}, ${country} ` }({"⭐".repeat(rating)})<br/>
            { `$${pricePerNight} per night` }
          </div>
        </div>
        <div style={{flex: "1 1 0", flexDirection: "column"}}>
          { image != null ? <img src={image} width="auto" height="auto" /> : "NO IMAGE" }
{/*       longDescription={selectedDestination.longDescription}
          shortDescription={selectedDestination.shortDescription}
          rating={selectedDestination.rating}
          pricePerNight={selectedDestination.pricePerNight}
          amenities={selectedDestination.amenities}
*/}
          <div>
            <h2>DESCRIPTION</h2>
            {longDescription}
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}