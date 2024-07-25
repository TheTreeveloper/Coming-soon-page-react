import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='footer-container'>
      <div className="icons">
      <a><FontAwesomeIcon icon={faFacebookF} className='facebook'/></a>
      <a><FontAwesomeIcon icon={faTwitter} className='twitter'/></a>
      <a><FontAwesomeIcon icon={faInstagram} className='instagram'/></a>
      </div>
      <p>&copy; Copyright Ping. All rights reserved.     </p>
    </div>
  )
}

export default Footer
