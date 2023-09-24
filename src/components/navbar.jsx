import { NavLink } from 'react-router-dom';
import Logo from './logo';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-7 shadow-md gap-6">
        <Logo />
        <ul>
          <li className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              Favorite
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              Login page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
