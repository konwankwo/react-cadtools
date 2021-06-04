import React, { useState } from 'react';
import companies from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, industry, image, text } = companies[index];
  const checkNumber = (number) => {
    if (number > companies.length - 1) {
      return 0;
    }
    if (number < 0) {
      return companies.length - 1;
    }
    return number;
  };
  const nextCompany = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevCompany = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomCompany = () => {
    let randomNumber = Math.floor(Math.random() * companies.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='company-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='industry'>{industry}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevCompany}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextCompany}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomCompany}>
        shuffle
      </button>
    </article>
  );
};

export default Review;