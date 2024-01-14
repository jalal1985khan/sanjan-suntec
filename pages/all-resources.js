import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchWordPressData } from '../utils/fetchData';
import { RotatingLines } from 'react-loader-spinner'
import CategoryDropdown from '../components/CategoryDropdown';
import TagsDropdown from '../components/TagsDropdown';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hide, setHide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [value, setvalue] = useState('whitepapers');


  const categoryMappings = {
    'whitepaper': 'whitepapers',
    'case-studies': 'case-studies',
    'datasheets': 'datasheets',
    'ebooks': 'ebooks',
    'reports': 'reports',
    'articles': 'articles',
    'webinars': 'webinars',
    'press-releases': 'press_release',
    'events': 'events',
    'blogs': 'blogs',
    'point-of-view': 'point-of-view',
    'podcasts': 'podcasts',
    // ... Add other category mappings
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    //setSelectedCategory(e.target.value);
    // Add any other logic you want to perform on category change
    if (categoryMappings[category]) {
      setvalue(categoryMappings[category]);
    }
    setPosts([]);
    setPage(1);
  };
  useEffect(() => {
    const fetchData = async () => {
          setIsSubmitting(true);
      const data = await fetchWordPressData(value, page);
      
          if (data) {
            setPosts((prevPosts) => [...prevPosts, ...data]);
            setHide(true);
            setLoading(false);
            console.log(data)
          }
          else {
            setHide(false);
          }
          setIsSubmitting(false);
      };

      fetchData();
  }, [page,selectedCategory,value]);

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
            Insights
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/Insights-All-Resources-1.jpg")` 
    }}>
<Row>
          <Col sm={11} xs={11} lg={4}>
<div className="r-text">
<h1 className="fs-1">Insights</h1>
<div className="wbg-gr p-2 w-text">
              <div class="ribbon-1"></div>
              <p className="fs-5">Read up on the latest market developments<br></br> and expert insights</p>
</div>
</div>
</Col> 
<Col >
</Col> 
</Row>

</Container>

<Container className='pt-5 pb-5' style={{background:'#F5F5F5'}} fluid>
<h2 className="text-center pb-4">What do you want to read today?</h2>
<Container>
        <Row>
        
        <Col><CategoryDropdown onSelectChange={handleCategoryChange} /></Col>
        <Col><TagsDropdown category={selectedCategory} /></Col>
<Col>Search</Col>
                          </Row>
                          </Container>        


             
        <p>Selected Category: {selectedCategory}- {value}</p>

      </Container>
<Container className="mt-5 ">
<Row>
              {posts.map((post) => (
                <Col lg={4} md={6} sm={12} className="p-3" key={`post-${post.id}`}>
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
                        <Link key={post.id} href={`/ebooks/${post['slug']}`} className="float-right">
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