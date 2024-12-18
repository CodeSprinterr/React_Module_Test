import { useState } from 'react';
import PropTypes from 'prop-types';

const NoteInput = ({ onSubmit }) => {
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      onSubmit(newNote);
      setNewNote('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <div className="textarea-container">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your text here........"
        />
        <button
          type="submit"
          disabled={!newNote.trim()}
          // className={!newNote.trim() ? 'disabled' : ''}
          className={`submit-button ${!newNote.trim() ? 'disabled' : ''}`}
        >
          →
        </button>
      </div>

    </form>
  );
};

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoteInput;