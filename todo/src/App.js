import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


const App = ({todos}) => {
  return (
    <div className="App">
      TODO
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(App);
