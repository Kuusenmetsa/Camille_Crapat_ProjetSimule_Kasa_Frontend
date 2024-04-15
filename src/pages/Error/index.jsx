import { Link } from 'react-router-dom';

import './index.scss';

import Error404 from '../../assets/images/404.svg';
import Error400 from '../../assets/images/400.svg';

export default function Error({ type }) {
   return (
      <div className="error">
         <img
            src={type === '400' ? Error400 : Error404}
            alt={type === '400' ? Error400 : Error404}
         />
         <p>
            {type === '400'
               ? `Oups! Les données reçu ne sont pas correct !`
               : `Oups! La page que vous demandez n&apos;existe pas.`}
         </p>
         <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
   );
}
