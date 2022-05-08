import React, {useState} from 'react';
import './App.css';
import { questions } from './questions';
import mobile from './images/illustration-woman-online-mobile.svg'
import desktop from './images/illustration-woman-online-desktop.svg'
import SingleQuestion from './components/SingleQuestion';

function App() {
  const [quests] = useState(questions)
  return (
    <div className="container">
      <div>
        <picture>
          <source media="(min-width: 768px)" srcset={desktop} />
          <img src={mobile} alt="women mobile" />
        </picture>
      </div>

      <div className='question-card'>
        <h1>FAQ</h1>
        {quests.map((quest) => (
          <SingleQuestion key={quest.id} question={quest.question} answer={ quest.answer}/>
        ))}
      </div>
    </div>

  );
}

export default App;


{/* <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}