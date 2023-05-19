import { useState, useEffect } from 'react';
import api from 'services/Api';
import css from './Reviews.module.css';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieReviews(movieId)
      .then(results => {
        setReviews(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

    return (
       <ul className={css.reviews}>
      {!reviews.length ? (
       <p>Opps...there is no reviews</p>
      ) : (
        reviews.map(({ author, id, content }) => {
          return (
              <li key={id}>
            <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );   
};
export default Reviews;