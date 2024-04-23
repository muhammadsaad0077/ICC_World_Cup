import React, { useEffect, useState } from 'react';
import img from "../Images/icc world cup.png";
import './styles.css'; // Import CSS file
import { img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33 } from './const';

const Body = () => {
  const years = [2022, 2021, 2016, 2014, 2012, 2010, 2009, 2007];
  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  useEffect(() => {
    const handleScroll = () => {

      years.forEach(year => {
        const element = document.getElementById(`year-${year}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
          if (isInView) {
            setActiveYear(year);
            return;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [years]);

  const yearBackgrounds = {
  2007: [ img32, img31, img33],    
  2009: [ img30, img29, img28],    
  2010: [ img26, img27, img25],    
  2012: [ img22, img23, img24],    
  2014: [ img19, img20, img21],    
  2016: [ img16, img17, img18],    
  2021: [ img13, img14, img15],    
  2022: [ img10, img11, img12],    
  };
  

  const handleClick = (year)=>{
    setActiveYear(year)
    setActiveImageIndex(0)
  }

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const renderData = () => {
    // Add logic here to return different components or data based on activeYear
    switch (activeYear) {
      case 2007:
        return 

      case 2009:
        return 

      case 2010:
        return 

      case 2012:
        return 

      case 2014:
        return 
      case 2016:
        return 

      case 2021:
        return 

        case 2022:
          return 
          
      // Add cases for other years as needed
      default:
        return <div>No data available for the selected year</div>;
    }
  };

  return (
    
    <div className="grid grid-cols-12" >
      <div className='bg-red-500 col-span-5 fixed h-[100%] w-[25%]'>
        <div className='flex'>
          <img alt='img' src={img} className='m-4 ml-4 w-[60px] h-[60px] rounded-[60%]' />
          <h1 className='md:text-[30px] text-[11px] md:mt-4 mt-24 md:right-0 relative right-[89px] rounded-xl font-sans stroke-red-600 text-white font-bold whitespace-nowrap'>ICC WC WINNERS</h1>
        </div>
      </div>
      <div
      className='col-span-7 bg-yellow-400 ml-[2.5px] relative left-[40%] h-screen w-screen md:w-[130%] transition-all transition-1000 ease-out'
      style={{
        backgroundImage: `url(${yearBackgrounds[activeYear][activeImageIndex]})`,
        backgroundPosition: '',
        backgroundRepeat: '',
        backgroundSize: '',
        opacity: '1.8'
      }}
    >
      <div className='flex md:text-xl'>
        <button className='text-white ml-2 cursor-default md:mt-0 mt-[3px]'>Next</button>
        <img onClick={handleNextImage} alt='img' className='w-4 cursor-pointer h-4 relative top-2 ml-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRLPlRYbFHmbXzjnP6pe2DeSaRX7wdQWe91z2tNmp-A&s'></img>
      </div>
        {renderData()}
        {
          years.map((year, index) => (
            <div
              key={year}
              id={`year-${year}`}
              className={`pointer transition-all transition-1000 ease-in mt-12 relative top-14 text-white right-20 ${year === activeYear ? 'md:text-7xl text-2xl font-bold text-white drop-shadow-2xl right-[25%]' : 'text-[15px]'}`}
              style={{ zIndex: years.length - index }}
              onClick={()=> handleClick(year)}
            >
              <span className='year-element text-center p-2 relative top-2 cursor-pointer'>{year}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Body;
