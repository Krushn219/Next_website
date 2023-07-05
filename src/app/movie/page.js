import React from "react";
import { resolve } from "styled-jsx/css";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

const Movie = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // const url =
  //   "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b223604f61msh88633bc6d70bbd0p12bed3jsnbc679393f0ac",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curlEle) => {
              return <MovieCard key={curlEle.id} {...curlEle} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
