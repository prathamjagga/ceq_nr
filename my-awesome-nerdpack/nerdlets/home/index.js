import React, { useState } from "react";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default function HomeNerdlet() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count} <br /> <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
