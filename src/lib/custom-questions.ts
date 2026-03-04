export type CustomQuestion = {
  id: string;
  text: string;
  topics: string[];
  createdAt: string;
};

export function getCustomQuestions(): CustomQuestion[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("bio-tutor-custom-questions");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCustomQuestions(questions: CustomQuestion[]) {
  localStorage.setItem("bio-tutor-custom-questions", JSON.stringify(questions));
}
