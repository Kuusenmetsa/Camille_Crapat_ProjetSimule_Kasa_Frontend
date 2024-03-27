import './index.scss';

import Card from '../../components/Card';
import Cover from '../../components/Cover';

import logements from '../../data/logements.json';

export default function Locations() {
   return (
      <section>
         <Cover type="home" text="Chez vous, partout et ailleurs" />
         <div className="cards">
            {logements.map((logement) => (
               <Card
                  id={logement.id}
                  title={logement.title}
                  cover={logement.cover}
                  key={logement.id}
               />
            ))}
         </div>
      </section>
   );
}
