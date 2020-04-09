import React, { Component, Fragment } from 'react'
import './App.css';
import Counter from './counter';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div class="container">
          <Counter />  
        </div>
      </Fragment>
    )
  }
}
