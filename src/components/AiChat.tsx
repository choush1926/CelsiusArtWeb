"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "想了解 Sam 的創作理念",
  "有哪些課程可以報名？",
  "我想看羊毛氈作品",
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
  const { messages, sendMessage, status, error } = useChat({
    messages: [
      {
        id: "welcome",
        role: "assistant",
        content: "你好！我可以幫你找作品、介紹課程，或聊聊任何你感興趣的事。想從哪裡開始？",
        parts: [{ type: "text" as const, text: "你好！我可以幫你找作品、介紹課程，或聊聊任何你感興趣的事。想從哪裡開始？" }],
      },
    ],
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
    <section
      id="contact"
      className="border-t border-border grid grid-cols-1 md:grid-cols-2"
    >
      {/* Left: Intro */}
      <div className="flex flex-col justify-center px-8 md:px-12 py-12 md:border-r border-border">
        <p className="text-[10px] tracking-[0.2em] uppercase text-text-tertiary mb-4">
          智能助理
        </p>
        <h2 className="font-serif text-[26px] font-light leading-[1.3] mb-4">
          讓我幫你找到
          <br />
          最適合的作品
        </h2>
        <p className="text-[13px] leading-[1.8] text-text-secondary">
          不知道從哪裡開始？直接問我。無論是想選購作品、報名課程，還是純粹想了解某件作品的創作脈絡，我都可以幫你。
        </p>
      </div>

      {/* Right: Chat Window */}
      <div className="bg-bg-secondary px-6 py-8 flex flex-col min-h-[400px]">
        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4"
        >
          {messages.map((msg) => {
            const text = getMessageText(msg);
            if (!text && msg.role === "assistant") return null;
            return (
              <div
                key={msg.id}
                className={`max-w-[85%] px-4 py-3 text-[13px] leading-[1.6] bg-white border border-border ${
                  msg.role === "user"
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
          <div className="flex gap-2 flex-wrap mb-4">
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
          className="flex gap-2 border-t border-border pt-4"
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
            className="w-8 h-8 rounded-full bg-text flex items-center justify-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-300 disabled:opacity-30"
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
    </section>
  );
}
