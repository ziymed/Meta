import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
// import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <>
      <section className="specials | bg-gray padding-block-900 border-bottom">
        <div className="container flow">
          <div className="even-columns vertical-align-center">
            <div className="justify-self-start">
            <h2 className="text-black fs-700">This week specials!</h2>
            </div>
            <div className="justify-self-end">
              <Link to={pages.get('orderOnline').path} className="button" data-type="primary">
                Online Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cards | bg-gray padding-block-900">
        <div className="container">
          <div className="even-columns">
            {meals.map((meal, index) => 
              <MealCard key={index} meal={meal} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WeekSpecials;
