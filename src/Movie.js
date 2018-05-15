import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string
    })
  };

  static defaultProps = {
    desc: "Description not available"
  };

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.desc}</p>
      </div>
    );
  }
}

export default Movie;
