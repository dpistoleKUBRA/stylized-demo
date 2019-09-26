import React from 'react';
import './demo.scss';
import {
  PrimaryButton,
  SecondaryButton,
} from './components/Button';

function App() {
  return (
    <div className="demo">
      <h1 className="demo__title">Demo Title</h1>
      <div className="demo__button-container">
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" disabled/>
      </div>
    </div>
  );
}

export default App;
