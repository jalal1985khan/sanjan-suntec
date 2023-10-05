import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchWordPressData } from '../utils/fetchData';
import { RotatingLines } from 'react-loader-spinner'

function LinksExample() {
    const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hide, setHide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
          setIsSubmitting(true);
          const data = await fetchWordPressData('news', page);
          if (data) {
            setPosts((prevPosts) => [...prevPosts, ...data]);
            setHide(true);
            setLoading(false);
          }
          else {
            setHide(false);
          }
          setIsSubmitting(false);
      };

      fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
    //alert(page);
  };
    
  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>News
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/NewsBanner.jpg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">News</h1>
{/* <p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p> */}
<Button  className="b-btn">Get the latest news from SunTec</Button>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container className="mt-5 ">
<Row>
          
              {posts.map((post) => (
                  <Col sm={4} className="p-3" key={post.id}>
                  <Card className="p-posts" >
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      alt={post['title']['rendered']}
                      width="100%"
                      className="p-posts"
                    />
                    <Card.Body className="posts">
                      <Card.Title className="fs-5 mb-4" style={{ height: 5 +'em' }} dangerouslySetInnerHTML={{ __html:post['title']['rendered']}}/>
                      <Row>
                        <Col>
                        <Moment format="D MMM YYYY" withTitle>
                        {post.date}
                        </Moment>
                        </Col>
                        <Col className="d-flex justify-content-end">
                        <Link key={post.id} href={`/blogs/${post['slug']}`} className="float-right">
                        Read more
                      </Link>
                        </Col>
                      </Row>  
                    </Card.Body>
                  </Card>
            
                </Col>
              ))}
        </Row>   </Container>
      {loading &&
        <section className="section text-center mb-3">
            <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
          </section>
        }

      {hide &&
        <section className="section text-center mb-3">
        <div className="loadmodediv">
            <Button onClick={loadMore} variant="primary" className="b-btn fs-5" disabled={isSubmitting}>Load More
            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
            </Button>
        </div>
      </section>
          

        }
      <Footer/>
      </>
  );
}

export default LinksExample;