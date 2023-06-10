import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(() => event.target.value);
  };

  const addNewContact = (name, number, id) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(state => [...state, { id, name, number }]);
  };

  const filterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = name => {
    const updateContacts = contacts.filter(contact => {
      return contact.name.toLowerCase() !== name.toLowerCase();
    });

    setContacts([...updateContacts]);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleChange} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  );
}
