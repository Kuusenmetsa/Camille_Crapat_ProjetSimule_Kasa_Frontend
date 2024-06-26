import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './index.scss';

import Tag from '../../components/Tag';
import Star from '../../components/Notation';
import Dropdown from '../../components/Dropdown';
import Slide from '../../components/Slide';
import logements from '../../data/logements.json';

export default function Location() {
   const id = useParams().id;
   const navigate = useNavigate();
   const [data, setData] = useState(null);

   useEffect(() => {
      const regexId = /^[0-9a-z]{1,}$/;
      const logement = logements.find((el) => el.id === id);
      if (!id || id === '' || !regexId.test(id) || !logement) {
         navigate('/error');
      } else {
         setData(logement);
      }
   }, [id, navigate]);

   return (
      <>
         {data && (
            <section className="location">
               <Slide pictures={data.pictures} />
               <div className="information">
                  <div className="information__appartment">
                     <div className="information__appartment__title">
                        {data.title}
                     </div>
                     <div className="information__appartment__place">
                        {data.location}
                     </div>
                     <div className="information__appartment__tags">
                        {data.tags.map((tag) => (
                           <Tag title={tag} key={`${Date.now()} - ${tag}`} />
                        ))}
                     </div>
                  </div>
                  <div className="information__person">
                     <div className="information__person__identity">
                        <div className="information__person__identity--name">
                           {data.host.name}
                        </div>
                        <img
                           src={data.host.picture}
                           alt={`photo - ${data.host.name}`}
                           className="information__person__identity--photo"
                        />
                     </div>
                     <div className="information__person__notation">
                        {[...Array(5)].map((el, index) =>
                           data.rating >= index + 1 ? (
                              <Star
                                 key={`${index} - ${data.host.name} - notation`}
                                 type="red"
                              />
                           ) : (
                              <Star
                                 key={`${index} - ${data.host.name} - notation`}
                                 type="grey"
                              />
                           ),
                        )}
                     </div>
                  </div>
               </div>
               <div className="dropdowns--location">
                  <div className="dropdowns--location--taille">
                     <Dropdown title="Description" content={data.description} />
                  </div>
                  <div className="dropdowns--location--taille">
                     <Dropdown title="Equipements" content={data.equipments} />
                  </div>
               </div>
            </section>
         )}
      </>
   );
}
