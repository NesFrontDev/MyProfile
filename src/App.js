
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Allcard from './components/Allcard';
import  Aboutme  from "./components/Aboutme";
import Myskill   from "./components/Myskill";
import Footer from "./components/Footer";



function App() {
  
  
  return (
    <div>
      <Navbarr />
      <Allcard />
      <Aboutme />
      <Myskill />
      <Footer/>
    </div>
  );
}

export default App;
