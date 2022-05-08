import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const SingleQuestion = ({ question, answer }) => {
    return (
      <div className='single-question-card'>
        <div className='single-question'>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
        <IconContext.Provider value={{ className: 'top-react-icons' }}>
          <AiOutlineDown />
          <AiOutlineUp />
        </IconContext.Provider>
      </div>
    );
   
};

export default SingleQuestion;
