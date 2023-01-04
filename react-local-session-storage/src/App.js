import "./App.css";
import React, { useState, useEffect } from "react";
import Beer from "./components/Beer";

function App() {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setBeers([
      {
        name: "világos",
        id: 12,
      },
      {
        name: "dark",
        id: 54,
      },
      {
        name: "búza",
        id: 45,
      },
      {
        name: "ipa",
        id: 96,
      },
      {
        name: "apa",
        id: 78,
      },
    ]);
  }, []);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div className="App">
      {beers.length > 0
        ? beers.map((beer, i) => (
            <Beer
              name={beer.name}
              favorites={favorites}
              setFavorites={setFavorites}
              id={beer.id}
              key={i}
            />
          ))
        : null}
    </div>
  );
}

export default App;
