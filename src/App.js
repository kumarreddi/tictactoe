import React, { Component } from 'react';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'

const Square = (props) => {
  return (
    <button className="square" onClick={props.onclick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  createBoard = () => {
    let rows = [];
    for (let i = 0; i < this.props.BoardState.length; i++) {
      let columns = [];
      for (let j = 0; j < this.props.BoardState[0].length; j++) {
        columns.push(<Square key={j} value={this.props.BoardState[i][j]} />);
      }
      rows.push(<div key={i} className="row">{columns}</div>)
    }
    return rows;
  }

  render() {
    console.log(this.props.BoardState.length);
    return (
      <div className="container">
        {this.createBoard()}
      </div>
    );
  }
}

const PlayButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}> {props.text}</button>
  );
}


class App extends Component {
  state = {
    BoardSize: '',
    BoardState: [[]]
  }

  initializeBoard = (size) => {
    console.log(size);
    this.setState({
      BoardSize: size,
      BoardState: [...Array(size)].map(e => Array(size))
    });
  }

  render() {

    let board;
    if (this.state.BoardSize) {

      board = <Board BoardState={this.state.BoardState} />
    }
    else {
      board = ""
    }


    return (
      <div >
       
        <div>
          <PlayButton onClick={() => this.initializeBoard(3)} className="fa fa-3x" text="3x3 Board" />
          <br />
          <PlayButton onClick={() => this.initializeBoard(4)} className="fa fa-3x" text="4x4 Board" />
          <br />
          <PlayButton onClick={() => this.initializeBoard(5)} className="fa fa-3x" text="5x5 Board" />
        </div>
        <br />
        <br />
        <br />
        <div>
          {board}
        </div>

      </div>

    );
  }
}

export default App;
