import React from 'react';
import { Link } from 'react-router-dom';

const DENOMINATION = '₦';

function Item({ link, title, imageSrc, price }) {
  return (
    <section className='w-100 md:w-1/2 lg:w-1/4 p-1 sm:p-2'>
      <Link to={`/${link}`}>
        <section className='h-72 flex justify-center items-center bg-light hover:bg-light-200'>
          <div className='flex flex-col justify-center items-center'>
            <img src={imageSrc} alt={title} className='w-3/5' />
          </div>
        </section>
      </Link>

      <section className='text-center'>
        <p className='m-4 font-semibold'>{title}</p>
        <p className='text-xs text-gray-700 mb-4'>{`${DENOMINATION}${price}`}</p>
      </section>
    </section>
  );
}

export default Item;
