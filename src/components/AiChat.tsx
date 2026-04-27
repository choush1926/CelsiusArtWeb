"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "想了解 Celsius 的創作理念",
  "有哪些課程可以報名？",
  "想看陶藝或羊毛氈作品",
];

function getMessageText(msg: { parts?: Array<{ type: string; text?: string }>; content?: string }) {
  if (msg.parts && msg.parts.length > 0) {
    return msg.parts
      .filter((p) => p.type === "text" && p.text)
      .map((p) => p.text)
      .join("");
  }
  return msg.content || "";
}

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const { messages, sendMessage, status, error } = useChat({
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        content: "你好！我可以幫你找作品、介紹課程，或聊聊任何你感興趣的事。想從哪裡開始？",
        parts: [{ type: "text" as const, text: "你好！我可以幫你找作品、介紹課程，或聊聊任何你感興趣的事。想從哪裡開始？" }],
      },
    ] as never,
    onError: (err) => {
      console.error("Chat error:", err);
    },
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim() || isLoading) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-text text-white shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label={open ? "關閉助理" : "開啟助理"}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3l12 12M15 3L3 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      <div
        id="contact"
        className={`fixed z-30 bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[min(560px,calc(100vh-8rem))] bg-bg border border-border shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-border bg-bg-secondary">
          <p className="text-[10px] tracking-[0.25em] uppercase text-text-tertiary mb-1">
            Personal Concierge
          </p>
          <h3 className="font-serif text-base font-light text-text">Celsius 的助理</h3>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 flex flex-col gap-3 overflow-y-auto px-5 py-5 bg-bg-secondary/50">
          {messages.map((msg) => {
            const text = getMessageText(msg);
            const isUser = msg.role === "user";
            if (!text && !isUser) return null;
            return (
              <div
                key={msg.id}
                className={`max-w-[85%] px-4 py-3 text-[13px] leading-[1.6] bg-white border border-border ${
                  isUser
                    ? "self-end rounded-xl rounded-br-sm"
                    : "self-start rounded-xl rounded-tl-sm"
                }`}
              >
                {text}
              </div>
            );
          })}
          {isLoading && (
            <div className="self-start max-w-[85%] px-4 py-3 text-[13px] leading-[1.6] bg-white border border-border rounded-xl rounded-tl-sm text-text-tertiary">
              思考中…
            </div>
          )}
          {error && (
            <div className="self-start max-w-[85%] px-4 py-3 text-[13px] leading-[1.6] bg-white border border-red-300 rounded-xl rounded-tl-sm text-red-500">
              發生錯誤，請稍後再試
            </div>
          )}
        </div>

        {/* Suggestions - only show at start */}
        {messages.length <= 1 && (
          <div className="flex gap-2 flex-wrap px-5 pb-3 bg-bg-secondary/50">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-[11px] px-3 py-1.5 border border-border-secondary rounded-full bg-white text-text-secondary hover:text-text hover:border-text transition-colors duration-300 cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex gap-2 px-4 py-4 border-t border-border bg-bg"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="輸入你的問題…"
            disabled={isLoading}
            className="flex-1 border border-border rounded-full px-4 py-2 text-[13px] bg-white outline-none focus:border-text-secondary transition-colors duration-300 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-9 h-9 rounded-full bg-text flex items-center justify-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-300 disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
