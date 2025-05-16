import "../scss/App.scss";
import charactersFromApi from "./services/charactersFromApi";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import parseKi from "./services/parseki";
import Finder from "./Finder"; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [kiFrom, setKiFrom] = useState(0);
  const [kiTo, setKiTo] = useState(0);

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
 
      const formatted = charactersData.map((character) =>({
        ...character,
        parsed: parseKi(character.ki)
      }))
      setCharacters(formatted);
      setFiltered(formatted);
    });
  }, []);


  const handleChangeKiRange = (from, to) => {
    setKiFrom(from);
    setKiTo(to);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const result = characters.filter((char) => {
      const nameMatch = char.name.toLowerCase().includes(filterName.toLowerCase());
      const kiMatch = char.parsedKi >= kiFrom && char.parsedKi <= kiTo;
      return nameMatch && kiMatch;
    });
    setFiltered(result);
  };

  return (
    <div>
      <Filter
        valueName={filterName}
        onChangeName={setFilterName}
        kiFrom={kiFrom}
        kiTo={kiTo}
        onChangeKiRange={handleChangeKiRange}
        onSubmit={handleSubmit}
      />

      
    </div>
  );
}

export default App;
