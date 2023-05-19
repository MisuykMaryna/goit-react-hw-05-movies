import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <nav className={css.headerNav}>
        <NavLink to="/" className={css.header_link}>Home</NavLink>
        <NavLink to="/movies" className={css.header_link}>Movies</NavLink>
      </nav>
    </>
  );
};