import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/Api';
import noImage from 'images/noImage.jpg';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
   const { movieId } = useParams();

    useEffect(() => {
      if (!movieId) {
      return;
    }
    api
      .getMovieCast(movieId)
      .then(cast => {
        setCast(cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

    return (
   <>
       {cast !== null && cast.length !== 0 ? (
    <div>
      <ul className={css.castList}>
        {cast.map(({ cast_id, character, name, profile_path }) => {
          return (
            <li key={cast_id}>
              <img
                src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : noImage
                  }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
        </div>
            ) : (
                     <p>
          Sorry, but we don't have a list of cast for this movie.
        </p>
      )}
    </>
  );
}

export default Cast;