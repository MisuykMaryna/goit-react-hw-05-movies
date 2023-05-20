import React, { useState, useEffect } from 'react';
import api from 'services/Api';
import Notiflix from 'notiflix';
import HomeList from 'components/HomeList/Homelist';
import { useSearchParams, useLocation } from 'react-router-dom';
import css from './Movies.module.css';


const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

    
    const query = (searchParams.get('query') ?? '').trim();
    useEffect(() => {
       if (!query) {
      return;
    }
    api
      .getSearchedMovies(query)
        .then(results => {
          if (!results.length) {
          Notiflix.Notify.warning('We have not movies by this title.');
          return;
        }
        setMovies(results);
      })
        
      .catch(error => {
        console.log(error);
      });
    }, [query, searchParams]);
    
    const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let value = event.target.elements.search.value;
    setSearchQuery(value);
    setSearchParams({ query: value });
    if (query && query.trim() === '') {
      Notiflix.Notify.warning('Type title of movie.');
      return;
    }
    setSearchQuery('');
  };

    return (
        <>
<form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_label}>Search</span>
        </button>
          <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search movie by name..."
          value={searchQuery}
          onChange={onChange}
        ></input>
      </form>
            {movies && <HomeList movies={movies} link={' '} location={location}/>}
            </>
    )
   
}

export default Movies;

