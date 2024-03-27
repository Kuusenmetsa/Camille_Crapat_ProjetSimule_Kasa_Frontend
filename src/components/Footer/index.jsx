import './index.scss';

import Logo from '../../assets/images/logo_white.svg';

export default function Footer() {
   return (
      <footer>
         <img src={Logo} alt="logo" />
         <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
      </footer>
   );
}
