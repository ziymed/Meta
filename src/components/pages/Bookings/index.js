import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmedBooking').path);
  };

  return (
    <section className="bg-green padding-block-900 text-gray">
      <div className="container">
        <div className="vertical-align-left">
          {/* Title */}
          <h1 className="vertical-align-center ff-serif fs-900 text-yellow">Reservations</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            submitData={submitData}
          />
        </div>
      </div>
    </section>
  );
};

export default Bookings;
