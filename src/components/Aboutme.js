import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Row,Col } from 'react-bootstrap';
import {  } from "./componentCss/aboutme.css";


function Aboutme() {


    return (
        <div >
            <Container>
                <h6 className="text"><b>ABOUT ME</b><span id="explore"></span></h6>
                <p className='aboutmeBody'>
                    I'm Natthapong Phetkhai, Can call me Nes this my nice name. Welcome to my profile.
                    Yes am The Web Developer. I love Coding. I love Computer. I love The website.
                    I don't have real work experience. but I need to have this very very mush.
                    I need to prove yourself that I can do it.
                    am dwell phitsanulok in Thailand country.
                </p>
                <img
                    className="mx-auto lsimg"
                    src={`${process.env.PUBLIC_URL}/img/ls.jpg`}
                    alt="First slide"
                />
                <div className='buttonCv'>
                    
                    <Button variant="secondary" href={`${process.env.PUBLIC_URL + '/Resume.pdf'}`} download>
                        <b>DOWNLOAD CV</b>
                    </Button>
                </div>

                
            </Container>
        </div>


    );
}
export default Aboutme