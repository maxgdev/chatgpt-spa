import './App.css';
import { useState } from 'react';
import ChatMMessage from './components/ChatMessage'

function App() {
  const [gptPrompt, setGptPrompt] = useState("");
  const [chat, setChat] = useState("");

  const handleSubmit = async (evnt) => {
    console.log("An event has been submitted", evnt)
    evnt.preventDefault();
    const url = "http://localhost:3080";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: gptPrompt
      })
    }
    // const response = await fetch(url, options);
    // const data = response.json();

    try {
      const response = await fetch(url, options);
      // const data = response.json();
      const data = await response.json();
      console.log("response", response)
      console.log("data", data)
      // setChat(data.message)
    } catch (err) {
      console.error("err", err);
    }

    // setGptPrompt("")

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ChatGPT <span >M</span>ERN App</h1>
        <p>ChatGPT like clone with React & Node</p>
 
        <ChatMMessage message={chat} />
        {gptPrompt && <p>{gptPrompt}</p>}
        {chat && <p>{JSON.stringify(chat)}</p>}

    
        <form onSubmit={handleSubmit}>
          <label>
            Prompt:
            <input type="text" value={gptPrompt} onChange={(e) => setGptPrompt(e.target.value)} name="prompt" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </header>
    </div >
  );
}

export default App;
