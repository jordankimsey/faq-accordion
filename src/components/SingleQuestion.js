import React, {useState} from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const SingleQuestion = ({ question, answer }) => {

    const [show, setShow] = useState(false);
 
    return (
      <div onClick={() => setShow(!show)} className='single-question-card'>
        <div className='question'>
          <h3 className={`question-title ${show && 'active'}`}>{question}</h3>
          {show && <p>{answer}</p>}
        </div>
        <div className='arrow'>
          {show ? <FaChevronUp className='chevron' /> : <FaChevronDown className='chevron' />}
        </div>
      </div>
    );
};

export default SingleQuestion;
