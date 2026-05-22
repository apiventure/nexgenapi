import { useState, useRef, useEffect } from "react";
import styles from "./chatbot.module.css";
import { getBotResponse, ChatMessage } from "./chatbotService";
import { usePlaygroundAgent } from "./PlaygroundAgentContext";

let globalMessages: ChatMessage[] = [
  {
    id: "welcome",
    sender: "bot",
    text: "👋 Hi! I'm your API assistant. Ask me to execute a request, modify payloads, or retry calls. Type \"help\" to see what I can do!",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(globalMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { getActions } = usePlaygroundAgent();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), sender: "user", text };
    const botResponse = getBotResponse(text, getActions());
    const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), sender: "bot", text: botResponse };

    const updated = [...messages, userMsg, botMsg];
    setMessages(updated);
    globalMessages = updated;
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button className={styles.chatbotToggle} onClick={() => setIsOpen(!isOpen)} title="Chat Assistant">
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className={styles.chatbotPanel}>
          <div className={styles.chatHeader}>
            <span>🤖</span> NEXGEN Assistant
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageBubble} ${msg.sender === "bot" ? styles.botMessage : styles.userMessage}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInputArea}>
            <input
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button className={styles.chatSendBtn} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
