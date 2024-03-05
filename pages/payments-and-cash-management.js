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
    const PostTitle = "Superior Global Cash Management with a Robust Offer-to-Bill Lifecycle Solution";
    const PostDescription = "Meet your invoicing needs seamlessly and automate your end-to-end billing process";
    const PostImage = '/images/payments-and-cash-management-desktop-banner.jpg';  

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
<Col className='d-flex align-content-center' >
<h1 className="fs-1 text-white fw-bold">{PostTitle}</h1>
</Col>
<Col>
</Col> 
</Row>
</Container>      
<Container className="py-3" fluid>
<Container><h1 className='txt-dark-purple fw-bold fs-1'>Corporate Payments and Cash Management</h1></Container>  
</Container>
          <Container>
              <h2 className='fs-2 txt-dark-purple'>An Opportunity for Banks to Drive Growth and Customer Loyalty</h2>
              <p className='fs-5'>In the evolving landscape of global business, Nordic banks have a critical opportunity to become strategic enablers in corporate cash management. With the operational success of the Single Euro Payments Area (SEPA), including non-EU members like Norway and Iceland, Nordic banks are uniquely positioned to offer streamlined, efficient payment solutions within this framework.</p>
              <p className='fs-5'>By providing treasury management services that offer a centralized, real-time view of cash flows and transactions, these banks can not only facilitate better cash flow forecasting and matching but also enhance their role in transforming corporate cash management for businesses expanding globally. </p>
              <p className='fs-5'>This approach not only caters to the complexities faced by corporate treasurers but also capitalizes on the consolidation of common market areas, positioning Nordic banks as pivotal players in the international financial landscape.</p>
      </Container>
      
<Container fluid className='g-0'>
        <Container className='wbg-dark-purple g-0' fluid>
          <Container>
            <p className='fs-5 text-white pt-3 pb-2 fw-bold'>Faced with fierce competition from digitally adept new-age banks, traditional banks are under significant pressure to revamp their services for corporate customers, striving to maintain their status as the preferred choice for global banking.</p>
          </Container>
          <Container className="triangle-down g-0" fluid></Container>
        </Container>      
        
</Container>



<Container className='my-5 '>
        <Row className='position-relative d-flex flex-row  '>
          <Col md={6} className='flex-column'><Image src="/images/challenges_in_global_img.png" />
          </Col>
          <Col>
          <Container className='p-3'>
            <h3 className='fs-1 txt-dark-purple'>Challenges in Global Payments and Cash Management</h3>
            <p className='fs-5'>This perpetual movement and constant exchange present a fundamental challenge in the domain of payments and cash management.</p>
            </Container>
          </Col>
          <Col className='d-flex position-absolute justify-content-end' style={{ bottom: '40px' }}>
          
            <div class="card border-0 card-p rounded-0 col-md-9" >
  <div class="card-body">
    <h5 class="card-title fs-1 txt-suntec">Global businesses are increasingly turning to banks for solutions to respond to their cash management challenges:</h5>
                <ul className='fs-5'>
                  <li>Getting real-time visibility into cash balances</li>
                  <li>Ensuring robust compliance with diverse regulations across jurisdictions</li>
                  <li>Facilitating precise monitoring and agile responses to the dynamic nature of financial flows</li>
                  <li>Enabling accurate reporting and forecasting of cash flow and transactions</li>
                  <li>Providing a real-time, global view of cash flow for businesses in diverse geographical locations, time zones and with different currencies and languages</li>
                  <li>Integrating seamlessly with Automated Clearing House (ACH) networks and non-banking payment apps</li>
                  <li>Streamlining liquidity planning and forecasting</li>
                  <li>Facilitating real-time payments</li>
    </ul>
    
  </div>
</div>
              </Col>
                  </Row>
      </Container>   
      
      <Container>
        <h2 className='fs-2 txt-dark-purple'>The Importance of Integrating Disparate Sources in the Offer-to-Bill Lifecycle</h2>
        <p className='fs-5'>Disjointed systems create gaps across various functions—treasury, regional offices, pricing, product management, implementation, billing, settlement, and renewal. The lack of integration hinders a centralized view of the offer-to-bill lifecycle resulting in billing issues.</p>
        <p className='fs-5'>Enterprises favor banks offering comprehensive cash flow views, superior visibility into balances, effective liquidity management (considering interest rates, contract terms, and payment needs), and robust regulatory compliance. </p>
        <p className='fs-5'>Banks aiming for a competitive edge must offer end-to-end cash flow views, providing customers with visibility into balances, effective liquidity management, and robust regulatory compliance. This requires banks to capture and process extensive customer data from various sources.</p>

