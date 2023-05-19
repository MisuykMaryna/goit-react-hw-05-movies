import React from 'react';
import { useState, useEffect } from 'react';
import api from 'services/Api';
import HomeList from 'components/HomeList/Homelist.jsx';
import css from './Home.module.css';


const Home = () => {
     const [movies, setMovies] = useState(null);
 useEffect(() => {
    api
      .getTrendingMovies()
      .then(results => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={css.home}>
      <h2>Trending today</h2>
      {movies && <HomeList movies={movies} link={'movies/'} />}
    </div>
  );
};

export default Home;