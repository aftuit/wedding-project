import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import CarouselImg from './images/carousel.png';
import './scss/Carousel.scss';

function App() {
    
	// State for Active index
	const [activeIndex, setActiveIndex] = React.useState(0);

	// State for Animation
	const [animating, setAnimating] = React.useState(false);

	// Sample items for Carousel
	const items = [
		{
			img: CarouselImg,
			altText: 'Slide One'
		},
		{
			img: CarouselImg,
			altText: 'Slide Two'
		},
        {
			img: CarouselImg,
			altText: 'Slide One'
		},
        {
			img: CarouselImg,
			altText: 'Slide Two'
		},
        {
			img: CarouselImg,
			altText: 'Slide One'
		}
	];

	// Items array length
	const itemLength = items.length - 1

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ?
			itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ?
			0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	// Carousel Item Data
	const carouselItemData = items.map((item) => {
		return (
			<CarouselItem
				key={item.img}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<img src={item.img} alt={item.altText} />
			</CarouselItem>
		);
	});

	return (
		<div className="carousel-asaloyi">
			<Carousel previous={previousButton} next={nextButton}
				activeIndex={activeIndex}>
				<CarouselIndicators items={items} activeIndex={activeIndex} 
                    onClickHandler={(newIndex) => {
						if (animating) return; setActiveIndex(newIndex);
					}} />
				{carouselItemData}
				<div className="carousel-btn-btn">
                    <CarouselControl className="carousel-btn" directionText="&#10094;" direction="prev" onClickHandler={previousButton} />
				    <CarouselControl className="carousel-btn" directionText="&#10095;" direction="next" onClickHandler={nextButton} />
                </div>
			</Carousel>

		</div>
	);
}

export default App;
