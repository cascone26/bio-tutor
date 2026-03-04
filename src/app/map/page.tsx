"use client";

import { useState } from "react";

type Node = {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  description: string;
};

type Edge = {
  from: string;
  to: string;
  label?: string;
};

const nodes: Node[] = [
  // Central
  { id: "biology", label: "Human Biology", category: "core", x: 400, y: 300, description: "The study of the human body — its molecules, cells, organs, and systems. All life depends on organization, energy, and homeostasis." },

  // Homeostasis branch
  { id: "homeostasis", label: "Homeostasis", category: "homeostasis", x: 150, y: 150, description: "The maintenance of a stable internal environment. Requires energy, negative feedback, and a hierarchy of organ systems. Homeostasis = life; equilibrium = death." },
  { id: "negative-feedback", label: "Negative Feedback", category: "homeostasis", x: 60, y: 250, description: "The body senses a change and reacts AGAINST it to restore the set point. Example: hypothalamus detects temperature change → sweating or shivering." },
  { id: "water", label: "Water & Life", category: "homeostasis", x: 60, y: 150, description: "Water's unique properties (solubility, heat capacity, polarity, reactivity) make it essential for nearly every biological process." },
  { id: "characteristics", label: "Life Characteristics", category: "homeostasis", x: 180, y: 50, description: "Living things metabolize, reproduce, respond to stimuli, maintain homeostasis, evolve, and have complex organization. Organization and relationships are key." },

  // Macromolecules branch
  { id: "macromolecules", label: "Macromolecules", category: "macromolecules", x: 650, y: 150, description: "The 4 major macromolecules: carbohydrates, lipids, proteins, and nucleic acids. Each has distinct building blocks, structure, and functions." },
  { id: "proteins", label: "Proteins", category: "macromolecules", x: 770, y: 60, description: "~20% of body. Made of 20 amino acid types (9 essential). Require 3D shape to function. Functions: structure (collagen), enzymes, transport (hemoglobin), immunity (antibodies)." },
  { id: "lipids", label: "Lipids", category: "macromolecules", x: 770, y: 200, description: "15-30% of body. Insoluble in water. Types: triglycerides (energy storage, insulation), phospholipids (cell membrane), steroids (hormones). LDL vs HDL; atherosclerosis." },
  { id: "carbs", label: "Carbohydrates", category: "macromolecules", x: 730, y: 310, description: "1-2% of body. Simple (glucose, lactose) and complex (starch, glycogen, cellulose). Glycogen is the body's sugar storage. Primary energy source." },

  // Genetics branch
  { id: "genetics", label: "Genetics", category: "genetics", x: 400, y: 500, description: "The science of genes, inheritance, and genetic variation. DNA stores the information to make proteins; genes are regions of DNA; alleles are gene variants." },
  { id: "dna", label: "DNA & Genes", category: "genetics", x: 220, y: 480, description: "DNA: double-stranded, A-T and G-C base pairs, stored in chromosomes. Humans have 23 chromosome pairs, ~20,000 genes, 6 billion base pairs. 95% of DNA is non-coding." },
  { id: "protein-synthesis", label: "Protein Synthesis", category: "genetics", x: 580, y: 480, description: "DNA → transcription → mRNA → translation (ribosomes) → protein. RNA is a temporary, portable copy of the gene used in the cytoplasm where protein is made." },
  { id: "genetic-engineering", label: "Genetic Engineering", category: "genetics", x: 400, y: 620, description: "Recombinant DNA technology, gene therapy, and CRISPR/Cas9 allow manipulation of genes. Applications: insulin production, GMO crops, treating genetic diseases." },
  { id: "inheritance", label: "Inheritance", category: "genetics", x: 220, y: 620, description: "Dominant and recessive alleles; genotype vs phenotype; single-gene traits (CF, hemophilia) vs polygenic traits (height, intelligence); chromosomal abnormalities (Down syndrome)." },

  // Health branch
  { id: "immune", label: "Immune System", category: "health", x: 550, y: 370, description: "Leukocytes defend the body. Non-specific (phagocytes, inflammation) and specific (B cells produce antibodies; T cells kill infected cells). Vaccines create memory cells." },
  { id: "cancer", label: "Cancer & Cell Cycle", category: "health", x: 250, y: 370, description: "Cancer = unregulated cell division from damaged DNA. Oncogenes drive division; tumor suppressors (p53) detect damage and trigger apoptosis. Multiple mutations required." },
  { id: "digestion", label: "Digestion", category: "health", x: 600, y: 620, description: "30-foot GI tract converts food into absorbable nutrients. Mechanical + chemical digestion in oral cavity, stomach; bile and enzymes in small intestine; bacteria in large intestine." },
];

