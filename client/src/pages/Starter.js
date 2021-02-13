import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Divider from '@material-ui/core/Divider';
import './Starter.css'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import starterData from './starterData'



function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }


class Starter extends Component {
 
    render() {
   
        return (
           
           
            <div  style={ {backgroundColor:"#ede9e3", paddingBottom:"5em",overflow:"hidden"}}>
            <Row className="starter-title">
                <span className="head1" style={{ color: '#626366' }}>STARTER </span>
            </Row>

            <Row className="starter-title2">
                <span className="head2" style={{ color: '#626366' }}>GUIDES<Divider /></span>
            </Row>

            {/* onclick={this.handleClick()} */}
            <Container >
                    <CardDeck d-flex >
                    <Card  d-flex align-items-stretch w-100 className="startercard" style={{ backgroundColor: ' #ae6e1c' }}>
                        <Card.Title><span className="ktext"  >KITCHEN</span></Card.Title>
                        </Card>
                        <Card d-flex align-items-stretch w-100 className="startercard" style={{ backgroundColor: '  #7a9392' }} >
                        <Card.Title><span className="btext"  >BATHROOM</span></Card.Title>
                        </Card>
                        <Card d-flex align-items-stretch w-100 className="startercard"  style={{ backgroundColor: ' #f3c992' }}>
                        <Card.Title><span className="ltext">LIVING ROOM</span></Card.Title>
                        </Card>
                        <Card d-flex align-items-stretch w-100 className="startercard"  style={{ backgroundColor: '  #626366' }}>
                        <Card.Title><span className="mtext">MEDIA ROOM</span></Card.Title>
                        </Card>
                    </CardDeck>
                </Container>
            


                <Container>
                    
                       <h1 className="col-lg-10  kith1"> </h1>
                    <div >
                    <Accordion className='col-lg-10' >
                 <Card style={ {cursor:"pointer"}} >
                     <Accordion.Toggle as={Card.Header} eventKey="0" className='accord'>
                        <h2><i className="fas fa-caret-down"></i></h2> 
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0"  >
                    <Card.Body>{starterData.cabinetsData}</Card.Body>
                         </Accordion.Collapse>
                        
                         </Card>
                         <Card style={ {cursor:"pointer"}}>
                      <Accordion.Toggle as={Card.Header} eventKey="1" className='accord'>
                      <h2>Counter Tops <i className="fas fa-caret-down"></i></h2>
                      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
             </Accordion.Collapse>
                </Card>
               
                <Card style={ {cursor:"pointer"}}>
                      <Accordion.Toggle as={Card.Header} eventKey="2" className='accord'>
                      <h2>Flooring <i className="fas fa-caret-down"></i></h2>
                      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
             </Accordion.Collapse>
                </Card> 
                
                <Card style={ {cursor:"pointer"}}>
                      <Accordion.Toggle as={Card.Header} eventKey="3" className='accord'>
                      <h2>Walls <i className="fas fa-caret-down"></i></h2>
                      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
             </Accordion.Collapse>
                </Card>
            </Accordion>  



                    </div>
                </Container>

        </div>
           
       
        );
    }
}


export default Starter;