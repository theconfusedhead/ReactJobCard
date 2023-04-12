import './App.css';
import Name from "./Name";
import Body from "./Body";
import Footer from './footer';
import CoverImage from './CoverImage'
function App() {
  return (
    <div className='main-box'>
      <div className='Box'>
      <CoverImage/>
    <Name/>
    <Body/>
    <Footer/>
    </div>
    </div>
    
  );
}

export default App;
