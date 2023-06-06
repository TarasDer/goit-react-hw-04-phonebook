import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, handleFilterChange }) {
  return (
    <label>
      Find contacts by name
      <input
        className={css.contact_filter}
        type="text"
        input={filter}
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
