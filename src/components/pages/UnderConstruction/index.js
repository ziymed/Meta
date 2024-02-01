import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnderConstruction = () => {
  return (
    <section className="hero | bg-green padding-block-900 text-gray">
      <div className="container">
        <div className="vertical-align-center">
          <FontAwesomeIcon icon={faPersonDigging} size="3x" className='text-skin'/>
          <h1 className='text-yellow fs-700 padding-block-500'>Page under construction</h1>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
