import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesarr, setNotesarr] = useState([]);

  function addNote(newNote) {
    setNotesarr((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotesarr((prevNotes) => {
      return prevNotes.filter((note, idx) => idx !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesarr.map((note, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
