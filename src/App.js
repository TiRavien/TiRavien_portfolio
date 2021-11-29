import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Menubar from './Pages/Home/Menubar/Menubar';
import Projects from './Pages/Home/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Menubar />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
