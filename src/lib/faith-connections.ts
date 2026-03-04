export type FaithConnection = {
  id: number;
  concept: string;
  category: string;
  doctrine: string;
  connection: string;
  catechismRef?: string;
  scriptureRef?: string;
};

export const faithConnections: FaithConnection[] = [
  {
    id: 1,
    concept: "Homeostasis and the Hierarchy of Control",
    category: "Homeostasis",
    doctrine: "Divine Providence and the Ordering of Creation",
    connection: "The body's homeostatic systems illustrate a profound truth about ordered creation: each level exists to serve those above it. Cells exist for organs, organs for organ systems, organ systems for the whole person. This hierarchy of control — where higher goods govern lower mechanisms — mirrors Catholic teaching on Divine Providence, which holds that God governs all creation according to a wise plan in which lower causes serve higher ends. The body does not govern itself by chaos but by order — an order built into it by its Creator.",
    catechismRef: "CCC 302-308",
    scriptureRef: "Wisdom 8:1 — 'She reaches from end to end mightily and governs all things well.'",
  },
  {
    id: 2,
    concept: "Characteristics of Life and the Soul",
    category: "Homeostasis",
    doctrine: "The Human Soul as the Form of the Body",
    connection: "Biology identifies life by its characteristics: metabolism, reproduction, response to stimuli, homeostasis, organization. The Church teaches that the soul is not merely an add-on to the body but its animating principle — what makes the body a living body rather than a corpse. Aristotle called the soul the 'form' of the living body. The note that 'organization and relationships matter' — that scattered cell components do not make a cell — resonates with the Catholic understanding that the soul is what organizes matter into a living, unified whole. Remove the soul, and the body immediately begins to lose its organization (death and decay).",
    catechismRef: "CCC 362-368",
    scriptureRef: "Genesis 2:7 — 'Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.'",
  },
  {
    id: 3,
    concept: "Water's Unique Properties",
    category: "Homeostasis",
    doctrine: "Creation as Gift and the Wisdom of the Creator",
    connection: "Water's extraordinary properties — its high heat capacity, solubility, reactivity, surface tension, and wide liquid range — make it uniquely suited to support life. These properties are not accidental; the precise physical constants of water appear fine-tuned for biological existence. The Catholic tradition sees in the elegance and fitness of creation a reflection of the wisdom and generosity of God. That water, the most abundant molecule in the body, is precisely what biology requires speaks to the providential ordering of creation for life.",
    catechismRef: "CCC 295-301",
    scriptureRef: "Psalm 104:10-11 — 'He makes springs pour water into the ravines; it flows between the mountains. They give water to all the beasts of the field.'",
  },
  {
    id: 4,
    concept: "Biological Macromolecules and the Unity of the Body",
    category: "Macromolecules",
    doctrine: "The Body as Temple of the Holy Spirit",
    connection: "The four major macromolecules — carbohydrates, lipids, proteins, and nucleic acids — work together in an integrated system of extraordinary complexity. No single molecule could sustain life; only their cooperation makes human life possible. The Church teaches that the body is a temple of the Holy Spirit (1 Cor 6:19), not to be degraded or despised. Understanding the biological intricacy of the human body — its molecular architecture, its constant self-maintenance, its capacity for repair — deepens reverence for the human person as a creature worthy of dignity and care.",
    catechismRef: "CCC 364-365, 1004",
    scriptureRef: "1 Corinthians 6:19-20 — 'Do you not know that your bodies are temples of the Holy Spirit... You are not your own; you were bought at a price. Therefore honor God with your bodies.'",
  },
  {
    id: 5,
    concept: "Lipids, Health, and Stewardship of the Body",
    category: "Macromolecules",
    doctrine: "Temperance and Care for the Body",
    connection: "The body's fat systems are elegant: essential fat sustains life and hormonal function; storage fat provides long-term energy reserves. Both excess and deficiency cause harm. This biological reality supports the virtue of temperance — the cardinal virtue governing bodily appetites. The Church teaches that we are stewards, not owners, of our bodies. Over-indulgence that leads to obesity or under-indulgence that destroys health both violate the proper care owed to the body as God's gift. Biological knowledge reinforces the moral wisdom of moderation.",
    catechismRef: "CCC 2288-2291",
    scriptureRef: "1 Corinthians 9:27 — 'I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.'",
  },
  {
    id: 6,
    concept: "DNA and the Human Genome",
    category: "Genetics",
    doctrine: "The Dignity of the Human Person from Conception",
    connection: "The human genome — containing roughly 6 billion base pairs encoding the complete biological information for a unique human being — is present in its entirety from the moment of fertilization. This biological fact supports the Church's teaching that human life, with its inherent dignity, begins at conception. The genetic uniqueness of every person (determined by the combination of parental alleles) reflects that each human being is unrepeatable — a truth that grounds Catholic opposition to abortion, cloning, and embryo destruction.",
    catechismRef: "CCC 2270-2275",
    scriptureRef: "Psalm 139:13-14 — 'For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made.'",
  },
  {
    id: 7,
    concept: "Genetic Engineering and CRISPR",
    category: "Genetic Engineering",
    doctrine: "The Ethics of Intervening in Human Life",
    connection: "CRISPR and gene therapy offer extraordinary potential to heal genetic diseases — a morally laudable goal aligned with the Church's vision of medicine as a service to human life. However, the same technologies could be used for enhancement (designer babies), non-therapeutic modification of future generations, or the destruction of embryos. The Church insists that interventions on the human genome are morally permissible only if they are therapeutic, respect the dignity of the person, do not impose disproportionate risks, and do not treat future persons as means rather than ends.",
    catechismRef: "CCC 2292-2296",
    scriptureRef: "Jeremiah 1:5 — 'Before I formed you in the womb I knew you, and before you were born I consecrated you.'",
  },
  {
    id: 8,
    concept: "Gene Therapy and Vaccine Ethics",
    category: "Genetic Engineering",
    doctrine: "Cooperation with Evil and the Principle of Proportionality",
    connection: "The professor notes the ethical concern that some vaccines are grown in cell lines derived from aborted fetuses. The Church has addressed this directly: such vaccines may be used when (1) the disease poses a grave risk, (2) no alternatives are available, and (3) the person registers their objection and advocates for ethical alternatives. This reflects the Church's nuanced teaching on remote material cooperation with evil: using the fruit of a past evil act (without endorsing or repeating it) can be permissible when proportionate good results and all reasonable moral alternatives are pursued.",
    catechismRef: "CCC 2263-2265, Pontifical Academy for Life 2005 Statement",
    scriptureRef: "Romans 3:8 — 'And why not do evil that good may come? Their condemnation is just.' (The end does not justify the means — but remote material cooperation is a distinct category.)",
  },
  {
    id: 9,
    concept: "Cancer, Apoptosis, and Sacrifice",
    category: "Cancer",
    doctrine: "Redemptive Suffering and the Logic of Sacrifice",
    connection: "Apoptosis — programmed cell death — is not a biological failure but a mechanism of order. When a cell is irreparably damaged, it kills itself for the good of the whole organism. This biological self-sacrifice mirrors a deep truth that the Church has always taught: the good of the whole sometimes requires the death of a part, and this death is not meaningless but redemptive. The willingness to die for the sake of others is the highest human act (John 15:13). Even at the cellular level, creation bears the imprint of this sacrificial logic.",
    catechismRef: "CCC 1505-1508, 2448",
    scriptureRef: "John 12:24 — 'Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.'",
  },
  {
    id: 10,
    concept: "The Immune System and the Common Good",
    category: "Immune System",
    doctrine: "Solidarity, Vaccination, and the Common Good",
    connection: "The immune system operates according to a principle of solidarity: individual cells sacrifice themselves (B cells and T cells die after mounting a response) so that the organism survives. The Church's social teaching applies this principle to public health: vaccination is not merely a private medical decision but an act of charity toward the community. Herd immunity protects those who cannot be vaccinated — the sick, the immunocompromised, the elderly. Vaccine refusal when vaccines are safe and available can, in the Church's view, fail the duty of solidarity and care for the common good.",
    catechismRef: "CCC 1905-1912, 2288",
    scriptureRef: "Romans 15:1-2 — 'We who are strong have an obligation to bear with the failings of the weak... Let each of us please his neighbor for his good, to build him up.'",
  },
  {
    id: 11,
    concept: "Auto-Immune Disease and the Problem of Self-Attack",
    category: "Immune System",
    doctrine: "Original Sin and the Disorder Within",
    connection: "In auto-immune disease, the body's own defense system turns against itself — what was made to protect becomes the source of destruction. This is a striking biological image of what sin does to the human person. Original sin introduces a disorder within human nature: reason rebels against God, the passions rebel against reason, the body rebels against the soul. Just as auto-immunity distorts the immune system's purpose (defense → attack), sin distorts the soul's proper ordering (love of God → love of self above God). The remedy for both requires an external agent — for auto-immunity, immunosuppressants; for sin, grace.",
    catechismRef: "CCC 396-409",
    scriptureRef: "Romans 7:23 — 'I see in my members another law waging war against the law of my mind and making me captive to the law of sin that dwells in my members.'",
  },
  {
    id: 12,
    concept: "Negative Feedback and Moral Conscience",
    category: "Homeostasis",
    doctrine: "Conscience as the Proximate Norm of Morality",
    connection: "Negative feedback is the body's mechanism for detecting deviation from its proper state and correcting it. The moral conscience plays an analogous role in the spiritual life: it detects when a person deviates from right action and generates a corrective impulse (guilt, remorse, the call to repentance). Just as homeostasis requires the body to have a set point — a proper state to return to — conscience requires a moral standard, a truth against which actions are measured. For Catholics, that standard is not merely cultural but objective: natural law written on the heart and clarified by divine revelation.",
    catechismRef: "CCC 1776-1802",
    scriptureRef: "Romans 2:15 — 'They show that the work of the law is written on their hearts, while their conscience also bears witness.'",
  },
];
