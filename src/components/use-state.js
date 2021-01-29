import { useState, useEffect } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Drew");

  const handleClick = (value) => {
    setCount(count + value);
  };

  //componentDidMount - did something after component renders
  //componentDidUpdate - did something after your component updated
  //componentWillUnmount - did something after the component was destroyed/unmounted
  useEffect(() => {
    console.log(text);
    // document.title = `Your count is at ${count}`;

    // return () => console.log("UNMOUNT");
  });

  return (
    <div>
      <button onClick={() => handleClick(1)}>Increase</button>
      <button onClick={() => handleClick(-1)}>Decrease</button>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <h1>{count}</h1>
    </div>
  );
};

export default UseState;
