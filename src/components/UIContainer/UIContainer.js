import ContactSection from '../ContactSection/ContactSection';
import UserInfoSection from '../UserInfoSection/UserInfoSection';
import UserImage from '../UserImage/UserImage';
import './UIContainer.scss';

function UIContainer() {
  return (
    <div className='ui-container'>
      <ContactSection />
      <UserImage />
      <UserInfoSection />
    </div>
  );
}

export default UIContainer;
