import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SearchForm.module.css';

const SearchForm = ({ searchVideos }) => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  
  return (
    <div className={styles.searchFormContainer}>
      <form onSubmit={e => {
        searchVideos(e, searchValue);
        history.push('/searchResults');
      }}>
        <input 
          type="text" 
          onChange={e => setSearchValue(e.target.value)} 
          placeholder="Enter video name.."
          className={styles.searchInput} 
          required 
        />
        <button type="submit" className={styles.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;