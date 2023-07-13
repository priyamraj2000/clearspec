import React from 'react'
import logo2 from '../assets/logo2.png'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    const currentYear= new Date().getFullYear()
  return (
    // <footer>
    //     <Container>
    //         <Row>
    //          <Col className='text-center py-3'>
    //           <p>ClearSpec &copy; {currentYear}</p>
    //          </Col>
    //         </Row>
    //     </Container>
    // </footer>



    <footer class="footer">
      
      
      <div class="footer__addr">
    
        <img src={logo2} alt='ClearSpecs' width="200px" />

        <h2>We are availabel every day from 9 a.m - 10 p.m. IST</h2>
       

        <h2>Contact</h2>

        <address>
          Room no: 510, Boys Hostel , <br></br> IIIT Guwahati- 781015

            <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
      </div>

      

      <ul class="footer__nav">      
        <li class="nav__item">        
          <h2 class="nav__title">Company</h2>
          <ul class="nav__ul">
            <li>
              <a href="#">Our Story</a>
            </li>

            <li>
              <a href="#">Carrer</a>
            </li>

            <li>
              <a href="#">Newsroom</a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">products</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">Eye Glasses</a>
            </li>

            <li>
              <a href="#">Googles</a>
            </li>

            <li>
              <a href="#"> Virtual Try-On</a>
            </li>

            <li>
              <a href="#">Lenses</a>
            </li>

            <li>
              <a href="#">Contact lenses</a>
            </li>

           
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      
      </ul>
 
      <div class="legal">
        <p>&copy;  {currentYear}. All rights reserved.</p>


        <div class="legal__links">
          <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer