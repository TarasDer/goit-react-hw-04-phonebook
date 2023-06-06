import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contact_name} key={id}>
            {name} :<span className={css.contact_number}>{number}</span>
            <button type="button" onClick={() => deleteContact(name)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
