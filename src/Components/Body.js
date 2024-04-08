import React, { useEffect, useState } from 'react';
import img from "../Images/icc world cup.png";
import './styles.css'; // Import CSS file

const Body = () => {
  const years = [2022, 2021, 2016, 2014, 2012, 2010, 2009, 2007];
  const [activeYear, setActiveYear] = useState(years[0]);

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
    2007: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2008: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    2009: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2010: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    2012: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2013: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    2014: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2015: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    2016: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2017: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    2021: 'url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2022: 'url("url("https://static.toiimg.com/photo/msid-49084611/49084611.jpg?317653")',
    2023: 'url("https://images.news18.com/ibnlive/uploads/2023/09/india-2007-world-cup-2023-09-8803859c9a5f4d63fd5f598015086f32.jpg?impolicy=website&width=0&height=0")',
    
    // Add mappings for other years as needed
  };
  

  const handleClick = (year)=>{
    setActiveYear(year)
  }

  const renderData = () => {
    // Add logic here to return different components or data based on activeYear
    switch (activeYear) {
      case 2007:
        return <div>
          2007
        </div>;
      case 2009:
        return <div>Data for 2009</div>;
      // Add cases for other years as needed
      default:
        return <div>No data available for the selected year</div>;
    }
  };

  return (
    
    <div className="grid grid-cols-12" >
      <div className='bg-red-500 col-span-5 fixed h-[100%] w-[35%]' style={{
        backgroundImage: yearBackgrounds[activeYear],
        backgroundPosition: '',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '1.5'
      }}>
        <div>
          <img alt='img' src={img} className='m-4 ml-16 w-[60px] h-[60px] rounded-[60%]' />
        </div>
        <div className='ml-16 mt-10'>
          <h1 className='text-[30px] font-sans text-white font-bold drop-shadow-2xl'>ICC WC WINNERS</h1>
        </div>
      </div>
      <div
      className='col-span-7 bg-yellow-400 ml-[2.5px] relative left-[60%] w-[111%]'
      style={{
        backgroundImage: yearBackgrounds[activeYear+1],
        backgroundPosition: '',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '',
        opacity: '1.5'
      }}
    >
        <h1 className='fixed'>Hey</h1>
        {renderData()}
        {
          years.map((year, index) => (
            <div
              key={year}
              id={`year-${year}`}
              className={`pointer  mt-56 relative right-20 ${year === activeYear ? 'text-7xl font-bold text-white drop-shadow-2xl right-[25%]' : 'text-[15px]'}`}
              style={{ zIndex: years.length - index }}
              onClick={()=> handleClick(year)}
            >
              <span className='year-element text-center p-2 relative top-2'>{year}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Body;
