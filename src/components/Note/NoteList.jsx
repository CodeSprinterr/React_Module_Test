import NoteItem from './NoteItem';
import NoteInput from './NoteInput';
import GroupIcon from '../Group/GroupIcon'; // Import the GroupIcon component
import './Note.css';
import { useEffect } from 'react';

const NoteList = ({ notes, onNoteAdd, group, onBack }) => {
  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <div className="note-list">
      {group && (
        <div className="note-list-header">
          <button className="back-button" onClick={onBack}>
            ←
          </button>
          <GroupIcon name={group.name} color={group.color} />
          <span className="group-name-large">{group.name}</span>
        </div>
      )}
      <div className="notes-container">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <NoteInput onSubmit={onNoteAdd} />
    </div>
  );
};

export default NoteList;
