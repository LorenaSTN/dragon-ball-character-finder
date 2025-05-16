import "../scss/main/Filter.scss";
import PropTypes from "prop-types";
import kiOptions from "./services/kiOptions";
import DB from "../images/DB.png";

const options = kiOptions();

function Filter({
  valueName,
  onChangeName,
  onSubmit,
  kiFrom,
  kiTo,
  onChangeKiRange,
}) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  const handleKiChange = (e, type) => {
    const value = parseFloat(e.target.value);
    if (type === "from") {
      if (value <= kiTo) {
        onChangeKiRange(value, kiTo);
      }
    } else {
      if (value >= kiFrom) {
        onChangeKiRange(kiFrom, value);
      }
    }
  };
  return (
    <div className="filter__container">
      <div className="filter__header">
        <h3 className="filter__header__title">Dragon Ball character finder</h3>
        <img className="filter__header__image" src={DB} alt="Dragon Ball" />
      </div>

      <p className="filter__description">
        What Dragon Ball character are you looking for?
      </p>

      <form className="filter__form" onSubmit={onSubmit}>
        <div className="filter__form__div">
          <div className="filter__name">
            <label htmlFor="name">Search by name</label>
            <input
              className="input__name"
              type="text"
              id="name"
              placeholder="🔍 Goku"
              value={valueName}
              onChange={handleChangeName}
            />
          </div>

          <div className="filter__ki">
            <label htmlFor="ki">Search Ki range</label>
            <div className="filter__selects">
              <select
                value={kiFrom}
                onChange={(ev) => handleKiChange(ev, "from")}
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <select value={kiTo} onChange={(ev) => handleKiChange(ev, "to")}>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="filter__button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  valueName: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  kiFrom: PropTypes.number.isRequired,
  kiTo: PropTypes.number.isRequired,
  onChangeKiRange: PropTypes.func.isRequired,
};
