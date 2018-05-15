import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movie from "./Movie";

class App extends Component {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=9d973532bc2328d58fcde62ef837d918&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );

      const movies = await res.json();
      this.setState(() => {
        return {
          movies: movies.results
        };
      });
      console.log(movies);
    } catch (error) {
      console.log("error fetching data ", error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
