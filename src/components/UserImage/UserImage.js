import './UserImage.scss';
import userPhoto from '../../assets/images/user-photo.jpeg';

function UserImage() {
  return (
    <div className='user-image' style={{backgroundImage: `url(${userPhoto})`}}>
       {/* <img src={userPhoto} alt='User image' /> */}
    </div>
  );
}

export default UserImage;
