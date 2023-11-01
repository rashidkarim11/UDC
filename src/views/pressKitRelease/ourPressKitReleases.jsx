// ** react imports
import React, { useState } from 'react';

// images imports
import img1 from 'src/assets/images/slide3.png';
import img2 from 'src/assets/images/slide1.png';
import img3 from 'src/assets/images/slide3.png';
import img4 from 'src/assets/images/Rectangle 20.png';
import img5 from 'src/assets/images/slide3.png';
import img6 from 'src/assets/images/footer.png';
import arrow from 'src/assets/images/sliderArrow.png';
import HoverCard from 'src/views/pressKitRelease/hoverCard';

// ** data imports 
import { hoverCardData } from './data';

const initialImages = [img1, img2, img3];
const allImages = [img1, img2, img3, img4, img5, img6];

const OurPressKitReleaseSlider = () => {
  const [currentImages, setCurrentImages] = useState(initialImages);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const nextImage = () => {
    const currentIndex = allImages.indexOf(currentImages[0]);

    if (currentIndex >= 0 && currentIndex < allImages.length - 2) {
      setCurrentImages(allImages.slice(currentIndex + 1, currentIndex + 4));
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
  };

  return (
    <div className="slider-container bg-black text-white relative p-[100px]" >
  <h2 className="text-2xl sm:text-3xl md:text-4xl tablet:text-5xl">Our Press Kit Release</h2>
  <div className="slider flex items-center relative">
    {currentImages.map((image, index) => (
      <div
        key={index}
        className="slide"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        <img className='w-[600px] h-[500px]' src={image} alt={`Slide ${index + 1}`} />
        {hoveredImageIndex !== null && hoveredImageIndex === index && (
          <div className="hover-card text-black" style={{ position: 'absolute', bottom: '15%', left: 0, zIndex: 1 }}>
            <HoverCard
              heading={hoverCardData[hoveredImageIndex].heading}
              date={hoverCardData[hoveredImageIndex].date}
              description={hoverCardData[hoveredImageIndex].description}
            />
          </div>
        )}
      </div>
    ))}
  </div> 
  <div className='absolute top-[50%] right-0'>
  <img className='w-[40px] h-[40px] cursor-pointer mb-[50px]  ' src={arrow} alt='arrow' onClick={nextImage} />
  </div>
</div>
  );
};

export default OurPressKitReleaseSlider;
