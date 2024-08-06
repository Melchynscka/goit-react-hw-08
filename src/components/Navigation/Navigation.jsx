import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';
const setLinkClass = ({ isActive }) => {
  return clsx(css.linkItem, isActive && css.linkActive);
};

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink className={setLinkClass} to ="/" >
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={setLinkClass} to = "/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}