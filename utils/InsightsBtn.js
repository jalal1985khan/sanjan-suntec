import React from 'react'
import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";

function InsightsBtn({tags}) {
  const [allInsights, setInsights] = useState([]);
  const [heading, setHeading] = useState(false);
  

    const fetchInsights = async () => {
        let url = "";
        url = `${configData.SERVER_URL}all-insights?tag=${tags}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.length);
          setInsights(data);
          if(data.length > 1){
            setHeading(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchInsights();
      },[]);


    return (
              
<Container className="wbg-sun text-center d-flex flex-column justify-content-center" style={{height: 10 +'em'}}>
  <Row className="center">
          {
            
            
allInsights.map((post, index) => {
  //console.log(post);
  

  const Type =  post['type'];
  const Pslug =  post['slug'];
  
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;

  }
    return (
<>
<Col sm={3}><Button className="w-btn capital" href="#insights">{Type}</Button></Col>
  </>      

  )
})}
</Row>
</Container>
  )
}

export default InsightsBtn



