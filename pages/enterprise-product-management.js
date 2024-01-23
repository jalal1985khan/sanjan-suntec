import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CallCta from '../components/CtaCall'
import Insights from '../utils/FetchInsights';
import BtnInsights from '../utils/InsightsBtn'

function LinksExample() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const PdfLink = '/pdf/Enterprise-Product-Management.pdf';
  const PostTitle = "Enterprise Product Management";
  const PostDescription = "Establish customer choice at the heart of your enterprise and enable right selling through the creation of an enterprise master catalog for all products and services.";
  const PostImage = 'images/enterprise_product_management_banner.png';

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
      
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/enterprise-product-management" active>
      Enterprise Product Management
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
    }}>

<Row>
<Col lg={5} xs={12} sm={12} md={6}>
<div className="b-text">
<h1>Enterprise Product Management</h1>
<p>Establish customer choice at the heart of your enterprise and enable right selling through the creation of an enterprise master catalog for all products and services.</p>
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
<p className="fs-5">SunTec&apos;s Enterprise Product Management on SunTec Xelerate platform enables a single source of truth for all products and services for the financial services, telecom, travel and insurance sectors. Combined with an end-to-end life cycle management view, this master catalog enables managing of personalized products, including both internal and external partner products. It helps prevent wrong selling through enhanced controls and enables product convergence. 
SunTec&apos;s Xelerate platform gives the flexibility to define any product or service across all lines of business. SunTec Xelerate further provides comprehensive traceability across the product life cycle and improves time and cost to market significantly.</p>
</Col>
</Row>    
</Container>
<BtnInsights tags='325' />    
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Enterprise Product Management</h1>
<Row>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Agile and Flexible</Card.Title>
        <Card.Text>
        Agile and configurable product creation through an extremely business-friendly framework
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Personalized</Card.Title>
        <Card.Text>
        Contextual, customer choice driven, and relationship-based selling of products and services enabled by rules
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Single Source of Truth</Card.Title>
        <Card.Text>
        Create a centralized, enterprise master for products and services across all lines of businesses
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
        <Card.Title>Business Centric</Card.Title>
        <Card.Text>
        Use prebuilt product templates in system or define your own templates with ease
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={6}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Rule-based</Card.Title>
        <Card.Text>
        Rich set of configurable rules to fine tune product&apos;s business behaviour based on context
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Extendable Product Set</Card.Title>
        <Card.Text>
        Holistic capability managing internal products as well as external partner products
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_7.png" />
      <Card.Body className="c_body">
        <Card.Title>Complete Life Cycle Management</Card.Title>
        <Card.Text>
        Monitor and track progress of the products through its different life stages from ideation to expiry
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} md={12}>
<Card className="c_shadow" style={{minHeight:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_8.png" />
      <Card.Body className="c_body">
        <Card.Title>Easy to Integrate</Card.Title>
        <Card.Text>          
        Well documented APIs allows for easy integration with other systems
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>

</Col>
</Row>
</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid >
<Row className='d-flex flex-lg-row flex-column'>
  <Col className="center"><img src="/images/xelerate.png" height="300" width="400" className='w-100 h-auto'/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Create a single source of truth for all products, services, bundles and offers.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>A central repository of products and services:</strong> Create a central repository of both internal as well as third party products and services with complete life cycle management from ideation to expiry.</li> 
   <li className="text-white fs-5"><strong>Get more control with a layered architecture:</strong> Establish an enterprise wide, hierarchical capability allowing central management, control and tracking of all market facing products. Consequently, prevent miss-selling and enable the right choice for each customer.</li>
   <li className="text-white fs-5"><strong>Manage product lifecycle with deep insights:</strong>Ideate and launch the right products, monitor and track performance of existing products and drive product reviews, renewals and expiry.</li>
   <li className="text-white fs-5"><strong>Depend on an intuitive, easy-to-use framework:</strong> With extensive configuration ensure rapid time to market and easy maintenance. Enable seamless integration with the organization&apos;s ecosystem with our extensive set of APIs.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
          <Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_31.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce time to market through a configurable, template driven framework
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_32.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Create competitive differentiation by quick launch of differentiated offers to dynamic sub-segments
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_33.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Standardize the products and services being offered in the market through a centralized
catalog
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_34.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Personalize and contextualize the products to each customer based on context and the choice of the customer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_35.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Enhance choice to customers by mastering partner products and services in the catalog
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_36.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve quality of revenue through insight-driven life cycle management of products
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_37.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Prevent product proliferation through a rule-based framework that drive contextual behaviour of products
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={6}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_38.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Prevent revenue leakage by the establishment of a single source of truth for all parts of the
process, from selling to billing
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} xs={12} md={12}>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_39.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Enable regulatory compliance with traceability and end-to-end audit logs for every action
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<CallCta text='Know your customers better and deliver hyper personalized offerings with SunTec.' btn='Start a conversation' url='/contact-us'/>      
<Insights tags='325'/>
<Footer/>
</>


  );
}

export default LinksExample;