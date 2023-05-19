
import HomeItem from 'components/HomeItem/HomeItem';
import PropTypes from 'prop-types';
import css from './HomeList.module.css';

const HomeList = ({ movies, link, location }) => {
  return (
    <ul className={css.homeList}>
      {movies.map(movie => {
        return (
          < HomeItem
            {...movie}
            key={movie.id}
            link={`${link}${movie.id}`}
            location={location}
          />
        );
      })}
    </ul>
  );
};
export default HomeList;

HomeList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  link: PropTypes.string.isRequired,
};

// const HomeList = ({ movies,id, poster_path, original_title
//  }) => {
//   const location = useLocation();

//   return movies.map(({movie}) => {
//     return (
//       <li key={id}>
//         <Link to={`movies/${id}`} state={{ from: location }}>
//           <img
//              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
//             alt={original_title}
//           />
//           <p>{original_title}</p>
//         </Link>
//       </li>
      
//     );
//   })
    
// }

