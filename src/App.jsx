import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import GroupList from './components/Group/GroupList';
import NoteList from './components/Note/NoteList';
import './App.css';
import noSelectionImage from './assets/no-selection.png';
import endToEndEncrytptionImage from './assets/ene.png';


function App() {
  const [groups, setGroups] = useLocalStorage('groups', []);
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGroupCreate = ({ name, color }) => {
    const newGroup = {
      id: Date.now(),
      name,
      color,
    };
    setGroups([...groups, newGroup]);
  };

  const handleNoteAdd = (content) => {
    if (!selectedGroupId) return;

    const newNote = {
      id: Date.now(),
      groupId: selectedGroupId,
      content,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };
  const handleBackToSidebar = () => {
    setIsSidebarOpen(true); 
  };
  const filteredNotes = notes.filter(note => note.groupId === selectedGroupId);

  return (
    <div className="app">
      <div className="sidebar">
        <div className='app-title'>
          <h2>Pocket Notes</h2>
        </div>
        <GroupList
          groups={groups}
          selectedGroupId={selectedGroupId}
          onGroupSelect={(id) => {
            setSelectedGroupId(id);
            setIsSidebarOpen(false);
          }}
          onGroupCreate={handleGroupCreate}
        />
      </div>

      <div className="main-content">
        {selectedGroupId ? (
          <NoteList
            notes={filteredNotes}
            onNoteAdd={handleNoteAdd}
            group={groups.find(group => group.id === selectedGroupId)} 
            onBack={handleBackToSidebar}
          />
        ) : (
          <>
            <div className="no-selection">
              <img
                src={noSelectionImage}
                alt="No selection illustration"
                className="no-selection-image"
              />
            </div>
            <div className='endToEnd'>
              <img src={endToEndEncrytptionImage} alt="end to end" />
            </div>
          </>

        )}
      </div>
    </div>
  );
}

export default App;