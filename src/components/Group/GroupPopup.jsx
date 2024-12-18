import { useState } from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import { GROUP_COLORS } from '../../constants/colors';
import './Group.css';

const GroupPopup = ({ onClose, onSubmit }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(GROUP_COLORS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      onSubmit({ name: groupName, color: selectedColor });
      setGroupName('');
      onClose();
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleClickOutside}>
      <div className="popup">
        <h3>Create New Group</h3>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <label><h4>Group Name</h4></label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              autoFocus
            />
          </div>
          <div className="d-flex">
            <label><h4>Choose Color</h4></label>
            <span>
              <ColorPicker
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
            </span>
          </div>
          <div className="create-button">
            <button type="submit" disabled={!groupName.trim()}><span className="create-button-text">Create</span></button>
          </div>
        </form>
      </div>
    </div>
  );
};

GroupPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default GroupPopup;