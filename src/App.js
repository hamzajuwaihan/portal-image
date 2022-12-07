import './App.css';

import PersonContainer from './components/PersonContainer';

function App() {
  return (
    <div className="App">
      <div className='cohort'>
        <PersonContainer personName="hasan" text="this is hasan" />
        <PersonContainer personName="majd" text="this is majd" />
        <PersonContainer personName="jameel" text="this is jameel" />
        <PersonContainer personName="rahaf" text="this is rahaf" />
        <PersonContainer personName="qassem" text="this is qassem" />
      </div>
    </div>
  );
}

export default App;
