import { Card } from "react-bootstrap"

export type TCardLayout = {
    header:string;
    title:string;
    body:string;
}

const CardLayout = (props:TCardLayout) =>{
    return(
    <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.body}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default CardLayout;