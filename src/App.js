import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import ColorRoutes from './ColorRoutes';
import './App.css';

function App() {
  const INITIAL_COLORS = [
    {'name': 'red', 'colorCode': '#FF0000'},
    {'name': 'blue', 'colorCode': '#0000FF'},
    {'name': 'green', 'colorCode': '#008000'}
  ]
  const [colorList, setColorList] = useState(INITIAL_COLORS)

  const addColor = (newColor) => {
    setColorList((colorList) => [...colorList, {...newColor}])
  }
  return (
    <div className="App">
      <BrowserRouter>
      <ColorRoutes colorList={colorList} addColor={addColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
