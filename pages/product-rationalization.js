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
          
              <p className="fs-5">Our solution, based on <Link href="">SunTec Xelerate</Link>, a proprietary platform, will enable banks to rationalize their product and service offerings using a centralized product catalog, while balancing agility and stability. This is possible because the platform acts as an engagement layer which effectively decouples the market-facing and core systems. A rationalized product portfolio can help banks to develop highly differentiated offerings based on context and without adding new products. The rule-based nature of the solution will allow the same base set of products to contain customized conditions such as bundles, pricing, benefits and rewards among other variants to meet the exact needs of customers in any given context. Simply put, banks can create as many personalized offers as needed without adding to product proliferation. In addition, the product and offer management capabilities will help banks manage the entire product and offer lifecycles, including ideation, simulation, launch, review and renewal, through a single, agile, enterprise-wide technology layer. Banks can also utilize our solution to incorporate partner products and services into the centralized engagement layer, broadening true customer choice.</p>    
          
          </Container>

    </>
  )
}

export default productRationalization