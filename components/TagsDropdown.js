import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas, Form} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import configData from "../config.json";


export default function Home({category}) {
  const [tags, setTags] = useState([]);
      const fetchTags = async () => {
        try {
          const response = await fetch(`https://elementor.ivistasolutions.biz/wp-json/custom/v1/category-tags/${category}`);
          const tags = await response.json();
          //console.log(selectedCategory)
          // Now 'tags' contains an array of tag objects
          console.log(tags);
          setTags(tags);
          //return tags;
        } catch (error) {
          console.error('Error fetching tags:', error);
        }
      };
useEffect(() => {
     fetchTags()

 },[category])

  return (
    <>
    <Form.Select aria-label="Select category" >
        <option value="" selected>Select Tags</option>
                {tags.map(tag => (
                  <option key={tag.id} value={tag.id}>{tag.name}</option>
        ))}
    </Form.Select>
</>
  );
}