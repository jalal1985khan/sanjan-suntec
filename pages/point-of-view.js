import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchWordPressData } from '../utils/fetchData';
import { RotatingLines } from 'react-loader-spinner'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hide, setHide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
          setIsSubmitting(true);
          const data = await fetchWordPressData('point-of-view', page);
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
<Header />
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Ebooks
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/ebooks_banner.jpeg")` 
    }}>

<Row>
<Col sm={4}>
<div className="r-text">
<div class="ribbon-1"></div>
<h1 className="fs-1">Point Of View</h1>
<div className="wbg-gr p-2 w-text">
<p className="fs-5">Here&apos;s our take on the industry&apos;s pivotal topics!
</p>
</div>
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
                        <Link key={post.id} href={`/point-of-view/${post['slug']}`} className="float-right">
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