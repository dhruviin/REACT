import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    if (count === 10) {
      alert("count cannot be more than 10");
      return;
    }
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count === 0) {
      alert("count cannot be less than 0");
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1>increment</h1>
      <h3>count : {count}</h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={Increment}
          style={{
            backgroundColor: "green",
          }}
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          style={{
            backgroundColor: "red",
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
