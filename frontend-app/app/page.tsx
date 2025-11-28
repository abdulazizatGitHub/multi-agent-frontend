"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await fetch("http://localhost:8000/jarvis/ask", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ message: input })
    });
    const json = await res.json();
    setReply(json.reply);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>AgentOS - Day 1</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Jarvis..."
        style={{ padding: "10px", width: "60%" }}
      />
      <button onClick={send} style={{ marginLeft: 10 }}>Send</button>
      <p style={{ marginTop: 20 }}>Reply: {reply}</p>
    </div>
  );
}
