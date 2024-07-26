import './App.css';
// import { BackgroundBeams } from './components/background-beams';
import Navebar from './components/Navebar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <section id='Home'>
    <div
      className='scroll-smooth bg-black'
    >
       <Navebar />
      {/* <BackgroundBeams/> */}
      <Home />
     
    </div>
    </section>
  );
}

export default App;