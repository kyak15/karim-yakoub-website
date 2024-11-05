
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container-fluid' style={{ height: '100vh', marginTop: '-80px', marginBottom: '-14px' }}>
        <Row className='h-100'>
            <Col className='text-center m-auto'>
                <h1 className='text-xl'>404</h1>
                <p>Maybe you want to go back to the <Link to='/'>homepage</Link>?</p>
            </Col>
        </Row>
    </div>
  );
}
