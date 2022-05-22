import 'bootstrap/dist/css/bootstrap.min.css';
import {  Carousel } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect'
import AllcardEles from "./Elements/AllcardEles";

function Allcard() {
 

  return (
    <Carousel fade style={{paddingTop:"65px"}} >
  
    {AllcardEles('/img/vl.jpg','My hobby is play a Game ')}
    {AllcardEles('/img/c2.png','I am a Web Developer')}
    {AllcardEles('/img/qww.jpg','I love The forest')}

  
</Carousel>
  );
}

export default Allcard;