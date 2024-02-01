import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial">
        <div className="testimonial__heading vertical-align-center">
            <picture className="testimonial__image">
                <img src={customer.image} alt="{customer.fullName}" />
            </picture>
            <div className="testimonial__title">
                <h5 className="text-black fs-400">{customer.fullName}</h5>
                <p className="text-green fs-300">{customer.datetime }</p>
            </div>
        </div>
        <div className="testimonial__body">
            <p className="testimonial__content  vertical-align-center">"{customer.says}"</p>
        </div>
        <div className="vertical-align-center">
          <ul className="testimonial__rating text-yellow">
            {customer.rating.map((ratingPoint, index) =>
            <FontAwesomeIcon key={index} icon={ratingLevels[ratingPoint]} size="xs" />
            )}
          </ul>
        </div>
    </article>
  );
};

export default TestimonialCard;
