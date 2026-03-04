export type Comparison = {
  id: string;
  topic: string;
  sides: {
    label: string;
    points: string[];
  }[];
};

export const comparisons: Comparison[] = [
  {
    id: "homeostasis-equilibrium",
    topic: "Homeostasis vs. Equilibrium",
    sides: [
      {
        label: "Homeostasis",
        points: [
          "Active maintenance of a stable internal environment",
          "Requires continuous energy input",
          "Far from equilibrium with the external environment",
          "Maintained by negative feedback mechanisms",
          "Equals life",
          "Example: maintaining body temperature at 98.6°F regardless of outside temperature",
        ],
      },
      {
        label: "Equilibrium",
        points: [
          "State where forces/reactions are balanced; no net movement",
          "Requires no energy input",
          "Internal and external environments are equal",
          "No mechanism needed — spontaneous result of entropy",
          "Equals death in biological systems",
          "Example: a body cooling to room temperature after death",
        ],
      },
    ],
  },
  {
    id: "specific-nonspecific",
    topic: "Specific vs. Non-Specific Immune Response",
    sides: [
      {
        label: "Non-Specific (Innate)",
        points: [
          "Responds to any foreign invader (generalist)",
          "Immediate response — no delay required",
          "Physical barriers: skin, mucous, stomach acid",
          "Cellular: phagocytes (neutrophils, monocytes) engulf pathogens",
          "Fever and inflammation increase blood flow to infection site",
          "Does not produce lasting memory",
          "Does not improve with repeated exposure",
        ],
      },
      {
        label: "Specific (Adaptive)",
        points: [
          "Responds to specific antigens (specialist)",
          "Takes days to ramp up — must clone specific B or T cells",
          "B cells: recognize free-floating pathogens; produce antibodies",
          "Cytotoxic T cells: kill virus-infected cells",
          "Produces long-lived memory cells",
          "Response becomes faster and stronger with repeated exposure",
          "The basis of vaccination",
        ],
      },
    ],
  },
  {
    id: "benign-malignant",
    topic: "Benign vs. Malignant Tumors",
    sides: [
      {
        label: "Benign Tumor",
        points: [
          "Stays localized at the original site",
          "Does not invade surrounding tissue",
          "Does not metastasize (spread through bloodstream)",
          "Can be completely removed by surgery",
          "Less life-threatening",
          "Cell division is unregulated but contained",
        ],
      },
      {
        label: "Malignant Tumor (Cancer)",
        points: [
          "Metastatic: cells detach and spread through bloodstream",
          "Can establish secondary tumors in distant organs",
          "Surgery may not eliminate all cancer cells",
          "Requires radiation, chemotherapy, or targeted therapy",
          "More life-threatening",
          "Cell division is unregulated and invasive",
        ],
      },
    ],
  },
  {
    id: "dna-rna",
    topic: "DNA vs. RNA",
    sides: [
      {
        label: "DNA",
        points: [
          "Double-stranded helix",
          "Bases: A, T, G, C",
          "Base pairing: A-T and G-C",
          "Stored in the nucleus",
          "Permanent genetic information storage",
          "Millions of base pairs long (chromosomes)",
          "Passed to daughter cells and offspring",
          "Must be protected — not sent to cytoplasm",
        ],
      },
      {
        label: "RNA",
        points: [
          "Single-stranded",
          "Bases: A, U (uracil), G, C",
          "Uses U instead of T",
          "Can leave the nucleus and move to cytoplasm",
          "Temporary copy of gene information (mRNA)",
          "Relatively short (few thousand bases)",
          "Used and then degraded and recycled",
          "Can be remade if damaged — from the DNA template",
        ],
      },
    ],
  },
  {
    id: "simple-complex-carbs",
    topic: "Simple vs. Complex Carbohydrates",
    sides: [
      {
        label: "Simple Carbohydrates",
        points: [
          "Monosaccharides (1 sugar unit) and disaccharides (2 sugar units)",
          "Examples: glucose (mono), lactose, sucrose (di)",
          "Digest quickly; raise blood sugar rapidly",
          "High glycemic index",
          "Provide fast, short-lasting energy",
          "Associated with blood sugar spikes and crashes",
        ],
      },
      {
        label: "Complex Carbohydrates (Polysaccharides)",
        points: [
          "Many sugar units linked together",
          "Examples: starch (plants), glycogen (body), cellulose (fiber)",
          "Digest more slowly; more sustained blood sugar rise",
          "Lower glycemic index (except refined starches)",
          "Glycogen: body's energy storage (~1 day)",
          "Cellulose: cannot be digested; feeds GI bacteria",
        ],
      },
    ],
  },
  {
    id: "transcription-translation",
    topic: "Transcription vs. Translation",
    sides: [
      {
        label: "Transcription",
        points: [
          "DNA → mRNA",
          "Occurs in the cell nucleus",
          "DNA is unwound at the gene region",
          "RNA polymerase builds the mRNA strand",
          "DNA is restored unchanged after transcription",
          "Product: mRNA (messenger RNA)",
          "Converts DNA 'storage language' into a portable message",
        ],
      },
      {
        label: "Translation",
        points: [
          "mRNA → protein (chain of amino acids)",
          "Occurs in the cytoplasm at ribosomes",
          "Ribosome reads mRNA in codons (3 nucleotides at a time)",
          "tRNA brings the correct amino acid for each codon",
          "Amino acids are linked into a polypeptide chain",
          "Product: protein",
          "Converts RNA 'language' into protein 'language'",
        ],
      },
    ],
  },
  {
    id: "b-cells-t-cells",
    topic: "B Cells vs. Cytotoxic T Cells",
    sides: [
      {
        label: "B Lymphocytes (B Cells)",
        points: [
          "Recognize free-floating antigens (bacteria, viruses in blood)",
          "Each B cell produces one type of antibody",
          "Activation: antibody binds antigen → cell clones",
          "Produces plasma cells (flood antibodies, then die in days)",
          "Produces memory cells (persist for years)",
          "Antibodies neutralize pathogens outside cells",
          "Also activate complement proteins",
        ],
      },
      {
        label: "Cytotoxic T Cells",
        points: [
          "Recognize antigens displayed on the SURFACE of infected cells",
          "Each T cell has one type of receptor",
          "Kill infected cells to prevent viral replication inside them",
          "Activation: T cell receptor binds viral antigen on cell surface",
          "Also produce memory T cells",
          "Work against viruses already inside cells (where antibodies cannot reach)",
          "Also target cancer cells that display abnormal surface antigens",
        ],
      },
    ],
  },
  {
    id: "radiation-chemo",
    topic: "Traditional vs. Targeted Cancer Treatments",
    sides: [
      {
        label: "Traditional (Radiation & Chemo)",
        points: [
          "Non-specific: targets all fast-dividing or metabolically active cells",
          "Kills cancer cells but also damages healthy fast-dividing cells",
          "Side effects: hair loss, GI damage, immune suppression",
          "Radiation: irradiates the tumor site",
          "Chemotherapy: toxic chemicals given systemically",
          "Some chemo agents also act as neurotoxins",
          "Effective but significant collateral damage",
        ],
      },
      {
        label: "Targeted Therapy (e.g., Gleevec)",
        points: [
          "Targets a specific abnormal protein or pathway in cancer cells",
          "Healthy cells (lacking the target protein) are unaffected",
          "Far fewer side effects than traditional chemo",
          "Gleevec: targets abnormal protein in Chronic Myeloid Leukemia (CML)",
          "Anti-angiogenesis: blocks tumor blood vessel formation",
          "Future: gene therapy to restore tumor suppressor function (p53)",
          "More precise, but requires identifying specific cancer mutations",
        ],
      },
    ],
  },
];
