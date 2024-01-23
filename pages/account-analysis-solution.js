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
import Accounts from '../utils/FetchAccount';
import Ebooks from '../utils/FetchEbooks';
import Pov from '../utils/FetchPov';
import CaseStudy from '../utils/FetchCaseStudy';
import Videos from '../utils/FetchVideos';
import InsightsBtn from '../utils/InsightsBtn';
import ExpandableContent from '../utils/ExpandableContent';

function AccountSolutions() {
    const router = useRouter()  
    const [showModal, setShowModal] = useState(false);
    const PdfLink = 'pdf/VAT-Solution-Overview_30-Oct_v1-1.pdf';
    const PostTitle = "Account Analysis Solution for Banks";
    const PostDescription = "Modernize your account analysis process for holistic customer life cycle management";
    const PostImage = '/images/AccountAnalysisSolutionBanks.png';  

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
                              <Button onClick={handleShowModal} className="b-btn w-50 mb-3">Read the datasheet</Button><br/>
                              <BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
                              
                          </div>

<div class="lin-dark"></div>
</div>
</Col> 
</Row>

              

</Container>      
      <Container className="mt-5 mb-5">
              <p className="fs-5">Most U.S. banks have traditionally treated account analysis as the means to fulfill operational needs around pricing and billing. With the right mindset, approach, and solution, it can be so much more. By modernizing account analysis, you can use this as an especially valuable tool for customer acquisition/retention and service differentiation in a highly competitive business environment characterized by increasingly demanding customers, new players, high interest rates, and rapid digitalization.</p>
              <p className='fs-5'>Many U.S. banks have not harnessed the transformative potential of account analysis yet as shown in the findings of a survey <Link href="/reports/its-time-to-reinvent-account-analysis/">It’s Time to Reinvent Account Analysis</Link>, conducted by the American Banker on our behalf in January 2023.</p>
              <ul>
                <li className='fs-5'>80% indicated that error-free billing was essential, but was a significant challenge due to legacy systems.</li>
                <li className='fs-5'>85% of respondents indicated that adding real-time components to account analysis would benefit their customers.</li>
                <li className='fs-5'>Modernization of account analysis function lags other processes in more than a third of the banks.</li>
              </ul>

              <h2>Enhance Customer Experience with Smarter, Faster Account Analysis</h2>
              <p className="fs-5">It is time corporate banks like yours take a long, hard, holistic look at the account analysis function to ensure that you are not leaving profitable growth opportunities on the table.</p>
              <p className='fs-5'>SunTec Account Analysis Solution gives you a whole lot more so you can compete better.</p>
              <p className="fs-5">With SunTec Account Analysis Solution your bank can forge stronger relationships with your customers. Implemented as an intelligent middle-layer, the solution is compatible with all legacy core banking systems and pulls customer data dispersed across systems. It can be deployed quickly and scaled easily, with minimal business disruption. This overcomes a major pain point that many banks experience because of the “technical debt.”</p>

          </Container>
          <Container fluid className='wbg-grad pb-5 pt-5 '>
              <Container>
                  <Row>
                      <Col sm={8}>
                          <Image src="/images/Infographic-account.jpg" width={500} height={500} className='w-100'/>
                      </Col>
                      <Col>
                          <p className='fs-5'>Depending on where in the relationship life cycle a customer is, you can use account analysis capabilities for streamlining various processes such as onboarding, determining prices for services, offering discounts and special process, monthly billing, collections, customer service, issue/dispute resolution, annual price reviews etc. The information available with the bank about each customer can be used to deliver hyper-personalized services.</p>
                          <p className='fs-5'>In essence, our account analysis solution re-invents the entire process to focus on the customer. The result is more satisfied customers, higher customer loyalty, and hence, profitable business growth.</p>
                      </Col>
                  </Row>
              </Container>
          </Container>

<Container>
<h2>Here are the tangible benefits our account analysis solution can deliver to
your bank and customers:</h2>              
<Container className='wbg-pink p-5'>
<div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/Calculate.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Calculate service charges in nearly unlimited ways (i.e. volume based, value based, balance based and even matrix pricing).</p>
      </div>
    </div>
  </div>
                  </div> 
                  <div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/Compete.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Compete for customer balances with innovative offerings (such as Hybrid Interest, Green ECR, Virtual Accounts).</p>
      </div>
    </div>
  </div>
                  </div> 
  <div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/Generate.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Generate accurate account analysis statements faster with details on earnings credit, hard interest, pricing of services/products, offsets, discounts etc.</p>
      </div>
    </div>
  </div>
                  </div> 

                  <div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/flexibility.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Get the flexibility in billing across business segments to understand significant revenue potential.</p>
      </div>
    </div>
  </div>
                  </div> 

                  <div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/version.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Get a single version of the truth (account, customer, product, and bank level) with comprehensive dashboards and workflows.</p>
      </div>
    </div>
  </div>
                  </div> 

                  <div class="card mb-3" >
  <div class="row g-2">
    <div class="col-md-1 d-flex p-3">
      <img src="/images/Manage.svg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-11">
      <div class="card-body">
        <p class="fs-5">Manage the entire customer life cycle, from winning the business through implementation, pricing, billing, settlement, annual price reviews, and renewal.</p>
      </div>
    </div>
  </div>
                  </div> 

</Container>
</Container>
<Container className='mt-5'>
          <Container className='wbg-blue pt-5'>
              <h2>Unlock Various Opportunities with Connected and Efficient Account Analysis</h2>
              <p className='fs-5'>Here are <span style={{color:'#006263'}}>three use case</span> scenarios for our account analysis solution in your bank:</p>
                  <Row>
                      <Col>
                      <div class="card mb-3 border-0 rounded-0 wbg-green p-3" >
  <div class="card-body">
                                  <h5 class="card-title wbg-greent text-white p-3">Reduce revenue<br />leakage risks</h5>
                                  <ExpandableContent
                                      initialContent={(<><p class="fs-5 text-white" style={{height:'200px'}}>When a customer is onboarded for the first time, pricing is based on expectations of the services that are likely to be consumed, projected volumes, and commitments.</p></>)}
        expandedContent={(<><p className='fs-5 text-white'>When a customer is onboarded for the first time, pricing is based on expectations of the services that are likely to be consumed, projected volumes, and commitments. SunTec Account Analysis Solution makes it is easy to automatically adjust prices during the term of the contract based on defined triggers (e.g., end of promotion period pricing or non-achievement of agreed targets). Such changes to pricing are instantaneous (relative to the time needed to make manual changes for multiple customers), thus minimizing the risk of the bank losing revenue.</p>
<p className='fs-5 text-white'>
        Renewal of customer contracts must ideally be based on customer-wide hard data for the previous contract period. Often, though, customer account management teams are ill-prepared because they do not have the necessary details (across all geographies, lines of business, product/service etc.). Our solution equips your sales/relationship management teams with the relevant data to help them negotiate more effectively. This reduces the risk that special lower pricing remains the norm, in turn reducing the bank’s revenue and margins. Our account analysis solution allows every individual customer relationship to be viewed and managed holistically, and through a unified workflow, rather than through ad hoc, disjointed processes. This approach also safeguards relationships from the exit of personnel.</p></>)}
      />
  </div>
</div>
                      </Col>
                      <Col>
                      <div class="card mb-3 border-0 rounded-0 wbg-green p-3" >
  <div class="card-body">
                                  <h5 class="card-title wbg-greent text-white p-3">Partner ecosystem<br />management</h5>
                                  <ExpandableContent
                                      initialContent={(<p class="fs-5 text-white" style={{height:'200px'}}>Like other businesses, banks too are seeing the value of ecosystem play; creating and participating in ecosystems comprising non-competing businesses to collectively serve customers.</p>)}
        expandedContent={(<><p className='fs-5 text-white'>Like other businesses, banks too are seeing the value of ecosystem play; creating and participating in ecosystems comprising non-competing businesses to collectively serve customers. Such a concept can be extended to corporate customers as well through innovative ecosystem design. For example, banks can tie up with carbon offset providers to create ecosystems around green earnings credits. This can help banks attract and retain balances, while also earning additional interest income for their corporate customers.</p></>)}
      />
   
  </div>
</div>
                      </Col>
                      <Col>
                      <div class="card mb-3 border-0 rounded-0 wbg-green p-3" >
  <div class="card-body">
<h5 class="card-title wbg-greent text-white p-3">Hybrid interest<br />accounts</h5>
                                  <ExpandableContent
                                      initialContent={(<p class="fs-5 text-white " style={{height:'200px'}}>In a near-zero interest rate regime, corporate customers did not have to worry much about “soft” earnings credit or “hard” interest on balances. But in an environment of high interest rates.</p>)}
                                      expandedContent={(<><p className='fs-5 text-white'>In a near-zero interest rate regime, corporate customers did not have to worry much about “soft” earnings credit or “hard” interest on balances. But in an environment of high interest rates, earnings credits matter. Banks can attract corporate customers with hybrid accounts that benefit customers by reducing the need for frequent sweeps. On the other hand, banks will benefit from the higher interest-bearing balances that customers will have the incentive to maintain. Our account analysis solution makes it easy for your bank to manage such hybrid accounts, while simultaneously giving your customers real-time information to manage balances, cash flows, and floats more efficiently.</p>
                                      <p className='fs-5 text-white'>To know more about SunTec Account Analysis Solution and how it can potentially help your bank, write to us on <Link href="mailto:contactus@suntecgroup.com">contactus@suntecgroup.com</Link>.</p>
                                      </>)}
      />

  </div>
</div>
                      </Col>
                </Row>
              </Container>
          </Container>        
          <Accounts tags="339" />
          <Ebooks tags="45643" />
          <Pov tags="26785" />
<h2 className='text-center mt-3'>Podcasts</h2>
          <Container className='wbg-pink p-4 mt-3 d-flex align-items-center flex-column'>
              <Row className='mb-4 '>
                  <Col>
<div class="card" >
<iframe title="Account Analysis Ep. 8: Gaining Clarity and Agility in Account Analysis"   data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=ijz4k-14544b9-pb&from=pb6admin&pbad=0&share=1&download=0&rtl=1&fonts=Arial&skin=2baf9e&font-color=ffffff&logo_link=podcast_page&btn-skin=654771" allowfullscreen=""></iframe>
  <div class="card-body">
    <h5 class="card-title">Account Analysis Episode 8 - Gaining Clarity and Agility in Account Analysis</h5>
  </div>
</div>
              </Col><Col>
              <div class="card" >
              <iframe title="Account Analysis Ep. 7: Implementing Hybrid Interest Accounts"  data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=g7v3z-14313a0-pb&from=pb6admin&pbad=0&share=1&download=0&rtl=1&fonts=Arial&skin=2baf9e&font-color=ffffff&logo_link=podcast_page&btn-skin=654771" allowfullscreen=""></iframe>
  <div class="card-body">
    <h5 class="card-title">Account Analysis Episode 7 - Implementing Hybrid Interest Accounts</h5>
  </div>
</div>
                  </Col></Row>
              <Link href="/podcasts" className='b-btn mt-4 rounded-3'>Listen to Other Account Analysis Podcast Episodes</Link>
</Container>


          <CaseStudy tags="26877" />
          <Videos tags="51674"/>
          
          

      <Footer/>
    </>
  )
}

export default AccountSolutions