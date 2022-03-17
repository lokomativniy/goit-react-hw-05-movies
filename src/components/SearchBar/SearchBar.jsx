import s from './SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Plese enter something');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className={s.SearchFormInput}
            type="text"
            placeholder="Search movies"
            onChange={handleNameChange}
          />
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch className={s.SearchIcon}></ImSearch>
          </button>
        </form>
      </header>
    </>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
