import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";


import vanImage from "../../images/van.png";
import truckImage from "../../images/truck.png";
import rvImage  from "../../images/rv.png";


function Card() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src={rvImage} alt="rv image" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">About Us</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={vanImage} alt="vanImage" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">News you need</MDBCardTitle>
          <MDBCardText>
            This section will give the inspiring road warrior everything they need to live 100 precent on the road. From the most recent articles about traveling, how to on converting vehicles, and so on. 
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            Read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={truckImage} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Explore the Road</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Card;
