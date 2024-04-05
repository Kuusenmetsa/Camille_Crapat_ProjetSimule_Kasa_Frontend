import './index.scss';

export default function Tag({ title }) {
   return (
      <div className="tag">
         <span>{title}</span>
      </div>
   );
}
