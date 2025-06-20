import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [click,setclick]=useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input }),
});

    const data = await res.json();
    console.log(data)
    setResponse(data.reply);
    setclick(false);

  };

  return (
    <div style={{ padding: "20px",  backgroundColor:"brown"  }}>
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={{ width: "300px", marginRight: "10px" }}
        />
        <button type="submit" 
        onClick={()=>setclick(!click)}
        style={{
    
    backgroundColor: click?"green":"red"
    }}
    >Ask</button>
      </form>
      <div
  style={{
    marginTop: "20px",
    border: "2px solid #333",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <strong>Response:</strong> {response}
</div>

    </div>
  );
}

export default App;
