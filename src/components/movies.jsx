import React, { Component } from "react";
import { getMovies } from "../fakeMoviesSrevice";
import { Table, Button } from "react-bootstrap";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteHandelar = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <h2>there is no movies in database</h2>;
    return (
      <div className="table">
        <h2>showing {count} movies in database </h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>title</th>
              <th>Gener</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Button
                    onClick={() => this.deleteHandelar(movie)}
                    variant="danger"
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Movies;
