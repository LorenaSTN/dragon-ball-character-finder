import DB from "../images/DB.png";
import PropTypes from "prop-types";
import "../scss/main/Card.scss";

function Cards({ characters, selectedCharacter, onSelectCharacter }) {
  const orderedCharacters = selectedCharacter
    ? [
        selectedCharacter,
        ...characters.filter(
          (char) =>
            char.name.toLowerCase() !== selectedCharacter.name.toLowerCase()
        ),
      ]
    : characters;

  return (
    <div className="cards__container">
      <div className="cards__header">
        <h3 className="cards__header__title">Dragon Ball character finder</h3>
        <img className="cards__header__image" src={DB} alt="Dragon Ball" />
      </div>
      <div className="cards__div">
        <ul>
          {orderedCharacters.map((char) => {
            const isSelected =
              selectedCharacter?.name.toLowerCase() === char.name.toLowerCase();

            return (
              <li
                key={char.name}
                onClick={() => onSelectCharacter(isSelected ? null : char)}
                className={!isSelected ? "finder__li" : ""}
                style={{ cursor: "pointer" }}
              >
                {isSelected ? (
                  <article
                    className={`card ${
                      char.parsedKi > 1e24 ? "card--highlight" : ""
                    }`}
                  >
                    <div className="card__container">
                      <div className="card__image__container">
                        <img
                          className="card__image"
                          src={char.image}
                          alt={char.name}
                        />
                      </div>
                      <div className="card__info">
                        <p>{char.name}</p>
                        <p>{char.ki}</p>
                      </div>
                      <p className="card__description">{char.description}</p>
                    </div>
                  </article>
                ) : (
                  <>
                    <span>{char.name}</span>
                    <div>
                      <span>{char.ki}</span>
                      <i className="fa-solid fa-angle-down finder__icon"></i>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ki: PropTypes.string.isRequired,
      parsedKi: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ki: PropTypes.string.isRequired,
    parsedKi: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onSelectCharacter: PropTypes.func.isRequired,
};
