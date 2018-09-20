import React, { Component } from 'react';
import logo from './images/logo.jpg'
import './App.css';
import 'font-awesome/css/font-awesome.min.css'

const square = (props)=>{
  return (
    <button className="square" onclick={props.onclick}>
      {props.value} 
    </button>
  );
}

class Board extends React.Component{
  render(){
    return (
      <square />
    );
  }
}

const Button = (props) => {
  return (
    <button className={props.className}> {props.text}</button>
  );
}


class App extends Component {
  state={
   BoardSize: '',
   BoardState: [[]] 
  }

  initializeBoard = (size) =>{
    this.setState({
        BoardSize: size,
        BoardState: [...Array(size)].map(e=>Array(size))
    });
  }

  render() {

      let board;
      if(this.state.BoardSize)
      {
       board =  <Board size={this.state.BoardSize} />
      }
      else
      {
        board = ""
      }
    

    return (
      <div className="App">
            <Button className="fa fa-play fa-5x" text = "3x3" />
            
            <Button className="fa fa-play fa-5x" text = "4x4" />
            
            <Button className="fa fa-play fa-5x" text = "5x5" />
      
      <div>
        {board}
      </div>
       </div>
     
    );
  }
}

export default App;
