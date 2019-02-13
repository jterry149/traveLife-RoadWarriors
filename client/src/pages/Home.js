// Required Dependencies and Files
import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";

function Home() {
        return(
        <div className="home">
            <Jumbotron />
            <Carousel />  
            <Card />
        </div>
         
    );
}



  
  export default Home;