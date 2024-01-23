import {Container,Row, Col,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Insights from '../utils/FetchInsights';
import Breadcum from '../components/Breadcum';
import InsightsBtn from '../utils/InsightsBtn';

function LinksExample() {
  
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const PdfLink = '/pdf/Enterprise-Billing-and-Statement-Managemnet-datasheet.pdf';
  const PostTitle = "Enterprise Billing and Statements Management";
  const PostDescription = "Increase customer trust and transparency through accurate billing and prevent revenue leakage. Build an enterprise capability for multi-product, multi-entity and hierarchical invoicing for all stakeholders.";
  const PostImage = '/images/enterprise_billing_and_statements_management.jpg';

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
<h1>Enterprise Billing and Statements Management</h1>
<p>Increase customer trust and transparency through accurate billing and prevent revenue leakage. Build an enterprise capability for multi-product, multi-entity and hierarchical invoicing for all stakeholders.</p>
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
<p className="fs-5">
SunTec&apos;s Enterprise Billing and Statements Management on SunTec Xelerate platform provides extremely rich billing and invoicing capabilities. It helps in automating the end- to-end billing process including pricing, consolidation, pre-billing steps, invoicing and post billing activities including settlement, dispute management and arrears management. Consolidation of different products and services, different entities and geographies into a single invoice for the end customer as well as convergence of multiple billing systems into a single billing system for operational excellence can be easily achieved with out-of-the-box capabilities in a very short time. Multi-currency and multi-language capabilities further makes the enterprise billing and statements management a truly global system.    
</p>
</Col>
</Row>    
</Container>

<InsightsBtn tags='329'/>

<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Enterprise Billing & Statements Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Scheduled and On-demand Invoicing</Card.Title>
        <Card.Text>
        Highly flexibly on-demand invoice generation/ scheduled invoicing functionalities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Complex Grouping and Scheduling</Card.Title>
        <Card.Text>
        Multiple billing groups and multiple invoice schedules can be set up very easily across different geographies
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Integrated Relationship-based Consolidation</Card.Title>
        <Card.Text>
        Reorganize client relationship views based on billing needs of the client
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
        <Card.Title>Flexible Billing Hierarchy Management</Card.Title>
        <Card.Text>
        Agile, multi-level management of the complex client hierarchies for billing and statementing
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>End-to-end Traceability</Card.Title>
        <Card.Text>
        Provides traceability from invoice to the transaction through very intuitive enquiry screens
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_22.png" />
      <Card.Body className="c_body">
        <Card.Title>Flag Revenue Leakage Points</Card.Title>
        <Card.Text>
        Intelligent analytical detection of potential revenue leakages and billing errors
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
        <Card.Title>External Third Party Integrations</Card.Title>
        <Card.Text>
        Extremely easy for integration with pricing and rating engines as well as payment and collection systems (both SunTec Xelerate and external)
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
  <h3 className="text-white fs-2">&quot;A centralized billing functionality that streamlines processes across multiple LoBs and service lines.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Get a consolidated view of customers across LoBs and service lines:</strong> Plug revenue leakage and enhance revenue with centralized billing .</li> 
   <li className="text-white fs-5"><strong>Seamless billing support:</strong>Create detailed drill down bills and seamlessly perform invoice reversal, correction and re-execution in case of any disputes.</li>
   <li className="text-white fs-5"><strong>Generate need-based bills with ease:</strong>Generate bills at account, customer (group and entity) and product levels whenever required.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce revenue leakage through consolidated, automated, condition-driven and converged billing
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_8.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improved customer satisfaction with consolidated invoices with personalization of grouping of fees and charges
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve operational efficiency through simple and automated billing operations
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_9.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve customer transparency through granular level information from multiple channels
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_10.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Mitigate revenue risk through automation and rule-based control across the process
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_11.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce cost and time for dispute management through insights and granular data for each customer relationship
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
<CtaCall text='Leave the hard work to us. With SunTec Xelerate, drive customer engagement and revenue.' btn='What? How? I want to know more' url='/contact-us'/>
<Insights tags="329"/>
<Footer/>
</>


  );
}

export default LinksExample;