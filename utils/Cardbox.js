import React from 'react'
import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

function Cardbox({title,desc,url,img}) {
  return (
    <Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src={img} />
      <Card.Body className="c_body">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Body>
      <Link href={url} className="b-btn">Explore</Link>
      </Card.Body>
    </Card>
  )
}

export default Cardbox