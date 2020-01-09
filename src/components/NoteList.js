import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import NoteItem from './NoteItem';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return notes.map(note => {
    return <NoteItem key={note.title} note={note} />;
  });
};

export { NoteList as default };
