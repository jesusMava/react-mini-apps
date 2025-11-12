import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating';
import colorData from './color-data.json';
import { useState } from 'react';
import ColorList from './ColorList';

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

        <ColorList
          colors={colors}
          onRemoveColor={(id) => {
            const newColor = colors.filter(color => color.id !== id)
            setColors(newColor)
          }}
          onRate={(id) =>{
            setColors({...colors, id: {raiting: id}})
          }}
          onRateColor={(id, rating) => {
            const newColors = colors.map(color =>
              color.id === id ? { ...color, rating } : color
            )
            setColors(newColors)
          }}
        />
      </header>

    </div>
  );
}

export default App;
