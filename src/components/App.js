import React from 'react';
import Header from './Header'
import KegControl from './KegControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <KegControl />
    </div>
  );
}

export default App;
