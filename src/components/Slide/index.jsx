import { useState } from 'react';

import './index.scss';

import LeftChevron from '../../assets/icônes/chevron-left-solid.svg';
import RightChevron from '../../assets/icônes/chevron-right-solid.svg';

export default function Slide({ pictures }) {
   const [index, setIndex] = useState(0);

   const nextButton = () => {
      if (index < pictures.length - 1) {
         setIndex(index + 1);
      } else {
         setIndex(0);
      }
   };
   const previousButton = () => {
      if (index > 0) {
         setIndex(index - 1);
      } else {
         setIndex(pictures.length - 1);
      }
   };

   return (
      <div className="slide">
         {pictures.length > 1 && (
            <>
               <img
                  src={LeftChevron}
                  alt="Boutton changement image gauche"
                  className="slide__button slide__button--left"
                  onClick={() => previousButton()}
               />
               <img
                  src={RightChevron}
                  alt="Boutton changement image droite"
                  className="slide__button slide__button--right"
                  onClick={() => nextButton()}
               />
               <p className="slide__index">{`${index + 1}/${pictures.length}`}</p>
            </>
         )}
         <img src={pictures[index]} alt="" className="slide__image" />
      </div>
   );
}
