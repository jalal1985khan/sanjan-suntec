import React from 'react'
import { Container, Row, Col, Image, Breadcrumb, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

function CtaCall({text,btn,url}) {
  return (
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">{text}</h1>
<Link className="b-btn mt-4" href={url}>{btn}</Link>
</Container>
  )
}

export default CtaCall
