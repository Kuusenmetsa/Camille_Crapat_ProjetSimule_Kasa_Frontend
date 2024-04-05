import './index.scss';

import StarRed from '../../assets/icônes/star-solid-solid-red.svg';
import StarGrey from '../../assets/icônes/star-solid-solid-grey.svg';

export default function Notation({ type }) {
   return (
      <div className="star">
         <img src={type === 'red' ? StarRed : StarGrey} alt="" />
      </div>
   );
}
