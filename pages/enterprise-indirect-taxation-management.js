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
  const PdfLink = '/pdf/SunTec-Indirect-Taxation.pdf';
  const PostTitle = "Enterprise Indirect Taxation Management";
  const PostDescription = "Comply with all indirect taxation requirements through an enterprise solution for all aspects of taxation.";
  const PostImage = '/images/benefits_and_loyalty_management.jpg'; 

  const handleShowModal = () => {
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
};

  const fetchInsights = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-insights?tag=332`;
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
      <Breadcum PostTitle={PostTitle} />
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Enterprise Indirect Taxation Management</h1>
<p>Comply with all indirect taxation requirements through an
enterprise solution for all aspects of taxation.</p>
<button onClick={handleShowModal} className="r-btn w-50">Read the Datasheet</button>
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
<p className="fs-5">SunTec&apos;s cloud-based Indirect Tax Management on SunTec Xelerate platform is uniquely designed as a digital innovation middle layer. It can easily integrate with the bank’s existing technology landscape. It is an out-of-the-box solution designed to de-clutter core systems, extract the indirect taxation logic and ensure smooth journey towards indirect tax (GST and VAT ) compliance. It comes equipped with pre-set rules and definitions that can be easily parameterized. SunTec’s Indirect Tax Management system on the cloud is a fully configurable framework that ensures the shortest turnaround to accommodate frequent regulatory changes.
</p>
</Col>
</Row>    
</Container>

<InsightsBtn tags='332'/>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Tax Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Centralized Management</Card.Title>
        <Card.Text>
        Simplifies processes and eliminates complexity by centralizing management
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>End-to-end Management</Card.Title>
        <Card.Text>
        Support for the end-to-end process including input tax, output tax, returns management
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Highly Flexible Framework</Card.Title>
        <Card.Text>
        Flexible and configurable allowing maintenance and easy management of frequent regulatory changes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Automated Data Generation</Card.Title>
        <Card.Text>
        Automated end-to-end process with minimal manual intervention
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Correction and Refund Management</Card.Title>
        <Card.Text>
        Optimized management of refund and corrections
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
</Col>
</Row>
<Container className="text-center mt-5"><Link className="b-btn" href="/suntec-vat/">Learn more about our GCC VAT Solution</Link></Container>

</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Businesses need a centralized platform to manage tax segregation, accounting, invoicing and exemptions to achieve compliance.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>An out-of-the-box compliance management product:</strong> Compliance management made easy with over 200 indirect tax features pre-packaged.</li> 
   <li className="text-white fs-5"><strong>De-clutter core systems:</strong> Count on a comprehensive tax solution that seamlessly integrates with core systems to ensure a smooth regulatory compliance journey.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_12.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Eliminate complexity by centralized management of tax determination rules across diverse business systems
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_13.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Centralize and standardize through an enterprise-level capability across all geographies and entities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_14.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Be ahead of the volatile regulatory framework with the hyper-agile framework that enables smooth transition
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Manage high volumes through high scalability and real-time processing capabilities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_15.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce cost of tax determination and reporting with automated processing and reconciliation facilities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_16.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Mitigate risk through end-to-end traceability and rules driven control with auditability
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
<CtaCall text="Be up to speed in a changing market with SunTec Xelerate by your side." btn="Accelerate with SunTec Xelerate!" url="/request-a-demo/"/>      
<Insights tags="332"/>
<Footer/>
</>


  );
}

export default LinksExample;