import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';


function LinksExample() {

  const router = useRouter()  
  const [showModal, setShowModal] = useState(false);
  const PdfLink = '/pdf/Relationship-based-Pricing-Management.pdf';
  const PostTitle = "Relationship-based Pricing Management";
  const PostDescription = "Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges that win the hearts and minds of your customers.";
  const PostImage = "/images/relationship_based-pricing_management.jpg"; 

  const handleShowModal = () => {
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
}; 

  

  return (
<>
<Header />
<NextSeo
      title={PostTitle}
      description={PostDescription}
      canonical="/{router.asPath}"
      openGraph={{
        url: `${router.asPath}`,
        title: `${PostTitle}`,
        description: `${PostDescription}`,
        images: [
          {
            url: `${PostImage}`,
            width: 800,
            height: 600,
            alt: {PostTitle},
            type: 'image/jpeg',
          },
          {
            url: `${PostImage}`,
            width: 900,
            height: 800,
            alt: {PostTitle},
            type: 'image/jpeg',
          },
          { url: `${PostImage}` },
          { url: `${PostImage}` },
        ],
        siteName: 'SunTec Group',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />  
<Breadcum PostTitle={PostTitle}/>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Relationship-based Pricing Management</h1>
<p>Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges that win the hearts and minds of your customers.</p>
<button onClick={handleShowModal} className="r-btn">Read the Datasheet</button>
<BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
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
<p className="fs-5">SunTec&apos;s Relationship-based Pricing Management on SunTec Xelerate platform complements and significantly augments existing core banking capabilities and enables contextual pricing. As an enterprise pricing master, SunTec Xelerate enables fairness, enhances transparency for all stakeholders, improves control and governance and enhances revenue. The rule-based capability further automates the pricing process to provide agility, improve maintainability and allow end-to-end auditability and traceability.</p>
</Col>
</Row>    
</Container>
<InsightsBtn tags="328"/> 
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Relationship-based Pricing Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-based</Card.Title>
        <Card.Text>
        Pricing based on holistic relationship value across
customer and customer groups including complex relational conditions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Hyper-personalized</Card.Title>
        <Card.Text>
        Pricing to the segment of one – contextual and real-time pricing driving highly personalized pricing strategies
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Comprehensive Coverage</Card.Title>
        <Card.Text>
        Unified capability to manage all dimensions of value including fees, charges, rates, benefits (cash and non-cash), commissions, taxes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Agile and Configurable System</Card.Title>
        <Card.Text>
        Configurable, rule-based pricing allowing for quick launch and change management with reduced launch and operating costs
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Enterprise Approach</Card.Title>
        <Card.Text>
        Enterprise level capability for pricing of all products, services, events and transactions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_22.png" />
      <Card.Body className="c_body">
        <Card.Title>Insights-driven</Card.Title>
        <Card.Text>
        Reduced risk through real-time analytics driven decision-making, based on insights through rules and persona-based dashboards
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Regulatory Compliant</Card.Title>
        <Card.Text>
        End-to-end auditing with traceability combined with real-time data management enhances regulatory compliance and ensures fairness and transparency
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
<Col></Col>
</Row>
</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Enhance customer relationships and improve operational efficiency through differential and automated pricing.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Engage and retain customers:</strong> Deploy relationship-based pricing, offers and rewards to cater to customer demands and achieve sustainable growth.</li> 
   <li className="text-white fs-5"><strong>No more information silos:</strong> Achieve customer centricity with the power of data and innovative relationship-based offerings.</li>
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
        Drive customer engagement through hyper-personalized and contextual pricing
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve customer retention through choice, transparency and fairness for each customer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Enhance agility and flexibility through a unified and enterprise capability for all aspects of pricing
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
        Improve revenue quality through insight-driven decisions, enabling right pricing
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce operational risk and cost through automation and enhanced control
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce conduct risk and ensure compliance with regulatory guidelines through end-to-end auditing, traceability and enhanced controls
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
<CtaCall text="Discover the value customer-centricity brings to your business" btn="Download our whitepaper here" url="/whitepapers/dont-just-talk-customer-centricity-walk-it/"/>      
<Insights tags="328"/>

<Footer/>
</>


  );
}

export default LinksExample;