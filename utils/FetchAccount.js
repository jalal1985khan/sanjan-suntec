import React from 'react'
import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";

function Insights({tags}) {
  const [allInsights, setInsights] = useState([]);
    const [heading, setHeading] = useState(false);
    const [article, setArticle] = useState();
    const [ebooks, setEbooks] = useState();
    const [pov, setPov] = useState();
    const [podcasts, setPodcasts] = useState();

    const fetchInsights = async () => {
        let url = "";
        url = `${configData.SERVER_URL}all-insights?tag=${tags}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          //console.log(data);
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
  <Col key={post['id']} sm={6} lg={6} xs={6} md={6}>
<div class="card mb-3 border-0" >
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <Image src={post['featured_img_src']} class="img-fluid " alt="..." width={220} height={220} />
    </div>
    <div class="col-md-8 text-start">
      <div class="card-body">
        <h5 class="card-title text-start" dangerouslySetInnerHTML={{__html:post['title']}}/>
                        <p class="card-text text-start" dangerouslySetInnerHTML={{ __html: post['excerpt'] }} />
                        <Link href={Links} className="pr-text text-decoration-none expand-btn text-white px-5 rounded-3">Read More</Link>
                    </div>
                        
    </div>
  </div>
</div>
    </Col>
  )
})}
</Row>
</Container>
</Container>
  )
}

export default Insights
