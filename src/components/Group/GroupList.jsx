import { useState } from 'react';
import PropTypes from 'prop-types';
import GroupPopup from './GroupPopup';
import GroupIcon from './GroupIcon';
import './Group.css';

const GroupList = ({ groups, selectedGroupId, onGroupSelect, onGroupCreate }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="group-list">
      <div className="groups">
        {groups.map((group) => (
          <div
            key={group.id}
            className={`group-item ${group.id === selectedGroupId ? 'selected' : ''}`}
            onClick={() => onGroupSelect(group.id)}
          >
            <GroupIcon name={group.name} color={group.color} />
            <span className="group-name">{group.name}</span>
          </div>
        ))}
      </div>

      <button 
        className="create-group-btn"
        onClick={() => setShowPopup(true)}
      >
        <span className='plus-icon'>+</span>
      </button>

      {showPopup && (
        <GroupPopup
          onClose={() => setShowPopup(false)}
          onSubmit={onGroupCreate}
        />
      )}
    </div>
  );
};

GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedGroupId: PropTypes.number,
  onGroupSelect: PropTypes.func.isRequired,
  onGroupCreate: PropTypes.func.isRequired,
};

export default GroupList;