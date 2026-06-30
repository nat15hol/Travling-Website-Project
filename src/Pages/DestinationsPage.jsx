import { useState } from 'react';
import "../Styles/DestinationsPage.css";
import { destinations } from "../data/destinations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from '../Components/SearchBar';
import "../Styles/buttons.css";
import "../Styles/global.css";

export default function DestinationsPage({ setCurrentPage, name, image, city, country }) {

  return (
    <>
    <Header setCurrentPage={setCurrentPage} />
      <div style={{backgroundColor: "orange" }}>
        <div className="hero">
        </div>
      </div>

      <section id="next-steps">
        <div id="docs" style={{backgroundColor: "lightblue"}}>
          <div style={{backgroundColor: "blue", alignContent: "center", textAlign: "center", height: "200px", color: "white"}}>
            { `${name} in ${city}, ${country}` }
            
          </div>

          <div style={{backgroundColor: "gray", alignContent: "center", textAlign: "center", height: "300px", color: "white"}}>
            { /* Filter options box */ }

          </div>
        </div>
        <div style={{flex: "1 1 0", flexDirection: "column"}}>
          { image != null ? <img src={image} width="auto" height="auto" /> : "NO IMAGE" }
        </div>

      </section>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}