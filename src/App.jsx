import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const hours = new Date().getHours().toString().padStart(2, "0");
      const minute = new Date().getMinutes().toString().padStart(2, "0");
      const second = new Date().getSeconds().toString().padStart(2, "0");

      setTime({ hours, minute, second });
    }, 1000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <h1>{time.hours} :</h1>
        <h1>{time.minute} :</h1>
        <h1>{time.second}</h1>
      </div>
    </>
  );
}

export default App;
