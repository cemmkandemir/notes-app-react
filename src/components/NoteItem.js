import { useState, useEffect } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const NoteItem = ({ note, onDeleteNote }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setIsAdded(true);
    return () => {
      setIsAdded(false);
    };
  }, []);

  return (
    <div className={`noteItem-container ${isAdded ? "added" : ""}`}>
      <textarea disabled={!isEditable} className="textarea-noteItem">
        {note.description}
      </textarea>
      <div className="noteItem__buttons-container">
        <button
          className="btn__edit-noteItem"
          onClick={() => setIsEditable((isEditable) => !isEditable)}
        >
          {isEditable ? <FaCheck /> : <FaEdit />}
        </button>
        <button
          className="btn__delete-noteItem"
          onClick={() => onDeleteNote(note.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default NoteItem;
