
import { Link } from 'react-router-dom';

import Navbar from '../SharedComponents/Navbar/Navbar';
import LeftSideBar from '../SharedComponents/Sidebars/LeftSide/LeftSideBar';
import RightSIdeBar from '../SharedComponents/Sidebars/RightSide/RightSIdeBar';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
import NewsCard from '../Components/NewsCard';
const Home = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
            fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
        } ,[])
    return (
        
        <div>

            <div className='flex items-center px-3 mt-8  rounded-xl gap-4 h-[70px] bg-[#F3F3F3]'>
                <button className="btn btn-error">Latest</button>
                <Marquee>
                    <Link to={'/'} className='mr-12'>I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'} className='mr-12'>Match Highlights: Germany vs Spain — as it happened!</Link>
                </Marquee>
            </div>
            
            <div className='flex lg:flex-row mt-8 flex-col gap-6'>
                <LeftSideBar></LeftSideBar>
                <div className='w-2/4'>
                    {
                        news.map((singleNews, idx) => <NewsCard key={idx} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div className='w-1/4'>
                    <RightSIdeBar></RightSIdeBar>
                </div>
            </div>
        </div>
    );
};

export default Home;