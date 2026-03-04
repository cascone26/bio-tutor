"use client";

const philosophers = [
  {
    name: "Module 1",
    years: "Nature of Science",
    era: "Foundations",
    color: "#7c6b9a",
    key: "Science is the systematic study of the physical world through observation and experimentation. Good science requires controlled experiments, large samples, statistical analysis, and repeatability.",
    concepts: ["Scientific Method", "Fact vs. Theory", "Control Group", "P Value", "R Value", "Experimental Design"],
    influence: "Understanding how science works is essential to critically evaluating every health claim, research study, and biological argument you will encounter.",
  },
  {
    name: "Module 2",
    years: "Homeostasis & Life",
    era: "Core Biology",
    color: "#6b8fbf",
    key: "The body maintains a stable internal environment (homeostasis) through negative feedback. Homeostasis = life; equilibrium = death. Organization and relationships are essential to life. Water's unique properties make biological life possible.",
    concepts: ["Homeostasis", "Negative Feedback", "Equilibrium", "Hypothalamus", "Vasodilation", "Characteristics of Life", "Water Properties"],
    influence: "Homeostasis is the unifying concept of physiology. Every organ system exists to maintain some aspect of the internal environment.",
  },
  {
    name: "Module 3",
    years: "Biological Macromolecules",
    era: "Biochemistry",
    color: "#bf8f6b",
    key: "The 4 macromolecules — carbohydrates, lipids, proteins, and nucleic acids — each have unique building blocks, structures, and roles. Proteins require specific 3D shape to function; lipids form cell membranes; carbohydrates store energy; nucleic acids carry information.",
    concepts: ["Carbohydrates", "Glycogen", "Proteins", "Denaturation", "Enzymes", "Collagen", "Triglycerides", "Phospholipids", "Steroids", "LDL", "HDL", "Atherosclerosis"],
    influence: "Every biological process — from muscle contraction to immunity to genetic inheritance — depends on the macromolecules introduced in this module.",
  },
  {
    name: "Module 4",
    years: "Digestion & Nutrition",
    era: "Organ Systems",
    color: "var(--success)",
    key: "The 30-foot GI tract converts food into absorbable nutrients via mechanical and chemical digestion. The small intestine absorbs nutrients; the large intestine hosts bacteria. Carbs are burned first, fats second, proteins last. Glycemic index and appetite hormones shape health.",
    concepts: ["Mechanical Digestion", "Chemical Digestion", "Chyme", "Bile", "Intrinsic Factor", "BMR", "Glycemic Index", "Leptin", "Ghrelin", "Insulin"],
    influence: "Nutrition and digestion connect directly to energy metabolism, obesity, diabetes, and cardiovascular disease — the major chronic diseases of our time.",
  },
  {
    name: "Module 5",
    years: "Genetics",
    era: "Molecular Biology",
    color: "#c4737a",
    key: "DNA → transcription → mRNA → translation → protein. The human genome contains 6 billion base pairs across 23 chromosome pairs with ~20,000 genes. Alleles are gene variants; dominant alleles need one copy, recessive need two. Mutations can be inherited or somatic.",
    concepts: ["DNA", "RNA", "Chromosomes", "Genes", "Alleles", "Genotype", "Phenotype", "Transcription", "Translation", "Codons", "Mutations", "Trisomy", "Polygenic Traits"],
    influence: "Genetics explains inheritance, disease risk, individual variation, and the molecular basis of life itself — connecting all other modules.",
  },
  {
    name: "Module 6",
    years: "Genetic Engineering",
    era: "Biotechnology",
    color: "#e07c4f",
    key: "Restriction enzymes cut DNA at specific sites; plasmids carry foreign genes into bacteria (recombinant DNA). Gene therapy inserts healthy genes into defective cells. CRISPR/Cas9 edits specific genomic sequences using guide RNA. GMO crops and livestock offer benefits and carry risks.",
    concepts: ["Restriction Enzymes", "Recombinant DNA", "Plasmid", "PCR", "Gene Therapy", "GMOs", "CRISPR/Cas9", "Guide RNA", "Attenuated Vaccine"],
    influence: "Genetic engineering is reshaping medicine (insulin, gene therapy), agriculture (GMOs), and now human reproduction itself (CRISPR embryo editing).",
  },
  {
    name: "Module 7",
    years: "Cell Division & Cancer",
    era: "Cell Biology",
    color: "#9a7c6b",
    key: "The cell cycle (G1 → S → G2 → Mitosis) is tightly regulated by checkpoints. Cancer = loss of checkpoint control. Multiple mutations in oncogenes and tumor suppressor genes (especially p53) are required. Treatments: surgery, radiation, chemo (non-specific), targeted drugs (specific).",
    concepts: ["Cell Cycle", "G1/S Checkpoint", "G2/M Checkpoint", "Apoptosis", "Oncogenes", "p53", "Tumor Suppressors", "Benign vs Malignant", "Metastasis", "Carcinogen", "Gleevec"],
    influence: "Cancer is the second leading cause of death. Understanding the cell cycle and tumor biology is essential for evaluating treatments and making sense of cancer news.",
  },
  {
    name: "Module 8",
    years: "Immune System",
    era: "Immunology",
    color: "#6b9fbf",
    key: "The immune system defends against pathogens through non-specific responses (phagocytes, inflammation) and specific responses (B cells produce antibodies; T cells kill infected cells). Vaccines prime the immune system. Auto-immune disease occurs when the body attacks itself.",
    concepts: ["Antigens", "Phagocytes", "B Lymphocytes", "Cytotoxic T Cells", "Antibodies", "Memory Cells", "Vaccines", "Inactivated Vaccine", "Attenuated Vaccine", "Auto-Immune Disease", "Inflammation"],
    influence: "Immunology explains vaccines, allergies, auto-immune diseases, organ rejection, cancer immunotherapy, and the body's extraordinary capacity to distinguish self from non-self.",
  },
];

export default function TimelinePage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-xl font-semibold mb-1" style={{ color: "var(--foreground)" }}>Course Module Timeline</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          From the nature of science to immunology — the 8 modules of the course and their key ideas.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

          <div className="space-y-4">
            {philosophers.map((p, i) => (
              <div key={p.name} className="relative flex gap-4">
                {/* Dot */}
                <div
                  className="w-[37px] h-[37px] rounded-full flex items-center justify-center shrink-0 z-10 text-xs font-bold"
                  style={{ background: p.color + "20", border: `2px solid ${p.color}`, color: p.color }}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-xl p-4"
                  style={{ background: "var(--surface)", border: `1px solid var(--border)` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>{p.name}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: p.color + "18", color: p.color }}>{p.era}</span>
                    </div>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{p.years}</p>
                  <p className="text-sm mb-3" style={{ color: "var(--foreground)", lineHeight: 1.6 }}>{p.key}</p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {p.concepts.map((c) => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>{c}</span>
                    ))}
                  </div>

                  <p className="text-xs italic" style={{ color: "var(--muted)", lineHeight: 1.5 }}>{p.influence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
