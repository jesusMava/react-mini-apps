import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating';
import colorData from './color-data.json';
import { useState } from 'react';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          and save to reload.
        <StarRating totalStars={5} 
          style={{backgoundColor: "lightblue"}}
          onDoubleClick={e => alert("Double clicked!")}
        />

        <ColorList />

        <AddColorForm />
        
      </header>

    </div>
  );
}

export default App;
