import React, { useEffect, useState } from 'react';
import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import Link from 'next/link';
import configData from "../config.json";


const SinglePost = ({tags}) => {
  const [post, setPost] = useState({});
  const [featuredImage, setFeaturedImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await fetch(`${configData.SERVER_URL}ytvideos/${tags}`);
        const postData = await postResponse.json();
        console.log(postData)
        if (postResponse.ok) {
          setPost(postData);

          // Fetch featured image information
          const featuredImageId = postData.featured_media;
          if (featuredImageId) {
            const featuredImageResponse = await fetch(`${configData.SERVER_URL}media/${featuredImageId}`);
            const featuredImageData = await featuredImageResponse.json();

            if (featuredImageResponse.ok) {
              setFeaturedImage(featuredImageData);
            } else {
              console.error(`Failed to fetch featured image. Status: ${featuredImageResponse.status}`);
            }
          }
        } else {
          console.error(`Failed to fetch post. Status: ${postResponse.status}`);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2 className='text-center mb-3 mt-4'>Videos</h2>
    <Container className='wbg-pink p-2'>
      <div class="card mb-3 border-0" style={{background:'#e9c7e033'}}>
                  <div class="row g-0">
                  <div class="col-md-4 d-flex justify-content-center align-items-center">
                      <iframe width="950" height="534" src={post.acf.youtube_link}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 h-100'></iframe>
    </div>
    <div class="col-md-8 text-start d-flex align-items-center">
      <div class="card-body">
        <h5 class="card-title text-start" dangerouslySetInnerHTML={{__html:post.title.rendered}}/>
                        <p class="card-text text-start" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                      <Link href={`ytvideos/${post.slug}`} className="pr-text text-decoration-none expand-btn text-white px-5 rounded-3">Watch Now</Link>
                    </div>            
                      </div>
                      
   
  </div>
</div>
</Container>
</>
  );
};

export default SinglePost;