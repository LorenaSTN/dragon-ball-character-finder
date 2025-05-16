import "../scss/App.scss";
import charactersFromApi from "./services/charactersFromApi";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import parseKi from "./services/parseki";
import Finder from "./Finder";
import Cards from "./Cards";
import { useRef } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [kiFrom, setKiFrom] = useState(0);
  const [kiTo, setKiTo] = useState(Infinity);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const finderListRef = useRef(null);

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      const formatted = charactersData.map((character) => ({
        ...character,
        parsedKi: parseKi(character.ki),
      }));
      setCharacters(formatted);
      setFiltered(formatted);
    });
  }, []);

  useEffect(() => {
    if (selectedCharacter && finderListRef.current) {
      finderListRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [selectedCharacter]);

  const handleChangeKiRange = (from, to) => {
    setKiFrom(from);
    setKiTo(to);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const result = characters.filter((char) => {
      const nameMatch = char.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const kiMatch = char.parsedKi >= kiFrom && char.parsedKi <= kiTo;
      return nameMatch && kiMatch;
    });
    setFiltered(result);
  };

  return (
    <div className="container">
      <Filter
        valueName={filterName}
        onChangeName={setFilterName}
        kiFrom={kiFrom}
        kiTo={kiTo}
        onChangeKiRange={handleChangeKiRange}
        onSubmit={handleSubmit}
      />

      <Finder
        characters={filtered}
        onSelectCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
        listRef={finderListRef}
      />

      <Cards
        characters={filtered}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={setSelectedCharacter}
      />
    </div>
  );
}

export default App;
