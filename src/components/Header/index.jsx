import { NavLink } from 'react-router-dom';

import './index.scss';

import Logo from '../../assets/images/logo.svg';

export default function Header() {
   return (
      <header>
         <img src={Logo} alt="logo" />
         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) => (isActive ? `active` : ``)}
                  >
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                     A Propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}
