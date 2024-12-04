import { Navbar,Nav,Container} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";


export function Root(){

  return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <Cart3 className="icon" size={20} color="green"></Cart3>
        e-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to ="/" className ="nav-link">Home</Link>
           <Link to ="/cart" className ="nav-link">Cart</Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
            </Container>
            </Navbar>
             <Outlet/>           
        </>
        
    )
}
