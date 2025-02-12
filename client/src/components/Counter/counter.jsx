import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);
      if (event.data === "What is your current counter value?") {
        socket.send(count.toString());
      }
    };
    return () => {
      socket.close();
    };
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
};
