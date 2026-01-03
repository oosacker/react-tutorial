import { useState } from "react";
import create from "zustand";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Create a Zustand store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const { count, increment, decrement } = useStore();
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <hr />

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="card">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {value}</p>
      </div>

      <hr />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
