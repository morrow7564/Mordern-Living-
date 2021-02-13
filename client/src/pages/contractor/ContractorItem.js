import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

class ContractorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", phone: "", locationOne: "", locationTwo: "", rating: "", url: ""};
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        this.setState({
            name: name,
            phone: phone,
            locationOne: locationOne,
            locationTwo: locationTwo,
            rating: rating,
            url: url
        }, () => {
            axios.post("/contractors", this.state)
        });
    }

    render() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        return (
            
              
<Container  > 
     <div className="ContractorItem col-lg-8 flex ">
        <p  className='yelp fab fa-yelp'>  </p>
                <i className='heart fas fa-heart' onClick={this.handleSave}></i>
                <br></br>
                <div className='text' > 
                 <h2 className='cp'>{name}</h2>
                <p className='cp'>{phone}</p>
                <br></br>
                <p className='cp'>{locationOne}, {locationTwo}</p>
                <br></br>
                <i className='cp fas fa-star'>{rating} / 5 Stars </i>
                <br></br>
                <a className='cp' href={url}>See Reviews</a></div>
               
             </div></Container>
    
           
          
        ); 
    }
}


export default ContractorItem;