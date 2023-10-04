import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import configData from "../config.json";
import Moment from 'react-moment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../utils/ContactForm';

function LinksExample() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(9);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState();
    const [error, setError] = useState({});
    const [next, setNext] = useState();
    const [total, setTotal] = useState();
    const [end, setEnd] = useState(false);
  
    const fetchMovies = async () => {
      setLoading(true);
      let url = "";
      const urlPage = `${page}`;
      url = `${configData.SERVER_URL}careers?_embed&status=publish&tags=175&per_page=${urlPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setMovies(data);
        setLoading(false);
        setEnd(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchNos = async () => {
      setLoading(true);
      let cat = "";
      cat = `${configData.SERVER_URL}categories/274`;
  
      try {
        const response = await fetch(cat);
        const cats = await response.json();
        //console.log(cats.count);
        setNext(cats.count);
        setTotal(cats.count);
        setLoading(false);
        setEnd(true);
  
      } catch (error) {
        console.log(error);
      }
    };
  
  
  
  
    useEffect(() => {
      fetchMovies();
      fetchNos();
    }, [page], [next]);
  
  
    const loadMore = () => {
      setTotal(next)
      //console.log(total)
      const main = next;
  
      if (total == page) {
        setEnd(false);
      }
  
      setPage((oldPage) => {
        return oldPage + 3;
      })
    };

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/contact-us" active>
      Careers
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/career_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">Contact Us</h1>
{/* <p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p> */}
<p>We’d love to hear from you!</p>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col sm={6}>
<Container className="p-3 c-banner" fluid style={{ 
      backgroundImage: `url("/images/contact-us.jpg")` 
    }}>

<Row>
<Col>
<h1 className="fs-2 text-white">WE ARE HERE FOR YOU! SIMPLY FILL IN THE FORM AND YOU WILL HEAR FROM US</h1>
{/* <p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p> */}
<p className="text-white">Email Us: contactus@suntecgroup.com</p>
<p className="text-white">If you have any further queries, need any further information, would like to meet us, or would like to schedule a demo with us, please drop in a mail at the above email address. </p>                                  
<p className="text-white">Other Contact Options</p>
<p className="text-white">We also have offices across the globe. Please feel free to call us for a response.</p>                                  
</Col> 
</Row>
</Container>
</Col>
<Col sm={6} className="d-flex align-items-center">
<ContactForm customTitle='Contact Form' pdfFile='' />
</Col>    
</Row>
</Container>
<Container className="mt-5">
<h2>Our Global Offices</h2>              
<Row className="mt-4">
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/australia-1.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">AUSTRALIA</h5>
<p class="card-text" style={{ height: 60+'px' }}>1198 Toorak Road Camberwell Victoria, PO Box 1143, Hartwell Victoria 3124, Australia</p>
</div>
<div class="card-footer c_phone">
Tel: + 61 3 9653 6410
  </div>
</div>                      
</Col> 
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/canada.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CANADA</h5>
    <p class="card-text" style={{ height: 60+'px'}}>1285 West Broadway, Suite 600,<br/>Vancouver BC V6H 3X8</p>
                          </div>
<div class="card-footer c_phone">
Tel: +1 908 2789 465
  </div>                          
</div>                      
</Col>   
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/germany.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GERMANY</h5>
    <p class="card-text" style={{ height: 60+'px' }}>Ledderhoser Weg 87, 55543<br/> Bad Kreuznach, Germany</p>
                          </div>
<div class="card-footer c_phone">
Tel: +49 671 202 784 80
  </div>                          
</div>                      
</Col>                 
</Row>
              
<Row className="mt-4">
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/singapore.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SINGAPORE</h5>
    <p class="card-text" style={{ height: 60+'px' }}>Level 42, SunTec Tower Three,<br/>8 Temasek Boulevard, Singapore<br/> 038988</p>
</div>
<div class="card-footer c_phone">
Tel: +65 6829 2139
  </div>
</div>                      
</Col> 
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/uae-1.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">UAE</h5>
    <p class="card-text" style={{ height: 60+'px' }}>Unit No: 3202 B, Cluster-W, Oaks Liwa<br/> Heights, JLT,PO Box No214275, Dubai,<br/> UAE</p>
                          </div>
<div class="card-footer c_phone">
Tel: +971 43747427
  </div>                          
</div>                      
</Col>   
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/uk.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">UK</h5>
    <p class="card-text" style={{ height: 60+'px' }}>2nd Floor, 20st. Dunstan’s<br/>Hill, London, EC3R 8HL</p>
                          </div>
<div class="card-footer c_phone">
Tel: +44 20 37952731
  </div>                          
</div>                      
</Col>                 
              </Row>
              
<Row className="mt-4">
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/usa.png" class="card-img-top c-img pt-3 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">USA</h5>
    <p class="card-text">333 Technology drive, Suite 260<br/>Canonsburg, PA 15317</p>
</div>
<div class="card-footer c_phone">
Tel: +1 724 749 5699
  </div>
</div>                      
</Col>                 
</Row>

</Container>
<Container className="mt-5">
<h2>Our Indian Offices</h2>              
<Row className="mt-4">
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/india.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BENGALURU</h5>
<p class="card-text" style={{ height: 60+'px' }}>Ground floor, Salarpuria Touchstone,<br/>
Varthur Hobli, Kadubeesanahalli,<br/>
Outer Ring Road, Bangalore  560087</p>
</div>
<div class="card-footer c_phone">
Tel: + 61 3 9653 6410
  </div>
</div>                      
</Col> 
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/india.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CHENNAI</h5>
    <p class="card-text" style={{ height: 60+'px'}}>2nd Floor, 4th Module, Neville Tower,<br/> Ramanujan IT City, Taramani, Rajiv<br/> Gandhi Salai (OMR), Chennai 600113</p>
</div>
<div class="card-footer c_phone">
Tel: +1 908 2789 465
  </div>                          
</div>                      
</Col>   
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/india.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KOCHI</h5>
    <p class="card-text" style={{ height: 60+'px' }}>SEZ Unit, 1st floor<br/>
Phase II, Carnival Infopark<br/>
Kakkanad, Kochi 682030</p>
                          </div>
<div class="card-footer c_phone">
Tel: +49 671 202 784 80
  </div>                          
</div>                      
</Col>                 
</Row>
              
<Row className="mt-4">
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/india.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">THIRUVANANTHAPURAM (HO)</h5>
    <p class="card-text" style={{ height: 60+'px' }}>Vikramapuram Hills<br/>
Kuravankonam, Kowdiar P.O<br/>
Thiruvananthapuram 695003</p>
</div>
<div class="card-footer c_phone">
Tel: +65 6829 2139
  </div>
</div>                      
</Col> 
<Col sm={4}  className="c_center">
<div class="card rounded-0">
  <img src="/images/india.png" class="card-img-top c-img pt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">THIRUVANANTHAPURAM</h5>
    <p class="card-text" style={{ height: 60+'px' }}>Block No.8, SEZ B, Plot No.18,<br/> Technocity Campus Land,<br/> Technopark, Thiruvananthapuram 695581</p>
                          </div>
<div class="card-footer c_phone">

  </div>                          
</div>                      
</Col>   
                
</Row>
</Container>          










<Footer/>
</>


  );
}

export default LinksExample;