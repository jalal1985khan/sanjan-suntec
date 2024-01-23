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
    const PostTitle = "SunTec Negative Interest Management";
    const PostDescription = "Acquire the capabilities required to rapidly roll out negative interests and evolve with the policy";
    const PostImage = '/images/Negative-Interest-Management.jpg';  

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
<Col className='d-flex align-content-center'>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
                              <h1 className="fs-1">{PostTitle}</h1>
                              <p className="fs-5">{PostDescription}</p>
                              <Button onClick={handleShowModal} className="b-btn w-50 mb-3">Read the Datasheet</Button><br/>
                              <BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
                              <Link href="/podcasts/" className='b-btn mt-4 podcast'>Listen to the Podcast</Link>
                          </div>

<div class="lin-dark"></div>
</div>
</Col> 

              </Row>

              

</Container>      
          <Container className="mt-5 mb-5">
              <h2>What is Negative Interest?</h2>
              <p className="fs-5">In a negative interest regime, it costs to deposit money. As counterintuitive as it may sound, this is one of the contemporary policies that certain economies, such as Europe, Japan, Australia and United States are increasingly considering and adopting to help stimulate spending and investment during times of prolonged economic downturns.</p>
              <p className="fs-5">Central banks use interest rates to control economic activity – they raise interest rates during times of high growth and inflation and lower them during times of recession and deflation to avoid serious economic fluctuations. Negative interest is unconventional, but it is being forced because of the economic situations in different regions. The effective execution of the policy is, however, slightly more intricate than simply mandating interests on all deposits.</p>
              <p className="fs-5">With this policy, central banks attempt to instigate two key effects – firstly, to trigger the organizations to transmit the negative interest down to client-level and secondly, to incentivize the organizations to offer more credit. The amplitude of these effects, however, have been constrained by several factors including the banks’ and financial services institutions’ ability to implement negative interest programs.</p>
          </Container>
<Container className="p-3 pe-banner" fluid style={{ 
backgroundImage: `url("/images/Negative-Interest-mid-section-1.jpg")` 
}}>
<Row>
<Col>
</Col> 
<Col>
<div className="px-text" >
<h1>What Does It Mean for Banks and Financial Institutions and How Can They Address It Effectively?</h1>
                          <p className="fs-5">Simply put if banks do not address this policy quickly, it can erode their profitability and leave them with excess liquidity with high opportunity costs.</p>
                          <p className="fs-5">Banks are now looking at several strategies to keep pace with the evolving regime, including increasing loan-to-debt ratios to help address the eroding net interest margin. Very importantly, banks are also looking at transmitting negative interest implications on deposits down to the client level. As simple as it may sound, this transmission is complex given their dependence on legacy systems, which were not built to manage and process this contemporary policy that is continuing to evolve.</p>
                          <p className="fs-5">To effectively implement negative interest programs, banks will need to acquire technological and operational capabilities that can ensure quick time-to-market and adapt with the changes in policy.</p>
</div>
</Col> 
</Row>           
</Container>          
<Container fluid className='wbg-gy'>
<Container className="mt-0 pt-5 pb-5 mb-5">
          <h2>Keep Pace with the Negative Interests, With SunTec Negative Interest Management</h2>
          <p className="fs-5">SunTec Negative Interest Management Solution is powered by our flagship platform SunTec Xelerate and will enable banks and financial services institutions to design, implement and manage negative interest programs at scale. Given the rule-based and flexible nature of the solution, these organizations can ensure to roll out negative interest programs in a customer centric manner, thereby enabling them to go beyond simply complying with the regime. The solution is designed to operate as an over-the-top layer over the banks’ and financial services organizations’ core systems. This way, the solution will integrate seamlessly with the existing systems, augment the core systems’ capabilities, and establish a centralized capacity to deliver negative interest programs.</p>    
              </Container>
              
          </Container>
          <CtaCall text='Be up to speed in a changing market with SunTec Xelerate by your side.' url='/request-a-demo/' btn="Accelerate with SunTec Xelerate!" />                    

          <Container className="mt-5">      
        <h2 className='mb-5'>With SunTec Negative Interest Management Solution, Benefit From:</h2>       
        <Row >
          <Col >
<div class="card border-0 wbg-gy" >
  <img src="images/centralize.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Rapid time-to-market</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" >
  <img src="images/agile.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Transparency and auditability</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" >
  <img src="images/stability.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Automation of negative interest accounting</h5>
  </div>
</div>
</Col>
</Row>      
</Container>

      <Footer/>
    </>
  )
}

export default productRationalization