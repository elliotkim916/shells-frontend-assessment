import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Videos from '../Videos/Videos';
import SearchForm from '../Forms/SearchForm';
import FilterForm from '../Forms/FilterForm';
import { ParentContext } from '../../context/ParentContext';
import styles from './LandingPage.module.css';

const LandingPage = ({ searchVideos, filterVideos }) => {
  const { allVideos } = useContext(ParentContext);

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
      <Videos videos={allVideos} />
    </div>
  );
};

export default LandingPage;