</Container>
<Container className='wbg-dark-purple g-0' fluid>
        <Container className='py-4'>
          <p className='fs-5 text-white fw-bold'>The criticality of an automated offer-to-bill solution cannot be overstated. It equips banks with a holistic perspective on agreements with corporate customers. This facilitates precise and timely billing in alignment with contractual terms while minimizing conflicts and errors. The resulting accurate pricing, billing, and real-time cash flow views empower corporate customers to exercise better control over financial planning, cash flow monitoring, as well as liquidity planning and forecasting. For banks, this translates into delivering a seamless customer experience while minimizing revenue leakage.</p>
        </Container>
</Container>
      
<Container className='py-5'>
        <Row>
          <Col>
            <h2 className='fs-1 txt-dark-purple'>Enable Superior Payments and Cash Management For Your Corporate Customers</h2>
            <h4 className='fs-2 txt-dark-purple'>With SunTec’s Automated Offer-to-Bill Solution</h4>
            <p className='fs-5'>Drawing on over thirty years of industry expertise, SunTec provides global banks with an advanced, automated solution that enhances the offer-to-bill lifecycle, crucial for optimizing payments and cash management for their clients. The good news is that SunTec’s transformative approach to revenue management doesn’t necessitate the replacement of core legacy systems for banks. We simplify the process by hollowing out the customer engagement functions from the core system and managing it as a horizontal cross-enterprise layer.</p>
            <p className='fs-5'>This strategy enables banks to swiftly integrate new technologies, incorporate additional features, provide personalized products, and elevate the overall customer experience.</p>
          </Col>
          <Col>
            <Image src="/images/enable_superior_img.png" width={300} height={300} className='w-100 h-100'/>
          </Col>
        </Row>        

</Container>

      <Container>
        
      <div class="card border-0 card-g wbg-green rounded-0 col-md-12" >
  <div class="card-body">
            <h5 class="card-title fs-1 txt-dark-green">Key Benefits</h5>
            <h3 className='fs-3 txt-dark-green py-3'>Discover how SunTec’s Offer-to-Bill Solution Empowers Cash Management</h3>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Single View of Payments & Cash Processes:</span>Pulls data from multiple sources into a single view, to deliver real-time visibility of global cash flow. This in turn empowers banks with immediate and valuable insights.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Integrated and Scalable:</span> Ensures seamless integration with the bank’s existing processes and technology, offering the agility to adapt to regulatory changes.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Customer-Centric:</span> Shifts from a product-centric to a customer-centric approach, optimizing financial goals across a diverse customer portfolio.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Data-Driven Decision Making:</span> Employs rich and diverse datasets for effective deal structuring, pricing, and billing, thus enhancing operational excellence.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Global and Local Compliance:</span> Navigate complex regulatory landscapes, including SEPA, ensuring compliance across various jurisdictions.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Enhanced Customer Experience:</span> Provides solutions tailored to individual customer needs, from local businesses to MNCs with global operations.</p>
            <p className='fs-5'><span className="txt-dark-green fw-bold">Streamlined Processes:</span> Offers solutions for effective cash management, including liquidity management, multi-currency payments, and billing consolidation.</p>
            
    
  </div>
</div>

</Container>
<Container fluid className='g-0 py-5'>
        <Image src="images/interested_above_img-1.png" width={800} height={300} className='w-100 h-100' />
</Container>

<Container className='linear py-5' fluid>
        <Container className="border border-2">
          <h1 className='fs-1 txt-dark-purple text-center py-3'>Interested in Taking the Next Step?</h1>
          <Container className='card py-4 rounded-0 border-0'>
            <h2 className='fs-2'>Streamlining Payments and Cash Management – A Guide to Transform Your Offer-to-Bill Lifecycle</h2>
            <h4 className='fs-4 py-3 fw-bold'>This eBook covers</h4>
            <ul className='fs-5'>
              <li>The key elements that deliver value in the offer-to-bill lifecycle</li>
              <li>The impact of pricing and billing on a bank’s profitability and customer experience</li>
              <li>
                Key challenges to be addressed by a technology solution in the transformation of the offer-to-bill lifecycle</li>
            </ul>
            <Link href="/" className='btn slide-btn text-white' style={{width:'200px'}}>Get Your eBook Now</Link>
          </Container>
          <Container className='py-4'>
            <h4 className='fs-2 text-white'>Earn the Loyalty of Your Customers and Drive Growth for Your Bank</h4>
            <p className="fs-5 text-white">Email <Link href="ma:contactus@suntecgroup.com">contactus@suntecgroup.com</Link> to discover how SunTec can establish a robust offer-to-bill lifecycle that will empower your clients with improved cash visibility and control.</p>
          </Container>
        </Container>
      </Container>      
<Container>
    </Container>
      <Footer/>
    </>
  )
}

export default productRationalization