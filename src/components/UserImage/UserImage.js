import './UserImage.scss';
import userPhoto from '../../assets/images/user-photo.png';

function UserImage() {
  return (
    <div className='user-image'>
       <img src={userPhoto} alt='User image' />
    </div>
  );
}

export default UserImage;
