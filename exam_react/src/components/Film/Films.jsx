import "./Films.scss"
import { useParams } from 'react-router-dom';
import Navebar from "../Navebar/Navebar";
import React, { useState, useEffect } from 'react';

export default function Films() {
    const { filmId } = useParams();
    const [detailsFilm, setDetailsFilm] = useState([]);
    const apiKey = "c8bf288bee8edc7e6ac610fda396d4d4";
    const id = "939243";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDetailsFilm(data.results || []);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Navebar></Navebar>
            <div class="focus-container">
                <div class="banner">
                    <div class="content">
                        <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="Photo film" />
                        <div class="right">
                            <div class="top">
                                <div class="score">80%</div>
                                {detailsFilm.map((film, index) => (
                                    <><div class="title-date" key={index}>
                                        <h1>{film.title}</h1>
                                        <span>{film.release_date} - {film.genres[0]} - 2h 28m</span>
                                    </div>
                                        <div class="synopsis">
                                            <h2>Synopsis</h2>
                                            <p>
                                                {film.overview}
                                            </p>
                                        </div></>
                                        ))}
                                <div class="casting">
                                    <h2>Casting</h2>
                                    <div class="actors">
                                        <div class="actor">
                                            <img src="./Ressources/Spiderman/tom.png" alt="" />
                                            <h4>Tom Holland</h4>
                                            <span>Peter Parker / Spider-Man</span>
                                        </div>
                                        <div class="actor">
                                            <img src="./Ressources/Spiderman/zendaya.png" alt="" />
                                            <h4>Zendaya</h4>
                                            <span>Michelle 'MJ' Jones</span>
                                        </div>
                                        <div class="actor">
                                            <img src="./Ressources/Spiderman/benedict.png" alt="" />
                                            <h4>Benedict Cumberbatch</h4>
                                            <span>Doctor Strange</span>
                                        </div>
                                        <div class="actor">
                                            <img src="./Ressources/Spiderman/jacob.png" alt="" />
                                            <h4>Jacob Batalon</h4>
                                            <span>Ned Leeds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
                );
}
