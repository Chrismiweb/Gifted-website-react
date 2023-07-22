import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import GetStarted from './Component/GetStarted';
import About from './Component/About';
import Work from './Component/Work';
import Learn from './Component/Learn';
import Course from './Component/Course';
import Participate from './Component/Participate';
import Feature from './Component/Feature';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <GetStarted/>
        <About/>
        <Work/>
        <Learn/>
        <Course/>
        <Participate/>
        <Feature/>
    </div>
  );
}

export default App;
