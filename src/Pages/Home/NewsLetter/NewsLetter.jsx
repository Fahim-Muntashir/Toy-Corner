import React from 'react';

const NewsLetter = () => {
    return (
        <div className='text-center my-28'>
            <h1 className='text-4xl font-bold text-white'>SUBSCRIBE FOR OUR NEWSLETTER</h1> 
            <div className='mt-10'>
                <input className='px-20 py-3' type="text" placeholder='example@email.com' />
                <button className='p-3 bg-yellow-300 text-black font-bold'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;