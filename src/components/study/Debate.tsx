"use client";

import { useState, useRef, useEffect } from "react";
import { recordStudySession } from "@/lib/streaks";

type Message = { role: "user" | "assistant"; content: string };

const debateTopics = [
  { id: 1, title: "Low-fat diets are the best approach for preventing cardiovascular disease", side: "for", philosopher: "Nutrition" },
  { id: 2, title: "Genetically modified organisms (GMOs) are safe for human consumption", side: "for", philosopher: "Genetics" },
  { id: 3, title: "CRISPR should be used to edit the human germline to prevent heritable diseases", side: "for", philosopher: "Bioethics" },
  { id: 4, title: "Vaccines are safe and should be mandatory for public school attendance", side: "for", philosopher: "Immunology" },
  { id: 5, title: "Designer babies — selecting for non-disease traits via genetic engineering — should be permitted", side: "for", philosopher: "Bioethics" },
  { id: 6, title: "BMI is a reliable and sufficient measure of a person's health", side: "for", philosopher: "Nutrition" },
  { id: 7, title: "Chemotherapy causes more harm than good in most cancer cases", side: "for", philosopher: "Cancer" },
  { id: 8, title: "Modern science can fully explain the origin of life from chemistry alone", side: "for", philosopher: "Science" },
  { id: 9, title: "Gene therapy should be used to treat polygenic disorders, not just single-gene defects", side: "for", philosopher: "Genetics" },
  { id: 10, title: "The Atkins (low-carb) diet is superior to a balanced macronutrient diet for long-term health", side: "for", philosopher: "Nutrition" },
];

export default function Debate({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState<typeof debateTopics[0] | null>(null);
  const [userSide, setUserSide] = useState<"for" | "against">("for");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function startDebate(t: typeof debateTopics[0], side: "for" | "against") {
    setTopic(t);
    setUserSide(side);
    setMessages([]);
    setLoading(true);
    recordStudySession();

    try {
      const res = await fetch("/api/debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: t.title, aiSide: side === "for" ? "against" : "for", messages: [] }),
      });
      const data = await res.json();
      setMessages([{ role: "assistant", content: data.argument }]);
    } catch {
      setMessages([{ role: "assistant", content: "I'll argue the opposite position. Make your opening argument." }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  async function sendMessage() {
    if (!input.trim() || !topic || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.title, aiSide: userSide === "for" ? "against" : "for", messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.argument }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "That's an interesting point. However, consider this counter-argument..." }]);
    } finally {
      setLoading(false);
    }
  }

  if (!topic) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-1">
            <button onClick={onBack} className="text-sm" style={{ color: "var(--muted)" }}>&larr; Back</button>
            <h1 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>Debate</h1>
          </div>
          <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
            Pick a position. The AI argues the opposite. Defend your understanding.
          </p>

          <div className="space-y-2">
            {debateTopics.map((t) => (
              <div key={t.id} className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>{t.philosopher}</span>
                </div>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground)" }}>{t.title}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => startDebate(t, "for")}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: "var(--success-bg)", color: "var(--success)", border: "1px solid #6ab07040" }}
                  >Argue FOR</button>
                  <button
                    onClick={() => startDebate(t, "against")}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: "var(--error-bg)", color: "var(--error)", border: "1px solid #c96b6b40" }}
                  >Argue AGAINST</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b shrink-0" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={() => setTopic(null)} className="text-sm" style={{ color: "var(--muted)" }}>&larr;</button>
            <div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{topic.title}</h2>
              <p className="text-xs">
                <span style={{ color: userSide === "for" ? "var(--success)" : "var(--error)" }}>You: {userSide}</span>
                <span style={{ color: "var(--muted)" }}> vs </span>
                <span style={{ color: userSide === "for" ? "var(--error)" : "var(--success)" }}>AI: {userSide === "for" ? "against" : "for"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-2xl mx-auto space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className="rounded-xl px-3.5 py-2.5 max-w-[85%] text-sm" style={{ background: msg.role === "user" ? "var(--user-bubble)" : "var(--assistant-bubble)", color: msg.role === "user" ? "#fff" : "var(--foreground)", lineHeight: 1.6 }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-xl px-3.5 py-2.5 text-sm" style={{ background: "var(--assistant-bubble)", color: "var(--muted)" }}>Thinking...</div>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-3 border-t shrink-0" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="max-w-2xl mx-auto flex gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="Make your argument..."
            rows={1}
            className="flex-1 rounded-lg px-3 py-2 text-sm resize-none"
            style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
          />
          <button onClick={sendMessage} disabled={!input.trim() || loading} className="px-4 py-2 rounded-lg text-sm font-medium shrink-0" style={{ background: input.trim() ? "var(--accent)" : "var(--border)", color: input.trim() ? "#fff" : "var(--muted)" }}>Send</button>
        </div>
      </div>
    </div>
  );
}
