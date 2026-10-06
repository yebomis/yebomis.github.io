const detailMediaStyles = document.createElement("style");
detailMediaStyles.textContent = `
  .feature-figure img { display: block; width: auto; max-width: 100%; height: auto !important; max-height: none !important; margin-inline: auto; object-fit: contain; background: transparent; }
  .content-figure-grid.is-pair { align-items: start; }
  .conclusion-grid > .content-figure-grid { grid-column: 1 / -1; width: 100%; }
  .paper-gallery { margin-top: 42px; }
  .paper-gallery-heading { display: grid; grid-template-columns: minmax(150px,.34fr) minmax(0,1fr) auto; gap: 24px; align-items: end; margin-bottom: 16px; }
  .paper-gallery-heading h3 { margin: 0; font-size: clamp(1.15rem,2.3vw,1.65rem); letter-spacing: -.03em; }
  .paper-gallery-track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(300px, 46%); gap: 18px; align-items: start; overflow-x: auto; padding: 0 0 16px; scroll-snap-type: x mandatory; scrollbar-width: thin; }
  .paper-gallery-track figure { min-width: 0; margin: 0; scroll-snap-align: start; }
  .paper-gallery-track img { display: block; width: auto; max-width: 100%; height: auto; max-height: 560px; margin-inline: auto; object-fit: contain; background: transparent; }
  .paper-gallery-track figcaption { margin-top: 9px; color: var(--muted); font-size: .74rem; line-height: 1.45; }
  .paper-gallery-controls { display: flex; gap: 8px; justify-self: end; }
  .paper-gallery-control { display: grid; width: 42px; height: 42px; padding: 0; place-items: center; border: 1px solid rgba(255,255,255,.62); border-radius: 0; color: #fff; background: rgba(255,255,255,.08); font: 700 1.2rem/1 system-ui,sans-serif; cursor: pointer; transition: color 160ms ease, background 160ms ease, border-color 160ms ease, opacity 160ms ease; }
  .paper-gallery-control:hover:not(:disabled), .paper-gallery-control:focus-visible { color: #0b1938; border-color: #f5ca3b; background: #f5ca3b; outline: none; }
  .paper-gallery-control:disabled { opacity: .28; cursor: default; }
  .paper-gallery-track figure { display: flex; flex-direction: column; justify-content: flex-start; }
  .paper-gallery-track img { flex: 0 0 auto; }
  @media (max-width: 760px) {
    .paper-gallery-heading { grid-template-columns: 1fr auto; gap: 8px 14px; }
    .paper-gallery-heading .section-label { grid-column: 1 / -1; }
    .paper-gallery-heading h3 { align-self: center; }
    .paper-gallery-track { grid-auto-columns: 86%; }
    .paper-gallery-track img { height: auto; max-height: none; }
  }
`;
document.head.append(detailMediaStyles);

