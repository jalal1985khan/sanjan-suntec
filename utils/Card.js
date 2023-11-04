import React from 'react'
import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

function Cardbox({title,desc,url}) {
  return (
    <Card className="sao_shadow" style={{ height: 18 + 'em' }}>
    <Card.Body className="c_body" style={{height:'460px'}}>
              <Card.Title className="mb-4 fs-3">{title}</Card.Title>
              <Card.Text className="fs-5">{desc}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link href={url} className="b-btn">Explore</Link>
      </Card.Body>
    </Card>
  )
}

export default Cardbox
