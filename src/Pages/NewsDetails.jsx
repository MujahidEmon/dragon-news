import React from 'react';
import NewsCard from '../Components/NewsCard';
import RightSIdeBar from '../SharedComponents/Sidebars/RightSide/RightSIdeBar';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams()
    
    return (
        <div className='flex gap-6'>
            <div className='w-3/4 border'>
                <h1>News Details {id}</h1>
            </div>
            <div className='w-1/4'>
                <RightSIdeBar></RightSIdeBar>
            </div>
        </div>
    );
};

export default NewsDetails;