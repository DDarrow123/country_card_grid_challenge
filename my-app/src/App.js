// import React, { useState } from 'react';
import './App.css';

const CardGrid = () => {
  // console.log('hello world')
  return (
    //iterate through each card and display the appropriate data
    //display height and width of card differently depending on which child it is
  <>
    <div>
      <div>CardName.country</div>
      <div>CardName.capital</div>
      <div>CardName.desc</div>
      <button>Explore More</button>
    </div>
  </>
  )
}
 
const App = () => {

  return (
    <div className="App">
    <>
      <div className=''>
      <h3>FRONT-END</h3>
      <h1>valtech_</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </>
      <CardGrid/>
    </div>
  );
}

export default App;
