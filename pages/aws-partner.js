import { Container, Row, Col, Breadcrumb, Card, Button, Offcanvas,ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Breadcum from '../components/Breadcum';
import Image from 'next/image';
import CtaCall from '../components/CtaCall';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';
import CardBox from '../utils/Card';

function AwsPartners() {
    const router = useRouter()  
    const PdfLink = '';
    const PostTitle = "AWS Partner";
    const PostDescription = "Cloud-native pricing and billing applications that help banks design and launch hyper-personalized offerings while improving time-to-market, TCO, and ensuring enhanced security.";
    const PostImage = "/images/aws_banner_banner.jpg"; 
  

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
<div className=" text-white">
<h1 className="fs-1">{PostTitle}</h1>
<p className="fs-5">{PostDescription}</p>
<Button  className="b-btn">Know more</Button>
</div>
</Col> 
<Col>
</Col> 
</Row>
          </Container>
          <Container className='wbg-gy' fluid>
              <Container>
              <Row>
                      <Col lg={8} className='mt-5 mb-5'>
                      <p className='fs-5'>SunTec Xelerate has been successfully verified by AWS Foundational Technical Review (FTR) (a detailed technical and architectural review) and we are now a part of the AWS ISV Accelerate Program, a global co-sell support program. The FTR confirms SunTec Xelerate’s security, reliability, operational excellence, speed, and functionality.</p>
                      <p className='fs-5'>Our products and solutions leverage AWS’ platform capabilities for cloud and SaaS deployments. With this partnership, banks can capitalize on our cloud-native pricing, billing, and revenue management products on a resilient and scalable AWS cloud environment to improve customer experience and revenue growth. This partnership will help banks like yours to accelerate your journey to hyper personalization with enhanced scalability, security, and compliance.</p>
                  </Col>
                      <Col className='d-flex justify-content-center align-items-center'>
                          <Image src="/images/aws-logo.png" width={120} height={120} />
                      </Col>
                  </Row>
                  </Container>
          </Container>
          <Container className='mt-5'>
              <Row>
              <Col lg={8} className='mt-5 mb-5'> <h1 className='fs-2 fw-bold'>Bank on AWS Cloud Capabilities with SunTec Xelerate</h1>
              <p className="fs-5">Offer innovative solutions at a faster pace with lower costs, and create unparalleled customer experiences</p>
              <ul>
                <li className='fs-5'><b>Stay functionally up to date</b> with SunTec’s latest features and functionalities via timely auto releases.</li>
                <li className='fs-5'><b>Improve customer experiences</b> by hyper-personalizing products and offers while plugging revenue leakages.</li>
                  <li className='fs-5'><b>Accelerate time-to-market</b> and reduce cost of creating and launching new products and services.</li>
                  <li className='fs-5'><b>Effectively monetize ecosystems</b> by accelerating sales through partners.</li>
                  <li className='fs-5'><b>Optimize digital transformation initiatives</b> by replacing multiple disparate billing systems and generate consolidated bills.</li>
                      </ul>
                  <Link href="" className='b-btn btn btn-primary'>Banking on the hybrid cloud</Link>
                  </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                      <Image src="/images/APN-Logo_Web_Color.png" width={120} height={60} className='w-50'/></Col>
             </Row>

          </Container>
<Container fluid className='wbg-gy pb-5 mb-5'>
              <Container className='pt-5 pb-5'>
                  <h3>How Can Your Bank Benefit?</h3>
                  <Row className='pt-3'>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Multi-Cloud-Extensibility-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Multi-Cloud Extensibility</Card.Title>
              <Card.Text className="fs-5">SunTec SaaS on AWS is enabled with standard extensions and services that allow organizations with multiple cloud platforms within their existing infrastructure to operate with SunTec Xelerate and without incurring any functional limitations or maintenance overheads.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Flexibility-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Flexible Deployment Models</Card.Title>
              <Card.Text className="fs-5">Suntec Xelerate components are stateless in nature and is cloud architecture compliant. The application can be deployed on AWS supported container orchestration models like EKS, ECS, and OpenShift. SunTec Xelerate also provides the flexibility to opt for Oracle or PostgreSQL as the database option.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/On-Demand-Scalability-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">On-Demand Scalability</Card.Title>
              <Card.Text className="fs-5">Our cloud infrastructure is enabled with vertical and horizontal scalability which facilitates auto-scalability to solve for any workload fluxes and respond immediately to client demands.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                  </Row>
                  <Row className='pt-3'>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/High-Availability-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">High Availability</Card.Title>
              <Card.Text className="fs-5">The native open architecture of our platform supports industry-standard features such as clustering, load-balancing, fail-over and hybrid to ensure high-availability.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Easy-Migration-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Easy Migration</Card.Title>
              <Card.Text className="fs-5">SunTec Xelerate can be deployed on public or private clouds and can switch between deployment models based on the organization’s business priority and preference.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Enhanced-Security-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Enhanced Security</Card.Title>
              <Card.Text className="fs-5">Our platform is GDPR-ready, SSO Compliant with Oauth, SAML specifications and adheres to ISO 27001 and SoC-2 guidelines. In addition, the dedicated security team ensures comprehensive treatment of information security through periodic vulnerability assessment and penetration testing cycles and, thereby, enforce data confidentiality and integrity.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                  </Row>
                  <Row className='pt-3'>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/High-Availability-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Cost Optimization</Card.Title>
              <Card.Text className="fs-5">Deploying SunTec Xelerate on cloud requires minimum upfront infrastructure investment and zero depreciation or renewal costs.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Easy-Migration-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Collaborative Framework</Card.Title>
              <Card.Text className="fs-5">SunTec Xelerate is a low code, no-code platform with an open architecture and standard extensions to ensure seamless integration and interoperability. It is built to operate and collaborate effectively in multi-application, multi-cloud ecosystems.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                      <Col>
                      <Card className="sa_shadow" style={{ height: 40 + 'em' }}>
            <Card.Img className="card-icon-left" src="/images/Enhanced-Security-1.svg" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Enhanced Security</Card.Title>
              <Card.Text className="fs-5">Our platform is GDPR-ready, SSO Compliant with Oauth, SAML specifications and adheres to ISO 27001 and SoC-2 guidelines. In addition, the dedicated security team ensures comprehensive treatment of information security through periodic vulnerability assessment and penetration testing cycles and, thereby, enforce data confidentiality and integrity.</Card.Text>
            </Card.Body>
          </Card>
                      </Col>
                  </Row>
              </Container>   
          </Container>
          <CtaCall text="Discover how this leading Asian bank addressed customer churn and delivered hyper-personalized products."
        btn="Download Case Study"
        url="/case-studies/a-leading-asian-bank-transitions-to-a-customer-centric-banking-model/" />   
<Footer/>
</>


  );
}

export default AwsPartners;