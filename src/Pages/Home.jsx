
import { Link } from 'react-router-dom';
import Header from '../SharedComponents/Header/Header';
import Navbar from '../SharedComponents/Navbar/Navbar';
import LeftSideBar from '../SharedComponents/Sidebars/LeftSide/LeftSideBar';
import RightSIdeBar from '../SharedComponents/Sidebars/RightSide/RightSIdeBar';
import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex items-center px-3 mt-8  rounded-xl gap-4 h-[70px] bg-[#F3F3F3]'>
                <button className="btn btn-error">Latest</button>
                <Marquee>
                    <Link to={'/'} className='mr-12'>I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'} className='mr-12'>Match Highlights: Germany vs Spain — as it happened!</Link>
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className='flex lg:flex-row flex-col gap-6'>
                <LeftSideBar></LeftSideBar>
                <h1 className='text-center font-poppins border-2 lg:w-2/4'>HomePage</h1>
                <RightSIdeBar></RightSIdeBar>
            </div>
        </div>
    );
};

export default Home;