const edges: Edge[] = [
  { from: "biology", to: "homeostasis", label: "core goal" },
  { from: "biology", to: "macromolecules", label: "building blocks" },
  { from: "biology", to: "genetics", label: "information" },
  { from: "biology", to: "immune", label: "defense" },
  { from: "biology", to: "cancer", label: "disease" },
  { from: "homeostasis", to: "negative-feedback", label: "mechanism" },
  { from: "homeostasis", to: "water", label: "depends on" },
  { from: "homeostasis", to: "characteristics" },
  { from: "macromolecules", to: "proteins" },
  { from: "macromolecules", to: "lipids" },
  { from: "macromolecules", to: "carbs" },
  { from: "lipids", to: "immune", label: "cell membrane" },
  { from: "proteins", to: "immune", label: "antibodies" },
  { from: "genetics", to: "dna" },
  { from: "genetics", to: "protein-synthesis" },
  { from: "genetics", to: "genetic-engineering" },
  { from: "genetics", to: "inheritance" },
  { from: "dna", to: "protein-synthesis", label: "template for" },
  { from: "protein-synthesis", to: "proteins", label: "makes" },
  { from: "genetic-engineering", to: "cancer", label: "gene therapy" },
  { from: "cancer", to: "protein-synthesis", label: "oncogenes" },
  { from: "biology", to: "digestion", label: "fuels" },
  { from: "digestion", to: "carbs", label: "provides" },
];

const categoryColors: Record<string, string> = {
  core: "#7c6b9a",
  homeostasis: "#6b8fbf",
  macromolecules: "#bf8f6b",
  genetics: "var(--success)",
  health: "#c4737a",
};

export default function MapPage() {
  const [selected, setSelected] = useState<Node | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const connectedNodes = hoveredNode
    ? new Set(
        edges
          .filter((e) => e.from === hoveredNode || e.to === hoveredNode)
          .flatMap((e) => [e.from, e.to])
      )
    : null;

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="px-4 py-4 shrink-0">
        <h1 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
          Concept Map
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          How the major ideas connect. Tap a node to learn more.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--muted)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto relative">
        <svg
          viewBox="0 0 800 680"
          className="w-full h-full min-w-[600px]"
          style={{ minHeight: "500px" }}
        >
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = nodes.find((n) => n.id === edge.from)!;
            const to = nodes.find((n) => n.id === edge.to)!;
            const isHighlighted =
              !connectedNodes ||
              (connectedNodes.has(edge.from) && connectedNodes.has(edge.to));
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            return (
              <g key={i} opacity={isHighlighted ? 1 : 0.15}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--border)"
                  strokeWidth="1.5"
                />
                {edge.label && (
                  <text
                    x={midX}
                    y={midY - 6}
                    textAnchor="middle"
                    fontSize="9"
                    fill="var(--muted)"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHighlighted =
              !connectedNodes || connectedNodes.has(node.id);
            const isSelected = selected?.id === node.id;
            const color = categoryColors[node.category] || "var(--accent)";
            return (
              <g
                key={node.id}
                onClick={() => setSelected(isSelected ? null : node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ cursor: "pointer" }}
                opacity={isHighlighted ? 1 : 0.2}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.category === "core" ? 28 : 22}
                  fill={color}
                  opacity={isSelected ? 1 : 0.85}
                  stroke={isSelected ? "var(--foreground)" : "none"}
                  strokeWidth="2"
                />
                <text
                  x={node.x}
                  y={node.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={node.category === "core" ? "10" : "8.5"}
                  fontWeight="500"
                  fill="#fff"
                >
                  {node.label.length > 14
                    ? node.label.split(/[\s&]/)[0]
                    : node.label}
                </text>
                {node.label.length > 14 && (
                  <text
                    x={node.x}
                    y={node.y + 11}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8"
                    fontWeight="500"
                    fill="#fff"
                  >
                    {node.label.split(/[\s&]/).slice(1).join(" ")}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel */}
      {selected && (
        <div
          className="shrink-0 p-4 border-t"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: categoryColors[selected.category] }}
                />
                <h3 className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                  {selected.label}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-xs hover:opacity-60"
                style={{ color: "var(--muted)" }}
              >
                Close
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
