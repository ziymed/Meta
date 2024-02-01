import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero | bg-green padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div className="flow">
            <h1 className="ff-serif fs-900 text-yellow">Little Lemon</h1>
            <h2 className="ff-serif fs-800 text-gray uppercase">Chicago</h2>
            <p className="ff-sans-serif fs-500 text-gray">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <div className="flex-group">
                <Link to={pages.get('bookings').path} className="button" data-type="primary">Reserve a table</Link>
            </div>
          </div>
          <div className="justify-self-end">
              <img src={restaurantFoodImage} alt="Restaurant food" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
