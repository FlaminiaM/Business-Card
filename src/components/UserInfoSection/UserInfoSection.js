import './UserInfoSection.scss';

function UserInfoSection() {
  return (
    <div className='user-info-container'>
        <div className='user-info-section'>
          <h1 className='user-info__fullname'><span className='txt-green'>Flaminia</span><br></br>Mazzitelli</h1>
          <h3 className='user-info__profession bold'>Front-end Developer</h3>
          <p className='user-info__description'>High accomplishment and user-focused Front-end Developer adept in collaborating with UX and design teams to plan the technical writing and execution of functional specifications for websites and applications.</p>
          <h3>Working with technologies:</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>GraphQL</li>
          </ul>
        </div>
    </div>
  );
}

export default UserInfoSection;
