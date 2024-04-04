import { Link } from 'react-router-dom';

import './index.scss';

import ErrorSVG from '../../assets/images/404.svg';

export default function Error() {
   return (
      <div className="error">
         <img src={ErrorSVG} alt="Erreur 404" />
         <p>Oups! La page que vous demandez n&apos;existe pas.</p>
         <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
   );
}
