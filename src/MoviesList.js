/* eslint react/no-did-mount-set-state: 0 */
// eslint-disable-line react/no-did-mount-set-state

import React, { Component } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=9d973532bc2328d58fcde62ef837d918&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      );

      const movies = await res.json();
      this.setState(() => ({
        movies: movies.results,
      }));
      console.log(movies);
    } catch (error) {
      console.log('error fetching data ', error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;


const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 1rem;
`;

