import ReactDOM from "react-dom";

import "./styles.css";

import React, { Component } from "react";
import axios from "axios";
import Details from "./details";

export default class App extends Component {
  state = {
    people: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://swapi.co/api/films/`)
      .then(response => {
        this.setState({ people: response.data.results, isLoading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    }

    return (
      <div className="App">
        <h2>Films of Star Wars</h2>
        <hr />
        {this.state.people.map((e, i) => {
          return (
            <div key={i}>
              <h3>{e.title}</h3>
              <Details details={e} />
            </div>
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
