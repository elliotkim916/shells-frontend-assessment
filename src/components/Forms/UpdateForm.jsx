import React, { useState } from 'react';
import styles from './CreateForm.module.css';
import { useHistory } from 'react-router-dom';

const UpdateForm = ({ setShowUpdateForm, video, updateVideo }) => {
  const { id, coverPicture, releaseDate, title, type, userRating, synopsis } = video;
  const [videoName, setVideoName] = useState(title);
  const [videoImage, setVideoImage] = useState(coverPicture);
  const [videoType, setVideoType] = useState(type);
  const [videoRating, setVideoRating] = useState(userRating);
  const [videoDate, setVideoDate] = useState(releaseDate);
  const [vidSynopsis, setVidSynopsis] = useState(synopsis);
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const updatedVideo = {
      id,
      title: videoName,
      releaseDate: videoDate,
      type: videoType,
      synopsis: vidSynopsis,
      coverPicture: videoImage,
      userRating: videoRating
    };

    updateVideo(updatedVideo);
    setShowUpdateForm(false);
    history.push('/auth');
  }
  
  

  return (
    <div className={styles.createFormContainer}>
      <h3>Update your video</h3>

      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Enter video name.." 
          onChange={e => setVideoName(e.target.value)}
          value={videoName}  
        /><br/>
        {/* for fake image, add this in image input - https://picsum.photos/200 */}
        <input 
          type="text" 
          placeholder="Enter video image.." 
          onChange={e => setVideoImage(e.target.value)}  
          value={videoImage}
        /><br/>
        <input 
          type="text" 
          placeholder="Enter video type.." 
          onChange={e => setVideoType(e.target.value)}  
          value={videoType}
        /><br/>
        <input 
          type="number" 
          placeholder="Enter rating.." 
          onChange={e => setVideoRating(e.target.value)}  
          value={videoRating}
        /><br/>

        <label htmlFor="date">Choose release date..</label><br/>
        <input 
          type="date" 
          id="date"
          onChange={e => setVideoDate(e.target.value)}
          value={videoDate}  
        /><br/>

        <textarea 
          placeholder="Enter synopsis.."
          onChange={e => setVidSynopsis(e.target.value)}
          value={vidSynopsis}
        >
        </textarea><br/>
        <button 
          type="submit" 
          className={styles.createBtn}
        >
          Update
        </button>
        <button 
          type="button" 
          className={styles.cancelBtn} 
          onClick={() => setShowUpdateForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;