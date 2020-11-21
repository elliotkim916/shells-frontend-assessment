import React, { useState, useContext } from 'react';
import { ParentContext } from '../../context/ParentContext';
import { useHistory } from 'react-router-dom';
import UpdateForm from '../Forms/UpdateForm';
import styles from './ViewVideo.module.css';

const ViewVideo = ({ match }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { allVideos, updateVideo, deleteVideo } = useContext(ParentContext);
  const history = useHistory();
  const { params: { id }} = match;
  
  const foundVideo = allVideos.find(video => video.id === id);
  const isUser = localStorage.getItem('user');
  
  if (foundVideo) {
    const { title, coverPicture, type, userRating, synopsis, releaseDate } = foundVideo;
    
    return (
      <div className={styles.viewContainer}>
        <h3>{title}</h3>
        <img src={coverPicture} alt='Video Preview' />
        <p>Type: {type}</p>
        <p>Rating: {userRating}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Synopsis: {synopsis}</p>
  
        {
          isUser === 'false' ? 
          null :
          <>
            <button 
              type="button" 
              className={styles.updateBtn}
              onClick={() => setShowUpdateForm(true)}
            >
              Update
            </button>
            <button 
              type="button" 
              className={styles.cancelBtn}
              onClick={() => {
                deleteVideo(id);
                history.push('/auth');
              }}
            >
              Delete
            </button>
          </> 
        }
        
        {
          showUpdateForm ?
          <UpdateForm 
            setShowUpdateForm={setShowUpdateForm} 
            video={foundVideo} 
            updateVideo={updateVideo} 
          /> :
          null
        } 
      </div>
    );
  } else {
    return null;
  }
};

export default ViewVideo;