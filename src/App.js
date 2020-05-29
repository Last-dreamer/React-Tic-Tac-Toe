import React from 'react';
import './App.css';

// possible entity.....  
const EMPTY ='EMPTY';
const CROSS ='CROSS';
const CIRCLE ='CIRCLE';


function App() {
  // using hooks for dynamic var
  const [state, setState] = React.useState({
   player: CIRCLE,
   positions: [
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY
  ],
  });
 
 
 // it will track the 2 players...
 function takeTurn(position){
   // using spread operator to track the previous positions..
   const positions = [...state.positions];
   positions[position] = state.player;

   setState({
     player: state.player === CIRCLE ? CROSS : CIRCLE,
     positions,
   });   
 }
 
 
 
function detectWinner(p) {
  if(p[0] == CIRCLE && p[1] == CIRCLE && p[2] == CIRCLE){
    return CIRCLE;
  }
  if(p[3] == CIRCLE && p[4] == CIRCLE && p[5] == CIRCLE){
    return CIRCLE;
  }
  if(p[6] == CIRCLE && p[7] == CIRCLE && p[8] == CIRCLE){
    return CIRCLE;
  }
  if(p[0] == CIRCLE && p[4] == CIRCLE && p[8] == CIRCLE){
    return CIRCLE;
  }
  if(p[2] == CIRCLE && p[4] == CIRCLE && p[6] == CIRCLE){
    return CIRCLE;
  }
  if(p[0] == CIRCLE && p[3] == CIRCLE && p[6] == CIRCLE){
    return CIRCLE;
  }
  if(p[1] == CIRCLE && p[4] == CIRCLE && p[7] == CIRCLE){
    return CIRCLE;
  }
  if(p[2] == CIRCLE && p[5] == CIRCLE && p[8] == CIRCLE){
    return CIRCLE;
  }
  
  // for cross...
  
  if(p[0] == CROSS && p[1] == CROSS && p[2] == CROSS){
    return CROSS;
  }
  if(p[3] == CROSS && p[4] == CROSS && p[5] == CROSS){
    return CROSS;
  }
  if(p[6] == CROSS && p[7] == CROSS && p[8] == CROSS){
    return CROSS;
  }
  if(p[0] == CROSS && p[4] == CROSS && p[8] == CROSS){
    return CROSS;
  }
  if(p[2] == CROSS && p[4] == CROSS && p[6] == CROSS){
    return CROSS;
  }
  if(p[0] == CROSS && p[3] == CROSS && p[6] == CROSS){
    return CROSS;
  }
  if(p[1] == CROSS && p[4] == CROSS && p[7] == CROSS){
    return CROSS;
  }
  if(p[2] == CROSS && p[5] == CROSS && p[8] == CROSS){
    return CROSS;
  }
  
  // for tie ....  
  if(p.every(position => position!= EMPTY)) return "It's a tie"; 
}

const winner = detectWinner(state.positions);


 function reset(){
   setState({
    player: CIRCLE,
    positions: [
     EMPTY, EMPTY, EMPTY,
     EMPTY, EMPTY, EMPTY,
     EMPTY, EMPTY, EMPTY
    ] 
   });  
 }
 
 
  return (
    <div >
      <div className="App">
      <div className='grid'>
       <Square position={0} value={state.positions[0]} takeTurn={takeTurn}/>
       <Square position={1} value={state.positions[1]} takeTurn={takeTurn}/>
       <Square position={2} value={state.positions[2]} takeTurn={takeTurn}/>
       <Square position={3} value={state.positions[3]} takeTurn={takeTurn}/>
       <Square position={4} value={state.positions[4]} takeTurn={takeTurn}/>
       <Square position={5} value={state.positions[5]} takeTurn={takeTurn}/>
       <Square position={6} value={state.positions[6]} takeTurn={takeTurn}/>
       <Square position={7} value={state.positions[7]} takeTurn={takeTurn}/>
       <Square position={8} value={state.positions[8]} takeTurn={takeTurn}/>
      </div>
      </div>
       {winner && <Result winner={winner} reset={reset}/>}
    </div>
    
  );
}



function Square(props) {
  // if empty then can be clicked ...
 function  handleClicked(){
    if(props.value == EMPTY) props.takeTurn(props.position)
    
  }
return (<div className='square' onClick={handleClicked}>
        
          {props.value == CIRCLE && <Circle />}
          {props.value == CROSS && <Cross />}
        </div>)
}

function Circle() {
  return <svg width='100' height="100" className='circle'
          viewBox="-50 -50 100 100">
            <circle cx='0' cy ='0' r='40'/>
        </svg>
}

function Cross() {
  return <svg width='100' height="100" className='cross'
          viewBox="-50 -50 100 100">
           <line x1='-40' y1='-40' x2='40' y2='40'/>
           <line x1='-40' y1='40' x2='40' y2='-40'/>
        </svg>
}
function Result(props) {
  return(
   <div className="result">

    {props.winner == CIRCLE && "Circle won the game"}
    {props.winner == CROSS && "Cross won the game"}
    {props.winner == "It's a tie" && "It's a tie"}
    <button onClick={props.reset}>Reset</button>
   </div>)
}
export default App;
