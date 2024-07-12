import { useState } from 'react';
import { Carousel, Modal }from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

import data from './SliderData';

import './slider.scss'

const VideoModal = ({ show, onHide, videoSrc }) => (
    <Modal 
        show={show} 
        onHide={onHide} 
        centered 
        size="lg">
      <Modal.Body>
        <video 
            controls 
            style={{ width: '100%' }}>
          <source 
            src={videoSrc} 
            type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal.Body>
    </Modal>
);

const Slider = () => {

    const {theme} = useTheme();

    const [index, setIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const handleSlideClick = (slideIndex) => {
        setVideoSrc(data[slideIndex].urlLink);
        setShowVideo(true);
    };

    return (
        <section className={`slider ${theme === 'light' ? 'white': 'dark'}`}>
            <div className={"slider-wrap container"}>
                <h3 className={`slider-title animate__animated animate__slideInUp ${theme === 'light' ? 'white': 'dark'}`}>Видеогалерея загадок и тайн</h3>
                <p className={`slider-text animate__animated animate__slideInUp ${theme === 'light' ? 'white': 'dark'}`}>Здесь собраны самые увлекательные видео, рассказывающие о таинственных событиях, загадочных явлениях и древних легендах. Погрузитесь в атмосферу тайн и необъяснимых явлений, которые заставят вас задуматься и почувствовать лёгкий холодок по коже. Наслаждайтесь просмотром и открывайте для себя новые мистические истории!</p>
            
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {data.map((item, i) => (
                        <Carousel.Item 
                            key={i}
                            onClick={() => handleSlideClick(i)}
                            style={{cursor: 'pointer'}}
                            >
                            <img className='slider-img' src={item.urlImage}
                            alt={`Slide ${i + 1}`}/>
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <VideoModal show={showVideo} onHide={() => setShowVideo(false)} videoSrc={videoSrc} />
            </div>
        </section>
    )
};

export default Slider;