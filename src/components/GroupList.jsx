import { useState } from 'react';

const GroupList = ({ groups, onGroupSelect, onGroupCreate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [groupName, setGroupName] = useState('');

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      onGroupCreate(groupName);
      setGroupName('');
      setShowPopup(false);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      setShowPopup(false);
    }
  };

  return (
    <div className="group-list">
      <button className="create-group-btn" onClick={() => setShowPopup(true)}>
        + Create New Group
      </button>
      
      <div className="groups">
        {groups.map((group) => (
          <div
            key={group.id}
            className="group-item"
            onClick={() => onGroupSelect(group.id)}
          >
            {group.name}
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClickOutside}>
          <div className="popup">
            <h3>Create New Group</h3>
            <form onSubmit={handleCreateGroup}>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
                autoFocus
              />
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupList;