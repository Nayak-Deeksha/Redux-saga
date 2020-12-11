import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
// function* generatorExample() {
//   console.log("here");
//     yield 8;
//     yield 10;
//    yield 12;
// }

// // const generatorObj = generatorExample();
// // console.log(generatorObj);

// // console.log(generatorObj.next()); 
// // console.log(generatorObj.next());
// // console.log(generatorObj.next());
// // console.log(generatorObj.next());
// // console.log(generatorObj.next());

// for (const n of generatorExample()) {
//   console.log(n);
// }

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
          {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
            )}
              {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);