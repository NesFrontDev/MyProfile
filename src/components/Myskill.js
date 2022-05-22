import { Container} from "react-bootstrap"
import { } from "./componentCss/myskill.css"
import {FaReact,FaHtml5,FaCss3Alt,FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { DiSqllite } from "react-icons/di";



function Myskill() {
    return (
        <div className="myskill ">
            <h6 className="text"><b>SKILL</b><span id="explore"></span><span id="explore2"></span></h6>

            <Container className="justify-content-center">
                
                <div style={{marginLeft:"17px"}} >
                <h1><FaReact /><p/>React</h1>
                <h1><FaHtml5 /><p/>HTML</h1>
                <h1><IoLogoJavascript /><p/>JavaScript</h1>
                <h1><FaCss3Alt /><p/>CSS</h1>
                <h1><FaNodeJs /><p/>NodeJS</h1>
                <h1><GrMysql /><p/>MySQL</h1>
                <h1><DiSqllite /><p/>SQLLite</h1>
                
                </div>
                
            </Container>

        </div>
    )
}
export default Myskill