import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo_Footer_White from './assets/logo-white.png';
import pages from '../../utils/pages';

const contacts = [
  { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
  { icon: faPhone, info: '(312) 593-2744', },
  { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="footer | bg-black text-white padding-block-900">
      <div className="container">
          <div className="even-columns">
              <div className="footer__row">
                  <img src={Logo_Footer_White} alt="Little Lemon Restaurant" className="footer__logo" />
                  <p className="footer__description | text-gray">
                      We are a family owned of Mediterranean restaurant focused on traditional recipes served with a modern twist.
                  </p>
              </div>
              <div className="footer__row">
                  <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Important Links</h4>
                  <ul className="footer__nav | text-gray fs-600 ff-sans-serif">
                    {navLinks.map((navLink, index) =>
                      <li key={index}>
                        <Link to={navLink.path}>{navLink.name}</Link>
                      </li>
                    )}
                  </ul>
              </div>
              <div className="footer__row">
                  <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Important Links</h4>
                  <adddress className="footer__nav | text-gray fs-600 ff-sans-serif">
                    {contacts.map((contact, index) =>
                      <p key={index}>
                        <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                      </p>
                    )}
                  </adddress>
              </div>
              <div className="footer__row">
                  <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Social Media Links</h4>
                  {socials.map((social, index) =>
                    <a
                      key={index}
                      href={`https://www.${social.name}.com`}
                      target="_blank"
                      rel="noreferrer"
                      className='socials'
                    >
                      <FontAwesomeIcon icon={social.icon} size="md" />
                    </a>
                  )}
              </div>
          </div>
          <div className="footer__copyrights | text-gray fs-200 ff-sans-serif vertical-align-center"><p>All rights Reserved © Little Lemon Restaurant </p></div>
      </div>
    </footer>
  );
};

export default Footer;
