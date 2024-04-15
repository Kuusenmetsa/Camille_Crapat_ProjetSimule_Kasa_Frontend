import { Link } from 'react-router-dom';

import './index.scss';

import Error404 from '../../assets/images/404.svg';

export default function Error() {
   return (
      <div className="error">
         <img src={Error404} alt={Error404} />
         <p>Oups! La page que vous demandez n&apos;existe pas.</p>
         <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
   );
}
