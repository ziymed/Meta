import { Link } from 'react-router-dom';
import pages from '../../../utils/pages';
import DeliveryIcon from './DeliveryIcon'

const MealCard = ({ meal }) => {
  return (
    <article className="card | bg-white text-black">
      <img src={meal.image} alt={meal.name} />
      <div className="padding-inline-400 padding-block-400">
        <header className="card__title">
            <h3 className="fs-600 text-green ff-serif uppercase">{meal.name}</h3>
            <span className="fs-600 text-black ff-serif">{meal.price}</span>
        </header>
        <p className="fs-300 ff-sans-serif padding-block-600">{meal.description}</p>
        <Link to={pages.get('orderOnline').path} className="button" data-type="primary">
            Order Now <DeliveryIcon />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
