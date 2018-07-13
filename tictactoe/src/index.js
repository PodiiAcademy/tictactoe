import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function square(props) {
  return {
    <button className = "square"
  onClick = { props.onClick }> { props.value }
  </button >
  };
};


class Board extends React.Component{

  renderSquare(i) {
    return (
      <square value={squares[i]},
        onClick=(i)=>{this.props.onClick} />
    )
  
  }
  render() {
    return (
      <div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          
          </div> 
          <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          </div>
          <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        </div>  
    )
  }
}