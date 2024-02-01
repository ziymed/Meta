import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    datetime: 'Jan 31, 2024',
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    datetime: 'Jan 30, 2024',
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    datetime: 'Jan 2, 2024',
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    datetime: 'Jan 22, 2024',
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials | bg-gray text-black padding-block-900">
      <div className="container padding-block-500">
        <div className="vertical-align-center">
          <h2 className="text-black fs-700">What people says about us!</h2>
        </div>
        <div className="even-columns padding-block-900">
          {customers.map((customer, index) => 
            <TestimonialCard key={index} customer={customer} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
