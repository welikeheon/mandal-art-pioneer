import React from 'react';
import Header from './components/header'
import Container from './components/container'
import Columns from './components/Columns'
// import './App.css';
import './App.sass'

function App() {
  return (
    <div>
      <Container>
        <Header title="ok" />
      </Container>
      <Container>
        <Columns />
      </Container>
    </div>
  );
}

export default App;
