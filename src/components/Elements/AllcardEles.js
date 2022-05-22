import { Carousel } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect'

const AllcardEles = (imgURL,textOnCard) => {
    return (
        <Carousel.Item>
            <img
                className="photomain"
                src={`${process.env.PUBLIC_URL}${imgURL}`}
                alt="First slide"
            />
            <Carousel.Caption>

                <ReactTypingEffect text={textOnCard} speed={100} eraseDelay={2000} className="typingeffect" />
            </Carousel.Caption>
        </Carousel.Item>
    )
}
export default AllcardEles