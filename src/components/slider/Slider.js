import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';
import slider from '../../data/slider/main-slider.json';

class SliderComponent extends React.Component {

    render() {
        const carouselItems = slider.map((e, index) => {
            const img = require(`../../assets/img/slider/${e.img}`);
            const divStyle = {
                "background": `url(${img}) no-repeat center center fixed`
            };
            return (
                <Carousel.Item className="carousel-slider-item" style={divStyle} alt={e.title} key={index}>
                    <div className="container">
                        <Carousel.Caption>
                            <h1>{e.title}</h1>
                            <p>{e.info}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            );
        });

        return (
            <Carousel className="carousel-slider">
                {carouselItems}
            </Carousel>
        );
    }
}

export default SliderComponent;