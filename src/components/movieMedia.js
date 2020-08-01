import React from 'react';
import { Row, Col, Card, CardBody, Label } from 'reactstrap';
import './movieMedia.css';

const MovieMedia = () => {
  return (
    <Card body inverse style={{ backgroundColor: 'white' }}>
        <CardBody className="Card-body">
            <Row>
                <Col sm={4}>
                    <img  alt="boohoo" className="photo" src={'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}/>
                </Col>
                <Col sm={8}>
                    <Label >Title </Label>
                </Col>
            </Row>
        </CardBody>
     
    </Card>
  );
};

export default MovieMedia;
