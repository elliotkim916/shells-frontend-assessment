import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';

const Videos = ({ videos }) => {
  return (
    <div className={styles.videosContainer}>
      { videos.map((video, index) => <Video data={video} key={index} />) }
    </div>
  );
};

export default Videos;