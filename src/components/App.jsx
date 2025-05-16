import "../scss/App.scss";
import charactersFromApi from "./services/charactersFromApi";
import { useEffect, useState } from "react";
import Filter from "./Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      console.log(charactersData);
      setCharacters(charactersData);
      setFiltered(charactersData);
    });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault(); 
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase())
    })
    setFiltered(filteredCharacters);
    console.log(filteredCharacters)
  }

  return (
    <div>
      <Filter valueName={filterName} onChangeName={setFilterName} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
