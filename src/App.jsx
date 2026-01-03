// import { useState } from "react";
import { create } from "zustand";
import "./App.css";
import Card from "./Card";

// Create a Zustand store
const myStore = create((set) => ({
  value: "",
  // Replaces the current value with whatever string is passed in
  setValue: (nextValue) => set(() => ({ value: nextValue })),
}));

function App() {
  const handleCardEvent = (payload) => {
    if (payload && payload.data) {
      setValue(payload.data);
    }
  };

  const { value, setValue } = myStore();

  return (
    <>
      <h1>My Counter</h1>

      <Card myEvent={handleCardEvent} />

      {value}
    </>
  );
}

export default App;
