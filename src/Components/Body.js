import React, { useEffect, useState } from 'react';
import img from "../Images/icc world cup.png";
import './styles.css'; // Import CSS file
import img1 from '../Images/2009 pakistan.jpeg'
import img2 from '../Images/2010 england.jpg'

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
    2007: 'url("https://www.telegraph.co.uk/content/dam/cricket/2022/11/13/TELEMMGLPICT000316088724_1_trans_NvBQzQNjv4BqW5LAbqXSQw_G1yEaLnMlB15NUcTKNHKqy85KLqtvPLE.jpeg?imwidth=680")',
    2009:  'url("https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/348500/348536.jpg")',
    2010:  'url("https://e0.365dm.com/20/03/2048x1152/skysports-england-t20-world-cup_4949485.jpg?20200317150942")',
    2012: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP-st-ej8ypYLvqlAUN0cbypK-RIOwskan3p9QHKU7YVdB1V7Bo1OVUxt4xqzEcwraXy4lH_UHI4KXA3Q_pGtnspQ1230ooiV_VMxOlV8FwXYFh7jD3C9989OitTBFeBHzA5oI1U7miXs/s1600/sri-lanka-vs-west-indies-icc-world-t20-2012-final.jpg")',
    2014: 'url("https://staticg.sportskeeda.com/editor/2022/10/44f29-16654886538765-1920.jpg")',
    2016: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig32KCmx2T-DB6AWLb8mPxcpJ4_VNjPjH9s04vvqczD_2WYpKCv4jGYbBqtQLwIFXm_n5_gK3ymU_-KYBLp7-a_NjMKL2SGt5N8-_NfIGx2BeEl_UBwZ25psaj3wvYPTUzvISxg8sTY4M/s1600/3910869736001_4829498645001_4829398053001-vs.jpg")',
    2021: 'url("https://sc0.blr1.cdn.digitaloceanspaces.com/article/180938-wylkwwjewk-1665136728.jpg")',
    2022: 'url("https://www.boomlive.in/h-upload/2022/11/13/990678-england-icc-t20-world-cup-2022-1.webp")',
    
  };
  

  const handleClick = (year)=>{
    setActiveYear(year)
  }

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
          <img alt='img' src={img} className='m-4 ml-16 w-[60px] h-[60px] rounded-[60%]' />
          <h1 className='text-[30px] mt-4 rounded-xl font-sans stroke-red-600 text-white font-bold whitespace-nowrap'>ICC WC WINNERS</h1>
        </div>
      </div>
      <div
      className='col-span-7 bg-yellow-400 ml-[2.5px] relative left-[40%] h-screen w-[130%] transition-all transition-1000 ease-in-out'
      style={{
        backgroundImage: yearBackgrounds[activeYear],
        backgroundPosition: '',
        backgroundRepeat: '',
        backgroundSize: '',
        opacity: '1.5'
      }}
    >
        {renderData()}
        {
          years.map((year, index) => (
            <div
              key={year}
              id={`year-${year}`}
              className={`pointer mt-12 relative top-14 text-white right-20 ${year === activeYear ? 'text-7xl font-bold text-white drop-shadow-2xl right-[25%]' : 'text-[15px]'}`}
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
