"use client";

import { useState } from "react";

type Connection = {
  concept: string;
  category: string;
  doctrine: string;
  scripture: string;
  ccc: string;
  explanation: string;
};

const connections: Connection[] = [
  {
    concept: "Homeostasis and Divine Providence",
    category: "Homeostasis",
    doctrine: "Divine Providence and the Ordering of Creation",
    scripture: "Wisdom 8:1",
    ccc: "CCC 302-308",
    explanation:
      "The body's homeostatic systems illustrate a profound truth about ordered creation: each level exists to serve those above it. Cells for organs, organs for organ systems, organ systems for the whole person. This hierarchy mirrors Catholic teaching on Divine Providence, which holds that God governs all creation according to a wise plan in which lower causes serve higher ends. The body does not govern itself by chaos but by order built into it by its Creator.",
  },
  {
    concept: "Characteristics of Life and the Soul",
    category: "Homeostasis",
    doctrine: "The Human Soul as the Form of the Body",
    scripture: "Genesis 2:7",
    ccc: "CCC 362-368",
    explanation:
      "Biology identifies life by its characteristics: metabolism, reproduction, response to stimuli, homeostasis, complex organization. The Church teaches that the soul is not merely an add-on to the body but its animating principle — what makes the body a living body rather than a corpse. The biological note that 'organization and relationships matter' resonates with the Catholic understanding that the soul is what organizes matter into a living, unified whole. Remove the soul, and the body immediately begins to lose its organization.",
  },
  {
    concept: "Water's Unique Properties",
    category: "Creation",
    doctrine: "Creation as Gift and the Wisdom of the Creator",
    scripture: "Psalm 104:10-11",
    ccc: "CCC 295-301",
    explanation:
      "Water's extraordinary properties — its high heat capacity, solubility, reactivity, and wide liquid range — make it uniquely suited to support life. These properties appear precisely fine-tuned for biological existence. The Catholic tradition sees in the elegance and fitness of creation a reflection of the wisdom and generosity of God. That water, the most abundant molecule in the body, is precisely what biology requires speaks to the providential ordering of creation for life.",
  },
  {
    concept: "The Human Body as Temple",
    category: "Macromolecules",
    doctrine: "The Body as Temple of the Holy Spirit",
    scripture: "1 Corinthians 6:19-20",
    ccc: "CCC 364-365",
    explanation:
      "The four major macromolecules work together in an integrated system of extraordinary complexity. No single molecule could sustain life; only their cooperation makes human life possible. The Church teaches that the body is a temple of the Holy Spirit (1 Cor 6:19), not to be degraded or despised. Understanding the biological intricacy of the human body — its molecular architecture, its constant self-maintenance, its capacity for repair — deepens reverence for the human person as a creature worthy of dignity and care.",
  },
  {
    concept: "Temperance and Body Stewardship",
    category: "Macromolecules",
    doctrine: "Temperance and Care for the Body",
    scripture: "1 Corinthians 9:27",
    ccc: "CCC 2288-2291",
    explanation:
      "The body's fat systems are elegant: essential fat sustains life and hormonal function; storage fat provides long-term energy reserves. Both excess and deficiency cause harm. This biological reality supports the virtue of temperance. The Church teaches that we are stewards, not owners, of our bodies. Over-indulgence leading to obesity and under-indulgence that destroys health both violate the proper care owed to the body as God's gift. Biological knowledge reinforces the moral wisdom of moderation.",
  },
  {
    concept: "DNA and Human Dignity from Conception",
    category: "Genetics",
    doctrine: "The Dignity of the Human Person from Conception",
    scripture: "Psalm 139:13-14",
    ccc: "CCC 2270-2275",
    explanation:
      "The human genome — containing roughly 6 billion base pairs encoding the complete biological information for a unique human being — is present in its entirety from the moment of fertilization. This biological fact supports the Church's teaching that human life, with its inherent dignity, begins at conception. The genetic uniqueness of every person (determined by the combination of parental alleles) reflects that each human being is unrepeatable — a truth that grounds Catholic opposition to abortion, cloning, and embryo destruction.",
  },
  {
    concept: "Genetic Engineering Ethics",
    category: "Genetics",
    doctrine: "The Ethics of Intervening in Human Life",
    scripture: "Jeremiah 1:5",
    ccc: "CCC 2292-2296",
    explanation:
      "CRISPR and gene therapy offer extraordinary potential to heal genetic diseases — a morally laudable goal aligned with the Church's vision of medicine as a service to human life. However, the same technologies could be used for enhancement (designer babies) or the destruction of embryos. The Church insists that interventions on the human genome are morally permissible only if they are therapeutic, respect the dignity of the person, do not impose disproportionate risks, and do not treat future persons as means rather than ends.",
  },
  {
    concept: "Vaccine Ethics and Cooperation",
    category: "Genetics",
    doctrine: "Cooperation with Evil and Proportionality",
    scripture: "Romans 3:8",
    ccc: "CCC 2263-2265",
    explanation:
      "Some vaccines are grown in cell lines derived from aborted fetuses. The Church has addressed this directly: such vaccines may be used when (1) the disease poses a grave risk, (2) no alternatives are available, and (3) the person registers their objection and advocates for ethical alternatives. This reflects the Church's nuanced teaching on remote material cooperation with evil: using the fruit of a past evil act (without endorsing it) can be permissible when proportionate good results and all reasonable moral alternatives are pursued.",
  },
  {
    concept: "Apoptosis and Redemptive Sacrifice",
    category: "Cancer",
    doctrine: "Redemptive Suffering and the Logic of Sacrifice",
    scripture: "John 12:24",
    ccc: "CCC 1505-1508",
    explanation:
      "Apoptosis — programmed cell death — is not a biological failure but a mechanism of order. When a cell is irreparably damaged, it kills itself for the good of the whole organism. This biological self-sacrifice mirrors a deep truth the Church has always taught: the good of the whole sometimes requires the death of a part, and this death is not meaningless but redemptive. Even at the cellular level, creation bears the imprint of the sacrificial logic that reaches its height in the Cross.",
  },
  {
    concept: "Immune System and the Common Good",
    category: "Immunology",
    doctrine: "Solidarity, Vaccination, and the Common Good",
    scripture: "Romans 15:1-2",
    ccc: "CCC 1905-1912",
    explanation:
      "The immune system operates according to a principle of solidarity: individual cells sacrifice themselves (B and T cells die after mounting a response) so that the organism survives. The Church's social teaching applies this principle to public health: vaccination is not merely a private medical decision but an act of charity toward the community. Herd immunity protects those who cannot be vaccinated — the sick, the immunocompromised, the elderly. Vaccine refusal can fail the duty of solidarity and care for the common good.",
  },
  {
    concept: "Auto-Immune Disease and Original Sin",
    category: "Immunology",
    doctrine: "Original Sin and the Disorder Within",
    scripture: "Romans 7:23",
    ccc: "CCC 396-409",
    explanation:
      "In auto-immune disease, the body's own defense system turns against itself — what was made to protect becomes the source of destruction. This is a striking biological image of what sin does to the human person. Original sin introduces a disorder within human nature: reason rebels against God, the passions rebel against reason. Just as auto-immunity distorts the immune system's purpose (defense → attack), sin distorts the soul's proper ordering. The remedy for both requires an external agent — immunosuppressants for auto-immunity; grace for sin.",
  },
  {
    concept: "Negative Feedback and Moral Conscience",
    category: "Homeostasis",
    doctrine: "Conscience as the Proximate Norm of Morality",
    scripture: "Romans 2:15",
    ccc: "CCC 1776-1802",
    explanation:
      "Negative feedback is the body's mechanism for detecting deviation from its proper state and correcting it. The moral conscience plays an analogous role in the spiritual life: it detects when a person deviates from right action and generates a corrective impulse (guilt, remorse, the call to repentance). Just as homeostasis requires a set point to return to, conscience requires a moral standard — an objective truth against which actions are measured. For Catholics, that standard is natural law written on the heart and clarified by divine revelation.",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Homeostasis: { bg: "var(--accent-light)", text: "var(--accent)" },
  Creation: { bg: "#e8f0fe", text: "#4a7ab5" },
  Macromolecules: { bg: "#f3e8fe", text: "#7a4ab5" },
  Genetics: { bg: "#e8f5e9", text: "#2d6a30" },
  Cancer: { bg: "#fde8e8", text: "#b54a4a" },
  Immunology: { bg: "#e8f5f0", text: "#2d6a56" },
};

export default function FaithPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Homeostasis", "Creation", "Macromolecules", "Genetics", "Cancer", "Immunology"];
  const filtered = filter === "All" ? connections : connections.filter((c) => c.category === filter);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-5 pb-3 shrink-0">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold mb-1" style={{ color: "var(--foreground)" }}>
            Biology &amp; Faith
          </h1>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            How the concepts of Human Biology connect to Catholic doctrine and Sacred Scripture.
          </p>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all"
                style={{
                  background: filter === cat ? "var(--accent)" : "var(--surface)",
                  color: filter === cat ? "#fff" : "var(--muted)",
                  border: `1px solid ${filter === cat ? "transparent" : "var(--border)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Connections list */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="max-w-2xl mx-auto space-y-3">
          {filtered.map((conn, i) => {
            const color = categoryColors[conn.category] ?? { bg: "var(--accent-light)", text: "var(--accent)" };
            const isOpen = expanded === i;

            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                {/* Header row */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left px-4 py-3.5 flex items-start gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                        style={{ background: color.bg, color: color.text }}
                      >
                        {conn.category}
                      </span>
                      <span className="text-xs shrink-0" style={{ color: "var(--muted)" }}>
                        {conn.scripture}
                      </span>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      {conn.concept}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--accent)" }}>
                      {conn.doctrine}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 mt-1 transition-transform"
                    style={{
                      color: "var(--muted)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Expanded explanation */}
                {isOpen && (
                  <div
                    className="px-4 pb-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="rounded-lg p-3 mt-3 mb-3"
                      style={{ background: "var(--accent-light)" }}
                    >
                      <p className="text-xs font-medium" style={{ color: color.text }}>
                        {conn.ccc} &middot; {conn.scripture}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {conn.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
