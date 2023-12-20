import ContactSection from '../ContactSection/ContactSection';
import UserInfoSection from '../UserInfoSection/UserInfoSection';
import './UIContainer.scss';

function UIContainer() {
  return (
    <div className='ui-container'>
      <ContactSection />
      <UserInfoSection />
    </div>
  );
}

export default UIContainer;
