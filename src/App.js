
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Allcard from './components/Allcard';
import  Aboutme  from "./components/Aboutme";
import Myskill   from "./components/Myskill";




function App() {
  return (
    <div>
      <Navbarr />
      <Allcard />
      <Aboutme />
      <Myskill />
    </div>
  );
}

export default App;
