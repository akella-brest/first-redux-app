import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    addText() {
        this.props.onAddText(this.textInput.value);
        this.textInput.value = '';
    }

    render() {
        console.log(this.props.testStore);
        return (
            <div className="App-header">
              <input type="text" ref={(input) => { this.textInput = input }}/>
              <button onClick={this.addText.bind(this)}>Add text</button>
              <ul>
                  {this.props.texts.map((text, index) =>
                      <li key={index}>{text}</li>
                  )}
              </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        texts: state.texts
    }),
    dispatch => ({
        onAddText: (textName) => {
            dispatch({ type: 'ADD_TEXT', payload: textName })
        }
    })
)(App);
