import React from 'react';
import { Row, Col, Card, CardBody, Label } from 'reactstrap';
import './movieMedia.css';

const MovieMedia = ({ movie, onClick }) => {
  return (
    <Card style={{ backgroundColor: 'white', marginTop: '5px' }} onClick={onClick}>
        <CardBody className="item">
            <Row>
                <Col sm={4}>
                    <img  alt="movie poster" className="photo" src={ movie.Poster }/>
                </Col>
                <Col sm={8}>
                    <Label >{ movie.Title } </Label>
                </Col>
            </Row>
        </CardBody>
    </Card>
  );
};

export default MovieMedia;
