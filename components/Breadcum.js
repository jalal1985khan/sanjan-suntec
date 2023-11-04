import React from 'react'
import { Container, Row, Col, Image, Breadcrumb, Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

function Breadcum({PostTitle}) {
    const router = useRouter()
  return (
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={router.asPath} active>
      {PostTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
  )
}

export default Breadcum
