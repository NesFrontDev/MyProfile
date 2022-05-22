import { Popover,OverlayTrigger,Button } from "react-bootstrap";
import { AiFillPhone, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Example = () => (
    <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
      <Button variant="secondary" >MY CONTACT</Button>
    </OverlayTrigger>
  );

const popover = (
    <Popover id="popover-basic" >
      <Popover.Header as="h3">MY CONTACT</Popover.Header>
      <Popover.Body className='contact'>

        <AiFillPhone /><b> : 0949735505</b><p />
        <MdEmail /><b> : natthapong.phetkhai@gmail.com</b><p />
        <a href='https://www.facebook.com/natthapong.phethkai/' target="blank"><AiFillFacebook /><b> : natthapong.phethkai</b></a><p />
        <a href='https://github.com/NesFrontDev' target="blank"><BsGithub /><b> : NesFrontDev</b><p /></a>



      </Popover.Body>
    </Popover>
  );
  
  export default Example