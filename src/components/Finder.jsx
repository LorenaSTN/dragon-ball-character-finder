import "../scss/main/Finder.scss";
import PropTypes from "prop-types";
import DB from "../images/DB.png";

function Finder({ characters, selectedCharacter, onSelectCharacter, listRef }) {
  const orderedCharacters = selectedCharacter
    ? [
        selectedCharacter,
        ...characters.filter((char) => char.name !== selectedCharacter.name),
      ]
    : characters;
  return (
    <div className="finder__container">
      <div className="finder__header">
        <h3 className="finder__header__title">Dragon Ball character finder</h3>
        <img className="finder__header__image" src={DB} alt="Dragon Ball" />
      </div>
      <p className="finder__description">{characters.length} results found</p>
      <div className="finder__div" ref={listRef}>
        <ul>
          {orderedCharacters.map((char) => (
            <li
              key={char.name}
              onClick={() => onSelectCharacter(char)}
              className="finder__li"
            >
              <span>{char.name}</span>
              <div>
                <span>{char.ki}</span>
                <i className="fa-solid fa-angle-down finder__icon"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Finder;

Finder.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ki: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ki: PropTypes.string.isRequired,
  }),
  onSelectCharacter: PropTypes.func.isRequired,
  listRef: PropTypes.object,
};
