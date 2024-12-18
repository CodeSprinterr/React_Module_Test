const NoteItem = ({ note }) => {
  // Format the date to "9 Mar 2023 • 10:10 AM"
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    // Format date to "9 Mar 2023"
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    // Format time to "10:10 AM"
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    return `${formattedDate} • ${formattedTime}`;
  };

  return (
    <div className="note-item">
      <p className="note-content">{note.content}</p>
      <div className="note-meta">
        <span>{formatDateTime(note.createdAt)}</span>
      </div>
    </div>
  );
};

export default NoteItem;
