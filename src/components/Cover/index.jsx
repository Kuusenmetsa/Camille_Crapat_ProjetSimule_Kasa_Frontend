import './index.scss';

import HomeImg from '../../assets/images/home.jpg';
import AboutImg from '../../assets/images/about.jpg';

export default function Cover({ type, text }) {
   return (
      <div className="cover">
         <img src={type === 'home' ? HomeImg : AboutImg} alt="cover" />
         <div className="cover--background"></div>
         <p>{text}</p>
      </div>
   );
}
