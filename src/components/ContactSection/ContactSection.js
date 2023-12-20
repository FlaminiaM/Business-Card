import './ContactSection.scss';
import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';

import UserImage from '../UserImage/UserImage';


function ContactSection() {
  return (
    <div className='contact-section-container'>
        <UserImage />
        <div className='contact-sections'>
            <div className='contact-section'>
                <div className='contact-section__contact bold'>
                    <p className='contact-section__contact-email bold'><img src={emailIcon} alt="Email icon" />Email</p>
                    <p>flaminia.mazzitelli.92@gmail.com</p>
                </div>
                <div className='contact-section__contact bold'>
                    <p className='contact-section__contact-phone bold'><img src={phoneIcon} alt="Phone icon" />Phone</p>
                    <p>(+44) 7506961704</p>
                </div>
            </div>
            <div className='divider'></div>
            <div className='contact-section contact-section--bottom'>
                <div className='contact-section__contact bold'>
                    <p className='bold'>Find me on</p>
                    <p className='contact-section__contact-social'>
                        <a href='https://www.linkedin.com/in/flaminiamazzitelli/'><img src={linkedinIcon} alt="Linked icon" /></a>
                        <a href='https://github.com/FlaminiaM'><img src={githubIcon} alt="Github icon" /></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactSection;
