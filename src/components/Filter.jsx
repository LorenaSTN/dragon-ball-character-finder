import "../scss/main/Filter.scss";
import PropTypes from "prop-types";

function Filter({valueName, onChangeName, onSubmit}) {

    const handleChangeName = (ev) => {
        onChangeName(ev.target.value);
    }
  return (
    <div className="filter__container">

      <div className="filter__header">
        <h3 className="filter__header__title">Dragon Ball character finder</h3>
        <img src="" alt="" />
      </div>

      <p className="filter__description">
        What Dragon Ball character are you looking for?
      </p>

      <form className="filter__form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Search by name</label>
          <input
            className="input__name"
            type="text"
            id="name"
            placeholder="Goku"
            value={valueName}
            onChange={handleChangeName}
          />
        </div>

        <div>
            <label htmlFor="ki">Search Ki range</label>
            <div>
            </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
    valueName: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}
