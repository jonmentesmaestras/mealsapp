
import { useState } from 'react';

function App() {

  const [showText, setShowText] = useState(false)

  const buttonHandler = () => {
    setShowText((previousState)=>!previousState)
  }

  return (
    <div>
      <h1>hi there</h1>
     {showText && <h2>This is a test</h2> } 
      <button onClick={buttonHandler}>Click to show the text</button>
    </div>
    
  );
}

export default App;
