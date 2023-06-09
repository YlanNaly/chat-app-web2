import Link from "next/link";
import { 
    Navbar as NB
    , NavDropdown 
    ,Container 
    , Nav
} from "react-bootstrap";
import {FaSlack} from "react-icons/fa";
import Button from "../atoms/button";
import { useRouter } from "next/router";

const Navbar = () =>{
    const {push} = useRouter();
    const logOut = () =>{
        localStorage.clear();
    }
    return(
        <NB bg="light" expand="lg" fixed="top" >
            <Container>
                <NB.Brand href="/channel/channel">
                   <FaSlack/>
                </NB.Brand>
                <NB.Toggle aria-controls="basic-navbar-nav" />
                <NB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" as={Link} >Home</Nav.Link>
                        <Nav.Link href="/profile" as={Link}>Profile</Nav.Link>
                        <NavDropdown title="Channel" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/channel/channel">
                                Channel list
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/channel/create" as={Link}>Create channel</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button
                    onClick={()=>logOut()}
                    className="logoutButton"
                    variant="danger"
                    >
                        Log Out
                    </Button>
                </NB.Collapse>
            </Container>
        </NB>
    )
}

export default Navbar;