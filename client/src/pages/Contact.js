import React, { Component }  from 'react';
import './Contact.css'
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
class Contact extends Component {
  render() {
        return (
          <div style={ {paddingBottom:"5em",overflow:"hidden"}}>
<Row className='touchbox col-md-6 flex '>
  
     
  <div className='head'>
  <p > <span className='getintext'>Get In</span><span className='touchtext' >Touch</span></p>
      <p  className='touchp'>Have question or need help finding something? Lets chat to see what we can do for you.</p>
    
  </div>

      </Row>
      
<div  className=' contactbox col-md-4 flex ' >
<Form>
        <Form.Control placeholder="NAME" />
        <br></br>
        <Form.Control type="email" placeholder="EMAIL" />
        <br></br>
        <Form.Control as="textarea" className="textarea"  rows={6}  placeholder="MESSAGE" />
        <br></br>
        <Button className="button" variant="outline-light" type="submit">Submit</Button>
    
    </Form>
</div>
<div className='officebox col-sm-3'>
     <h2>Our Office</h2>
     <p>12345 Modern Living Dr <br></br> Cleveland, OH 44125</p>
     <p>Contact@modernliving.com</p>
     <br></br>
     <p>216.555.1234</p>
</div>


          </div>
          

    );
  }
};
export default Contact;