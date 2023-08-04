import { useState } from "react";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

function App() {
  const [filterText, setFilterText] = useState("");
  return (
    <div className="app">
      <h1 className="header">Notes App</h1>

      <SearchBar filterText={filterText} setFilterText={setFilterText} />

      <NoteList filterText={filterText} />
    </div>
  );
}

export default App;
