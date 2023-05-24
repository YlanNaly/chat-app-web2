import { Card } from "react-bootstrap"

const CardLayout = () =>{
    return(
    <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card&apos;s content.
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default CardLayout;