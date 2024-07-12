import { Link } from 'react-router-dom';
import './searchCard.scss'; 

const SearchCard = ({ id, url, title, descript, isBurger }) => {
  return (
    <Link to={`/history/${id}`} className={`SearchCard ${isBurger ? 'SearchCard--burger' : ''}`}>
      <img className={`SearchCard-thumbnail ${isBurger ? 'SearchCard-thumbnail--burger' : ''}`} src={url} alt={title} />
      <div className={`SearchCard-wrap ${isBurger ? 'SearchCard-wrap--burger' : ''}`}>
        <h3 className='SearchCard-title'>{title}</h3>
        <p className='SearchCard-descript'>{descript}</p>
      </div>
    </Link>
  );
};

export default SearchCard;