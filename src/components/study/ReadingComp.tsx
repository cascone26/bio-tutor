"use client";

import { useState, useRef } from "react";
import { recordStudySession } from "@/lib/streaks";

type Question = { question: string; answer: string };
type QuizState = { questions: Question[]; current: number; input: string; revealed: boolean; score: number; done: boolean };

const builtInPassages = [
  {
    id: 1,
    title: "Homeostasis and Negative Feedback",
    source: "Course Notes, Module 2",
    text: "Homeostasis is a stable internal environment — this equals life and requires lots of energy. The body tries to maintain a stable internal environment to keep you alive. Equilibrium is a state in which reactions and forces are balanced and there is no net movement — this equals death. Negative feedback is the process by which the body senses a change and then reacts AGAINST the change. This is ESSENTIAL for maintaining homeostasis. In the case of temperature, a brain region called the hypothalamus detects the changes and then activates responses: temperature goes up, the body sweats and sends blood to the skin (vasodilation) to cool the body; temperature goes down, the body shivers and restricts blood from the skin (vasoconstriction) to conserve heat. Properties of maintaining homeostasis include: negative feedback, varying reaction time (from seconds to hours), hierarchy of control, and requirement of energy.",
  },
  {
    id: 2,
    title: "DNA, Genes, and Protein Synthesis",
    source: "Course Notes, Module 5",
    text: "DNA is a double-stranded molecule made of nucleotides (A, T, G, C) with base pairs A-T and G-C. The human genome consists of 6 billion pairs of nucleotides distributed into 23 pairs of chromosomes. Each chromosome contains a certain number of genes. A gene is a region of a chromosome that has the information needed to make a protein. There are roughly 20,000 genes total in the human genome, and 95% of DNA does not have genes on it. Proteins are made in the cytoplasm, but DNA is in the nucleus. An RNA molecule is used to bridge the gap. RNA is produced as a temporary copy of the information in a gene — made from DNA by transcription. The RNA then moves out of the nucleus to the cytoplasm, where it is used to make proteins by a process called translation. The RNA molecule is read and translated into a sequence of amino acids that make up the specific protein. The overall process is: DNA → Transcription → mRNA → Translation → Protein.",
  },
  {
    id: 3,
    title: "How Cancer Develops",
    source: "Course Notes, Module 7",
    text: "Cancer cells seem to lose specialization and divide faster than normal differentiated cells. The cell cycle proceeds through G1 (normal function), S phase (DNA replication), G2 phase (prep to divide), and then the mitotic phase (actual division). Cells divide when nutrients are present, they are of sufficient size, and growth factors are present. Cells stop dividing when they are crowded, when nutrients or growth factors are lacking, or when DNA is damaged. A cell starts to multiply in an unregulated way when the cell cycle checkpoints are no longer functioning properly. Tumor suppressor genes detect damage to the cell and either fix the cell or cause the cell to kill itself (apoptosis). P53 is an example: this protein recognizes damaged DNA and then signals the cell to stop dividing, giving it time to fix the DNA. If the DNA is not repaired, p53 gets overactive and triggers apoptosis. In most tumors, the p53 gene is damaged, so this process does not work properly. A cell needs to have a number of mutations before it becomes cancerous — a single mutation will not cause cancer. These mutations must occur in specific genes called oncogenes.",
  },
  {
    id: 4,
    title: "The Immune Response: B Cells and Vaccines",
    source: "Course Notes, Module 8",
    text: "A specific B cell's antibody binds to a foreign antigen. Because there are few copies of this specific B cell, it has to divide to make more copies of itself to fight the infection — a process that takes a couple of days to ramp up. Two resulting cell types are produced: plasma cells that produce tons of antibody and then die in a few days, and memory cells that stick around for years and are ready to clear the infection quickly the next time the person is exposed to this pathogen. Antibodies are secreted by B cells in response to a specific antigen. Bacteria and viruses that have antibody bound to them are phagocytosed much more efficiently, are unable to bind to cells or tissues in your body as effectively, and are recognized by complement proteins in the blood that create pores in bacteria and kill them. Vaccines work by exposing the body to a non-infectious, non-pathogenic version of the antigen. Types of vaccines include inactivated vaccines (pathogen killed by heat or irradiation) and attenuated vaccines (pathogen genetically modified to be unable to complete its life cycle).",
  },
  {
    id: 5,
    title: "Proteins: Structure and Function",
    source: "Course Notes, Module 3",
    text: "Proteins make up about 20% of the body. Unlike carbohydrates and fats, proteins have significant amounts of nitrogen. Proteins are made of chains of amino acids. There are 20 different types of amino acids your body needs to make proteins; 9 of them your body cannot make and must come from the diet — these are called the essential amino acids. Proteins have diverse functions, and the function depends upon them folding correctly. Proteins require a specific 3D shape to function. Depending on the sequence of amino acids that the protein is composed of, it will fold into a specific structure. If the protein unfolds (denatures), it will not work. Proteins unfold or denature if you heat them, put them in acid, or put them in high salt. Proteins have the most diverse array of functions compared to any of the other macromolecules in the body, including: structure (collagen — the most abundant protein), catalysis (enzymes that speed up reactions), transport and movement (hemoglobin, muscle proteins, membrane proteins), and recognition and protection (antibodies, clotting proteins).",
  },
];

