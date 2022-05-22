import react from "react";
import { Row,Col, Container } from "react-bootstrap";
import { AiFillPhone, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGithub,BsFacebook } from "react-icons/bs";

const Footer =()=>{
    return(
        <div style={{backgroundColor:"gray"}}>
            <footer>
                <Container >
                <Row>
                        <Col className='Colrsm'>
                        <h2 style={{fontSize:"20px"}}>
                            <b>
                            EDUCATION
                            </b>
                        </h2>
                        <p>
                        <b>Computer Engineering</b> &nbsp; &nbsp; &nbsp; &nbsp; 2018 - 2021 <br/>
                        <p >Pibulsongkram Rajabhat University</p>
                        </p>
                        <p>
                        <b>Technology Computer</b> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 2016 - 2018<br/>
                        <p >Phitsanulok Technical College</p>
                        
                        </p>
                        </Col>

                        <Col className='Colrsm'>
                        <h2 style={{fontSize:"20px"}}>
                            <b>
                            WORK EXPERIENCE
                            </b>
                        </h2>
                        <p>
                        <b>Apprentice</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 2017 - 2018 <br/>
                        <p >Samsung Customer Service</p>
                        </p>
                        <p>
                        <b>Apprentice</b> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 2015 - 2015<br/>
                        <p >Advice Distributions</p>
                        
                        </p>
                        </Col >
                        <Col className='Colrsm'>
                        <h2 style={{fontSize:"20px"}}>
                            <b>
                            RELEVANT COURSES
                            </b>
                        </h2>
                        <p>
                        <b>Programing I</b><br/>
                        <b>Programing II</b> <br/>
                        <b>Database Management I</b> <br/>
                        <b>Database Management II</b> <br/>
                        <b>Web Development I</b> <br/>
                        <b>Data Structures and Algorithm</b> <br/>
                        
                        </p>
                        </Col>
                        <Col className='Colrsm' >
                        <a href='https://github.com/NesFrontDev' target="blank" ><BsGithub /></a>&nbsp;&nbsp;
                        <a href='https://www.facebook.com/natthapong.phethkai/' target="blank"><BsFacebook /></a>
                       
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
export default Footer