import { Card } from "react-bootstrap"
import Button from "../atoms/button";
import { FaArrowCircleRight } from "react-icons/fa";

export type TCardLayout = {
    header:string | number;
    title:string;
    body:string;
    children:any;
}

const CardLayout = (props:TCardLayout) =>{
    return(
    <Card border="dark" 
        style={{ 
        width: '18rem' , 
        marginTop:"6rem",
        textAlign:'center'
        }}>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.body}
            </Card.Text>
            {props.children}
        </Card.Body>
    </Card>
    )
}

export default CardLayout;