import React from 'react';
import { Link } from 'react-router-dom';
import Videos from '../Videos/Videos';
import SearchForm from '../Forms/SearchForm';
import FilterForm from '../Forms/FilterForm';
import styles from './LandingPage.module.css';

const LandingPage = ({ videos, searchVideos, filterVideos }) => {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.signIn}>
        <Link to="/auth" className={styles.link}>Sign In</Link>
      </div>

      <h1>Shells Front End Assessment</h1>
      <br/>

      <div className={styles.forms}>
        <SearchForm searchVideos={searchVideos} />
        <FilterForm filterVideos={filterVideos} />
      </div>
      <Videos videos={videos} />
    </div>
  );
};

export default LandingPage;