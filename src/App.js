import './App.css';
import About from './Pages/Home/About/About';
import Banner from './Pages/Home/Banner/Banner';
import Menubar from './Pages/Home/Menubar/Menubar';
import Projects from './Pages/Home/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Menubar />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
