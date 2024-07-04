import PropTypes from 'prop-types';
import './Card.css'; 

const Card = ({ user }) => {
  return (
    <div className="Card">
      <div className="box1">
        <img src={user.avatar} alt={user.first_name} className="circle-image" />
      </div>
      <div className="box2">
        {user.first_name} {user.last_name} <br />
        {user.email}
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    
  }).isRequired,
};

export default Card;
