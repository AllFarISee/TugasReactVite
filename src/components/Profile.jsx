import ProfilePhoto from '../assets/ProfilePhoto.jpeg'

const Profile = ({name, birthDay, age, job, handleClick}) => {
  return (
    <section className="profile">
      <div className="profile-image">
        <img
          src={ProfilePhoto}
          alt="Profile"
        />
      </div>
      <div className="profile-content">
        <h1>Hello, My Name's <span className='name'>{name}</span></h1>
        <div className='date'>
          <p>{birthDay}</p>
          <p className='age'>{age} Years</p>
        </div>
        
        <p className="job">{job}</p>
        <button className="profile-btn" onClick={handleClick}> Zodiac Check</button>
      </div>
    </section>
  );
};

export default Profile;