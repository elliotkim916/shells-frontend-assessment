import React, { useEffect, useState, useContext } from 'react';
import styles from './AuthPage.module.css';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Videos from '../Videos/Videos';
import CreateForm from '../Forms/CreateForm';
import { ParentContext } from '../../context/ParentContext';

Amplify.configure(awsconfig);

const AuthPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { allVideos, addVideo } = useContext(ParentContext);

  useEffect(() => {
    localStorage.setItem('user', 'true');
  }, []);

  return (
    <div className={styles.authContainer}>
      <div className={styles.signOut}>
        <AmplifySignOut />
      </div>

      <h1>Welcome, you have logged in successfully!</h1>  
      <br/>
      <button 
        type="button" 
        className={styles.createBtn}
        onClick={() => setShowCreateForm(true)}
      >
        Create new video
      </button>

      { showCreateForm ? <CreateForm setShowCreateForm={setShowCreateForm} addVideo={addVideo} /> : null }

      <Videos videos={allVideos} />    
    </div>
  );
};

export default withAuthenticator(AuthPage);