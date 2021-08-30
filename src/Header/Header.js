import * as React from 'react';
import {Navbar,Nav,Container,NavDropdown,Row,Col} from 'react-bootstrap';

const Header = ()=>{
return (
    <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">
      
   
    <Nav className="container-fluid" >
        <Nav.Item >
      <Nav.Link href="#deets">Talk to our Expert</Nav.Link></Nav.Item>
      <Nav.Item >
      <Nav.Link href="#deets">+61415215671</Nav.Link></Nav.Item>
      <Nav.Item ><Nav.Link  href="#memes">
        Book Appointment
      </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
      
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">
      
    <Nav className="container-fluid">
        
     {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    
    </Nav>
    <Nav className="container-fluid" >
        <Nav.Item className="ml-auto">
      <Nav.Link href="#deets">Talk to our Expert</Nav.Link></Nav.Item>
      <Nav.Item className="ml-auto">
      <Nav.Link href="#deets">+61415215671</Nav.Link></Nav.Item>
      <Nav.Item className="ml-auto"><Nav.Link  href="#memes">
        Book Appointment
      </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>
</Container>

)
}

export default Header;