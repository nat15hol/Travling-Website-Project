import { useState } from 'react';
import "../Styles/DestinationsPage.css";
import { destinations } from "../data/destinations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function DestinationsPage({ isLoggedIn,  setIsLoggedIn, setCurrentPage, name, image, city,
  country, longDescription, rating, pricePerNight, amenities/*, rooms*/ }) {
  return (
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/>

      <div style={{backgroundColor: "orange" }}>
        <div className="hero">
        </div>
      </div>

      <section id="next-steps">
        <div id="docs" style={{backgroundColor: "lightblue"}}>
          <div style={{backgroundColor: "blue", alignContent: "center", textAlign: "left", height: "200px", paddingLeft: 20, color: "white"}}>
            <p>{name} in {city}, {country} ({"⭐".repeat(rating)})</p>
            <p><br/>Room(s):<br/>{rooms[0].type}, {rooms[0].available} available, up to {rooms[0].maxGuests} guest(s)</p>
            { rooms[1] ? <p>{rooms[1].type}, {rooms[1].available} available, up to {rooms[1].maxGuests} guest(s)</p> : null }
            <p><br/>${pricePerNight} per night</p>
            <p><br/>Amenities: {amenities.join(" · ")}</p>
          </div>
        </div>
        <div>
          {/*
          <a href="https://picsum.photos/200/300" target="_blank">
  <img src="https://picsum.photos/200/300" width="200" height="300"/>
</a>
           */}
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

            <br/>
            <br/>

            <button onClick={() => {if (isLoggedIn) {setCurrentPage("booking");} else {setCurrentPage("login");}}}>Book Now</button>

          </div>

          
        </div>

      </section>
      <Footer />
    </>
  );
}