import "../styles/SearchLandingPage.css";

function SearchLandingPage() {
  const stays = [
    {
      name: "The Kayon Resort",
      location: "Ubud, Bali",
      rating: "4.6",
      reviews: "812 reviews",
      price: "$132",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    {
      name: "Seminyak Beach Villa",
      location: "Seminyak, Bali",
      rating: "4.4",
      reviews: "238 reviews",
      price: "$176",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Kuta Beach Hotel",
      location: "Kuta, Bali",
      rating: "4.2",
      reviews: "671 reviews",
      price: "$84",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
  ];

  return (
    <div className="page">
      <header className="hero">
        <nav className="navbar">
          <h2>✈ Wanderlust</h2>
          <button>Access Account</button>
        </nav>

        <div className="heroText">
          <h1>Bali, Indonesia</h1>
          <p>Discover tropical paradise with stunning beaches, rich culture, and unforgettable experiences.</p>
        </div>

        <div className="searchBox">
          <div>
            <span>Check in</span>
            <strong>May 20, 2025</strong>
          </div>
          <div>
            <span>Check out</span>
            <strong>May 24, 2025</strong>
          </div>
          <div>
            <span>Nr. of ppl</span>
            <strong>2 guests</strong>
          </div>
          <button>Search →</button>
        </div>
      </header>

      <main className="content">
        <aside className="sidebar">
          <div className="mapBox">
            <p>Map preview</p>
            <button>View on Google Maps</button>
          </div>

          <div className="filters">
            <h3>Filter options</h3>

            <h4>Property type</h4>
            <label><input type="checkbox" /> Hotels</label>
            <label><input type="checkbox" /> Resorts</label>
            <label><input type="checkbox" /> Villas</label>
            <label><input type="checkbox" /> Apartments</label>

            <h4>Guest rating</h4>
            <label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label>
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label>
            <label><input type="checkbox" /> ⭐⭐⭐</label>

            <h4>Amenities</h4>
            <label><input type="checkbox" /> Free Wi-Fi</label>
            <label><input type="checkbox" /> Swimming Pool</label>
            <label><input type="checkbox" /> Breakfast Included</label>

            <button className="filterButton">Show results</button>
          </div>
        </aside>

        <section className="results">
          <div className="resultsHeader">
            <h2>126 places to stay in Bali</h2>
            <button>Sort by: Recommended ˅</button>
          </div>

          {stays.map((stay) => (
            <article className="hotelCard" key={stay.name}>
              <img src={stay.image} alt={stay.name} />

              <div className="hotelInfo">
                <h3>{stay.name}</h3>
                <p>📍 {stay.location}</p>
                <p>{stay.rating} ⭐⭐⭐⭐⭐ <span>({stay.reviews})</span></p>
                <p>Beautiful stay with great location and facilities.</p>
                <p className="amenities">Free Wi-Fi · Pool · Breakfast</p>
              </div>

              <div className="priceBox">
                <span>Price per night</span>
                <h2>{stay.price}</h2>
                <button>Book now</button>
                <small>Free cancellation</small>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default SearchLandingPage;