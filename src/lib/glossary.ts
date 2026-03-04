export type GlossaryTerm = {
  term: string;
  definition: string;
  category: string;
};

export const glossary: GlossaryTerm[] = [
  // Module 1: Science
  { term: "Science", definition: "A systematic study of the physical or material world gained through observation and experimentation.", category: "Nature of Science" },
  { term: "Scientific Fact", definition: "An observation that has repeatedly been confirmed and can subsequently be confirmed by anyone with the proper equipment.", category: "Nature of Science" },
  { term: "Scientific Hypothesis", definition: "A working assumption to inform new experiments or explain existing data and facts.", category: "Nature of Science" },
  { term: "Scientific Theory", definition: "A conceptual framework that explains existing observations and predicts new ones. It deals with physical phenomena, is well supported by facts, is broad in scope, makes predictions, and must be empirically testable.", category: "Nature of Science" },
  { term: "Dependent Variable", definition: "The variable being measured in a scientific experiment — what you are testing for.", category: "Nature of Science" },
  { term: "Independent Variable", definition: "The variable that is changed or controlled by the experimenter; all other variables are minimized.", category: "Nature of Science" },
  { term: "Control Group", definition: "The group in an experiment that does not receive the experimental treatment; serves as a baseline for comparison.", category: "Nature of Science" },
  { term: "P Value", definition: "A statistical measure of the probability that the observed result occurred by chance. A low p value (typically < 0.05) indicates statistical significance.", category: "Nature of Science" },
  { term: "R Value", definition: "A statistical measure of the strength of correlation between two variables in an XY plot. Ranges from 0 (no correlation) to 1 (perfect correlation).", category: "Nature of Science" },

  // Module 2: Homeostasis
  { term: "Homeostasis", definition: "The maintenance of a stable internal environment within the body. Homeostasis equals life and requires energy. The body maintains narrow ranges for temperature, pH, glucose, O2, CO2, and more.", category: "Homeostasis" },
  { term: "Equilibrium", definition: "A state in which chemical reactions and forces are balanced and there is no net movement. In biology, equilibrium with the environment equals death.", category: "Homeostasis" },
  { term: "Negative Feedback", definition: "The primary mechanism by which the body maintains homeostasis. When a value changes, the body senses the change and reacts AGAINST it to restore the normal range.", category: "Homeostasis" },
  { term: "Hypothalamus", definition: "A brain region that acts as the body's thermostat, detecting temperature changes and triggering appropriate homeostatic responses (sweating, vasodilation, shivering, vasoconstriction).", category: "Homeostasis" },
  { term: "Vasodilation", definition: "Widening of blood vessels in the skin to increase blood flow and release heat; triggered when body temperature rises too high.", category: "Homeostasis" },
  { term: "Vasoconstriction", definition: "Narrowing of blood vessels in the skin to reduce blood flow and conserve heat; triggered when body temperature drops too low.", category: "Homeostasis" },

  // Module 3: Macromolecules
  { term: "Macromolecule", definition: "One of the four large biological molecules essential to life: carbohydrates, lipids, proteins, and nucleic acids.", category: "Macromolecules" },
  { term: "Monosaccharide", definition: "A simple sugar consisting of a single sugar unit (e.g., glucose). The basic building block of all carbohydrates.", category: "Macromolecules" },
  { term: "Disaccharide", definition: "A carbohydrate made of two monosaccharides bonded together (e.g., lactose, sucrose).", category: "Macromolecules" },
  { term: "Polysaccharide", definition: "A complex carbohydrate made of many monosaccharides linked together. Examples include starch (plants), glycogen (body's storage form), and cellulose (fiber).", category: "Macromolecules" },
  { term: "Glycogen", definition: "The body's major sugar storage molecule, composed of long chains of glucose. Stored in the liver and muscles, providing approximately one day's worth of energy.", category: "Macromolecules" },
  { term: "Amino Acid", definition: "The building block of proteins. There are 20 types; 9 are essential (must come from diet because the body cannot make them).", category: "Macromolecules" },
  { term: "Essential Amino Acid", definition: "One of the 9 amino acids the human body cannot synthesize and must obtain from the diet.", category: "Macromolecules" },
  { term: "Denaturation", definition: "The unfolding of a protein from its functional 3D shape, causing loss of function. Caused by heat, acid, or high salt concentrations.", category: "Macromolecules" },
  { term: "Enzyme", definition: "A protein that catalyzes (speeds up) chemical reactions in the body. Requires a specific 3D shape to function; denaturation destroys activity.", category: "Macromolecules" },
  { term: "Collagen", definition: "The most abundant protein in the human body; a structural protein that gives bones, skin, cartilage, and tendons their strength.", category: "Macromolecules" },
  { term: "Triglyceride", definition: "A lipid made of three fatty acids attached to a glycerol backbone. The main form of stored fat in the body (in adipose tissue), providing ~3-4 weeks of energy. Also provides insulation and organ cushioning.", category: "Macromolecules" },
  { term: "Phospholipid", definition: "A lipid with two fatty acid tails and a hydrophilic phosphate head. Phospholipids form the bilayer structure of cell membranes — heads face water, tails are hidden. Controls what enters and exits cells.", category: "Macromolecules" },
  { term: "Steroid", definition: "A lipid derived from cholesterol. Examples include testosterone and estrogen (sex hormones).", category: "Macromolecules" },
  { term: "Saturated Fatty Acid", definition: "A fatty acid chain in which all carbons are saturated with hydrogen atoms; no double bonds. Usually solid at room temperature.", category: "Macromolecules" },
  { term: "Unsaturated Fatty Acid", definition: "A fatty acid chain with one or more carbon-carbon double bonds; not fully saturated with hydrogen. Usually liquid at room temperature.", category: "Macromolecules" },
  { term: "LDL (Low-Density Lipoprotein)", definition: "A protein vesicle that transports cholesterol from the liver to cells throughout the body. Often called 'bad cholesterol' because high levels are associated with atherosclerosis.", category: "Macromolecules" },
  { term: "HDL (High-Density Lipoprotein)", definition: "A protein vesicle that transports excess cholesterol back to the liver. Often called 'good cholesterol' because it removes cholesterol from the bloodstream.", category: "Macromolecules" },
  { term: "Atherosclerosis", definition: "The buildup of fat plaque under the arterial wall, which can obstruct blood flow or rupture. Triggered by inflammation; high CRP is a stronger risk indicator than high LDL.", category: "Macromolecules" },

  // Module 4: Digestion
  { term: "Mechanical Digestion", definition: "Physical breakdown of food into smaller particles through ripping or grinding; occurs in the oral cavity, stomach, and small intestine.", category: "Digestion" },
  { term: "Chemical Digestion", definition: "Enzymatic reactions that break macromolecules into their building blocks (e.g., polysaccharides → glucose; proteins → amino acids).", category: "Digestion" },
  { term: "Chyme", definition: "The acidic liquid (pH 1) produced in the stomach after mechanical and chemical digestion; passed into the small intestine.", category: "Digestion" },
  { term: "Intrinsic Factor", definition: "A protein produced by the stomach that is essential for the absorption of vitamin B12. The only truly indispensable function of the stomach.", category: "Digestion" },
  { term: "Bile", definition: "A substance produced by the liver and stored in the gallbladder. Released into the duodenum to emulsify fat droplets (like a detergent), making them easier to digest.", category: "Digestion" },
  { term: "Peptic Ulcer", definition: "Erosion of the outer tissue lining of the GI tract (stomach, esophagus, or intestines) by acids, often caused by Helicobacter pylori (H. pylori) bacteria.", category: "Digestion" },
  { term: "BMR (Basal Metabolic Rate)", definition: "The amount of energy the body needs to sustain basic functions at rest. Measured by oxygen consumption under standardized conditions (12 hours after eating, 30-60 min rest).", category: "Digestion" },
  { term: "Glycemic Index", definition: "A scale (1-100) measuring how much a carbohydrate spikes blood sugar levels. Glucose = 100. High glycemic foods are associated with obesity, type II diabetes, and heart disease.", category: "Digestion" },
  { term: "Leptin", definition: "A hormone secreted by fat (adipose) cells that signals satiation. Higher levels secreted when fat cells enlarge. In obesity, the brain may become desensitized to leptin.", category: "Digestion" },
  { term: "Ghrelin", definition: "A hormone secreted by the stomach when it is empty. Triggers feelings of hunger.", category: "Digestion" },

  // Module 5: Genetics
  { term: "DNA (Deoxyribonucleic Acid)", definition: "A double-stranded molecule made of nucleotides (A, T, G, C) that stores genetic information in chromosomes. Base pairs: A-T and G-C.", category: "Genetics" },
  { term: "RNA (Ribonucleic Acid)", definition: "A single-stranded nucleic acid that uses bases A, U (uracil), G, and C. Serves as a temporary copy of genetic information and is used to make proteins (mRNA) and assist in translation (tRNA).", category: "Genetics" },
  { term: "Chromosome", definition: "A structure of DNA molecules millions of nucleotides long, covered with protective proteins. Humans have 23 pairs (46 total); chromosomes 1-22 are autosomes, chromosome 23 pair are sex chromosomes.", category: "Genetics" },
  { term: "Gene", definition: "A region of a chromosome that contains the information needed to make a specific protein. ~20,000 genes in the human genome; less than 5% of DNA consists of genes.", category: "Genetics" },
  { term: "Allele", definition: "One version of a specific gene. Each person has two alleles for each gene (one from each parent). Alleles can be dominant or recessive.", category: "Genetics" },
  { term: "Dominant Allele", definition: "An allele where only one copy is needed to have an effect; it suppresses the effect of the other allele.", category: "Genetics" },
  { term: "Recessive Allele", definition: "An allele where two copies are needed for the allele to have an effect; its effect is suppressed by the dominant allele.", category: "Genetics" },
  { term: "Genotype", definition: "The combination of alleles a person possesses for a specific gene (e.g., TS/TS, TS/ts, ts/ts).", category: "Genetics" },
  { term: "Phenotype", definition: "The observed characteristic of a person resulting from their genotype and environment (e.g., healthy vs. Tay-Sachs disease).", category: "Genetics" },
  { term: "Heterozygous", definition: "Having two different alleles for a specific gene (e.g., TS/ts). Often called a carrier if one allele is recessive for a disease.", category: "Genetics" },
  { term: "Homozygous", definition: "Having the same allele of a gene on both chromosomes (e.g., TS/TS or ts/ts).", category: "Genetics" },
  { term: "Transcription", definition: "The process by which DNA is used as a template to make an mRNA copy of a gene. Occurs in the cell nucleus. The DNA is then restored unchanged.", category: "Genetics" },
  { term: "Translation", definition: "The process by which ribosomes read mRNA codons (3 nucleotides at a time) and assemble the corresponding chain of amino acids into a protein. Occurs in the cytoplasm.", category: "Genetics" },
  { term: "Codon", definition: "A sequence of three nucleotides on mRNA that codes for a specific amino acid during translation.", category: "Genetics" },
  { term: "Mutation", definition: "A change in the DNA sequence. Can be caused by normal metabolism, chemicals, UV radiation, or viruses. Mutations in gametes are heritable; in somatic cells, they are not.", category: "Genetics" },
  { term: "Trisomy", definition: "A chromosomal abnormality in which a person has three copies of a chromosome instead of two. Down syndrome is Trisomy 21.", category: "Genetics" },
  { term: "Polygenic Trait", definition: "A trait controlled by many genes, each having a small effect, resulting in a range of phenotypes. Examples: height, intelligence, schizophrenia.", category: "Genetics" },

  // Module 6: Genetic Engineering
  { term: "Restriction Enzyme", definition: "An enzyme that cuts DNA at specific nucleotide sequences. Bacteria use them as a defense against viruses. Scientists use them to cut and paste genes in recombinant DNA technology.", category: "Genetic Engineering" },
  { term: "Plasmid", definition: "A small, circular piece of DNA separate from the main chromosome, found in bacteria. Used as a vector to carry genes of interest into bacteria in recombinant DNA technology.", category: "Genetic Engineering" },
  { term: "Recombinant DNA", definition: "DNA created by combining DNA from two or more different organisms. The basis of genetic engineering — used to make bacteria produce human proteins like insulin.", category: "Genetic Engineering" },
  { term: "PCR (Polymerase Chain Reaction)", definition: "A technique used to make many copies of a specific DNA sequence (gene) quickly. Used to amplify genes before inserting them into other organisms.", category: "Genetic Engineering" },
  { term: "Gene Therapy", definition: "The insertion of healthy genes into the cells of a person with a defective gene. Methods include viral delivery, DNA aerosols, and implanting altered cells. Currently limited to single-gene defects.", category: "Genetic Engineering" },
  { term: "CRISPR/Cas9", definition: "A gene editing technology in which the Cas9 enzyme cleaves DNA at sites specified by a guide RNA (gRNA). Can be used to remove, edit, or insert specific DNA sequences with precision.", category: "Genetic Engineering" },
  { term: "Attenuated Vaccine", definition: "A vaccine made from a pathogen that has been genetically modified so it cannot complete its life cycle. Provides strong immunity but carries a very rare risk of reverting to an active form.", category: "Genetic Engineering" },

  // Module 7: Cell Division & Cancer
  { term: "Cell Cycle", definition: "The ordered sequence of events by which a cell grows and divides: G1 (normal function) → S (DNA replication) → G2 (prep for division) → Mitotic phase (division).", category: "Cancer" },
  { term: "Apoptosis", definition: "Programmed cell death — the cell's mechanism for committing suicide when it detects irreparable damage. Triggered by p53 when DNA damage cannot be repaired. Prevents damaged cells from dividing.", category: "Cancer" },
  { term: "Oncogene", definition: "A mutated version of a normal gene that causes cells to divide uncontrollably. Example: a growth factor receptor that is permanently stuck in the 'on' position even without growth factor binding.", category: "Cancer" },
  { term: "Tumor Suppressor Gene", definition: "A gene that detects cell damage and either fixes it or triggers apoptosis. Example: p53 — the most important tumor suppressor; mutated in most cancers.", category: "Cancer" },
  { term: "p53", definition: "The most critical tumor suppressor protein. Detects damaged DNA, halts cell division, allows DNA repair proteins to work, and triggers apoptosis if the damage cannot be fixed. Mutated in most tumors.", category: "Cancer" },
  { term: "Metastasis", definition: "The spread of cancer cells from the primary tumor site through the bloodstream to other organs, where they establish secondary tumors. A malignant tumor is metastatic.", category: "Cancer" },
  { term: "Benign Tumor", definition: "A tumor that stays localized and does not spread. Can be removed by surgery with no remaining cancer cells in the body.", category: "Cancer" },
  { term: "Malignant Tumor", definition: "A cancerous tumor that is metastatic — cells detach and spread through the bloodstream to other organs, making surgical removal insufficient.", category: "Cancer" },
  { term: "Stem Cell", definition: "An undifferentiated cell that has not yet committed to a specialized function. Can develop into many cell types. Totipotent (all types) → Pluripotent → Multipotent → Specialized.", category: "Cancer" },
  { term: "Carcinogen", definition: "An environmental agent that causes DNA mutations and can lead to cancer. Includes certain chemicals (smoke, toxins), radiation (UV, X-ray), and viruses. Estimated to cause 60-70% of cancers.", category: "Cancer" },

  // Module 8: Immune System
  { term: "Antigen", definition: "A foreign substance (e.g., bacterial surface proteins, viral particles) that triggers an immune response. The immune system attacks antigens it does not recognize as 'self.'", category: "Immune System" },
  { term: "Leukocyte", definition: "A white blood cell. The main cell types of the immune system: phagocytes (neutrophils, monocytes) and lymphocytes (B cells, cytotoxic T cells).", category: "Immune System" },
  { term: "Phagocyte", definition: "A white blood cell that engulfs and destroys pathogens by phagocytosis. First line of cellular defense. Can also activate lymphocytes. Includes neutrophils (60-70%) and monocytes (3-8%).", category: "Immune System" },
  { term: "B Lymphocyte (B Cell)", definition: "A lymphocyte that produces antibodies specific to a single antigen. When activated, it clones into plasma cells (produce antibodies, then die) and memory cells (persist for years, enable rapid response on re-exposure).", category: "Immune System" },
  { term: "Cytotoxic T Lymphocyte", definition: "A lymphocyte that kills virus-infected cells by recognizing viral antigens displayed on their surfaces. Each T cell has one type of receptor and recognizes one specific viral antigen.", category: "Immune System" },
  { term: "Antibody", definition: "A protein secreted by B cells that binds specifically to a foreign antigen. Has two binding sites. Makes pathogens easier to phagocytose, prevents pathogen binding to cells, activates complement proteins, and neutralizes toxins.", category: "Immune System" },
  { term: "Memory Cell", definition: "Long-lived B or T cells produced after an immune response that persist for years and allow the immune system to respond more rapidly and robustly if the same antigen is encountered again. The basis of immunity and vaccination.", category: "Immune System" },
  { term: "Plasma Cell", definition: "A B cell clone that produces large quantities of antibodies for a few days and then dies. Part of the rapid response phase of a specific immune reaction.", category: "Immune System" },
  { term: "Complement Proteins", definition: "Proteins in the blood that, when activated by antibody-bound pathogens, create pores in bacteria and kill them.", category: "Immune System" },
  { term: "Auto-Immune Disease", definition: "A condition in which the immune system becomes activated against the body's own antigens, causing inflammation and tissue damage. Examples include arthritis, type 1 diabetes, multiple sclerosis, and psoriasis.", category: "Immune System" },
  { term: "Inflammation", definition: "A non-specific immune response that increases blood flow to an infected site, bringing extra phagocytes. Characterized by redness, swelling, and heat. Also the first step in atherosclerosis.", category: "Immune System" },
  { term: "Inactivated Vaccine", definition: "A vaccine made from a pathogen that has been killed by heat, irradiation, or chemicals. Risk: killing may alter antigens so they no longer resemble the live pathogen, reducing effectiveness.", category: "Immune System" },
];
