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
<Col sm={6}>
<ContactForm customTitle='Contact Form' pdfFile='' />
</Col>    
</Row>
</Container>
<Container className="mt-5">
<h2>Our Global Offices</h2>              
<Row>
<Col>
<div class="card">
  <img src="/images/australia-1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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