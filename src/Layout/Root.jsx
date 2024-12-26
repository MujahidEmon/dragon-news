
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins lg:max-w-7xl max-w-96  mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;