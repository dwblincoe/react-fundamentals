import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Increase</button>
      <button onClick={() => handleClick(-1)}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseState;
