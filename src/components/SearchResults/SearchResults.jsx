import React from 'react';
import Video from '../Video/Video';
import styles from './SearchResults.module.css';

const SearchResults = ({ searchedVideo }) => {
  if (searchedVideo.length) {
    return (
      <div>
        <h3>Your Search Results</h3>

        <div className={styles.searchResults}>
          { searchedVideo.map((video, index) => <Video data={video} key={index} />) }
        </div>
      </div>
    );
} else {
    return (
      <div>
        <h3>No search results, try a new search!</h3>
      </div>
    );
  }
}

export default SearchResults;