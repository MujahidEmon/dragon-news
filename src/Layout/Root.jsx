
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedComponents/Navbar/Navbar';
import Header from '../SharedComponents/Header/Header';

const Root = () => {
    return (
        <div className='font-poppins lg:max-w-7xl max-w-96  mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;