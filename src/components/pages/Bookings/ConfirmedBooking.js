import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <section className="hero | bg-green padding-block-900 text-gray">
      <div className="container">
        <div className="vertical-align-center">
          <FontAwesomeIcon icon={faCircleCheck} size="3x" className='text-skin' />
          <h1 className='text-yellow fs-600 padding-block-500'>Your reservation has been confirmed.</h1>
          <p className='text-skin fs-500'>You will receive an email with all the details.</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
