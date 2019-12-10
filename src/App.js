import React from 'react';
// import logo from './logo.svg';
import './App.css';

import RemoteConsumer from './components/RemoteConsumer';

function App() {
  return (
    <div className="App">
      <RemoteConsumer url="/api/url" />
    </div>
  );
}

export default App;