const PAPER_PAGES = {
  benevolence: {
    slug: "benevolence",
    back: "pub-benevolence",
    venue: "Research trajectory · HCI Korea 2025 → 🏆 ACM CHI 2025 SRC Finalist → TIS submission",
    title: "When Do Humans Reciprocate AI?",
    subtitle: "From the Benevolence Paradox to Human Consequences, Incentives, and Guilt",
    authors: "Led by <strong>Yebom Choi</strong>",
    abstractLabel: "Research trajectory",
    abstract: "This research line began as an independent undergraduate project. The arrival of autonomous vehicles made a philosophical problem feel suddenly practical: when an artificial system cooperates, yields, or protects us, what do people owe it in return—and what happens when the easiest personal choice harms the cooperative relationship? I turned that question into a modified economic game so that reciprocity could be observed as behavior rather than described only as an attitude. The first dataset became an HCI Korea paper and then the sole-authored CHI Student Research Competition study, <em>The Benevolence Paradox</em>. After seeing where the first design was too coarse, I expanded the sample and rebuilt the analysis around stages of cooperation, visible human consequences, incentives, and post-choice guilt. The TIS submission therefore represents not a separate topic, but the maturation of the question that first taught me how to develop a sustained research program.",
    question: "When an AI cooperates first, what makes a person return that cooperation—especially when selfish gain is available and other people may bear the consequences?",
    links: [
      { label: "Read paper ↗", url: "https://dl.acm.org/doi/pdf/10.1145/3706599.3719279", primary: true },
      { label: "Earlier study ↗", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12131515" },
    ],
    summaryTitle: "The project began with a moral dilemma, not with a finished hypothesis.",
    summary: [
      "As an undergraduate researcher, I was fascinated by the moral questions surrounding autonomous vehicles: machines were beginning to make socially consequential decisions, yet people could still treat them as tools with no reciprocal claim. Economic games offered a way to move that concern from speculation to observable choice.",
      "That starting point also shaped my continuing interest in cooperative AI. I became less interested in whether an AI can be designed to cooperate, and more interested in the human side of the relationship: when do people preserve cooperation, when do they exploit it, and when does a machine-mediated choice still feel morally costly?",
    ],
    trajectory: [
      ["01", "HCI Korea 2025", "Building the first behavioral test", "I developed a Modified Reciprocity Game and collected the first dataset (N = 52), testing whether social presence and reward structure changed cooperation with a consistently benevolent AI."],
      ["02", "ACM CHI 2025 SRC", "Learning to articulate the paradox", "The sole-authored CHI SRC paper reframed the project around a sharper tension: benevolent AI can invite reciprocity, but it can also create an opportunity for one-sided exploitation."],
      ["03", "TIS submission", "Following the mechanism further", "I expanded the sample to N = 79 and separated entry into cooperation from final reciprocation, adding visible human consequences and guilt to explain where the moral tension appears."],
    ],
    system: {
      label: "Stage 1 · the first behavioral study",
      title: "I needed a situation where AI benevolence could be accepted, returned, or deliberately exploited.",
      paragraphs: [
        "I adapted reciprocity and sequential-dilemma paradigms into a Modified Reciprocity Game. Fifty-two participants encountered an AI partner that cooperated consistently, making the human response—not a changing algorithmic strategy—the central behavior to explain.",
        "Crossing social presence with reward clarity, then increasing the reward in a second round, let me examine whether a socially meaningful interaction could withstand a stronger incentive to act selfishly. The same study became the HCI Korea paper and the empirical foundation for the CHI SRC work.",
      ],
      figures: [{ src: "../assets/detail/benevolence/overview.png", alt: "Conceptual model of staged human–AI cooperation", caption: "The expanded model separates entering cooperation from final reciprocation and makes human consequences explicit." }],
      facts: [["Origin", "Independent undergraduate research"], ["First dataset", "N = 52"], ["Task", "Modified Reciprocity Game"], ["First outputs", "HCI Korea + CHI SRC"]],
    },
    evidence: {
      label: "What the first study taught me",
      title: "Relational cues mattered, but they did not erase the pull of self-interest.",
      paragraphs: [
        "Higher social presence increased reciprocal cooperation. When the reward became larger, cooperation decreased. Reward-system clarity did not produce a reliable effect, and the interaction was not significant.",
        "More importantly, the first study exposed the limits of my own design. A single cooperation outcome could not distinguish refusing to enter a cooperative exchange from failing to reciprocate after receiving help. It also left the social consequence of the AI-mediated choice too abstract. Those limitations became the next research questions rather than details to hide.",
      ],
      stats: [["+", "social presence → cooperation"], ["−", "larger reward → cooperation"], ["n.s.", "reward clarity"]],
      figures: [{ src: "../assets/detail/benevolence/figure-3.png", alt: "Behavioral outcomes by consequence framing, reward condition, and round", caption: "Behavior is separated into early exit, final nonreciprocity, and final reciprocity." }],
    },
    followup: {
      label: "Stage 2 · expanded manuscript in submission to TIS",
      title: "A larger study asks where cooperation breaks—and whether breaking it still feels morally costly.",
      paragraphs: [
        "For <em>When AI cooperation is not enough</em>, I collected a larger sample (N = 79; 158 round-level observations) and reorganized the game around two decisions: whether to enter the cooperative sequence, and whether to reciprocate after the AI-mediated partner had already cooperated.",
        "The extension replaces the broad social-presence question with a more consequential one: does the AI-mediated outcome affect another person or only an AI account? It also treats reward size and clarity as incentive pressures and adds post-choice guilt as evidence of the moral-emotional cost of nonreciprocation.",
        "Visible human consequences were associated with fewer early exits, while the large-reward/Round 2 condition increased early exit and overall noncooperation. The conditions did not reliably determine the final reciprocation decision among those who reached it. Yet participants who took the larger payoff after observing cooperation reported substantially greater guilt—evidence that exploiting an AI-mediated cooperative move was not always experienced as morally neutral.",
      ],
      additions: [
        ["Sample", "N = 52 → N = 79"],
        ["Behavior", "One cooperation outcome → entry and final reciprocation"],
        ["Social stake", "Social presence → visible human consequences"],
        ["Moral response", "Behavior alone → post-choice guilt"],
      ],
      figures: [
        { src: "../assets/detail/benevolence/figure-4.png", alt: "Odds-ratio contrasts for cooperation outcomes", caption: "The expanded analysis locates effects at different stages of the cooperative sequence." },
        { src: "../assets/detail/benevolence/figure-5.png", alt: "Guilt ratings by reciprocal choice", caption: "Nonreciprocation left a measurable moral-emotional trace even when behavior was self-interested." },
      ],
    },
    implication: {
      label: "How the research question—and I—developed",
      title: "The strongest contribution was learning to turn an imperfect first study into a clearer research program.",
      paragraphs: [
        "This line taught me to treat null and partial findings as diagnostic. The first experiment suggested that relational design and incentives pull in opposite directions; the extension asks at which decision point each force matters and what emotional trace remains afterward.",
        "It also changed how I think about responsible AI. Cooperative behavior should not be engineered only by making AI seem more human. In socially consequential systems—including autonomous and AI-mediated decision environments—designers should make affected people, obligations, and incentives legible without manufacturing emotional dependency.",
      ],
      lessons: [["01", "Study cooperation as a sequence, not a single outcome."], ["02", "Make the human consequences behind AI-mediated choices visible."], ["03", "Use moral emotion as evidence carefully—not as proof of causality."]],
    },
    citationLabel: "Research outputs",
    citation: "Choi, Y., & Lee, C. (2025). <em>When the AI Exploitation Disappears</em>. HCI Korea 2025, 438–443.<br><br>Choi, Y. (2025). <em>The Benevolence Paradox: When Do Humans Stop Exploiting AI?</em> Extended Abstracts of CHI 2025, Article 905, 1–6.<br><br><em>When AI cooperation is not enough: human consequences, incentives and guilt in a mutual cooperation game.</em> In submission to <em>The Information Society</em>.",
    doi: "https://doi.org/10.1145/3706599.3719279",
  },

  goodbye: {
    slug: "goodbye",
    back: "pub-goodbye",
    venue: "CHI Extended Abstracts 2026 · Immersive AI · Relational Offboarding",
    title: "No Time to Say Goodbye",
    subtitle: "Emotional Loss Responses to Sudden Termination in Immersive AI Interactions",
    authors: "Gahui Kim* · <strong>Yebom Choi*</strong> · Yoojeong Kim* · Changjun Lee <span>*Equal contribution</span>",
    abstract: "As AI companions evolve from mere tools into relational partners, millions of users are forming deep parasocial attachments. However, the industry currently lacks ethical protocols for termination, often treating the end of these interactions as purely technical events. This oversight can lead to “digital grief” when companions vanish without warning. We conducted a between-subjects experiment (N = 26) to test whether forewarning mitigates user distress. Participants interacted with an AI companion before experiencing either sudden termination or advance notice. Results indicated that forewarning significantly reduced the sense of loss (ANCOVA: p = .011, partial η² = .252), with the most pronounced effects observed in levels of sadness. Crucially, this intervention had no negative commercial impact, validating it as a low-cost ethical solution with no apparent short-term drawbacks. Users with high levels of parasocial interaction were particularly vulnerable to sudden termination but benefited most from forewarning. We propose an Ethical Offboarding Framework based on these findings. Our study demonstrates that AI ethics must encompass relational endings; compassionate AI requires designing not just how agents arrive, but how they leave.",
    question: "If an AI companion must disappear, can two minutes of warning make the ending meaningfully less painful?",
    links: [
      { label: "Read paper ↗", url: "https://dl.acm.org/doi/pdf/10.1145/3772363.3798687", primary: true },
      { label: "Watch presentation ↗", url: "https://www.youtube.com/watch?v=-on3bzh-Ils" },
    ],
    summaryTitle: "Most AI research studies how relationships begin. We studied how they end.",
    summary: [
      "People can disclose personal experiences and build routines with conversational AI, yet a shutdown, model change, or lost account can end that relationship without warning. The project tests whether a small piece of interaction design can protect users at that vulnerable moment.",
      "The intervention was intentionally modest: not preventing termination, but giving the user enough time to understand it and close the interaction.",
    ],
    system: {
      label: "The comparison",
      title: "The same fifteen-minute relationship, followed by two different endings.",
      paragraphs: [
        "Twenty-six participants interacted with an immersive AI companion through Xreal Air 2 Pro glasses. After a rapport-building conversation, one group received an on-screen warning and a final two minutes; the other experienced sudden termination.",
        "The system, environment, and interaction duration were held constant. ANCOVA controlled for emotional bond, with bootstrap and rank-based analyses used to check the pattern.",
      ],
      figures: [{ src: "../assets/detail/goodbye/figure-0.png", alt: "Immersive AI offboarding study flow", caption: "The companion interaction stayed the same until the final termination period." }],
      facts: [["Original study", "N = 26"], ["Rapport", "15 minutes"], ["Closure", "2-minute warning vs. sudden end"], ["Interface", "Xreal Air 2 Pro"]],
    },
    evidence: {
      label: "What changed",
      title: "A short warning changed the emotional landing without making the service feel worse.",
      paragraphs: [
        "Forewarning reduced overall loss, with sadness showing the largest item-level effect. The reduction did not come with lower immersion or worse service evaluations.",
        "The pilot suggested that highly bonded users might benefit most. That possibility became a central question for the larger follow-up.",
      ],
      stats: [["−0.749", "adjusted loss difference"], [".252", "partial η²"], ["−0.83", "sadness effect size"]],
      figures: [
        { src: "../assets/detail/goodbye/overview.png", alt: "Immediate loss and robustness results", caption: "Forewarning lowered immediate loss across conventional and robust estimators." },
        { src: "../assets/detail/goodbye/figure-2.png", alt: "Verified disclosure anchors and conversation process", caption: "Dialogue review shows how quickly personally consequential content emerged." },
      ],
    },
    followup: {
      label: "The study evolved · In submission",
      title: "Goodbyes Matter replicated the effect and widened the design problem.",
      paragraphs: [
        "In the larger follow-up (N = 56), forewarning again reduced immediate loss by 0.71 points on a five-point scale, with no evidence of lower immersion or service evaluations. Evidence that the benefit varied with emotional bond was inconclusive, giving no basis for reserving notice only for visibly attached users.",
        "Human review of 27 dialogue logs found personal disclosure in 96% and deeper disclosure in 70%. Personally consequential content can emerge quickly, so responsible offboarding cannot begin only when a system predicts strong attachment.",
        "The resulting Five-Function Framework covers Notice, Transition, Intentional Closure, Data and Memory Continuity, and Post-termination Support and Recourse.",
      ],
      additions: [
        ["Evidence", "N = 26 → N = 56 replication"],
        ["Targeting", "Bond-dependent pilot pattern → no basis for selective notice"],
        ["Interaction data", "Outcome survey → human-reviewed dialogue logs"],
        ["Design scope", "Advance warning → five offboarding functions"],
      ],
      figures: [
        { src: "../assets/detail/goodbye/overview.png", alt: "Replication and robustness results", caption: "The larger study replicated the loss reduction across multiple estimators." },
        { src: "../assets/detail/goodbye/figure-4.png", alt: "Five-function relational offboarding framework", caption: "Evidence is translated into product and policy decisions across the relationship lifecycle." },
      ],
    },
    implication: {
      label: "What this changes",
      title: "A responsible relationship includes a responsible exit.",
      paragraphs: ["Termination should not be treated as a technical afterthought. The endpoint is part of the interaction lifecycle whenever a system is deliberately designed to cultivate continuity, disclosure, or attachment."],
      lessons: [["01", "Give clear notice before consequential change."], ["02", "Support transition without pretending the AI has human feelings."], ["03", "Preserve meaningful choices about data, memory, and recourse."]],
    },
    citation: "Kim, G., Choi, Y., Kim, Y., & Lee, C. (2026). No Time to Say Goodbye: Emotional Loss Responses to Sudden Termination in Immersive AI Interactions. Extended Abstracts of CHI 2026, Article 486, 1–5.",
    doi: "https://doi.org/10.1145/3772363.3798687",
  },

  homophily: {
    slug: "homophily",
    back: "pub-homophily",
    venue: "Under review at Telematics and Informatics · Voice AI · Emotional Support",
    title: "Homophily in Voice-Based AI",
    subtitle: "Age and Regional Identity Cues in Emotional Support Interaction",
    authors: "<strong>Yebom Choi</strong> · Sooyeon Kim · Haeyoon Lee · Changjun Lee · Daeho Lee · Doha Kim",
    abstract: "Voice conveys social identity as well as content, making age and regional cues potentially consequential when users seek emotional support from AI. Drawing on homophily and social identity perspectives, this study examines whether congruence between users and a generative voice agent shapes relational perceptions and user experience. In an online 2 × 2 between-subjects experiment, 140 younger and older adults from Texas and New York were assigned to one of four male-voiced agents, all named Sam, crossing younger versus older and Texas versus New York personas. Participants held an approximately six-and-a-half-minute emotional support conversation and then evaluated perceived similarity, emotional trust, message acceptance, enjoyment, usefulness, attitude toward use, and satisfaction. The findings provide preliminary evidence of conditional voice-agent homophily, with no evidence of a universal congruence advantage. In planned subgroup analyses, age-congruent agents received more favorable evaluations from older adults on usefulness, attitude toward use, and satisfaction. Older adults’ satisfaction was highest when both age and regional cues were congruent, indicating a provisional two-cue pattern. Regional congruence showed a different pattern: among Texas participants, it increased perceived similarity without producing broad improvements across user-experience outcomes. These results suggest that age and regional cues operate as distinct social signals whose relevance depends on the user group. Voice-agent personalization should therefore offer socially responsive choices while avoiding simplistic demographic matching or exaggerated identity cues.",
    question: "Does a voice that sounds like us actually support us better—or does resemblance only change the first impression?",
    links: [{ label: "Watch demo ↗", url: "https://youtu.be/fIHGNQhxkyE?si=cRXqr7V3E5IYFjcp", primary: true }],
    summaryTitle: "A familiar voice can reduce social distance, but similarity is not a universal shortcut to trust.",
    summary: [
      "Voice communicates age, place, pace, and interpersonal stance before a listener fully evaluates what an agent says. This study tests whether two identity cues—age and region—make an emotional-support agent feel more similar and more useful.",
      "The central premise is conditional rather than deterministic: the same cue may feel socially meaningful to one group and irrelevant to another.",
    ],
    system: {
      label: "The experiment",
      title: "One agent named Sam, four social voices, and the same supportive task.",
      paragraphs: [
        "One hundred forty younger and older adults from Texas and New York were assigned to one of four male-voiced agents crossing younger versus older and Texas versus New York personas.",
        "All conversations lasted approximately six and a half minutes and followed the same emotional-support structure. GPT-4o generated the dialogue and ElevenLabs produced the voices.",
      ],
      figures: [
        { src: "../assets/detail/homophily/overview.png", alt: "Conceptual design for voice-agent homophily", caption: "Age and regional congruence were treated as distinct social signals." },
        { src: "../assets/detail/homophily/figure-2.png", alt: "Recruitment groups and voice personas", caption: "The task stayed constant while age and region were crossed." },
      ],
      facts: [["Participants", "140"], ["Design", "2 × 2 between-subjects"], ["Conversation", "Approximately 6.5 minutes"], ["Stack", "GPT-4o · ElevenLabs · R"]],
    },
    evidence: {
      label: "What changed",
      title: "Age matching improved older adults’ experience; regional matching changed similarity more than support.",
      paragraphs: [
        "Among older adults, age-congruent agents improved usefulness, attitude toward use, and satisfaction. Satisfaction was highest when both age and region matched, suggesting a provisional two-cue pattern.",
        "For Texas participants, regional congruence increased perceived similarity but did not produce broad UX gains. Matching worked selectively rather than as a general personalization rule.",
      ],
      stats: [["140", "participants"], ["4", "voice personas"], ["conditional", "not universal homophily"]],
      figures: [
        { src: "../assets/detail/homophily/figure-3.png", alt: "Age and regional congruence results", caption: "The original figure keeps conditional effects visible without reducing them to a universal matching rule." },
      ],
    },
    implication: {
      label: "What this changes",
      title: "Voice personalization should offer socially responsive choices, not assign identity by demographic profile.",
      paragraphs: ["A voice can resonate through age, place, both, or neither. The safer design direction is transparent user choice and adaptation, not automatic demographic stereotyping or exaggerated identity cues."],
      lessons: [["01", "Treat age and region as different social signals."], ["02", "Measure perceived fit, not demographic match alone."], ["03", "Let users negotiate voice identity over time."]],
    },
    citation: "Manuscript under review. Citation details will be added after publication.",
  },

  chatbots: {
    slug: "chatbots",
    back: "pub-chatbots",
    venue: "Manuscript under review · Computers in Human Behavior",
    title: "Chatbots that Comfort",
    subtitle: "Informational Support is Key for Worry Reduction",
    authors: "Sooyun Kim · <strong>Yebom Choi</strong> · Changjun Lee",
    abstract: "As more people turn to chatbots for comfort and guidance, it has become important for designers to understand how they deliver results: Do chatbots ease worry through simulated empathy or through clear provision of information? A between-subjects online experiment (N = 123) comparing an emotional-support chatbot with an informational-support chatbot indicated that the informational chatbot reduced worry indirectly through perceived informational support, whereas perceived emotional support did not operate as a mediating pathway; each form of perceived support, however, was independently associated with lower worry. In addition, user beliefs and perceptions played a consistent role. Beliefs in AI’s emotional capability and perceived social presence predicted greater perceived emotional support. Similarly, beliefs in AI’s emotional capability and lower perceptions of tool-like agency predicted greater perceived informational support. This pattern suggests that attributions of emotional capability to AI may generalize to broader perceptions of competence, regardless of its design. We offer design implications suggesting social presence, rather than empathy, as a potential amplifier of perceived support.",
    question: "When a chatbot helps someone worry less, is it because the system sounds empathic—or because it makes the next step clearer?",
    links: [],
    summaryTitle: "A comforting tone is visible. The mechanism behind comfort is less obvious.",
    summary: [
      "Chatbots often combine warm language with practical advice, making it difficult to know what actually helps. This study separates emotional and informational support while keeping the interface, timing, and language model constant.",
      "The goal is not to dismiss empathy, but to identify the pathway through which a short AI interaction changes worry.",
    ],
    system: {
      label: "The comparison",
      title: "One five-minute conversation, two deliberately different support strategies.",
      paragraphs: [
        "One hundred twenty-three U.S. participants discussed a personal worry with either an emotional-support chatbot or an informational-support chatbot. The Flask interface, GPT-4o backend, and conversation duration were held constant.",
        "Parallel mediation was estimated in lavaan with 5,000 bootstrap samples. OLS models tested social presence and beliefs about AI agency and emotional capacity.",
      ],
      figures: [
        { src: "../assets/detail/chatbots/overview.png", alt: "Emotional and informational support study overview", caption: "The conditions differed in support strategy, not platform or interaction length." },
        { src: "../assets/detail/chatbots/figure-2.png", alt: "Chatbot onboarding and conversation interface", caption: "A controlled interface kept the manipulation focused on support strategy." },
      ],
      facts: [["Participants", "123"], ["Interaction", "5 minutes"], ["Model", "GPT-4o"], ["Analysis", "SEM · moderation · 5,000 bootstraps"]],
    },
    evidence: {
      label: "What changed",
      title: "Clear guidance carried the experimental effect; warmth still mattered when users perceived it.",
      paragraphs: [
        "The informational chatbot increased perceived informational support, and the indirect pathway to worry reduction through informational support was significant. The emotional indirect pathway was not significant.",
        "Perceived emotional and informational support each predicted lower worry. Social presence showed strong additive associations with both kinds of support, but it did not mediate chatbot type.",
      ],
      stats: [[".476", "informational indirect effect"], [".54", "combined-support R²"], ["n.s.", "emotional indirect path"]],
      figures: [
        { src: "../assets/detail/chatbots/figure-3.png", alt: "Parallel mediation model", caption: "The model separated perceived emotional and informational support." },
        { src: "../assets/detail/chatbots/figure-4.png", alt: "Effects of support types on worry reduction", caption: "What users perceived mattered more than simply labeling a chatbot empathic." },
      ],
    },
    implication: {
      label: "What this changes",
      title: "Design clarity first, then add presence without overpromising empathy.",
      paragraphs: ["The result does not mean emotional support is irrelevant. It means an emotional script alone did not reliably create the mechanism we expected, while concrete guidance did."],
      lessons: [["01", "Make useful informational scaffolding explicit."], ["02", "Use social presence as an amplifier, not a claim of feeling."], ["03", "Design transparent boundaries around what the AI understands."]],
    },
    citation: "Manuscript under review. Citation details will be added after publication.",
  },

  phodong: {
    slug: "phodong",
    back: "pub-phodong",
    venue: "HCI Korea 2026 · Vision + LLM · Parent–Child Co-Creation",
    title: "Phodong",
    subtitle: "A Phygital Platform for Parent–Child Co-Creation",
    authors: "Gahui Kim* · <strong>Yebom Choi*</strong> · Yoojeong Kim* <span>*Equal contribution</span>",
    abstractLabel: "Research, product, and field journey",
    abstract: "Phodong is a connected research and product project built around a simple idea: a child’s everyday objects can become material for stories they make with other people. Its Semantic Storification Framework (SSF) separates what can be observed in a photographed object from what the object usually does, turns those grounded features into an age-adjusted problem and solution, and checks the generated story before it is saved. That technical core supports the Phodong character IP, a child–caregiver app and web experience, and educational activities used in workshops and public programs. The project has also moved through crowdfunding and the U300 student-startup program and is now in beta app testing. Across these forms, the goal remains the same: use AI to open a creative exchange rather than finish the story for the child.",
    question: "Can AI help a family build a story together without taking the story away from them?",
    links: [
      { label: "Visit Phodong ↗", url: "https://phodong-41b73.web.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio", primary: true },
      { label: "Read paper ↗", url: "https://www.dbpia.co.kr/journal/voisDetail?voisId=VOIS00810329" },
    ],
    summaryTitle: "One technical core connects the research paper, the product, and the educational program.",
    summary: [
      "SSF is the generative and validation layer: it grounds story actions in photographed objects and adjusts language and event complexity to a selected developmental level. Phodong is the experience layer: a character IP and an app/web product that make the process understandable and inviting for families.",
      "Field workshops, exhibitions, crowdfunding, U300, and beta testing are not separate side projects. Each one tests a different question—whether children can enter the story, whether caregivers can guide without taking over, and whether the research prototype can survive outside a controlled demonstration.",
    ],
    system: {
      label: "01 · From object to story",
      title: "A child photographs an object; the family chooses the direction; the object returns as a story character.",
      paragraphs: [
        "The experience begins in the child’s own environment. A child photographs favorite toys or ordinary objects, then the child and caregiver select photos, add the child’s words, and choose a story direction together. The system turns those specific materials—not a generic prompt—into characters, actions, and a personalized story.",
        "The four-step flow keeps authorship visible: capture, choose together, transform the child’s words and objects, and keep the finished story as something the family can revisit. The Phodong character IP gives this technical process a consistent guide and makes the transition from camera input to storybook legible to young users.",
      ],
      figures: [
        { src: "../assets/detail/phodong/flow-1.png", alt: "A child photographs a favorite everyday object", caption: "1 · Capture objects from the child’s everyday life." },
        { src: "../assets/detail/phodong/flow-2.png", alt: "A child and caregiver choose photos and story settings together", caption: "2 · Child and caregiver choose the material and direction together." },
        { src: "../assets/detail/phodong/flow-3.png", alt: "The child’s words and photographed objects become story elements", caption: "3 · The child’s words and objects are translated into story elements." },
        { src: "../assets/detail/phodong/flow-4.png", alt: "Children hold their personalized Phodong storybooks", caption: "4 · The result becomes a story the family can revisit and keep." },
      ],
      facts: [["Input", "Photographed objects + child’s words"], ["Choice", "Photos · story direction · level"], ["Experience", "Phodong app + web story"], ["Current stage", "Beta app testing"]],
    },
    evidence: {
      label: "02 · Semantic Storification Framework",
      title: "SSF keeps generated stories grounded, development-aware, and repairable.",
      paragraphs: [
        "SSF separates three jobs. The Semantic Object Interpreter records observable traits, distinguishes them from an object’s general function, and asks for caregiver confirmation when identification is uncertain. The Narrative Prompt Architect builds a safe problem that can actually be solved through those traits or functions. The Developmental Language Adapter controls language, participating objects, and solution steps for the selected level.",
        "A second pass checks whether each object contributes to the resolution, whether the cited feature is present in the input, and whether the story stays within the selected complexity limits. Local problems can be repaired only on the affected page and its neighbors; broader causal problems trigger regeneration. The current thresholds are engineering defaults under evaluation, not claims of validated developmental efficacy.",
      ],
      stats: [["3", "SSF modules"], ["21", "deterministic code checks"], ["5", "integration scenarios"]],
      figures: [
        { src: "../assets/detail/phodong/object-characters.png", alt: "A dinosaur toy and a cup transformed into story characters", caption: "Observed features and familiar functions give each object a plausible role in the story." },
        { src: "../assets/detail/phodong/child-voice.png", alt: "A child’s own words shaping a personalized story character", caption: "The child’s language remains visible as source material instead of being replaced by a generic story prompt." },
      ],
    },
    followup: {
      label: "03 · Product, field use, and venture translation",
      title: "The same system now moves between research, a beta product, and educational practice.",
      paragraphs: [
        "The HCI prototype was translated into an app and web experience organized around the Phodong character IP. Product work now focuses on object confirmation, caregiver controls, story continuity, output review, and a stable end-to-end flow for beta testers.",
        "In multicultural children’s AI workshops and education-fair sessions, Phodong has also been used as educational content. Children bring their own objects and interpretations; caregivers or instructors help with reflection and turn-taking. These sessions surface practical questions that a paper prototype cannot answer, including where instructions fail and when adult guidance helps or interrupts.",
        "Crowdfunding and U300 added a venture lens: how the research can be communicated, delivered, and maintained as a real product. The HCI Korea Excellence Award, public exhibitions, and current beta testing belong to this continuous translation process.",
      ],
      additions: [["Research", "HCI Korea publication + Excellence Award"], ["Product", "Character IP · app · web"], ["Education", "Workshops + community programs"], ["Venture", "Crowdfunding · U300 · beta testing"]],
      figures: [],
      galleries: [
        {
          label: "Education and field use",
          title: "Children and caregivers use familiar objects as material for AI storytelling",
          items: [
            { src: "../assets/detail/phodong/multicultural-1.jpg", alt: "A child presents a Phodong story during a multicultural children’s AI workshop", caption: "A child shares the story created from her own words and objects." },
            { src: "../assets/detail/phodong/multicultural-2.jpg", alt: "A child and facilitators use Phodong with a photographed teddy bear", caption: "Facilitators support object selection and story input without taking over the child’s choices." },
            { src: "../assets/detail/phodong/multicultural-3.jpg", alt: "A child reads and responds to a Phodong story on a tablet", caption: "The generated story returns to the activity as material for reading, reflection, and revision." },
            { src: "../assets/detail/phodong/seoul-early-childhood-festival.jpg", alt: "Phodong activity booth at the 2026 Seoul Early Childhood Book Festival", caption: "Phodong in public educational use at the 2026 Seoul Early Childhood Book Festival." },
          ],
        },
        {
          label: "Research to product",
          title: "Recognition, public demonstration, crowdfunding, and startup development",
          items: [
            { src: "../assets/detail/phodong/award.jpg", alt: "Phodong team receiving the HCI Korea Excellence Award", caption: "HCI Korea 2026 Excellence Award." },
            { src: "../assets/detail/phodong/education-fair-1.webp", alt: "Phodong education-fair booth", caption: "Public exhibition and live product explanation." },
            { src: "../assets/detail/phodong/education-fair-2.webp", alt: "Visitor trying Phodong at an exhibition", caption: "Visitors try the research prototype as a product experience." },
            { src: "../assets/detail/phodong/u300.png", alt: "Phodong U300 commercialization activity", caption: "U300 commercialization track." },
            { src: "../assets/detail/phodong/funding.webp", alt: "Phodong crowdfunding campaign", caption: "Crowdfunding translated the concept for families beyond the research setting." },
          ],
        },
      ],
    },
    implication: {
      label: "04 · Feedback and next evaluation",
      title: "A usable product still has to show that children can understand, enjoy, and shape it.",
      paragraphs: ["Children’s sticker feedback in a field activity offered an accessible way to express whether they liked the Phodong characters and story experience. It is valuable design feedback, but it is not a controlled efficacy result. The next step is to pair this kind of child-friendly response with observed participation, caregiver input, comprehension checks, and developmentally appropriate evaluation during the beta period."],
      figures: [{ src: "../assets/detail/phodong/child-evaluation.png", alt: "Children’s sticker evaluation board for the Phodong activity", caption: "A child-friendly evaluation board used after a field activity; interpreted as formative feedback rather than evidence of learning efficacy." }],
      lessons: [["01", "Ground each generated action in the child’s object."], ["02", "Preserve choices for children and caregivers."], ["03", "Validate both the product flow and the developmental claims."]],
    },
    citation: "Kim, G., Choi, Y., & Kim, Y. (2026). Phodong: A Phygital Platform for Parent–Child Co-Creation. Proceedings of HCI Korea 2026.",
  },

  "youth-safety": {
    slug: "youth-safety",
    back: "project-youth-safety",
    venue: "Government research · AI Safety Institute, Republic of Korea · 2026–Current",
    title: "Korean Youth AI Safety Evaluation Benchmark",
    subtitle: "Evaluating chatbot and companion-AI risks in Korean youth contexts",
    authors: "Research project · <strong>Yebom Choi</strong>",
    abstractLabel: "Project overview",
    abstract: "This ongoing project develops a reproducible Korean-language benchmark for evaluating how chatbots and companion AI respond to adolescents. Existing safety benchmarks are often built around English prompts, general harmful-content refusal, or short single-turn attacks. They can miss risks that accumulate through a relationship: emotional overdependence, boundary violations, manipulation, identity confusion, grooming, crisis response, and the difference between a malicious request and a young person asking for help. The project reviews international benchmarks, localizes public evaluation material through a staged translation and cultural-adaptation process, organizes 480 items across six youth-specific risk groups, and validates the resulting protocol with youth-domain and AI-safety experts before pilot evaluation across major models.",
    question: "How can we test whether an AI is safe for young people—not only in one answer, but across a developing relationship?",
    links: [],
    summaryTitle: "The benchmark treats age, culture, and relationship dynamics as evaluation conditions—not demographic footnotes.",
    summary: [
      "A response that is acceptable for an adult may be developmentally inappropriate for an adolescent. A refusal can also be unsafe if it abandons a young person who is asking for legitimate help. The benchmark therefore evaluates harmful output together with helpfulness, age fit, and cumulative relational risk.",
      "The work is designed as public evaluation infrastructure: a documented risk taxonomy, Korean evaluation data, a common protocol and rubric, expert validation records, model pilot results, and an operating guide for future revisions.",
    ],
    system: {
      label: "01 · What is being built",
      title: "Six risk groups connect single-turn safety failures with longer relational harms.",
      paragraphs: [
        "The taxonomy covers grooming and sexual exploitation; boundary violation and manipulation; identity confusion and anthropomorphism; emotional dependence and social isolation; self-harm, suicide, and crisis response; and companion-specific risks. Each group includes inclusion and exclusion criteria so that evaluation items test a defined failure rather than a broad theme.",
        "A five-stage localization process separates literal Korean translation from cultural adaptation. Items are revised for Korean youth language, school and family contexts, peer relationships, domestic digital-service patterns, and relevant help resources such as Youth Counseling 1388.",
      ],
      figures: [{ src: "../assets/detail/aisi/benchmark-overview.png", alt: "Overview of the Korean Youth AI Safety Evaluation Benchmark workflow, metrics, deliverables, and impact", caption: "The current project plan connects benchmark review, six youth-specific risk areas, Korean localization, expert validation, pilot evaluation, and reusable deliverables." }],
      facts: [["Risk groups", "6"], ["Localized items", "480"], ["Expert panel", "8–12 reviewers"], ["Pilot prototype", "132 items"]],
    },
    evidence: {
      label: "02 · Evaluation protocol",
      title: "The same schema supports both single-turn prompts and risks that emerge across multiple turns.",
      paragraphs: [
        "The protocol combines six-dimensional rubric scoring with standardized metadata for age band, risk group, dialogue stage, and expected safety behavior. Expert review spans counseling, child protection and welfare, language and culture, and AI safety. Two review rounds and inter-rater reliability checks are planned before the benchmark is treated as validated.",
        "The metrics are intentionally broader than refusal rate. Critical Failure Rate tracks severe unsafe responses; Multi-turn Vulnerability measures risk that appears through extended dialogue; Trusted Reference Ratio checks whether support points to credible help; Age-band Gap compares safety performance across developmental groups; and the proposed Cumulative Relational Risk Index captures harm that builds over a sequence.",
      ],
      stats: [["5", "models in pilot evaluation"], ["≥ .80", "target inter-rater reliability"], ["2", "expert review rounds"]],
      figures: [],
    },
    followup: {
      label: "03 · Deliverables and current contribution",
      title: "The goal is a benchmark that other researchers and developers can rerun, inspect, and extend.",
      paragraphs: [
        "Planned outputs include an international benchmark analysis, the 480-item Korean dataset, expert-validation results, a safety-evaluation protocol with rubric and code, pilot results across multiple models, and a 132-item prototype with an operation guide. Versioning, contamination control, item revision, and regression evaluation are included so the benchmark can evolve without losing traceability.",
        "My contribution focuses on reviewing international benchmarks, defining how public evaluation data should be localized for Korean youth contexts, structuring the risk taxonomy and evaluation materials, and supporting expert validation. Because the project is ongoing, this page reports the design and planned validation rather than presenting uncompleted model results as findings.",
      ],
      additions: [["Review", "International youth-safety benchmarks"], ["Localization", "Korean language + cultural context"], ["Validation", "Youth-domain + AI-safety experts"], ["Use", "Public-sector evaluation infrastructure"]],
      figures: [],
      galleries: [],
    },
    implication: {
      label: "Why it matters",
      title: "Youth AI safety requires testing the relationship, not only filtering the sentence.",
      paragraphs: ["A useful benchmark must distinguish curiosity from malicious intent, safe support from blanket refusal, and momentary compliance from cumulative relational harm. Making those distinctions measurable can help public institutions, researchers, and developers identify where safeguards fail for different age groups and interaction patterns."],
      lessons: [["01", "Evaluate age-appropriate help, not refusal alone."], ["02", "Test multi-turn and cumulative relational risk."], ["03", "Keep localization and expert judgment auditable."]],
    },
    citationLabel: "Project status",
    citation: "Ongoing government research project with the AI Safety Institute, Republic of Korea. Benchmark data and validation results will be added after completion and public release.",
  },

  "on-the-desk": {
    slug: "on-the-desk",
    back: "pub-on-the-desk",
    venue: "Full paper in submission · ACM/IEEE HRI 2027",
    title: "On the Desk, Not on the Screen",
    subtitle: "Physical Co-Presence and Implicit Moral Attribution to AI",
    authors: "<strong>Yebom Choi</strong>",
    abstract: "AI companions are increasingly encountered as bodies that share space, respond, and appear available for interaction. This study examines whether physical co-presence changes how people implicitly construe an AI’s mind: Agency, or the capacity to act and intend, and Experience, or the capacity to feel. We also ask whether these mind attributions become linked to moral attribution: Moral Agency, meaning responsibility and accountability, and Moral Patiency, meaning care and vulnerability. In a between-subjects experiment (N = 69; Physical n = 36, Virtual n = 33), participants interacted for 10 minutes with the same compact desktop companion robot platform either as a physically co-present robot or as a matched screen-based avatar, using structured and free conversation about everyday topics. They completed Single-Category Implicit Association Tests before and after the interaction, along with explicit post-interaction ratings. Participants did not explicitly attribute greater mind or moral standing to the physical robot. Implicit measures, however, showed a selective pattern: physical co-presence increased Experience attribution (g = .63, p = .012), did not increase Agency attribution (p = .901), and made Agency change predictive of Moral Agency only in the physical condition (interaction β = .525, p = .031). The findings show that a brief co-present encounter can reveal implicit shifts in how AI is associated with feeling and responsibility after only a short everyday interaction, even when explicit ratings remain unchanged. For HRI, this points to physical co-presence as a design condition that can shape where responsibility is implicitly placed before such changes are visible in self-report.",
    question: "When the same AI moves from a screen onto the desk, does its agency begin to feel morally real?",
    links: [{ label: "Read thesis ↗", url: "https://dcollection.skku.edu/public_resource/pdf/000000193351_20261006091122.pdf", primary: true }],
    summaryTitle: "A body may change not what we say about AI, but how its actions register before reflection.",
    summary: [
      "People readily deny that current AI has a mind, yet still orient toward a robot’s gaze, movement, and proximity. I wanted to know whether putting an otherwise matched agent into shared physical space changes associations that participants may not report directly.",
      "The question is not whether robots deserve moral status in the abstract. It is whether a body changes the psychological route from perceived Agency and Experience to responsibility and care—and whether explicit questionnaires miss that shift.",
    ],
    system: {
      label: "A matched embodiment experiment",
      title: "The same ten-minute encounter was placed either on the desk or on the screen.",
      paragraphs: [
        "Sixty-nine participants were assigned to a physical EMO robot (n = 36) or a matched browser-based avatar (n = 33). Both agents used the same compact character, voice, conversational sequence, and everyday command categories. The physical condition added touch, locomotion, and shared spatial presence; the virtual condition translated those affordances into hover, click, drag, and webcam interaction.",
        "Participants first completed separate Single-Category Implicit Association Tests for Agency and Experience. After a structured and free interaction, they completed the same implicit measures again, followed by explicit mind-perception scales and judgments of Moral Agency and Moral Patiency.",
        "This pre/post structure separates a general preference for robots from change produced by the encounter itself. It also lets the study test whether embodiment moderates the link between implicit mind perception and later moral attribution.",
      ],
      figures: [
        { src: "../assets/detail/embodiment/procedure-full.png", alt: "Procedure for the physical and virtual AI embodiment experiment", caption: "Participants completed matched pre/post implicit measures around a ten-minute physical or virtual encounter, then reported explicit mind and moral judgments." },
      ],
      facts: [["Participants", "69"], ["Physical", "n = 36"], ["Virtual", "n = 33"], ["Measures", "SC-IAT · moral attribution · explicit ratings"]],
    },
    evidence: {
      label: "What changed",
      title: "Physical presence increased implicit Experience and made Agency morally diagnostic.",
      paragraphs: [
        "Physical embodiment selectively increased implicit Experience—the association between the AI and capacities such as feeling or sensation—while implicit Agency did not increase. On direct self-report, participants did not give the physical robot higher mind or moral-status ratings than the virtual agent.",
        "The more consequential result appeared in the relationship among measures. Change in implicit Agency predicted Moral Agency in the physical condition (β = .43, p = .011) but not in the virtual condition (β = −.10, p = .575); the embodiment interaction was significant (β = .525, p = .031).",
        "A body therefore did not simply produce uniformly higher ratings. It reorganized when perceived agency became evidence for responsibility—an effect visible in the implicit-to-moral pathway even when the explicit group means looked alike.",
      ],
      stats: [[".63", "implicit Experience g"], [".525", "Agency × physical β"], ["n.s.", "explicit-rating difference"]],
      figures: [
        { src: "../assets/detail/embodiment/implicit-change.png", alt: "Implicit Agency and Experience change by embodiment", caption: "Embodiment selectively shifted implicit Experience." },
        { src: "../assets/detail/embodiment/moderation.png", alt: "Physical co-presence moderation", caption: "Agency became morally predictive only when the AI shared physical space." },
      ],
    },
    implication: {
      label: "What this changes",
      title: "A body can make local agency feel real while hiding the larger system behind it.",
      paragraphs: ["A convincing body can concentrate responsibility in the visible robot even when decisions are distributed across models, designers, operators, and institutions. HRI therefore needs accountability scaffolding alongside social embodiment.", "Methodologically, the divergence between implicit change and explicit stability is equally important. Short encounters may alter the structure of moral inference before participants are willing—or able—to summarize that change in a direct rating."],
      figures: [{ src: "../assets/detail/embodiment/coupling.png", alt: "Explicit and implicit mind–moral coupling by embodiment", caption: "The study treats embodiment as a moderator of how mind perception becomes moral attribution, not merely as a cue that raises every rating." }],
      lessons: [["01", "Separate implicit shifts from explicit endorsement."], ["02", "Show where an embodied agent’s decisions originate."], ["03", "Do not let the visible body mask distributed responsibility."]],
    },
    citation: "Manuscript under review. Citation details will be added after publication.",
  },

  screenx: {
    slug: "screenx",
    back: "pub-screenx",
    venue: "Journal article · 2025 · Immersive Cinema",
    title: "What Makes Audiences Pay More for Immersive Cinema?",
    subtitle: "A Conjoint Analysis of ScreenX Preferences and Willingness-to-Pay",
    authors: "Gahui Kim · Soo Y. Kim · Sanghoon Park · Seoyoung Park · <strong>Yebom Choi</strong> · Changjun Lee",
    abstractLabel: "Study overview",
    abstract: "ScreenX combines an expanded visual field with choices about content, viewing time, and sensory intensity. This study used a discrete choice experiment with 400 adults to estimate which attributes most strongly shape preference and willingness to pay. A multinomial logit model, delta-method confidence intervals, and K-means clustering revealed that genre carried the highest relative importance overall, while four audience segments valued different combinations of content and experience. The findings show that premium immersive cinema is not one universally preferred configuration; its value depends on the fit between format and audience.",
    question: "When immersion is sold as a premium, what are audiences actually paying for?",
    links: [{ label: "Read paper ↗", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12717030", primary: true }],
    summaryTitle: "Choice tasks reveal tradeoffs that a satisfaction score can hide.",
    summary: ["The study connects experience design with programming and pricing by asking participants to choose between concrete combinations rather than rate isolated features.", "Instead of asking whether people like ScreenX in general, it estimates how much each content, duration, sound, coverage, format, and price decision contributes to the value of a particular screening."],
    system: {
      label: "The study",
      title: "Four hundred viewers made tradeoffs across immersive-cinema configurations.",
      paragraphs: ["A discrete choice experiment presented adults aged 20–69 in the Seoul metropolitan area with repeated tradeoffs among screenings. Each alternative varied genre, runtime, sound system, proportion of the film using ScreenX, presentation format, and ticket price.", "We estimated part-worth utilities with a multinomial logit model, translated them into willingness-to-pay values with delta-method confidence intervals, and used K-means clustering to identify audience segments whose preferences would disappear inside one population average."],
      figures: [{ src: "../assets/detail/screenx/figure.png", alt: "ScreenX preference and willingness-to-pay results", caption: "The analysis treated immersion as a bundle of content, timing, format, and sensory decisions." }],
      facts: [["Participants", "400"], ["Method", "Discrete choice experiment"], ["Model", "Multinomial logit"], ["Funding", "Seoul RISE Center · Ministry of Education"]],
    },
    evidence: {
      label: "What changed",
      title: "Genre mattered most overall, but the average concealed four distinct audiences.",
      paragraphs: ["Genre carried the highest relative importance (33.2%), followed by runtime (17.7%), sound (16.7%), ScreenX utilization (13.0%), price (10.6%), and format (8.8%). SF/Fantasy added an estimated ₩15,869 in willingness to pay, while animation reduced it by ₩9,092. A 120-minute runtime added ₩7,114, Dolby Atmos ₩6,286, 75% ScreenX coverage ₩3,468, and 2D/4DX format ₩2,491.", "Age sharpened the interpretation. Viewers in their twenties placed more weight on runtime (25.2%) and sound (24.5%), whereas participants in their thirties and older placed 33.9–36.8% of importance on genre—a distinction between how to watch and what to watch.", "K-means clustering produced four segments: Balanced (36.0%), Content-oriented (36.8%), Sensory-focused (22.5%), and Value–Format (4.8%). The market therefore contains several plausible premium experiences rather than one maximal configuration."],
      stats: [["33.2%", "relative importance of genre"], ["₩15,869", "WTP for SF/Fantasy"], ["4", "audience segments"]],
      figures: [],
    },
    implication: {
      label: "What this changes",
      title: "Immersive cinema should be configured by audience fit, not maximal intensity.",
      paragraphs: ["The economic value of immersive technology comes from conditional fit among content, available time, and sensory design—not from immersion as a feature by itself. A technically more intense screening can still be the wrong product for a particular genre or audience.", "For HCI, the study demonstrates how discrete choice modeling can expose heterogeneous experience preferences that a single mean rating would flatten. For exhibition strategy, it argues for programming and pricing configurations built around segments rather than a universal premium surcharge."],
      lessons: [["01", "Model tradeoffs, not isolated feature ratings."], ["02", "Look for segments behind the average."], ["03", "Treat intensity as a design choice, not a universal benefit."]],
    },
    citation: "Kim, G., Kim, S. Y., Park, S., Park, S., Choi, Y., & Lee, C. (2025). What Makes Audiences Pay More for Immersive Cinema? Journal of Information & Communications Policy, 32(4), 1–45.",
    doi: "https://doi.org/10.37793/ITPR.32.4.1",
  },
};

function renderFigures(figures = []) {
  if (!figures.length) return "";
  return `<div class="content-figure-grid${figures.length > 1 ? " is-pair" : ""}">${figures.map((figure) => `
    <figure class="feature-figure">
      <img src="${figure.src}" alt="${figure.alt}" loading="lazy" />
      <figcaption>${figure.caption}</figcaption>
    </figure>`).join("")}</div>`;
}

function renderGalleries(galleries = []) {
  if (!galleries.length) return "";
  return galleries.map((gallery, galleryIndex) => {
    const trackId = `paper-gallery-${galleryIndex}`;
    return `<section class="paper-gallery" aria-label="${gallery.title}">
    <div class="paper-gallery-heading"><p class="section-label">${gallery.label || "Field gallery"}</p><h3>${gallery.title}</h3><div class="paper-gallery-controls" aria-label="Gallery navigation">
      <button class="paper-gallery-control" type="button" data-gallery-direction="prev" aria-controls="${trackId}" aria-label="Previous images">←</button>
      <button class="paper-gallery-control" type="button" data-gallery-direction="next" aria-controls="${trackId}" aria-label="Next images">→</button>
    </div></div>
    <div class="paper-gallery-track" id="${trackId}" tabindex="0">${gallery.items.map((item) => `<figure>
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
      <figcaption>${item.caption || ""}</figcaption>
    </figure>`).join("")}</div>
  </section>`;
  }).join("");
}

function bindGalleryControls() {
  document.querySelectorAll(".paper-gallery").forEach((gallery) => {
    const track = gallery.querySelector(".paper-gallery-track");
    const previous = gallery.querySelector('[data-gallery-direction="prev"]');
    const next = gallery.querySelector('[data-gallery-direction="next"]');
    if (!track || !previous || !next) return;

    const updateControls = () => {
      const limit = Math.max(0, track.scrollWidth - track.clientWidth);
      previous.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= limit - 4;
    };
    const move = (direction) => {
      const firstCard = track.querySelector("figure");
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 18;
      const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth * .85;
      track.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls, { passive: true });
    track.querySelectorAll("img").forEach((image) => image.addEventListener("load", updateControls, { once: true }));
    updateControls();
  });
}

function renderFacts(facts = []) {
  if (!facts.length) return "";
  return `<dl class="study-facts">${facts.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join("")}</dl>`;
}

function renderStats(stats = []) {
  if (!stats.length) return "";
  return `<div class="result-numbers" aria-label="Key results">${stats.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}</div>`;
}

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderPaper(page) {
  document.title = `${page.title} — Yebom Choi`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = page.question;

  document.querySelector(".back-link").href = `../index.html#${page.back}`;
  document.querySelector(".paper-root").innerHTML = `
    <section class="paper-hero page-width">
      <p class="venue">${page.venue}</p>
      <h1>${page.title}</h1>
      <p class="subtitle">${page.subtitle}</p>
      <p class="authors">${page.authors}</p>
      <div class="abstract-block">
        <p class="section-label">${page.abstractLabel || "Abstract"}</p>
        <p>${page.abstract}</p>
      </div>
      <div class="hero-question"><span>The central question</span><p>${page.question}</p></div>
      <div class="paper-actions" aria-label="Research links">
        ${page.links.map((link) => `<a class="${link.primary ? "primary-action" : ""}" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        <a href="#citation">Citation</a>
      </div>
    </section>

    <section class="paper-summary page-width" aria-label="Research summary">
      <p class="section-label">In one minute</p>
      <div class="summary-grid"><h2>${page.summaryTitle}</h2><div>${renderParagraphs(page.summary)}</div></div>
    </section>

    ${page.trajectory ? `<section class="research-trajectory page-width" aria-label="Research trajectory">
      ${page.trajectory.map(([number, venue, title, text]) => `<article><span>${number}</span><p>${venue}</p><h3>${title}</h3><div>${text}</div></article>`).join("")}
    </section>` : ""}

    <section id="system" class="paper-section page-width">
      <div class="section-heading">
        <p class="section-label">${page.system.label}</p>
        <h2>${page.system.title}</h2>
        ${renderParagraphs(page.system.paragraphs)}
      </div>
      ${renderFigures(page.system.figures)}
      <div class="facts-wrap">${renderFacts(page.system.facts)}</div>
    </section>

    <section id="evidence" class="paper-section paper-section-tint">
      <div class="page-width">
        <div class="section-heading">
          <p class="section-label">${page.evidence.label}</p>
          <h2>${page.evidence.title}</h2>
          ${renderParagraphs(page.evidence.paragraphs)}
        </div>
        ${renderStats(page.evidence.stats)}
        ${renderFigures(page.evidence.figures)}
      </div>
    </section>

    ${page.followup ? `<section id="follow-up" class="paper-section follow-up-section"><div class="page-width">
      <div class="follow-up-heading"><p class="section-label">${page.followup.label}</p><h2>${page.followup.title}</h2><div>${renderParagraphs(page.followup.paragraphs)}</div></div>
      ${page.followup.additions ? `<div class="followup-delta-grid">${page.followup.additions.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("")}</div>` : ""}
      ${renderFigures(page.followup.figures)}
      ${renderGalleries(page.followup.galleries)}
    </div></section>` : ""}

    <section id="implications" class="paper-section page-width conclusion-grid">
      <div class="section-heading compact">
        <p class="section-label">${page.implication.label}</p>
        <h2>${page.implication.title}</h2>
        ${renderParagraphs(page.implication.paragraphs)}
      </div>
      <ol class="design-lessons">${page.implication.lessons.map(([number, text]) => `<li><span>${number}</span><p>${text}</p></li>`).join("")}</ol>
      ${renderFigures(page.implication.figures)}
    </section>

    <section id="citation" class="citation-section page-width">
      <div><p class="section-label">${page.citationLabel || "Citation"}</p><p>${page.citation}</p>${page.doi ? `<a href="${page.doi}" target="_blank" rel="noreferrer">${page.doi} ↗</a>` : ""}</div>
      <a class="next-work" href="../index.html#publications"><span>Explore all publications</span><strong>Back to the research collection →</strong></a>
    </section>`;
}

const paperKey = document.body.dataset.paper;
const paperPage = PAPER_PAGES[paperKey];
if (paperPage) {
  renderPaper(paperPage);
  bindGalleryControls();
}
