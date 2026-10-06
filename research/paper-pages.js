const detailMediaStyles = document.createElement("style");
detailMediaStyles.textContent = `
  .feature-figure img { width: 100%; height: auto !important; max-height: none !important; object-fit: contain; background: transparent; }
  .content-figure-grid.is-pair { align-items: start; }
  .conclusion-grid > .content-figure-grid { grid-column: 1 / -1; width: 100%; }
  .paper-gallery { margin-top: 42px; }
  .paper-gallery-heading { display: grid; grid-template-columns: minmax(150px,.34fr) 1fr; gap: 24px; align-items: end; margin-bottom: 16px; }
  .paper-gallery-heading h3 { margin: 0; font-size: clamp(1.15rem,2.3vw,1.65rem); letter-spacing: -.03em; }
  .paper-gallery-track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(300px, 46%); gap: 18px; align-items: start; overflow-x: auto; padding: 0 0 16px; scroll-snap-type: x mandatory; scrollbar-width: thin; }
  .paper-gallery-track figure { min-width: 0; margin: 0; scroll-snap-align: start; }
  .paper-gallery-track img { display: block; width: 100%; height: auto; max-height: 560px; object-fit: contain; background: transparent; }
  .paper-gallery-track figcaption { margin-top: 9px; color: var(--muted); font-size: .74rem; line-height: 1.45; }
  @media (max-width: 760px) {
    .paper-gallery-heading { grid-template-columns: 1fr; gap: 6px; }
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
    abstract: "Phodong is a phygital storytelling platform that turns children’s everyday objects into shared narrative material. A parent sets the child’s age, preferred genre, and learning goal; the child photographs an object; and vision plus a multimodal language model transform its visible features into a character and an opening line. Each object remains a reusable story card rather than disappearing into a finished AI output. The family decides how cards connect and revisits the sequence as a storybook or audio story. This core research prototype later developed along three connected paths: an HCI publication and Excellence Award, an app and commercialization process through U300, and field programs in which children and caregivers used object-based storytelling in workshops and public exhibitions.",
    question: "Can AI help a family build a story together without taking the story away from them?",
    links: [
      { label: "Visit Phodong ↗", url: "https://phodong-41b73.web.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio", primary: true },
      { label: "Read paper ↗", url: "https://www.dbpia.co.kr/journal/voisDetail?voisId=VOIS00810329" },
    ],
    summaryTitle: "Phodong begins with one simple move: point the camera at something already in the child’s world.",
    summary: [
      "Many children’s digital experiences still center on passive consumption, while parents are either excluded or asked to carry the entire creative burden. Phodong begins with the objects already present in family life.",
      "The design goal was not to generate the best finished story. It was to provide enough structure for a parent and child to notice, reinterpret, and continue an idea together. The research, product, and education activities on this page all grow from that same interaction principle.",
    ],
    system: {
      label: "The system",
      title: "An object becomes a character, then a story card, then part of a shared narrative.",
      paragraphs: [
        "Object recognition captures visual features, and a multimodal LLM returns structured character and dialogue data. Each object becomes a story card that can be arranged and connected with others.",
        "The final sequence can be revisited as a web storybook or audiobook. Generation is asynchronous so the interaction can keep moving while leaving creative decisions between cards to the family.",
      ],
      figures: [{ src: "../assets/detail/phodong/system.png", alt: "Phodong camera, story card, and storybook screens", caption: "The pipeline moves from a photographed object to reusable narrative material." }],
      facts: [["Input", "Everyday physical objects"], ["Core", "Object recognition + multimodal LLM"], ["Output", "Story cards · web book · audio"], ["Design aim", "Distributed creative agency"]],
    },
    evidence: {
      label: "The design contribution",
      title: "The system demonstrates a different division of creative labor.",
      paragraphs: [
        "This paper presents a system and design rationale, not an outcome study, so it does not claim measured effects on children’s creativity. Its contribution is the interaction structure: AI generates partial narrative material while the family supplies interpretation, sequencing, and play.",
        "That distinction matters. A complete story can look impressive while leaving little room for a child or parent to author anything.",
      ],
      stats: [["partial", "rather than finished generation"], ["shared", "parent–child authorship"], ["physical", "objects anchor the story"]],
      figures: [{ src: "../assets/detail/phodong/thumbnail.png", alt: "A child photographing an everyday object for Phodong", caption: "Physical objects stay inside the creative loop instead of becoming invisible input." }],
    },
    followup: {
      label: "From research prototype to product and field program",
      title: "The paper became an app, and the app became a setting for observing co-creation in use.",
      paragraphs: [
        "After the HCI prototype, we continued building Phodong as a usable product. U300 supported the commercialization process, and ongoing app development and beta testing have focused on making object capture, story continuity, caregiver settings, and output review work outside a demonstration setting.",
        "Field use formed a second extension. In multicultural children’s AI workshops and education-fair demonstrations, the object-centered interaction became part of a larger activity: children noticed and reinterpreted familiar things, while caregivers and instructors decided when to prompt, wait, or join.",
        "Phodong now spans three connected forms of practice: research, business through ongoing app development, and educational content used in workshops and community service. The HCI Korea Excellence Award recognizes this connected trajectory rather than a separate award project.",
      ],
      additions: [["Research", "HCI Korea publication"], ["Recognition", "HCI Korea Excellence Award"], ["Translation", "U300 commercialization"], ["Current", "App development + beta testing"]],
      figures: [{ src: "../assets/detail/phodong/award.jpg", alt: "Phodong team receiving the HCI Korea Excellence Award", caption: "The publication, award, product development, and field program are one continuous project." }],
      galleries: [
        {
          label: "Education and field use",
          title: "Object-based storytelling became a hands-on AI learning activity",
          items: [
            { src: "../assets/detail/phodong/multicultural-1.jpg", alt: "Phodong multicultural children’s AI workshop", caption: "Object-based storytelling workshop." },
            { src: "../assets/detail/phodong/multicultural-2.jpg", alt: "A participant using Phodong on a tablet", caption: "Guided tablet interaction." },
            { src: "../assets/detail/phodong/multicultural-3.jpg", alt: "Children participating in a Phodong activity", caption: "Creative activity in the field." },
          ],
        },
        {
          label: "Product translation",
          title: "Exhibitions, U300, and continued app development",
          items: [
            { src: "../assets/detail/phodong/education-fair-1.webp", alt: "Phodong education-fair booth", caption: "Public exhibition and live explanation." },
            { src: "../assets/detail/phodong/education-fair-2.webp", alt: "Visitor trying Phodong at an exhibition", caption: "Product demonstration with visitors." },
            { src: "../assets/detail/phodong/u300.png", alt: "Phodong U300 commercialization activity", caption: "U300 commercialization track." },
            { src: "../assets/detail/phodong/funding.webp", alt: "Phodong product development milestone", caption: "Continuing development beyond the paper." },
          ],
        },
      ],
    },
    implication: {
      label: "What this changes",
      title: "Child-facing AI should be evaluated by how it distributes agency.",
      paragraphs: ["For co-creative systems, output quality is only one outcome. We also need to ask who introduces ideas, who changes them, and whether people can build on one another."],
      lessons: [["01", "Generate openings, not finished answers."], ["02", "Keep physical materials inside the creative loop."], ["03", "Measure participation as well as output quality."]],
    },
    citation: "Kim, G., Choi, Y., & Kim, Y. (2026). Phodong: A Phygital Platform for Parent–Child Co-Creation. Proceedings of HCI Korea 2026.",
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
  return galleries.map((gallery) => `<section class="paper-gallery" aria-label="${gallery.title}">
    <div class="paper-gallery-heading"><p class="section-label">${gallery.label || "Field gallery"}</p><h3>${gallery.title}</h3></div>
    <div class="paper-gallery-track">${gallery.items.map((item) => `<figure>
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
      <figcaption>${item.caption || ""}</figcaption>
    </figure>`).join("")}</div>
  </section>`).join("");
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
if (paperPage) renderPaper(paperPage);
