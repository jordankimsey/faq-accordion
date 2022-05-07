import React from 'react';
import downIcon from '../images/icon-arrow-down.svg'
const SingleQuestion = ({ question, answer }) => {
    return (
      <div className='single-question-card'>
        <div className='single-question'>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
        <div className='icon'>
            <img src={downIcon} alt='' />
        </div>
      </div>
    );
   
};

export default SingleQuestion;
