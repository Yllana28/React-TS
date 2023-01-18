import React, { useEffect, useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Count : " + count);
  }, [count]);

  return (
    <>
      <div>Counter : {count}</div>
      <button onClick={() => setCount(count + 1)}>Click to increment</button>
    </>
  );
};

export default Count;
