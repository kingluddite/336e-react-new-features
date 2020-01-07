import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteItem from './NoteItem';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  useEffect(() => {
    console.log('getItem');
    const notesData = JSON.parse(localStorage.getItem('notes'));

    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    console.log('setItem');
    const json = JSON.stringify(notes);
    localStorage.setItem('notes', json);
  }, [notes]);

  return (
    <div>
      <h1>Note App</h1>
      {notes.map(note => {
        return (
          <NoteItem key={note.title} note={note} removeNote={removeNote} />
        );
      })}
      <p>Add note</p>
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
    </div>
  );
};

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
