import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noImage from 'images/noImage.jpg';
import css from './HomeItem.module.css'


const HomeItem = ({ id, title, poster_path, link, location }) => {
  return (
    <li className={css.homeItem} key={id}>
          <Link to={link} state={{ from: location }} >
             <img className={css.homeItem_image} src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : noImage
                    } alt={title}/>
        <p>{title}</p>
      </Link>
    </li>
  );
};
export default HomeItem;

HomeItem.propTypes = {
  id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};