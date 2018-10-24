import React, { Component } from "react";

class Details extends Component {
  state = {
    show: false
  };

  showMore = () => {
    this.setState({
      show: !this.state.show
    });
  };

  showLess = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    if (!this.state.show) {
      return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.showMore}
        >
          More Info
        </button>
      );
    }

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.showLess}
        >
          Hide Info
        </button>
        <div>Director: {this.props.details.director}</div>
        <div>Release date: {this.props.details.release_date}</div>
        <div>Producer: {this.props.details.producer}</div>
        <br />
      </div>
    );
  }
}

export default Details;
