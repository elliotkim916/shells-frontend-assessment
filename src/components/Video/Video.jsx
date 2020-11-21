import React from 'react';
import styles from './Video.module.css';
import { useHistory } from 'react-router-dom';

const Video = ({ data }) => {
  const { title, releaseDate, type, synopsis, coverPicture, userRating, id } = data;
  const history = useHistory();

  return (
    <div 
      className={styles.videoContainer} 
      onClick={() => history.push(`/viewVideo/${id}`)}
    >
      <h3>{title}</h3>
      <img src={coverPicture} alt='Video Preview' />
      <p>Type: {type}</p>
      <p>Rating: {userRating}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Synopsis: {synopsis}</p>
    </div>
  );
};

export default Video;