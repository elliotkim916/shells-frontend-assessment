import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './FilterForm.module.css';

const FilterForm = ({ filterVideos }) => {
  const [filterType, setFilterType] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    
    if (!filterType && !filterRating && !filterDate) {
      return window.alert('Must choose at least one filter..');
    }

    filterVideos(e, { filterType, filterRating, filterDate });
    history.push('/filteredResults');
  }

  return (
    <div className={styles.filterFormContainer}>
      <form onSubmit={onSubmit}>
        <label htmlFor="type">Filter by Video Type</label><br/>
        <select value={filterType} onChange={e => setFilterType(e.target.value)} id="type">
          <option>---</option>
          <option value="Movie">Movie</option>
          <option value="TV">TV</option>
          <option value="Documentary">Documentary</option>
        </select><br/><br/>

        <label htmlFor="rating">Filter by Rating</label><br/>
        <select value={filterRating} onChange={e => setFilterRating(e.target.value)} id="rating">
          <option>---</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select><br/><br/>

        <label htmlFor="date">Filter by Date</label><br/>
        <input 
          type="date" 
          placeholder="filter by date.." 
          onChange={e => setFilterDate(e.target.value)} 
          value={filterDate} 
          id="date"
        /><br/>
        <button type="submit" className={styles.filterBtn}>Filter</button>
      </form>
    </div>
  );
};

export default FilterForm;