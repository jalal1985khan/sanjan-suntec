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
    const PdfLink = 'pdf/Product-rationalization-whitepaper.pdf';
    const PostTitle = "SunTec Banking-as-a-Service Solution";
    const PostDescription = "Deliver lifecycle experiences through an ecosystem of partners";
    const PostImage = '/images/SunTec-Banking-as-a-Service-Solution.jpg';  

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
<Col>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">SunTec Product Rationalization Solution for Banking</h1>
<p className="fs-5">A simpler, contemporary product portfolio lets you focus on personalizing offers for the customer. Product rationalization reduces complexity and adds agility, flexibility and choice</p>
<button onClick={handleShowModal} className="b-btn">Read the Datasheet</button>
<BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
</div>
<div class="lin-dark"></div>
</div>
</Col> 
<Col>
</Col> 
              </Row>
              <Col>
              </Col>
              

</Container>      
<Container className="mt-5 mb-5">
<p className="fs-5">Banks have, over many decades, grown as a business and technologically, with the market. The state of technology looked vastly different then. Banks attempted to address changing market needs by offering several additional products for static customer segments. Unfortunately, this only complicated already fragmented and siloed IT landscapes; and this approach caused a level of product proliferation that has now become counterproductive. The current state also increases costs and time-to-market, thereby inhibiting banks’ ability to innovate, respond to market changes and meet the changing customer expectations effectively. A rip-and-replace approach to address such challenges is not viable for business continuity reasons and especially since these old systems contain large amounts of valuable product and customer data. Besides, the stability of these systems is critical, and any considerable changes to the core are extremely high risk and time intensive. However, banks can no longer afford to stick to the old approach given the current market conditions, characterized by the increasingly demanding customer and a whole new set of technology-led competitors. Banks are now realizing the need to quickly simplify, optimize and scale their technology stack to ensure that they continue to thrive.</p>
          </Container>
          <Container className="p-3 pe-banner" fluid style={{ 
      backgroundImage: `url("/images/Rationalization-mid-section-copy-2.jpg")` 
    }}>

<Row>
<Col>
</Col> 
<Col>
<div className="pe-text" >
<h1>Why Product Rationalization?</h1>
<p className="fs-5">Where a rigid, siloed and highly proliferated product portfolio comes with several undesirable limitations, Product Rationalization improves efficiencies and builds agility. It is about optimizing the product portfolio to empower the bank to meet its desired goals and objectives by innovatively responding to market conditions. Customers seek to be treated uniquely and expect the banks’ offerings to be contextualized to their individual needs and journeys. A seemingly large product portfolio suggesting a broad choice is self-defeating. Undifferentiated products only increase confusion for the customers, create difficulties for bank staff selling multiple, yet almost homogenous products and raise the cost of maintenance in terms of IT, people and processes. Product rationalization helps standardize and centralize products across the bank to ensure the ability to rapidly innovate and personalize the bank’s offerings, making it easier to sell and offering better value to the customer.</p>
</div>
</Col> 
</Row>           
</Container>
          <Container className="mt-5">
          <h2>How Can Our Product Rationalization Solution Help Banks?</h2>
          <p className="fs-5">Our solution, based on <Link href="">SunTec Xelerate</Link>, a proprietary platform, will enable banks to rationalize their product and service offerings using a centralized product catalog, while balancing agility and stability. This is possible because the platform acts as an engagement layer which effectively decouples the market-facing and core systems. A rationalized product portfolio can help banks to develop highly differentiated offerings based on context and without adding new products. The rule-based nature of the solution will allow the same base set of products to contain customized conditions such as bundles, pricing, benefits and rewards among other variants to meet the exact needs of customers in any given context. Simply put, banks can create as many personalized offers as needed without adding to product proliferation. In addition, the product and offer management capabilities will help banks manage the entire product and offer lifecycles, including ideation, simulation, launch, review and renewal, through a single, agile, enterprise-wide technology layer. Banks can also utilize our solution to incorporate partner products and services into the centralized engagement layer, broadening true customer choice.</p>    
      </Container>
      <Container className="mt-5">
        <Row >
          <Col>
