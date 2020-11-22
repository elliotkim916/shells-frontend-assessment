import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage, AuthPage, SearchResults, FilteredVideos, ViewVideo } from './components';
import { getVideos } from './api';
import { ParentContext } from './context/ParentContext';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allVideos = await getVideos();

        if (allVideos) {
          setVideos(allVideos);
        } else {
          throw new Error('API call fail..');
        }
      } catch(e) {
        setError(e);
      }
    }

    fetchData();

    localStorage.setItem('user', 'false');
  }, []);

  const searchVideos = (e, video) => {
    e.preventDefault();
    const foundVideo = videos.filter(vid => vid.title.toLowerCase() === video.toLowerCase());

    setSearchedVideo(foundVideo);
  }

  const filterVideos = (e, filter) => {
    e.preventDefault();
    
    const { filterType, filterRating, filterDate } = filter;
    
    let filteredVids = videos;
    if (filterType) {
      filteredVids = filteredVids.filter(video => video.type === filterType);
    }

    if (filterRating) {
      filteredVids = filteredVids.filter(video => video.userRating === parseInt(filterRating));
    }
    
    if (filterDate) {
      filteredVids = filteredVids.filter(video => video.releaseDate === filterDate.toString());
    }

    setFilteredVideos(filteredVids);
  };

  const addVideo = newVideo => {
    const newVideos = [newVideo, ...videos];
    setVideos(newVideos);
  }

  const deleteVideo = id => {
    const newVideos = videos.filter(video => video.id !== id);
    setVideos(newVideos);
  }

  const updateVideo = updatedVideo => {
    const index = videos.findIndex(video => video.id === updatedVideo.id);
    let videosCopy = videos;
    videosCopy.splice(index, 1, updatedVideo);
    setVideos(videosCopy);
  }

  return (
    <div className="App">
      <ParentContext.Provider value={{ allVideos: videos, deleteVideo, updateVideo, addVideo }}>
        <Router>
          <Route 
            exact path="/" 
            render={(props) => <LandingPage searchVideos={searchVideos} filterVideos={filterVideos} {...props} />} 
          />
          <Route 
            exact path="/auth" 
            render={(props) => <AuthPage {...props} />}
          />
          <Route 
            exact path="/searchResults"
            render={(props) => <SearchResults searchedVideo={searchedVideo} {...props} />}
          />
          <Route 
            exact path="/filteredResults"
            render={(props) => <FilteredVideos filteredVideos={filteredVideos} {...props} />}
          />
          <Route 
            exact path="/viewVideo/:id"
            render={(props) => <ViewVideo {...props} />}
          />
        </Router>
      </ParentContext.Provider>
    </div>
  );
}

export default App;
