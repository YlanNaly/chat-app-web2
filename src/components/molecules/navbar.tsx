import Link from "next/link";
import { Navbar as NB, Nav, NavLink} from "react-bootstrap";

export interface NavBarLink{
    ref:string;
}

const Navbar = (props:NavBarLink[]) =>{
    return(
        <NB collapseOnSelect expand="sm" bg="dark" variant="light">
            <NB.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
            <NB.Collapse id="navbarScroll">
                <Nav>
                  {
                    props.map(({ref})=>{
                        return(
                            <NavLink key={ref} as={Link} href={ref} >
                                {ref}
                            </NavLink>
                        )
                    })
                  }
                </Nav>
            </NB.Collapse>
        </NB>
    )
}

export default Navbar;