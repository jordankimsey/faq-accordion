import React, {useState} from 'react';
import './App.css';
import { questions } from './questions';
import mobile from './images/illustration-woman-online-mobile.svg'
import desktop from './images/illustration-woman-online-desktop.svg'
import SingleQuestion from './components/SingleQuestion';

function App() {
  const [quests] = useState(questions)
  return (
    <div className='container'>
      <div className='question-card'>
        <picture className='hero-image'>
          <source media='(min-width: 768px)' srcset={desktop} />
          <img src={mobile} alt='women mobile' />
        </picture>
        <div>
          <h1>FAQ</h1>
          {quests.map((quest) => (
            <SingleQuestion
              key={quest.id}
              question={quest.question}
              answer={quest.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
