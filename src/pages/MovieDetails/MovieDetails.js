import React, {useState, useEffect, useRef, Suspense } from 'react';
import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';
import api from 'services/Api';
import MovieInfo from 'components/MovieInfo/MovieInfo.jsx';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
   const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieDetails(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);


    return (
      <>
        <div className={css.movieDetails_section}>
       <NavLink to={backLinkLocationRef.current} className={css.movieDetails_link} >
        Go back
          </NavLink>
          </div>
      {movie && <MovieInfo {...movie} />}
      <div className={css.movieDetails}>
        <h3>Additional information</h3>
        <ul className={css.movieDetails_list}>
          <li>
            <NavLink to="cast" className={css.movieDetails_link} >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.movieDetails_link} >
              Reviews
            </NavLink>
          </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
      </div>
          </>
    )
}

export default MovieDetails;