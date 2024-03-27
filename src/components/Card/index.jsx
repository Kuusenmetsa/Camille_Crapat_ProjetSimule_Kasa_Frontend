import { NavLink } from 'react-router-dom';

import './index.scss';

export default function Card({ id, title, cover }) {
   return (
      <NavLink to={`/location/${id}`} className="card">
         <figure>
            <img src={cover} alt={title} />
            <figcaption>{title}</figcaption>
         </figure>
      </NavLink>
   );
}
