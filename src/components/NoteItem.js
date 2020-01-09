import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const NoteItem = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  // We could put this custom code here but it would not be reusable
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        Position X: {position.x}, Position Y: {position.y}
      </p>
      <button
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        remove
      </button>
    </div>
  );
};

export default NoteItem;
