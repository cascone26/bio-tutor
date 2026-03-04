export type Argument = {
  id: number;
  philosopher: string;
  conclusion: string;
  premises: string[];
  explanation: string;
  topics: string[];
};

export const arguments_data: Argument[] = [
  {
    id: 1,
    philosopher: "Scientific Reasoning",
    conclusion: "Modern science cannot determine whether scientific materialism is true.",
    premises: [
      "Modern science is defined as the systematic study of the physical or material world through observation and experimentation.",
      "Scientific materialism claims that science can study all of reality.",
      "If there are immaterial entities, science (by its own definition) cannot study them.",
      "Therefore, science cannot test or confirm scientific materialism — doing so would require going beyond its own method.",
    ],
    explanation: "Science is self-limiting in scope: it can study matter and energy through empirical means, but cannot use empirical methods to prove that everything is empirical. This is a philosophical, not a scientific, claim.",
    topics: ["Nature of Science", "Scientific Materialism", "Module 1"],
  },
  {
    id: 2,
    philosopher: "Experimental Design Logic",
    conclusion: "A study without a control group cannot establish causation.",
    premises: [
      "To know if a treatment caused an effect, you must compare treated subjects to untreated subjects.",
      "Without a control group, any observed change could be due to natural variation, placebo effect, or other uncontrolled factors.",
      "If independent variables are not controlled, observed differences may be caused by those variables rather than the treatment.",
      "Therefore, a study lacking a proper control group cannot validly conclude that the treatment caused the effect.",
    ],
    explanation: "Good experimental design requires controlling all variables except the one being tested. The control group provides the baseline. Without it, correlation and causation cannot be distinguished.",
    topics: ["Scientific Method", "Experimental Design", "Module 1"],
  },
  {
    id: 3,
    philosopher: "Homeostatic Reasoning",
    conclusion: "Equilibrium with the environment is incompatible with life.",
    premises: [
      "Life requires maintaining a stable internal environment (homeostasis) distinct from the external environment.",
      "Equilibrium means no net movement — all gradients are equalized between inside and outside.",
      "If the body reaches equilibrium with the environment (equal temperature, pH, ion concentrations), all cellular processes would cease.",
      "Therefore, equilibrium with the environment equals death.",
    ],
    explanation: "Homeostasis is not equilibrium — it is the active maintenance of a state far from equilibrium. This requires constant energy input, which is why life requires energy and death is characterized by entropy reaching equilibrium.",
    topics: ["Homeostasis", "Equilibrium", "Module 2"],
  },
  {
    id: 4,
    philosopher: "Protein Structure-Function Reasoning",
    conclusion: "A protein's 3D shape is essential to its function and cannot be separated from it.",
    premises: [
      "Proteins function by physically interacting with specific molecules (substrates, receptors, other proteins).",
      "These interactions depend on the precise 3D shape of the protein, which is determined by its amino acid sequence.",
      "When a protein is denatured (unfolded), its specific shape is lost.",
      "Without its specific shape, the protein can no longer perform its function.",
      "Therefore, function requires structure — a denatured protein is non-functional.",
    ],
    explanation: "This is the structure-function principle in biology: a protein's amino acid sequence determines its shape, its shape determines its function, and any disruption of that shape destroys its biological activity.",
    topics: ["Proteins", "Denaturation", "Module 3"],
  },
  {
    id: 5,
    philosopher: "Nutritional Science",
    conclusion: "The body's order of fuel use (carbs → fats → proteins) is determined by efficiency and availability.",
    premises: [
      "Carbohydrates are readily available, fast to metabolize, and can be used even when oxygen is scarce.",
      "Fats are energy-dense (9 cal/g vs 4 cal/g for carbs) and ideal for long-term storage.",
      "Proteins are actively performing structural and functional roles and produce nitrogen waste when burned.",
      "The body prioritizes fuels that are most accessible and least costly to metabolize.",
      "Therefore, carbs are burned first, fats second, and proteins only as a last resort.",
    ],
    explanation: "This ordering reflects both immediate energy needs (carbs are fastest) and long-term efficiency (fats store more energy per gram). Burning proteins damages structural tissues and generates toxic nitrogen byproducts.",
    topics: ["Energy Metabolism", "Nutrition", "Module 4"],
  },
  {
    id: 6,
    philosopher: "Cancer Biology",
    conclusion: "Multiple mutations in the same cell are required for cancer to develop.",
    premises: [
      "Cells have multiple layers of protection: checkpoint genes, tumor suppressor genes (like p53), and DNA repair mechanisms.",
      "A single mutation is unlikely to bypass all of these systems simultaneously.",
      "Carcinogens can damage DNA, but most mutations either kill the cell or have no oncogenic effect.",
      "Only specific mutations in growth-regulating genes (oncogenes, tumor suppressors) promote cancer.",
      "Therefore, several specific mutations must accumulate in the same cell before it becomes cancerous.",
    ],
    explanation: "This is why cancer is relatively rare despite trillions of cells being exposed to carcinogens daily. Multiple layers of protection must be overcome simultaneously — an unlikely but possible event over a lifetime.",
    topics: ["Cancer", "Oncogenes", "Mutations", "Module 7"],
  },
  {
    id: 7,
    philosopher: "Immunology",
    conclusion: "Vaccines are effective because they prime the immune system without causing disease.",
    premises: [
      "The immune system produces memory B and T cells after first exposure to a foreign antigen.",
      "These memory cells allow faster and stronger immune responses on subsequent exposures.",
      "Vaccines expose the body to a non-infectious, non-pathogenic version of the antigen (inactivated or attenuated).",
      "This exposure generates memory cells without the risk of actual disease.",
      "Therefore, on real infection, the immune system can clear the pathogen before symptoms develop.",
    ],
    explanation: "Vaccination exploits the adaptive immune system's memory mechanism. The memory cells generated by a vaccine are functionally identical to those generated by natural infection, but without the danger of disease.",
    topics: ["Vaccines", "Immune Response", "Module 8"],
  },
  {
    id: 8,
    philosopher: "Negative Feedback Logic",
    conclusion: "Negative feedback is the only mechanism that can maintain a stable set point.",
    premises: [
      "Homeostasis requires maintaining a variable (e.g., temperature) near a set point.",
      "Positive feedback amplifies a change away from the set point — it cannot restore balance.",
      "Only negative feedback (reacting against the change) can counteract deviation from the set point.",
      "The body's organ systems use negative feedback to monitor and correct deviations continuously.",
      "Therefore, negative feedback is essential to homeostasis — without it, the body cannot self-regulate.",
    ],
    explanation: "Positive feedback (like blood clotting or childbirth contractions) amplifies a process to completion and then stops. Negative feedback continuously corrects deviations from a set point, making it the mechanism of homeostasis.",
    topics: ["Negative Feedback", "Homeostasis", "Module 2"],
  },
];
