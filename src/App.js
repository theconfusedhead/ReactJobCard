import React from 'react';
import './App.css';
import Name from "./Name";
import Body from "./Body";
import Footer from './footer';
import CoverImage from './CoverImage'
function App() {
  const [mode, setMode] = React.useState(false);
  function HandleMode(){
    setMode(prevMode => !prevMode)
  }
  return (
    <>
    <div className='nav'>
    <button  onClick={HandleMode}>
      Click for {mode? 'Light Mode' : 'Dark Mode'}
    </button>
    </div>
  <div className='main-box'>
    <div className={mode ? 'content-box--light' : 'content-box--dark'}>
      <CoverImage/>
      <Name/>
      <Body/>
      <Footer/>
   </div>
  </div>
  </>
  );
}

export default App;
