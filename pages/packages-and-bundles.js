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

function productRationalization() {
    const router = useRouter()  
    const [showModal, setShowModal] = useState(false);
    const PdfLink = 'pdf/VAT-Solution-Overview_30-Oct_v1-1.pdf';
    const PostTitle = "How Banks Can Strengthen Customer Loyalty With Personalized Bundling Strategies";
    const PostDescription = "Meet your invoicing needs seamlessly and automate your end-to-end billing process";
    const PostImage = '/images/packages_desktop_banner.png';  

    const handleShowModal = () => {
        setShowModal(true);
    };
    
      const handleCloseModal = () => {
        setShowModal(false);
    };  


  return (
      <>
          <Header/>
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
                  <Col lg={7}></Col>
<Col className='d-flex align-content-center'>
<div className="square-text-dark ">
<h1 className="fs-1 text-white">{PostTitle}</h1>
 </div>
</Col> 
</Row>
</Container>      
<Container className="wbg-pink" fluid>
<Container><h1 className='txt-dark-purple text-center p-3'>42% of Consumers Will Switch FIs for Bundled Banking</h1></Container>  
</Container>
          <Container>
              <h2 className='fs-1 txt-dark-purple'>Fragmentation in Banking Services</h2>
              <p className='fs-5'>Consumer surveys<sub>2</sub> have indicated time and again the usefulness of product bundles in the banking sector and their direct correlation to customer retention and loyalty. While banks acknowledge the significance of bundling, effectively utilizing them to enhance customer loyalty has been a multifaceted challenge.</p>
              <p className='fs-5'>Firstly, neobanks and other non-traditional players entice customers, particularly Gen-Zers and millennials, away from traditional banks by offering digitally sophisticated and highly convenient services. Secondly, the rise of e-wallets for payments has disrupted traditional channels, assigning regulatory functions to banks, thus widening the gap between a bank and its customers. Thirdly, customers prefer using super apps as a single window to access various services such as booking movie tickets, flights, restaurant reservations, and peer-to-peer money transfers.</p>
              <p className='fs-5'>The choice of banking products and services is based on the need, age, lifestyle, and preference of the customer. For example, the customer may choose a credit card from bank one, make payments through an e-wallet, and avail loans from a third bank. This proliferation has resulted in severe fragmentation of banking services and a loss of visibility into customer transactions and data. Customer loyalty, a key element of a successful banking operation, has therefore become almost non-existent.</p>
          </Container>
          <Container className='my-5 '>
              <Row className='position-relative d-flex flex-row justify-content-end '>
                  <Col className='d-flex position-absolute' >
            <div class="card border-0 card-p rounded-0 col-md-7" style={{marginTop:'7%'}}>
  <div class="card-body">
    <h5 class="card-title fs-1 txt-suntec">Keeping Pace with Customer Dynamics</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary fs-2 txt-suntec">Reclaiming Control</h6>
    <p class="card-text fs-5">To drive customer loyalty, banks must counter the fragmentation of services with highly customized offers built on deep analysis of customer insights. They must bundle offers such that they resonate with the customer’s context and are perceived as attractive and valuable. The ability to personalize, coupled with agility, is imperative to growing the customer graph.</p>
  </div>
</div>
              </Col>
                  <Col md={6}><Image src="/images/the_customer_revolution.png" /></Col></Row>
          </Container>          
<Container className="py-4">
<Row>
<Col className='wbg-suntec text-white d-flex align-items-center justify-content-center'><h2 className='p-5'>Key Capabilities Help Banks Create Personalized Bundles from Customer Context</h2></Col>
<Col>
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header ">
      <button class="accordion-button fs-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Gathering Customer Context
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body fs-5">
      A 360-degree picture of the customer goes beyond mere payment and transaction data. It involves diving deeper to gather meaningful insights into the customer’s life stage and relevant goals to predict intent. Understanding the customer context—where they stand in their life or business journey—is crucial to creating and offering relevant bundles to the customer. This contextual understanding empowers banks to treat every customer as a distinct ‘segment of one’ and offer highly personalized bundles.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed fs-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Leveraging Partnerships in the Ecosystem
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body fs-5">
      Emerging business paradigms such as Banking-as-a-Service (BaaS) and Open Banking underscore the pivotal role of collaboration within the banking ecosystem. Through strategic partnerships, banks can equip themselves to quickly introduce innovative packages and bundles via non-banking channels and third-party collaborations. Proactivity on the part of the bank ensures customer retention, as they can offer relevant services through diverse channels. The essence of a successful ecosystem partnership lies in executing these alignments securely and with agility through API-based integration and data exchange, fostering trust and loyalty among both partners and customers. By navigating these collaborations effectively, banks can lead the change while ensuring sustained relevance and competitiveness in a dynamic financial landscape.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed fs-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Collaborating with the Right Partners to Deploy the Right Technology
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body fs-5">
      Digitally native banks are shifting customers from traditional banks and fostering ecosystem partnerships, presenting a challenge for traditional banks hindered by legacy architecture. This architecture limits the understanding of customers and hampers proactive ecosystem leadership. However, by adopting digital technologies, traditional banks can offer bundled, personalized services, enhancing the customer experience. Recognizing the need for technology modernization, these banks face the formidable task of overhauling entrenched systems. The key lies in choosing the right technology partner, one with a deep understanding of modernizing legacy systems and capable of synergizing with the bank. This collaboration is crucial for risk mitigation and maximizing the benefits of digital transformation, ultimately leading to digital resilience, customer-centricity, and ecosystem leadership for traditional banks.
      </div>
    </div>
  </div>
</div>
                  </Col>
              </Row>              
</Container>

<Container className="p-3 pa-banner mb-5" fluid style={{ 
backgroundImage: `url("/images/how_suntec_can_empower.png")` 
}}>
<Row>
<Col lg={8}>
<div className="text-white" >
<h1>How SunTec Can Empower Banks with an Effective Bundling Solution</h1>
<p className="fs-5">SunTec Xelerate operates as a ‘wrap-around’ over existing core banking systems to enhance functionality. It circumvents the architectural constraints of the bank’s legacy systems and extracts data from disparate systems to provide a holistic view of the customer. Powered with advanced analytics, the platform empowers product leaders in the bank to effectively bundle, price, bill, and manage revenues.</p>                          
</div>
</Col>                  
</Row>           
          </Container> 

<Container className="p-3 pa-banner mb-5" fluid style={{ 
backgroundImage: `url("/images/suntec_solutions_key_benefits.png")` 
}}>
<Row>
<Col></Col>                  
<Col lg={6}>
<div className="text-white" >
<h2 className='fs-1'>SunTec Solution - Key Benefits</h2>
                          <p className="fs-5 px-text">Increase customer acquisition, retention, and loyalty by offering hyper-personalized product bundles.</p>                          
                          <p className="fs-5 px-text">Prevent customer attrition and deepen customer relationships with insight-driven offers.</p>                          
                          <p className="fs-5 px-text">Grow revenues by increasing cross-sell and upsell opportunities.</p>                          
                          <p className="fs-5 px-text">Simplify integration with core banking systems and lower the costs of IT maintenance.</p>                          
</div>
</Col>                  
</Row>           
</Container> 
      <Container>
      
      <Insights tags="326"/>
    </Container>
      <Footer/>
    </>
  )
}

export default productRationalization