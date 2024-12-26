
import Header from '../SharedComponents/Header/Header';
import Navbar from '../SharedComponents/Navbar/Navbar';
import LeftSideBar from '../SharedComponents/Sidebars/LeftSide/LeftSideBar';
import RightSIdeBar from '../SharedComponents/Sidebars/RightSide/RightSIdeBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
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