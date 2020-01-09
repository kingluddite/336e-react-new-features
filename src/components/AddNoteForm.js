import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context.js';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const position = useMousePosition();

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>Add note</p>
      <p>
        Position X: {position.x}, Position Y: {position.y}
      </p>
      <form onSubmit={addNote}>
        <p>
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </p>
        <button>add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
