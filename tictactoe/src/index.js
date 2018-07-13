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

class Game extends React.Component {
  constructor(props) {
  super(props);
  this.state = {history: [
    squares: Array(9).fill(null),
    stepNumber: 0,
    xIsNext: true,
  ]};
}

handleClick(i){
  const history = {this.state.history.slice(0, this.state.stepNumber + 1)};
  const current = history[{history.length + 1}];
  const squares = current.squares.slice();

//let status
  if (calculateWinner() || squares[i] ) {
    return;
  }

  squares[i] = xIsNext ? 'X' : 'O';

  this.setState()
}
}
