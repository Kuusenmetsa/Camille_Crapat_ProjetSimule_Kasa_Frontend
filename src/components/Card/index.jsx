import { NavLink } from 'react-router-dom';

import './index.scss';

export default function Card({ id, title, cover }) {
   return (
      <div className="card">
         <NavLink to={`/location/${id}`} className="film"></NavLink>
         <figure>
            <img src={cover} alt={title} />
            <figcaption>{title}</figcaption>
         </figure>
      </div>
   );
}
