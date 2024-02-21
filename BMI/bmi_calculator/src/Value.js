import "./index.css";
import { useState } from "react";

export default function Val() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div className="Cal">
      <label htmlFor="Weight">Weight:</label>
      <input
        type="number"
        placeholder="Enter Weight(in Kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <label htmlFor="Height">Height:</label>
      <input
        type="number"
        placeholder="Enter Height(in m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={() => setResult(weight / height ** 2)}>Calculate</button>
      <h1>{result}</h1>
    </div>
  );
}
