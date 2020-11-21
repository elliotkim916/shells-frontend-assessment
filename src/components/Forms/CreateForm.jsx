import React, { useState } from 'react';
import styles from './CreateForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const CreateForm = ({ setShowCreateForm, addVideo }) => {
  const [videoName, setVideoName] = useState('');
  const [videoImage, setVideoImage] = useState('');
  const [videoType, setVideoType] = useState('');
  const [videoRating, setVideoRating] = useState('');
  const [videoDate, setVideoDate] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const newVideo = {
      id: uuidv4(),
      title: videoName,
      releaseDate: videoDate,
      type: videoType,
      synopsis,
      coverPicture: videoImage,
      userRating: videoRating
    };

    addVideo(newVideo);
    setShowCreateForm(false);
  }

  return (
    <div className={styles.createFormContainer}>
      <h3>Create a new video</h3>

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
          min="1"
          max="5"
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
          onChange={e => setSynopsis(e.target.value)}
          value={synopsis}
        >
        </textarea><br/>
        <button 
          type="submit" 
          className={styles.createBtn}
        >
          Create
        </button>
        <button 
          type="button" 
          className={styles.cancelBtn} 
          onClick={() => setShowCreateForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateForm;