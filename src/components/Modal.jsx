import '../components/style/modal.css'

const Modal = ({ show, getZodiac, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2 className='title'>Your Zodiac</h2>
        <div>
            <img className='img' src={getZodiac.img}/>
            <p className='zodiac-name' >{getZodiac.name}</p>
            <p className='description' >{getZodiac.description}</p>
            <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal