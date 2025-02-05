import "../Pages/Home.scss"
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [dataFilm, setDataFilm] = useState([]);

  useEffect(() => {
    const apiKey = "c8bf288bee8edc7e6ac610fda396d4d4";
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataFilm(data.results || []);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Trier les films par vote_average en ordre décroissant et sélectionner les 4 premiers
  const topRatedFilms = dataFilm
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4);

  return (
    <>
      <div className="search-container saveMe">
        <input type="text" placeholder="Rechercher un film" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>

      <div className="wrapper">
        <div className="tendances-container container">
          <div className="title-filter" id="title-tendances">
            <h2>Tendances</h2>
            <button className="active" id="day">Aujourd'hui</button>
            <button id="week">Cette semaine</button>
          </div>
          <div className="grid-tendances" id="tendances"></div>
          <div>
            {topRatedFilms.length > 0 ? (
              topRatedFilms.map((film, index) => (
                <div key={index} className="movie">
                  <a href="#">
                    <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.title} />
                    <div className="score">
                      <p>{film.vote_average}</p>
                    </div>
                    <h5>{film.title}</h5>
                    <p>{film.release_date}</p>
                  </a>
                </div>
              ))
            ) : (
              <p>No films available</p>
            )}
          </div>
        </div>
      </div>

      <div className="wrapper-pop">
        <div className="populaires-container container">
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
            <button className="active" id="top_rated">Mieux notées</button>
            <button id="popular">Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires"></div>
        </div>
      </div>
    </>
  );
};

export default Home;