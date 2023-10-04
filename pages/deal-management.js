import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';



function LinksExample() {

  const [allInsights, setInsights] = useState([]);
  const [heading, setHeading] = useState(false); 
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
};

  const fetchInsights = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-insights?tag=327`;
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
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/dynamic-offer-management" active>
      Deal Management
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/Deal-Management.jpg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Deal Management</h1>
<p>Automate end-to-end deal management process, provide flexibility to create customer-specific deals, mitigate conduct risk and reduce revenue leakage while ensuring price transparency and policy compliance.</p>
<button onClick={handleShowModal} className="r-btn">Read the Datasheet</button>
<BootstrapModal show={showModal} handleClose={handleCloseModal} />
</div>
</Col> 
<Col></Col> 
</Row>        
</Container>
<Container>
<Row className="d-flex flex-row mt-5 mb-5">
<Col sm={6}>
<img src="/images/xelerate.png" height="350"/>
</Col>
<Col sm={6}>
<h2 className="fs-1">Why SunTec Xelerate?</h2>
<p className="fs-5">SunTec’s Deal Management software on the SunTec Xelerate platform enables financial services, telecom, travel and insurance firms to manage the sales process from the construction of the proposal through to the negotiation and closure of the deal. It enables organizations to streamline and automate the process by bringing the required transparency and measurability. SunTec’s Deal Management ensures a data-driven deal process that enhances transparency and sales forecasting. It significantly improves the sales process, simplifies complex negotiations, improves the quality of revenue, and streamlines downstream billing operations.</p>
</Col>
</Row>    
</Container>

<Container className="wbg-sun text-center d-flex flex-column justify-content-center" style={{height: 10 +'em'}}>
<h2 className="text-white fs-2 mb-4">Discover related resources curated just for you</h2>
<Row className="center">
          <Col sm={3}><Button className="w-btn">eBook</Button></Col>
          <Col sm={3}><Button className="w-btn">Case Study</Button></Col>    
</Row>
</Container>      
      
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">Features of SunTec’s Deal Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Personalized Deals</Card.Title>
        <Card.Text>
        Enables the creation of specific, choice-driven deals for each customer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Enterprise Level Platform</Card.Title>
        <Card.Text>
        Centralized capability to manage complex cross-product and cross-entity deals
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Intelligent Deal Pricing</Card.Title>
        <Card.Text>
        Simulate expected revenue and profits based on throughputs and price points to drive negotiations
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Compliance-Driven Workflows</Card.Title>
        <Card.Text>
        Fully automated workflow and notifications as well as multi-level, sequential and parallel approvals
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Intuitive User Experience</Card.Title>
        <Card.Text>
        Intelligent UX based on persona allows ease of use and contextual interaction
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Ease of Integration</Card.Title>
        <Card.Text>
        Automated implementation of the deal ensures synchronization with downstream pricing and billing systems
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Ensure organizational profitability by plugging revenue leakage effectively&quot;</h3>
<p className="text-white fs-5">Roll out contextual offers in real time with SunTec&apos;s Dynamic Offer Management</p>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>A de-cluttered view of deals:</strong> Manage deals across territories and obtain a comprehensive view of every deal, irrespective of multi-entity and multi-geography structures of customer enterprises.</li> 
   <li className="text-white fs-5"><strong>Revenue monitoring made easy:</strong> Perform a cost-benefit analysis of deals and monitor revenue through commitment and deal performance tracking.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_1.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive customer choice by offering contextual solutions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Mitigate conduct risk and promote fairness by right pricing for all products and services
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce cost through automation of the end-to-end process including deal implementation
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive overall relationship value through cross-bundle offers and benefits
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Enhance the sales process by providing the right insights for each stage of the process
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce operational risks and improve controls through conditional approvals and centralization of the entire process
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>

</Col>
<Col></Col>
<Col></Col>
</Row>

</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">Know your customers better and deliver hyper personalized offerings with SunTec.</h1>
<Button className="b-btn">Start a conversation</Button>
</Container>
<Container className="mb-5 mt-5 text-center">
{heading && <h2>Our Latest Insights</h2>}
<Container>
  <Row>
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
<Col key={post['id']} sm={4}>
<Link 
href={Links}
className="pr-text text-decoration-none">
<Card>
      <Card.Img variant="top" src={post['featured_img_src']}/>
      <Card.Body className="text-start" style={{height: 6 +'em'}}>
        <Card.Title>{post['title']}</Card.Title>
      </Card.Body>
      <Card.Body  className="text-start">
        <Card.Link >Read More</Card.Link>
      </Card.Body>
    </Card>
</Link> 
    </Col>
  )
})}
</Row>
</Container>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;