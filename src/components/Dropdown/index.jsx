import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './index.scss';

import ChevronUp from '../../assets/icônes/chevron-up-solid.svg';
import ChevronDown from '../../assets/icônes/chevron-down-solid.svg';

export default function Dropdown({ title, content }) {
   const [open, isOpen] = useState(false);
   return (
      <div className="dropdown">
         <div className="dropdown__header" onClick={() => isOpen(!open)}>
            <div className="dropdown__header__title">{title}</div>
            <div className="dropdown__header__button">
               {open ? (
                  <img src={ChevronDown} alt="Boutton dropdown" />
               ) : (
                  <img src={ChevronUp} alt="Boutton dropdown" />
               )}
            </div>
         </div>
         <AnimatePresence>
            {open && (
               <motion.div
                  className="dropdown__content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
               >
                  {title === 'Equipements' ? (
                     <ul>
                        {content.map((el, index) => (
                           <li key={`li - ${Date.now()} - ${index}`}>{el}</li>
                        ))}
                     </ul>
                  ) : (
                     <p>{content}</p>
                  )}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
