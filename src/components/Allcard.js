import 'bootstrap/dist/css/bootstrap.min.css';
import {  Carousel } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect'

function Allcard() {
  return (
    <Carousel fade style={{paddingTop:"70px"}} >
  <Carousel.Item>
    <img
      className="photomain"
      src={`${process.env.PUBLIC_URL}/img/c2.png`}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <ReactTypingEffect text={['I am Natthapong Phetkhai','I am a Web Developer']} speed={100} eraseDelay={2000} className="typingeffect"/>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="photomain"
      src={`${process.env.PUBLIC_URL}/img/vl.jpg`}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <ReactTypingEffect text={['My hobby is play a Game ','']} speed={100} eraseDelay={2000} className="typingeffect"/>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="photomain"
      src={`${process.env.PUBLIC_URL}/img/qww.jpg`}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <ReactTypingEffect text={['I love The Nature','I love The forest']} speed={100} eraseDelay={2000} className="typingeffect"/>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
  );
}

export default Allcard;