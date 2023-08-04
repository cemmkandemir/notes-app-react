import { useState, useEffect } from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const NoteList = ({ filterText }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const filteredNotes = notes.filter((note) =>
    note.description.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleDeleteNote(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete the note ?"
    );
    if (confirmed)
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="notelist-container">
      <AddNote setNotes={setNotes} />

      {notes.length === 0 ? (
        <p className="text__add-note">Add some notes</p>
      ) : filteredNotes.length === 0 ? (
        <p className="text__not-found">Note not found</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} onDeleteNote={handleDeleteNote} />
        ))
      )}
    </div>
  );
};
export default NoteList;
