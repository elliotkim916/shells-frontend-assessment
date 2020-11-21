import { v4 as uuidv4 } from 'uuid';

export const getVideos = async () => {
  return (
    [
      {
        id: uuidv4(),
        title: 'Mulan',
        releaseDate: '2020-11-19',
        type: 'Movie',
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverPicture: 'https://picsum.photos/200',
        userRating: 5
      },
      {
        id: uuidv4(),
        title: 'Batman',
        releaseDate: '2020-11-19',
        type: 'Movie',
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverPicture: 'https://picsum.photos/200',
        userRating: 2
      },
      {
        id: uuidv4(),
        title: 'Spider Man',
        releaseDate: '2020-10-19',
        type: 'TV Show',
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverPicture: 'https://picsum.photos/200',
        userRating: 4
      },
      {
        id: uuidv4(),
        title: 'The Avengers',
        releaseDate: '2020-09-19',
        type: 'Documentary',
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverPicture: 'https://picsum.photos/200',
        userRating: 3
      },
      {
        id: uuidv4(),
        title: 'Parasite',
        releaseDate: '2020-08-19',
        type: 'Movie',
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverPicture: 'https://picsum.photos/200',
        userRating: 5
      },
    ]
  );
};