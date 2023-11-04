import {Container,Row, Col,Card, Button} from 'react-bootstrap';
import {useState } from "react";
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
  const PdfLink = '/pdf/SunTec-Loyalty-Management.pdf';
  const PostTitle = "Benefits and Loyalty Management";
  const PostDescription = "Improve your share of wallet – engage with your customers across product lines with targeted and differentiated loyalty programs. Manage customer relationships holistically to enhance loyalty, improve product depth and reduce attrition.";
  const PostImage = '/images/benefits_and_loyalty_management.jpg';


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
<h1>Benefits and Loyalty Management</h1>
<p>Improve your share of wallet – engage with your customers across product lines with targeted and differentiated loyalty programs. Manage customer relationships holistically to enhance loyalty, improve product depth and reduce attrition.</p>
<button onClick={handleShowModal} className="r-btn">Read the Datasheet</button>
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
<p className="fs-5">SunTec&apos;s Ecosystem Management and Monetization on SunTec Xelerate platform enables financial services, telecom, travel and insurance organizations to embrace the open economy and use it to their advantage. It helps organizations transform from a utility provider to a value aggregator. Organizations can expand their products and services offering by collaborating with external partner ecosystems, providing innovative solutions, adopting new business models and maximizing revenue by delivering true value to its customers.
</p>
<p className="fs-5">SunTec&apos;s Ecosystem Management and Monetization achieves this through end-to-end management, monitoring, and monetization capabilities across the partner and the customer value chain. The solution is pre-packaged with powerful features that help organizations to leverage the true potential of the open economy.</p>
</Col>
</Row>    
</Container>

<InsightsBtn tags="331"/>      
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Loyalty Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Rewards Management</Card.Title>
        <Card.Text>
        Rule-driven rewards computation, expiry management and ability for manual adjustments based on credits/ debits/ batch and upload mode
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Campaign Management</Card.Title>
        <Card.Text>
        Plan enrollment and ability to set up base plan, campaigns, new plan creations/ updates, usage-based rewards, merchant-based rewards, one time and recurring benefits
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Redemption Management</Card.Title>
        <Card.Text>
        UI-based redemption, web service based (online/ POS) redemption, redemption reversal, burn ratio configuration
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
        <Card.Title>Merchant-based Rewarding</Card.Title>
        <Card.Text>
        Set up redemption rules, multiplier earnings and varying reward cap based on merchants
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Personalized Products and Services</Card.Title>
        <Card.Text>
        Define product/ service variations based on reward strategies, multi-product/ service plans
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_22.png" />
      <Card.Body className="c_body">
        <Card.Title>Detailed Analytics and Reporting</Card.Title>
        <Card.Text>
        Consolidated statements and report generation, current rewards, opening/closing balance, earning history
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Bring agility to your customer retention strategies.&quot;</h3>
  <p className="text-white fs-5">Empower your organization with comprehensive partner management capabilities</p>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Drive customer loyalty:</strong> Gain a holistic view of your customer&apos;s relationship value, relationship tenure, product ownership and usage, thereby predicting customer loyalty and churn behaviors.</li> 
   <li className="text-white fs-5"><strong>Create loyalty plans easily:</strong> Strategically devise loyalty plans from start to finish (plan definition, computation to redemption).</li>
   <li className="text-white fs-5"><strong>Personalize:</strong> Understand your customer needs better and personalize reward types. </li>
   <li className="text-white fs-5"><strong>An effective customer retention strategy:</strong> Implement an agile retention strategy across various lines of business and complex account hierarchies, leading to a larger customer wallet share.</li>
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
        Reduce customer attrition through personalized and relationship-driven loyalty programs
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_13.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce time to market of new loyalty programs through a configurable and easy-to-use application
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_14.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve client experience with easy access to data across channels
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
        Integrate relationships across products and group entities through centralized loyalty management
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_15.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Increase customer choice through an ecosystem of partners
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_16.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve partner experience through seamless integration and insight-driven decisioning
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_17.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Enhance partner loyalty through partner loyalty programs
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_11.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Plug revenue leakage by real-time tracking of your loyalty program
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
</Row>
</Container>

<CtaCall text='Know your customers better and deliver hyper-personalized offerings with SunTec.' btn='Start a conversation' url='/contact-us'/>      
<Insights tags="331"/>

<Footer/>
</>


  );
}

export default LinksExample;