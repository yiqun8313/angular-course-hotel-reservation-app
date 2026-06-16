import { useEffect, useRef, useState } from "react";
import "./ChatUI.css";

function ChatUI() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", text: "Hi, how can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function sendMessage(event) {
    event.preventDefault();

    const text = input.trim();
    if (!text || isReplying) return;

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text },
    ]);

    setInput("");

    
    setIsReplying(true);
    timerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: `You said: "${text}"`,
        },
      ]);
      setIsReplying(false);
    }, 800);
  }

  return (
    <div className="chat-ui">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.role}`}
          >
            <span>{message.text}</span>
          </div>
        ))}

        {isReplying && <p className="chat-status">Assistant is typing...</p>}
      </div>

      <form className="chat-form" onSubmit={sendMessage}>
        <input
          value={input}
          placeholder="Message ChatGPT"
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" disabled={isReplying}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatUI;
