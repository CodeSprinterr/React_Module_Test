import PropTypes from 'prop-types';
import { getInitials } from '../../utils/stringUtils';

const GroupIcon = ({ name, color }) => {
  return (
    <div 
      className="group-icon" 
      style={{ backgroundColor: color }}
    >
      {getInitials(name)}
    </div>
  );
};

GroupIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default GroupIcon;