export default function ReadingComp({ onBack }: { onBack: () => void }) {
  const [passage, setPassage] = useState<typeof builtInPassages[0] | null>(null);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function startQuiz(p: typeof builtInPassages[0]) {
    setPassage(p);
    setLoading(true);
    recordStudySession();

    try {
      const res = await fetch("/api/reading-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passage: p.text, source: p.source }),
      });
      const data = await res.json();
      setQuiz({ questions: data.questions, current: 0, input: "", revealed: false, score: 0, done: false });
    } catch {
      setQuiz({
        questions: [
          { question: "What is the main subject of this passage?", answer: "The passage discusses key metaphysical concepts." },
          { question: "What key distinction does the author make?", answer: "The author distinguishes between different modes of being." },
        ],
        current: 0, input: "", revealed: false, score: 0, done: false,
      });
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  function reveal() {
    if (!quiz) return;
    setQuiz({ ...quiz, revealed: true });
  }

  function markCorrect(correct: boolean) {
    if (!quiz) return;
    const newScore = correct ? quiz.score + 1 : quiz.score;
    if (quiz.current + 1 >= quiz.questions.length) {
      setQuiz({ ...quiz, score: newScore, done: true });
    } else {
      setQuiz({ ...quiz, current: quiz.current + 1, input: "", revealed: false, score: newScore });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  if (!passage) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-1">
            <button onClick={onBack} className="text-sm" style={{ color: "var(--muted)" }}>&larr; Back</button>
            <h1 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>Reading Comprehension</h1>
          </div>
          <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
            Read a primary source passage, then answer questions about what it says.
          </p>
          <div className="space-y-2">
            {builtInPassages.map((p) => (
              <button key={p.id} onClick={() => startQuiz(p)} className="w-full text-left rounded-xl p-4 transition-all" style={{ background: "var(--surface)", border: "1px solid var(--border)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                <h3 className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{p.title}</h3>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{p.source}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-sm" style={{ color: "var(--muted)" }}>Generating questions...</p>
      </div>
    );
  }

  if (quiz?.done) {
    const pct = quiz.questions.length > 0 ? Math.round((quiz.score / quiz.questions.length) * 100) : 0;
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: pct >= 80 ? "var(--success)" : pct >= 60 ? "var(--warning)" : "var(--error)" }}>{pct}%</h2>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{quiz.score} of {quiz.questions.length} correct on &quot;{passage.title}&quot;</p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => startQuiz(passage)} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "var(--accent)", color: "#fff" }}>Try again</button>
            <button onClick={() => { setPassage(null); setQuiz(null); }} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "var(--surface)", color: "var(--foreground)", border: "1px solid var(--border)" }}>Pick another</button>
          </div>
        </div>
      </div>
    );
  }

  const q = quiz?.questions[quiz.current];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => { setPassage(null); setQuiz(null); }} className="text-sm" style={{ color: "var(--muted)" }}>&larr; Back</button>
          {quiz && <span className="text-xs" style={{ color: "var(--muted)" }}>Q{quiz.current + 1} of {quiz.questions.length}</span>}
        </div>

        {/* Passage */}
        <div className="rounded-xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <h3 className="text-xs font-semibold mb-0.5" style={{ color: "var(--accent)" }}>{passage.title}</h3>
          <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{passage.source}</p>
          <p className="text-sm italic" style={{ color: "var(--foreground)", lineHeight: 1.7 }}>{passage.text}</p>
        </div>

        {/* Question */}
        {q && (
          <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground)" }}>{q.question}</p>
            <input
              ref={inputRef}
              value={quiz?.input || ""}
              onChange={(e) => quiz && setQuiz({ ...quiz, input: e.target.value })}
              onKeyDown={(e) => { if (e.key === "Enter" && !quiz?.revealed) reveal(); }}
              disabled={quiz?.revealed}
              placeholder="Your answer..."
              className="w-full rounded-lg px-3 py-2 text-sm mb-3"
              style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            />

            {!quiz?.revealed ? (
              <button onClick={reveal} disabled={!quiz?.input.trim()} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: quiz?.input.trim() ? "var(--accent)" : "var(--border)", color: quiz?.input.trim() ? "#fff" : "var(--muted)" }}>Check</button>
            ) : (
              <div>
                <div className="rounded-lg p-3 mb-3" style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>Expected answer:</p>
                  <p className="text-sm" style={{ color: "var(--foreground)" }}>{q.answer}</p>
                </div>
                <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>How did you do?</p>
                <div className="flex gap-2">
                  <button onClick={() => markCorrect(true)} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "var(--success-bg)", color: "var(--success)", border: "1px solid #6ab07040" }}>Got it right</button>
                  <button onClick={() => markCorrect(false)} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "var(--error-bg)", color: "var(--error)", border: "1px solid #c96b6b40" }}>Missed it</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
