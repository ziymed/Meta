import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary', 'Engagement'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage = 'Please enter a number between 1 and 10';
  const invalidFirstNameErrorMessage = 'Please enter your First Name'
  const invalidLastNameErrorMessage = 'Please enter your Last Name'
  const invalidEmailErrorMessage = 'Please enter a correct Email Address'
  const invalidPhoneErrorMessage = 'Please enter a your working phone number'


  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';
  const isFirstNameValid = () => firstName !== '';
  const isLastNameValid = () => lastName !== '';
  const isEmailValid = () => email !== '';
  const isPhoneValid = () => phone !== '';

  const areAllFieldsValid = () =>
    isDateValid()
    && isTimeValid()
    && isNumberOfGuestsValid()
    && isOccasionValid()
    && isFirstNameValid()
    && isLastNameValid()
    && isEmailValid()
    && isPhoneValid();

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, firstName, lastName, email, phone});
  };

  return (
    <section className="hero | bg-green padding-block-900 text-gray">
      <div className="container">
          <div className="even-columns">
              <div className="flow">

              {/* Form */}
              <form id="reservationForm" onSubmit={handleFormSubmit}>
                  <div className="form__element">
                      {/* Seating : outdoor / indoor */}
                      <div className="form__item">
                          <label htmlFor="indoor" className="text-gray fs-400 ff-sans-serif">
                          <input type="radio" id="indoor" name="seating" defaultValue="indoor" defaultChecked /> Indoor Seating
                          </label>
                      </div>

                      <div className="form__item">
                          <label htmlFor="outdoor" className="text-gray fs-400 ff-sans-serif">
                          <input type="radio" id="outdoor" name="seating" defaultValue="outdoor" /> Outdoor Seating
                          </label>
                      </div>
                  </div>

                  <div className="form__element">

                      {/* Date */}
                      <div className="form__item">
                        <FormField className='text-gray fs-400 ff-sans-serif' label="Date:" htmlFor="booking-date" hasError={!isDateValid()} errorMessage={invalidDateErrorMessage} >
                          <input type="date" className="form__input" id="booking-date" name="booking-date" min={minimumDate} value={date} required={true} onChange={handleDateChange} />
                        </FormField>
                      </div>

                      {/* Times */}
                      <div className="form__item">
                        <FormField htmlFor="booking-time" label="Time" hasError={!isTimeValid()} errorMessage={invalidTimeErrorMessage} className='text-gray fs-400 ff-sans-serif'>
                          <select id="booking-time" name="booking-time" value={time} required={true} onChange={handleTimeChange}>
                            {availableTimes.map(times =>
                              <option data-testid="booking-time-option" key={times}>
                                {times}
                              </option>
                            )}
                          </select>
                        </FormField>
                      </div>

                  </div>

                  <div className="form__element">

                    {/* occasions */}
                    <div className="form__item">
                      <FormField className="text-gray fs-400 ff-sans-serif" label="Occasion:" htmlFor="booking-occasion" hasError={!isOccasionValid()} errorMessage={invalidOccasionErrorMessage} >
                        <select id="booking-occasion" name="booking-occasion" value={occasion} required={true} onChange={e => setOccasion(e.target.value)} >
                          {occasions.map(occasion => 
                            <option data-testid="booking-occasion-option" key={occasion}>
                              {occasion}
                            </option>
                          )}
                        </select>
                      </FormField>
                    </div>

                    {/* diners */}
                    <div className="form__item">
                      <FormField className="text-gray fs-400 ff-sans-serif" label="Number of guests:" htmlFor="booking-number-guests" hasError={!isNumberOfGuestsValid()} errorMessage={invalidNumberOfGuestsErrorMessage} >
                        <input type="number" className="form__input" id="booking-number-guests" name="booking-number-guests" min={minimumNumberOfGuests} max={maximumNumberOfGuests} value={numberOfGuests} required={true} onChange={e => setNumberGuests(e.target.value)} />
                      </FormField>
                    </div>

                  </div>

                  <div className="form__element">
                      {/* First Name */}
                      <div className="form__item">
                        <FormField className="text-gray fs-400 ff-sans-serif" label="First Name:" htmlFor="booking-first-name" hasError={!isFirstNameValid()} errorMessage={invalidFirstNameErrorMessage} >
                          <input type="text" className="form__input" id="firstName" name="firstName" placeholder="Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required={true} />
                        </FormField>
                      </div>
                      {/* Last Name */}
                      <div className="form__item">
                        <FormField className="text-gray fs-400 ff-sans-serif" label="Last Name:" htmlFor="booking-last-name" hasError={!isLastNameValid()} errorMessage={invalidLastNameErrorMessage} >
                          <input type="text" className="form__input" id="lastName" name="lastName" placeholder="Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required={true} />
                        </FormField>
                      </div>
                  </div>

                  <div className="form__element">
                      {/* Email */}
                      <div className="form__item">
                        <FormField className="text-gray fs-400 ff-sans-serif" label="Your Email Address:s" htmlFor="booking-email" hasError={!isEmailValid()} errorMessage={invalidEmailErrorMessage} >
                          <input type="email" className="form__input" id="booking-email" name="booking-email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                        </FormField>
                      </div>


                      {/* Phone */}
                      <div className="form__item">
                        <FormField className="text-gray fs-400 ff-sans-serif" label="Your Phone Number:" htmlFor="booking-phone" hasError={!isPhoneValid()} errorMessage={invalidPhoneErrorMessage} >
                          <input type="tel" className="form__input" id="booking-phone" name="booking-phone" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required={true} />
                        </FormField>
                      </div>
                  </div>

                  <div className="form__element">
                      {/* special requirement */}
                      <div className="form__item">
                          <label htmlFor="specialRequirement" className="text-gray fs-400 ff-sans-serif">Special Requirement:</label>
                          <textarea className rows={5} aria-label="With textarea" />
                      </div>
                      {/* Agrees */}
                      <div className="form__item vertical-align-center padding-block-900">
                          <label htmlFor="agrees" className="text-gray fs-400 ff-sans-serif">
                          <input type="checkbox" id="agrees" name="agrees" required /> You agree to our friendly <link to="/privacy-policy" className="text-gray" />privacy policy
                          </label>
                      </div>
                  </div>
                  <div className='vertical-align-center'>
                    <button className="button" type="submit" disabled={!areAllFieldsValid()} data-type="primary">Make your reservation</button>
                  </div>
              </form>
              </div>
          </div>
      </div>
    </section>
  );
};

export default BookingForm;
