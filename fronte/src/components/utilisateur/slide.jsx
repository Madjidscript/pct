import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../assets/imageArti.jpg'; // Assurez-vous que ce chemin d'accès est correct

const Slide = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="First slide"
                    style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="Second slide"
                    style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="Third slide"
                    style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slide;
