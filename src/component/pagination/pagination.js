import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, prevPage, nextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="custom_paginate items-center">
            <ul className='pagination '>
                <li className='page-item ml-4 mr-4 border-r-4 border-indigo-500'>
                    <button onClick={() => prevPage(pageNumbers.at(0))} className='page-link'>
                        <i className="mr-3 fa-solid fa-chevron-left"></i>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item ml-4 mr-4'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                <li className='page-item ml-4 mr-4 border-l-4 border-indigo-500'>
                    <button onClick={() => nextPage(pageNumbers.at(-1))} className='page-link'>
                        <i className="ml-3 fa-solid fa-chevron-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;