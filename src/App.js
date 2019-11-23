import React from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';
import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts!'/>
      </section>
    </div>
  );
}

export default App;
