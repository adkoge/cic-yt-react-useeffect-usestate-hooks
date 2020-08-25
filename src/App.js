import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(12);

  useEffect(() => {
    console.log(`Count is: ${count}`);
  });

  return (
    <div className="App">
      <h1>Up and running</h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

export default App;
