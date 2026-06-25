import { useState } from 'react';
import { destinations } from "../data/destinations";

export default function DestinationsPage() {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
  setSearchedCity(searchText);
  setShowSuggestions(false);
  }

  return (
    <>
      <div style={{backgroundColor: "orange" }}>
        <div className="hero">
          <input style={{width: "200px" }}
          type="text"
          value={searchText}
          onChange={(event) => {setSearchText(event.target.value); setShowSuggestions(true);}}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(event) => { if (event.key === "Enter") { handleSearch(); }}}
          placeholder="Search for a city..."
          />
        </div>
      </div>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs" style={{backgroundColor: "lightblue"}}>
          <div style={{backgroundColor: "blue", alignContent: "center", textAlign: "center", height: "200px", color: "white"}}>
            { /* A map here? */}
            
          </div>

          <div style={{backgroundColor: "gray", alignContent: "center", textAlign: "center", height: "300px", color: "white"}}>
            { /* Filter options box */ }

          </div>
        </div>
        <div style={{flex: "1 1 0", flexDirection: "column"}}>
          <div style={{backgroundColor: "green"}}>

          </div>
          <div style={{backgroundColor: "green"}}>

          </div>
          <div style={{backgroundColor: "yellow"}}>

          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}