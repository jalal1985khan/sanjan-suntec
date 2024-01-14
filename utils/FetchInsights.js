import React from 'react'
import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";

function Insights({tags}) {
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
<Container className="mb-5 mt-5 text-center" id="insights">
{heading && <h2>Our Latest Insights</h2>}
<Container className="mt-5">
  <Row className="center">
  {
allInsights.map((post) => {
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
  <Col key={post['id']} sm={6} lg={4} xs={6} md={6}>
<Link 
href={Links}
className="pr-text text-decoration-none">
<Card>
      <Card.Img variant="top" src={post['featured_img_src']}/>
        <Card.Body className="text-start" style={{ height: 6 + 'em' }}>
          <span className="badge text-bg-warning mb-2">{Type}</span>
        <Card.Title>{post['title']}</Card.Title>
      </Card.Body>
      <Card.Body  className="text-start mt-4">
        <Card.Link className="readmore">Read More</Card.Link>
      </Card.Body>
    </Card>
</Link> 
    </Col>
  )
})}
</Row>
</Container>
</Container>
  )
}

export default Insights
