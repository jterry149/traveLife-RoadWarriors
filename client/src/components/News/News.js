import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

class NewsPage extends Component {
render(){
  return (
    <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Latest News...
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
           Whether you’re downsizing or thrill-seeking—or anything in between—find out if the RV lifestyle is right for you, and learn how to transition from a life of traditional home-ownership to one on the road. 
          </p>
          <MDBRow>
            <MDBCol lg="6" md="12">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://i1.wp.com/rvlife.com/wp-content/uploads/2019/02/44480975_1472566686221738_5283168725971763200_o.jpg?zoom=3&resize=220%2C160"
                    alt=""
                  />
                  <a href="http://rvlife.com/palisade-basecamp-rv-resort/">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="http://rvlife.com/palisade-basecamp-rv-resort/" className="light-blue-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="car" className="pr-2" />
                      Explore
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    02/11/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="http://rvlife.com/palisade-basecamp-rv-resort/">There’s A New Resort For RVers On The Colorado River</a>
                </h3>
                <p className="dark-grey-text">
                Twenty minutes east of Grand Junction, the small town of Palisade on Colorado's Western Slope is best known for their fresh produce, local wineries, and scenic hiking/biking trails... 
                </p>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://www.reserveamerica.com/webphotos/racms/articles/images/0d988346-d866-4846-ad9f-01a5eca877d7_image2_0-main-new.jpg"
                        alt=""
                      />
                      <a href="https://www.reserveamerica.com/articles/camping/17-great-rv-campgrounds-for-winter">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      02/09/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://www.reserveamerica.com/articles/camping/17-great-rv-campgrounds-for-winter" className="dark-grey-text">
                        Winter is on the horizon—the season when tent campers pack up their camping gear in favor of warmer, indoor digs...
                        </a>
                      </MDBCol>
                      <a href="https://www.reserveamerica.com/articles/camping/17-great-rv-campgrounds-for-winter">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://media.architecturaldigest.com/photos/5ad7640a64b2307d11eae78b/master/w_1600%2Cc_limit/GettyImages-691947053.jpg"
                        alt=""
                      />
                      <a href="https://visitsouthidaho.com/visitor-info/twin-falls-visitor-center/">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      02/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://visitsouthidaho.com/visitor-info/twin-falls-visitor-center/" className="dark-grey-text">
                          Twin Falls information center provides...
                        </a>
                      </MDBCol>
                      <a href="https://visitsouthidaho.com/visitor-info/twin-falls-visitor-center/">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://media.architecturaldigest.com/photos/5c2f937cd149182d22e579ab/16:9/w_1280%2Cc_limit/TOUT_Astro_Motel_Outside%2520Dusk.jpg"
                        alt=""
                      />
                      <a href="https://www.tripsavvy.com/coolest-motels-in-the-country-4155228">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      02/05/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://www.tripsavvy.com/coolest-motels-in-the-country-4155228" className="dark-grey-text">
                          The coolest places to stay during a road trip
                        </a>
                      </MDBCol>
                      <a href="https://www.tripsavvy.com/coolest-motels-in-the-country-4155228">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://media.architecturaldigest.com/photos/5ad762cc64b2307d11eae785/master/w_1600%2Cc_limit/GettyImages-sb10065314f-001.jpg"
                    alt=""
                  />
                  <a href="https://www.travelpulse.com/news/impacting-travel/the-best-road-trip-restrooms-in-america.html">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="https://www.travelpulse.com/news/impacting-travel/the-best-road-trip-restrooms-in-america.html" className="pink-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="car" className="pr-2" />
                      Explore
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    02/10/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="https://www.travelpulse.com/news/impacting-travel/the-best-road-trip-restrooms-in-america.html">The best Road Trip restrooms in America</a>
                </h3>
                <p className="dark-grey-text">
                There is nothing more important to a road trip, (except maybe a fine playlist), than a clutch gas station for the all-important pit stop.
                </p>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://media.architecturaldigest.com/photos/5b16eb6b537e284d4e4fa01c/master/w_1600%2Cc_limit/GettyImages-497184956.jpg"
                        alt=""
                      />
                      <a href="https://www.telegraph.co.uk/travel/lists/the-worlds-best-drives/">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      02/01/2018
                    </p>
                    <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://www.telegraph.co.uk/travel/lists/the-worlds-best-drives/" className="dark-grey-text">
                        17 exhilarating road trips to restore your faith in adventure 
                        </a>
                      </MDBCol>
                      <a href="https://www.telegraph.co.uk/travel/lists/the-worlds-best-drives/">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://media.architecturaldigest.com/photos/5be1c9e554719d268fefc8c0/master/w_1600%2Cc_limit/GettyImages-525559033.jpg"
                        alt=""
                      />
                      <a href="https://www.reserveamerica.com/articles/camping/take-a-drive-on-a-scenic-byway">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      01/31/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://www.reserveamerica.com/articles/camping/take-a-drive-on-a-scenic-byway" className="dark-grey-text">
                          Take a drive on a scenic byway...
                        </a>
                      </MDBCol>
                      <a href="https://www.reserveamerica.com/articles/camping/take-a-drive-on-a-scenic-byway">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://media.architecturaldigest.com/photos/5be1ca5054719d268fefc8c2/master/w_1600%2Cc_limit/201311_NY_N148.jpg"
                        alt=""
                      />
                      <a href="https://www.reserveamerica.com/articles/camping/itinerary-the-perfect-chicago-road-trip">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      01/28/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="https://www.reserveamerica.com/articles/camping/itinerary-the-perfect-chicago-road-trip" className="dark-grey-text">
                          The perfect chicago road trip.
                        </a>
                      </MDBCol>
                      <a href="https://www.reserveamerica.com/articles/camping/itinerary-the-perfect-chicago-road-trip">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
  }
}
export default NewsPage; 