import React, { useState, useEffect } from "react";
import Hello from "./components/Hello";

function App() {
  const [apiMsg, setApiMsg] = useState<string>("");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((data) => setApiMsg(data.message))
      .catch((err) => setApiMsg("Could not reach API"));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>Fullstack</h1>
      <p>
        API says: <strong>{apiMsg}</strong>
      </p>
      <Hello />
    </div>
  );
}

export default App;
