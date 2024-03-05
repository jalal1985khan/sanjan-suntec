import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn'

function LinksExample() {
  const router = useRouter()  
  const [showModal, setShowModal] = useState(false);
  const PdfLink = '/pdf/SunTec-Offer-Management.pdf';
  const PostTitle = "Dynamic Offer Management";
  const PostDescription = "Grow and enrich your customer relationships by quickly launching highly personalized, contextual offers.";
  const PostImage = '/images/dynamic_offer_management.jpg'; 

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
<Col lg={5} xs={12} sm={12} md={6}>
<div className="b-text">
<h1>Dynamic Offer Management</h1>
<p>Grow and enrich your customer relationships by quickly launching highly personalized, contextual offers.</p>
<button onClick={handleShowModal} className="r-btn w-50">Read the Datasheet</button>
<BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<Row className="d-flex flex-column flex-lg-row mt-5 mb-5">
<Col lg={6} sm={12}>
<img src="/images/xelerate.png" height="350" className='w-100'/>
</Col>
<Col lg={6} sm={12}>
<h2 className="fs-1">Why SunTec Xelerate?</h2>
<p className="fs-5">SunTec&apos;s Dynamic Offer Management on SunTec Xelerate platform is a digital innovation middle layer that can easily integrate with the bank&apos;s existing technology landscape and provide a highly configurable offer management capability that enables customer choice, enhances customer relationships, reduces time and cost to market and propels growth through up-sell and cross-sell capabilities.</p>
</Col>
</Row>         
</Container>

<InsightsBtn tags="326" />
            

<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Dynamic Offer Management</h1>
<Row>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Contextual</Card.Title>
        <Card.Text>
        Creation and provision of the right offers to each customer based on their choice and need
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Multi-layered</Card.Title>
        <Card.Text>
        Product, Bundle, Service and Benefit Offers for individual customers, accounts and dynamic sub segments
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Hyper-personalized</Card.Title>
        <Card.Text>
        Exhaustive and rule-driven qualification and eligibility criteria drive personalized and contextual application of offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Life Cycle Management</Card.Title>
        <Card.Text>
        Quick offer roll-out and offer switching and periodic review and expiry management ensure the right portfolio of offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Highly Flexible and Configurable</Card.Title>
        <Card.Text>
        Easy creation and management of offers with intuitive UX for different personas
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Automated</Card.Title>
        <Card.Text>
        Insight and rule-driven automation of the entire process
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row className='d-flex flex-lg-row flex-column'>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Enable customer centricity with the right solution to each customer&apos;s context and need&quot;</h3>
<p className="text-white fs-5">Roll out contextual offers in real time with SunTec&apos;s Dynamic Offer Management</p>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Offer orchestration like never before:</strong> Manage the entire offer development lifecycle in real time, from offer ideation via real-time customer transaction tracking, to simulation and testing, and finally offer fulfilment and tracking.</li> 
   <li className="text-white fs-5"><strong>Roll out offers in real time:</strong>Get an insight into customer behavior to roll out the right offers rapidly, thereby enhancing customer engagement and customer lifetime value and eliminating revenue leakage.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_1.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive customer choice by offering contextual solutions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce time and cost to market of specific offers and campaigns
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive overall relationship value through cross bundle offers and benefits
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve quality of revenue through automated management of offers including enrolment/de-enrolment
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve offer quality and breadth by co-innovating with third party partners
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Empower front end staff to service customers through specific and personalized offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce operational and revenue risk through end-to-end automation
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
<Col></Col>
</Row>

</Container>
<CtaCall text='Discover the value customer-centricity brings to your business' btn='Download our whitepaper here' url='whitepapers/dont-just-talk-customer-centricity-walk-it'/>
<Insights tags="326"/>
<Footer/>
</>


  );
}

export default LinksExample;