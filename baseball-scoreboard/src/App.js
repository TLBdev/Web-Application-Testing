import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import Display from './components/display'

export const strikeHandlertest = (x) => {

  if (x < 2) {
    return x + 1
  } else {
    return 0

  }

}

function App() {
  const [allState, editState] = React.useState({
    strikes: 0,
    balls: 0
  })

  const strikeHandler = (e) => {
    e.preventDefault()
    if (allState.strikes < 2) {
      editState({
        ...allState,
        strikes: allState.strikes + 1
      })
    } else {
      editState({
        ...allState,
        strikes: 0,
        balls: 0
      })
    }
    console.log(allState)
  }
  const ballHandler = (e) => {
    e.preventDefault()
    if (allState.balls < 3) {
      editState({
        ...allState,
        balls: allState.balls + 1
      })
    } else {
      editState({
        ...allState,
        balls: 0,
        strikes: 0
      })
    }
    console.log(allState)
  }
  const foulHandler = (e) => {
    e.preventDefault()
    if (allState.strikes < 2) {
      editState({
        ...allState,
        strikes: allState.strikes + 1
      })
    }
    console.log(allState)
  }
  const hitHandler = (e) => {
    e.preventDefault()
    editState({
      ...allState,
      strikes: 0,
      balls: 0
    })
    console.log(allState)
  }

  return (
    <div className="App">
      <Display data={allState} />
      <Dashboard strikeHandler={strikeHandler} ballHandler={ballHandler} foulHandler={foulHandler} hitHandler={hitHandler} />
    </div>
  );
}

export default App;
