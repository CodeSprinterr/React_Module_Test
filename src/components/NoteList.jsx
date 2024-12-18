import { useState, useEffect } from 'react';

const NoteList = ({ groupId, notes, onNoteAdd }) => {
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    
  }, [groupId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      onNoteAdd(newNote);
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
    <div className="note-list">
      <div className=''>
        <p></p>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <p>{note.content}</p>
            <div className="note-meta">
              <span>Created: {new Date(note.createdAt).toLocaleString()}</span>
              <span>Updated: {new Date(note.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="note-input" onSubmit={handleSubmit}>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your note here..."
        />
        <button type="submit">↵</button>
      </form>
    </div>
  );
};

export default NoteList;