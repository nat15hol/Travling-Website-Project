import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/FavoritePage.css";

export default function FavoritePage({
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage,
  setSelectedDestination
}) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  function removeFavorite(id) {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  function openDestination(item) {
    setSelectedDestination(item);
    setCurrentPage("destination");
  }

  return (
    <div className="favorites-page">

      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
      />

      <header className="hero">
        <div className="heroText">
          <h1>Favorites</h1>
          <p>Your saved places</p>
        </div>
      </header>

      <main className="favorites-content">

        <h2>My Favorites</h2>

        {favorites.length === 0 ? (
          <p>No favorites yet ❤️</p>
        ) : (
          favorites.map((item) => (
            <article key={item.id} className="hotelCard">

              <img
                src={item.image}
                alt={item.name}
                onClick={() => openDestination(item)}
                style={{ cursor: "pointer" }}
              />

              <div className="hotelInfo">
                <h3>{item.name}</h3>
                <p>📍 {item.city}, {item.country}</p>
                <p>{item.rating} ⭐</p>
                <p>{item.shortDescription}</p>

                <p className="amenities">
                  {item.amenities?.join(" · ")}
                </p>
              </div>

              <div className="priceBox">
                <span>Price per night</span>
                <h2>${item.pricePerNight}</h2>

                <button onClick={() => openDestination(item)}>
                  Book now
                </button>

                <small>Free cancellation</small>

                <button onClick={() => removeFavorite(item.id)}>
                  Remove
                </button>
              </div>

            </article>
          ))
        )}
  <h2>My Favorites</h2>

  {favorites.length === 0 ? (
    <p>No favorites yet ❤️</p>
  ) : (
    favorites.map((item) => (
      <article key={item.id} className="hotelCard">

        <img
          src={item.image}
          alt={item.name}
          onClick={() => openDestination(item)}
          style={{ cursor: "pointer" }}
        />

        <div className="hotelInfo">
          <h3>{item.name}</h3>
          <p>📍 {item.city}, {item.country}</p>
          <p>{item.rating} ⭐</p>
          <p>{item.shortDescription}</p>

          <p className="amenities">
            {item.amenities?.join(" · ")}
          </p>
        </div>

        <div className="priceBox">
          <span>Price per night</span>
          <h2>${item.pricePerNight}</h2>

          <button onClick={() => openDestination(item)}>
            Book now
          </button>

          <small>Free cancellation</small>

          <button onClick={() => removeFavorite(item.id)}>
            Remove
          </button>
        </div>

      </article>
    ))
  )}

</main>


      <Footer />

    </div>
  );
}