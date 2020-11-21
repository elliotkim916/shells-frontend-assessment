import React from 'react';
import Video from '../Video/Video';
import styles from './FilteredVideos.module.css';

const FilteredVideos = ({ filteredVideos }) => {
  if (filteredVideos.length) {
    return (
      <div>
        <h3>Filtered Search Results</h3>
        
        <div className={styles.filteredVideosContainer}>
          { filteredVideos.map((video, index) => <Video data={video} key={index} />) }
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No filtered results, try a new search..</h3>
      </div>
    )
  }
};

export default FilteredVideos;