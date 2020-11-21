import React from 'react';
import Video from '../Video/Video';
import styles from './SearchResults.module.css';

const SearchResults = ({ searchedVideo }) => {
  let videosToRender;
 
  if (searchedVideo.length) {
    videosToRender = searchedVideo;
  } else {
    return (
      <div>
        <h3>No search results, try a new search!</h3>
      </div>
    )
  }
  
  return (
    <div>
      <h3>Your Search Results</h3>

      <div className={styles.searchResults}>
        { videosToRender.map((video, index) => <Video data={video} key={index} />) }
      </div>
    </div>
  );
};

export default SearchResults;