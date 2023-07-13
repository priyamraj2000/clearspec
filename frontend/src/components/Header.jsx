import {Badge,Navbar, Nav, Container} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/logo.png'
import SearchBox from './SearchBox';
import Overlay from './Overlay';
import { Route , Routes} from 'react-router-dom';
import React,{useState} from 'react'

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);


   
  const handleIconClick = () => {
    console.log(showOverlay);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };






  const {cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);

  return (
    <header >
      <Navbar  variant='dark' expand='md'  collapseOnSelect>
        <Container >
          <LinkContainer to='/'>
            <Navbar.Brand  >
              <img src={logo} alt='ClearSpecs' />
            </Navbar.Brand>
          
            
          </LinkContainer>
          {/* <SearchBox onIconClick={handleIconClick} />
        <Route>
          <Route
              render={({ history }) => (
                <>
                  {showOverlay && (
                    <Overlay onClose={handleCloseOverlay} history={history} />
                  )}
                </>
              )}
            /> 
          </Route>
        */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
              <LinkContainer to='/eyeglasses'>
                <Nav.Link>Eye Glasses</Nav.Link>
              </LinkContainer> 
              <LinkContainer to='/googles'>
                <Nav.Link>Googles</Nav.Link>
              </LinkContainer> 

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button  variant="light">Search</Button>
              
              </Form>
               */}
              <LinkContainer to='/cart'>
                    <Nav.Link><FaShoppingCart/> Cart
                    {
                      cartItems.length > 0 && (
                        <Badge pill bg='success' style={{marginLeft: '5px'}}>
                          {cartItems.reduce((a,c) => a+ c.qty , 0)}
                        </Badge>
                      )
                    }
                    </Nav.Link>
              </LinkContainer>
              
                <LinkContainer to='/login'>
                    <Nav.Link><FaUser/>Sign In</Nav.Link>
                </LinkContainer>    
               </Nav>

            </Navbar.Collapse>
         </Container>
        </Navbar>
    </header>
  )
}

export default Header