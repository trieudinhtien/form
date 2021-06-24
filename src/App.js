import React from 'react';
import Header from './components/header/Header';
import './App.css'
import Form from './components/form/Form';
import Test from './components/test/Test';


function App() {
  return (
    <div className = "App">
      {/* <Test /> */}
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
