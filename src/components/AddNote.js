import { useState } from "react";

const AddNote = ({ setNotes }) => {
  const [noteText, setNoteText] = useState("");

  function handleAddNote() {
    if (!noteText) return;
    const newNote = { id: Date.now(), description: noteText };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setNoteText("");
  }

  return (
    <div className="add-note-containter">
      <textarea
        placeholder="Enter your note here..."
        className="textarea-add-note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn-add" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};
export default AddNote;