<div class="card border-0" >
  <img src="images/centralize.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Centralize and Simplify</h5>
    <p class="card-text fs-5">Centralize internal and external products and services, and use a rule-based solution to deliver innovative offerings</p>
  </div>
</div>
</Col>
          <Col>
          <div class="card border-0" >
  <img src="images/agile.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Stay Agile</h5>
    <p class="card-text fs-5">Respond to changing market needs by introducing hyper-personalized offers for dynamic customer segments</p>
  </div>
</div>
          </Col>
          <Col>
<div class="card border-0" >
  <img src="images/stability.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Ensure Stability</h5>
    <p class="card-text fs-5">Protect the core system’s stability by decoupling core functions from customer engagement and personalization functions</p>
  </div>
</div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
<div class="card border-0" >
  <img src="images/centralize.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Speed Up and Save</h5>
    <p class="card-text fs-5">Easy integration and interoperability means accelerated time-to-market and reduced costs of creating and launching new offerings</p>
  </div>
</div>
</Col>
          <Col>
          <div class="card border-0" >
  <img src="images/agile.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Configure Easily</h5>
    <p class="card-text fs-5">Use easy-to-use, drag and drop capabilities to rapidly create hyper-personalized offerings and reduce product complexity and costs significantly</p>
  </div>
</div>
          </Col>
          <Col>

          </Col>
        </Row>        
      </Container>
      <InsightsBtn tags="335" />
      <Container className="mt-5">
        <h2 className="mb-3">Key Capabilities and Benefits ​</h2>
        <Row>
          <Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Enterprise-wide Product Catalog</h5>
    <p class="card-text">Establish a centralized repository of internal and partner products and services, and create and manage different versions of those, to reduce time-to-market and improve operational efficiency.</p>
    
  </div>
</div>
</Col>
<Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Dynamic Segmentation</h5>
    <p class="card-text">Personalize and contextualize offerings by dynamically segmenting customers based on their behavior and needs, and by defining and automating eligibility criteria.</p>
    
  </div>
</div>
          </Col>
          <Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Product and Offer Lifecycle Management</h5>
    <p class="card-text">Standardize end-to-end product and offer lifecycle management and utilize simulation capabilities to meet customer expectations in an agile manner while ensuring efficient revenue management.</p>
    
  </div>
</div>
</Col>
        </Row>
        <Row className="mt-4">
          <Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Personalized Offers</h5>
    <p class="card-text">Personalize offers for dynamic customer segments, by bundling internal and partner products and services and by customizing conditions to meet individual customer needs based on the context and their unique journeys.</p>
    
  </div>
</div>
</Col>
<Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Analysis and Insights</h5>
    <p class="card-text">Evaluate and compare customer behavior, usage and profitability trends, by product, bundle, offer, sub-segment, region and unit among others and conduct what-if profitability analysis using multiple parameters to inform decisions.</p>
  </div>
</div>
          </Col>
          <Col>
  <div class="card border-0">
  <div class="card-body">
    <h5 class="card-title">Centralized Engagement Layer</h5>
    <p class="card-text">Utilize an agile, horizontal engagement layer that can integrate seamlessly with legacy core systems and modern customer-facing systems alike to enhance overall agility, without disturbing the stability of core systems. This obviates the need for core replacement and reduces the total cost of ownership and time-to-market significantly.</p>
    
  </div>
</div>
</Col>
</Row>
      </Container>
      <CtaCall text='130+ leading organizations across 45+ countries use SunTec’s Xelerate to deliver value.' url='request-a-demo/' btn="See SunTec Xelerate in action"/>
      <Container className="mt-5">
        <h2 className="mb-4">SunTec Products That Enable Rationalization</h2>
        <Row>
          <Col>
          <Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Enterprise Product Management</Card.Title>
      </Card.Body>
    </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Dynamic Offer Management</Card.Title>
      </Card.Body>
    </Card>
          </Col>
        </Row>
</Container>
      <Insights tags="335" />
      <Footer/>
    </>
  )
}

export default productRationalization