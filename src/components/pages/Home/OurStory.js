import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';

const OurStory = () => {
  return (
    <section className="about | bg-gray padding-block-900">
        <div className="container">
            <div className="even-columns">
                <div className="flow">
                    <h1 className="ff-serif fs-900 text-green">Little Lemon</h1>
                    <h2 className="ff-serif fs-800 text-black uppercase">Chicago</h2>
                    <p className="ff-sans-serif fs-500 text-black">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                </div>
                <div className="about__image">
                    <img src={chefsMarioAndAdrianAImage} alt="" />
                    <img src={chefsMarioAndAdrianBImage} alt="" />
                </div>
            </div>
        </div>
    </section>

  );
};

export default OurStory;
