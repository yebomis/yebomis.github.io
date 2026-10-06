const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function syncThemeControl() {
  if (!themeToggle) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  const icon = themeToggle.querySelector("span");
  if (icon) icon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  themeMeta?.setAttribute("content", isDark ? "#080e1b" : "#ffffff");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("yebom-theme", nextTheme);
  syncThemeControl();
});

syncThemeControl();

const detailData = {
  benevolence: {
    eyebrow: "Publication · CHI Extended Abstracts 2025",
    title: "The Benevolence Paradox",
    summary: "A Modified Reciprocity Game study asking when people suppress exploitative behavior toward a cooperative AI.",
    role: "Sole author and principal investigator. Led the research question, experiment, analysis, writing, and CHI Student Research Competition presentation.",
    methods: "52 participants; 2×2 mixed design; Labvanced; ANOVA and regression in R.",
    finding: "Higher social presence increased cooperation, while larger rewards reduced it—showing how relational cues and self-interest jointly shape reciprocity.",
    image: "assets/publication-benevolence-web.png",
    gallery: ["assets/publication-benevolence-web.png"],
    paper: "https://dl.acm.org/doi/pdf/10.1145/3706599.3719279",
  },
  homophily: {
    eyebrow: "Manuscript under review",
    title: "Homophily in Voice-Based AI",
    summary: "Examines whether matching an AI voice to a user's age and regional identity improves emotional-support interactions.",
    role: "First author. Led the framing, experiment, analysis, and manuscript development.",
    methods: "2×2 between-subjects ANCOVA with 140 participants; GPT-4o; ElevenLabs TTS; CloudResearch; R.",
    finding: "Age congruence improved UX broadly—especially for older adults—while regional accent strengthened perceived similarity in community-salient contexts.",
    links: [{ label: "Demo video ↗", url: "https://youtu.be/fIHGNQhxkyE?si=cRXqr7V3E5IYFjcp" }],
  },
  chatbots: {
    eyebrow: "Manuscript under review · Computers in Human Behavior",
    title: "Chatbots that Comfort",
    summary: "Studies how informational support and empathic communication contribute to meaningful comfort from chatbots.",
    role: "Second author. Contributed to research framing, statistical analysis, and manuscript development.",
    methods: "Between-subjects online experiment with 123 participants; parallel-mediation SEM in lavaan; OLS regression with moderation; GPT-4o; R.",
    finding: "Informational clarity—not emotional mimicry—was the more robust pathway to worry reduction; social presence amplified support perceptions.",
  },
  screenx: {
    eyebrow: "Journal article · 2025",
    title: "What Makes Audiences Pay More for Immersive Cinema?",
    summary: "Maps which ScreenX experience attributes shape audience preference and willingness to pay.",
    role: "Co-author. Contributed to the research design, quantitative modeling, clustering, and interpretation.",
    methods: "Discrete Choice Experiment with 400 adults; multinomial logit model; delta-method WTP confidence intervals; K-means clustering; R.",
    finding: "Genre carried the greatest relative importance (33.2%), and four audience segments revealed that premium value depends on the fit among content, time, and sensory dimensions.",
    paper: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12717030",
  },
  goodbye: {
    eyebrow: "Publication · CHI Extended Abstracts 2026",
    title: "No Time to Say Goodbye",
    summary: "Investigates whether advance warning can reduce digital grief when an immersive AI companion relationship suddenly ends.",
    role: "Co-first author. Contributed to the immersive experiment, analysis, ethical offboarding framework, and publication.",
    methods: "26 participants; between-subjects experiment; smart-glasses interface; ANCOVA and bootstrap resampling in R.",
    finding: "Forewarning reduced overall loss (B = −0.749), with the strongest protective effect among highly attached users, motivating tiered and intentional offboarding.",
    image: "assets/publication-goodbye-web.jpg",
    gallery: ["assets/publication-goodbye-web.jpg"],
    paper: "https://dl.acm.org/doi/pdf/10.1145/3772363.3798687",
  },
  phodong: {
    eyebrow: "Publication, research platform & product · 2025–Current",
    title: "Phodong: A Phygital Platform for Parent–Child Co-Creation",
    summary: "Combines object recognition and an LLM to turn everyday objects into story characters, supporting shared narrative play between parents and children.",
    role: "Research · Business (app development) · Educational content and community service.",
    methods: "Object recognition; LLM-generated character and dialogue data; story-card accumulation; web storybook and audiobook output.",
    finding: "Reframes generative AI as a scaffold for parent–child participation rather than a replacement for the parent's creative role.",
    image: "assets/project-phodong-festival-web.jpg",
    gallery: [
      "assets/project-phodong-festival-web.jpg",
      "assets/project-phodong-workshop-web.jpg",
      "assets/project-phodong-field-web.jpg",
      "assets/project-phodong-exhibit-case.jpg",
      "assets/project-phodong-demo-case.jpg",
      "assets/event-hcik-award-case.jpg",
    ],
    paper: "https://www.dbpia.co.kr/journal/voisDetail?voisId=VOIS00810329",
    caseStudy: {
      meta: ["2025–Current", "Research + product", "Patent filed", "HCI Korea 2026 Excellence Award"],
      map: [
        { label: "Why I cared", title: "Move children from watching to making" },
        { label: "What we built", title: "Turn familiar objects into story characters" },
        { label: "How I worked", title: "Keep the AI generative, but leave room to co-create" },
        { label: "What we found", title: "Participation mattered more than perfect output" },
        { label: "So what", title: "Design child-facing AI to distribute agency" },
      ],
      role: {
        title: "Research, business, and education",
        body: "Phodong connects published HCI research with app development and beta testing, commercialization, public exhibitions, and educational content used in community workshops and service activities.",
        tags: ["Research", "App development", "Business", "Educational content", "Community service"],
      },
      sections: [
        {
          key: "why",
          label: "01 · Why I cared",
          title: "What if story time began with the objects already in a child's hands?",
          paragraphs: [
            "Children's digital media is full of stories, but much of it still asks children to sit back and consume. I became interested in a different possibility: using AI to make the ordinary objects around a family feel newly playable.",
            "I also did not want the parent to become a setup assistant—or disappear from the experience altogether. The design question that stayed with me was how AI could invite a parent and child to notice, name, and imagine together.",
          ],
          image: "assets/project-phodong-festival-web.jpg",
          alt: "A child and adult using Phodong together during a public activity",
          caption: "Watching children interpret the same object in completely different ways kept the research question grounded in real play.",
        },
        {
          key: "what",
          label: "02 · What we asked or built",
          title: "A phygital story system that begins in the physical world",
          paragraphs: [
            "Phodong lets a family photograph an everyday object and turn it into a character. The system combines the object's visual features with the child's age, preferred genre, and the parent's learning goals to create a character persona and an opening line.",
            "Each new object becomes a story card. Families can keep adding cards, connect them into a narrative, and revisit the result as a web storybook or audiobook. The AI starts the play; the family gives it direction and meaning.",
          ],
          image: "assets/project-phodong-exhibit-case.jpg",
          alt: "Phodong team presenting the system at an exhibition booth",
          caption: "The project grew as both a research prototype and a public-facing product experience.",
        },
        {
          key: "how",
          label: "03 · How I worked",
          title: "I treated generation as scaffolding, not a finished answer",
          paragraphs: [
            "One important decision was not to ask the model to write the entire story at once. We built a staged pipeline: object recognition captures visual cues; an LLM returns structured character and dialogue data; the interface accumulates story cards; and the final sequence becomes a storybook and audio experience.",
            "I worked between interaction design and implementation—testing how much information to request from parents, how much of the story the system should generate, and where to deliberately leave space for a child's contribution. The stack brought together computer vision, structured JSON outputs, LLM prompting, and a web-based story viewer.",
          ],
          image: "assets/project-phodong-workshop-web.jpg",
          alt: "The research team guiding a child through the Phodong tablet interface",
          caption: "Field sessions helped us see where the interface explained itself—and where a person still needed support.",
        },
        {
          key: "found",
          label: "04 · What we found",
          title: "The strongest moments came from what the system did not finish",
          paragraphs: [
            "Across prototyping and public demonstrations, the most useful shift was not simply better generation. It was creating more openings for participation. When the system offered a character and a prompt instead of a complete narrative, parents and children had something concrete to react to, change, and connect.",
            "That changed how I thought about success. A polished story is not enough if the family only watches it appear. For this project, the more meaningful outcome was whether the system helped people build on one another's ideas.",
          ],
          image: "assets/project-phodong-demo-case.jpg",
          alt: "Yebom Choi demonstrating Phodong to a visitor",
          caption: "Demonstrations became design probes: questions, hesitations, and unexpected interpretations all fed back into the next iteration.",
        },
        {
          key: "so-what",
          label: "05 · So what",
          title: "Child-facing AI should distribute creative agency",
          paragraphs: [
            "Phodong reframes generative AI as a scaffold for joint media engagement rather than a replacement for a parent's creative role. Technically, this means optimizing more than output quality; the interaction must decide who gets to contribute, when, and with what kind of support.",
            "I want to keep investigating how that balance should change across children's ages, family dynamics, and cultural contexts—and how we can evaluate co-creation without reducing it to time-on-task or content volume.",
          ],
          image: "assets/project-phodong-field-web.jpg",
          alt: "Families taking part in a public Phodong field activity",
          caption: "The next questions are about adapting the scaffold to different families without taking authorship away from them.",
        },
      ],
      outcome: {
        label: "From study to public impact",
        title: "The work continued beyond the prototype",
        body: "Phodong received the HCI Korea 2026 Creative Award Excellence Award. We also filed a patent and continued developing the work through U300 commercialization—a process that pushed me to connect research evidence with product decisions, live demonstrations, and conversations with families.",
        image: "assets/event-hcik-award-case.jpg",
        alt: "Phodong team receiving the HCI Korea 2026 Excellence Award",
      },
    },
  },
  embodiment: {
    eyebrow: "Master's thesis · HRI full paper in submission",
    title: "When AI Has a Body",
    summary: "Tests whether a physically embodied desktop robot changes implicit mind perception and moral attribution compared with a virtual agent.",
    role: "Sole author and principal investigator. Developed the theory, experimental system, study, analysis, and thesis.",
    methods: "50 participants; 2×2 mixed design; SC-IAT; mixed ANOVA; mediation and path analysis in R/lavaan.",
    finding: "Connects changes in perceived agency and experience to corresponding dimensions of moral agency and moral patiency.",
    image: "assets/publication-embodiment-web.png",
  },
  sss: {
    eyebrow: "Publication · SIGGRAPH Asia 2025 Posters",
    title: "See, Sense, Spark",
    summary: "Asks how deeply a proactive AI system should understand a user to support creative research ideation.",
    role: "Co-first author. Contributed to the system concept, smart-glasses study, analysis, and publication development.",
    methods: "Between-subjects experiment; XReal Air 2 Pro; ElevenLabs interviewer; K-means clustering; lexical analysis (TTR).",
    finding: "Fine-grained profiling significantly increased I-type curiosity (p = .016, d = 1.30) and trended toward higher epistemic agency; coarse profiles were more pragmatically useful.",
    image: "assets/publication-sss-event-web-small.jpg",
    gallery: [
      "assets/publication-sss-event-web-small.jpg",
      "assets/publication-sss-poster-web.png",
    ],
    paper: "https://dl.acm.org/doi/full/10.1145/3757374.3771458",
    links: [{ label: "Demo video ↗", url: "https://youtu.be/kbhWUENajDM?si=b6m7_Tjsb87YCoGQ" }],
  },
  exploitation: {
    eyebrow: "Proceedings · HCI Korea 2025",
    title: "When the AI Exploitation Disappears",
    summary: "Studies the factors that move people from exploiting AI toward reciprocal cooperation.",
    role: "First author. Led the research framing, experiment, quantitative analysis, and writing.",
    methods: "Experimental cooperation task with quantitative analysis in R.",
    finding: "Clarifies how social and reward conditions can change cooperative attitudes toward AI.",
    paper: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12131515",
  },
  "goodbyes-matter": {
    eyebrow: "Full paper in submission · ACM CHI 2027",
    title: "Goodbyes Matter",
    summary: "A larger follow-up study of immersive relational offboarding strategies for reducing loss when AI companion interactions end.",
    role: "Extends the co-first-authored CHI 2026 work; detailed contribution notes and visuals will be added after the current review cycle.",
    methods: "Full-paper replication with an expanded sample and a broader examination of offboarding design.",
    finding: "Treats endings as a core part of responsible relational-AI design rather than an afterthought.",
    image: "assets/publication-goodbye-web.jpg",
  },
  "proactive-profile": {
    eyebrow: "Full paper in submission · ACM CHI 2027",
    title: "How Much Should Proactive AI Know About Its User?",
    summary: "Extends See, Sense, Spark into a fuller account of profile granularity in AI-glasses support for research ideation.",
    role: "Extends the co-first-authored SIGGRAPH Asia study; detailed contribution notes will be added after review.",
    methods: "Proactive smart-glasses interaction, profile granularity manipulation, curiosity and agency measures.",
    finding: "Examines the tradeoff between personally resonant inspiration and pragmatic usefulness.",
    image: "assets/publication-sss-event-web-small.jpg",
  },
  "on-the-desk": {
    eyebrow: "Full paper in submission · ACM/IEEE HRI 2027",
    title: "On the Desk, Not on the Screen",
    summary: "Develops the master's thesis into a full paper on physical co-presence and implicit moral attribution to AI.",
    role: "Sole author and principal investigator of the underlying thesis research.",
    methods: "Physical versus virtual embodiment; SC-IAT; mixed ANOVA; mediation and path analysis.",
    finding: "Tests whether physical presence changes the implicit moral status people assign to AI.",
    image: "assets/publication-embodiment-web.png",
  },
  "youth-safety": {
    eyebrow: "AI Safety Institute (AISI), Republic of Korea · Sep 2026–Present",
    title: "Youth AI Safety Evaluation Benchmark",
    summary: "Develops a Korean-language benchmark for assessing risks in adolescents' use of AI chatbots and companion AI.",
    role: "International benchmark review, localization of public evaluation data, and expert-validation support.",
    methods: "Benchmark review; Korean localization; risk taxonomy development; expert validation.",
    finding: "Creates an evaluation foundation that reflects Korean language and youth-use contexts.",
  },
  "always-on-ai": {
    eyebrow: "AXIS Lab research project · 2026–2029",
    title: "Proactive AI and Human Cognitive Mechanisms in Always-On AI Environments",
    summary: "Studies how proactive AI should perceive, intervene, and support people in continuously available computing environments.",
    role: "Researcher contributing to human-centered questions around proactive support and cognition.",
    methods: "Research framework and study details will be added as the project advances.",
    finding: "Focuses on balancing useful intervention with human agency and cognitive needs.",
  },
  "child-story": {
    eyebrow: "Seoul RISE research project · 2026–2027",
    title: "Development-Aware AI Story Generation",
    summary: "Builds personalized story generation around children's developmental stages and everyday objects.",
    role: "Contributes to ontology design, age-adaptive language, multimodal prototyping, workshop operation, and child-centered field evaluation.",
    methods: "Developmental ontology; age-adaptive language; multimodal prototyping; child-centered evaluation.",
    finding: "Connects generative storytelling to age-appropriate learning and situated creative play, with children and caregivers participating in live sessions.",
    image: "assets/detail/rise/architecture.png",
    gallery: [
      "assets/project-child-story-reading.jpg",
      "assets/project-child-story-study.jpg",
      "assets/project-child-story-play.jpg",
    ],
  },
  samsung: {
    eyebrow: "Industry–academia collaboration · Jun 2024–Mar 2025",
    title: "Screen Multimodal Interaction Research",
    summary: "Developed evidence for context-dependent multimodal interaction guidelines across body-extension, mobile, and fixed screen embodiments.",
    role: "Research assistant. Built the foundational survey and data-analysis pipeline, co-authored the literature report, and contributed to experimental planning.",
    methods: "Product feature mapping; YouTube link and comment crawling across 11 products; cross-lingual preprocessing; KoBERTopic; 2×2 and mixed experimental design.",
    finding: "Mapped how voice, gesture, touch, embodiment, latency, and agent visualization should be studied as a coordinated screen-interaction system.",
    links: [{ label: "Research deck ↗", url: "https://docs.google.com/presentation/d/1idqJA93LtuHUhmLhVBMwanE4L7HV6Bk-Dl7zulalS6g/edit#slide=id.g2c92d2813a8_0_22" }],
  },
  nhis: {
    eyebrow: "Institutional collaboration · 2023",
    title: "National Health Insurance Service Research Project",
    summary: "A recurring quarterly analysis of how the National Health Insurance Service is portrayed across news, video, social media, and online communities.",
    role: "Research assistant responsible for crawling news from 10 major Korean outlets, preprocessing, analysis, interpretation, and quarterly-report synthesis.",
    methods: "Python web scraping; Korean text cleaning; TF-IDF; co-occurrence semantic networks; KoBERTopic/LDA; cross-outlet trend analysis.",
    finding: "Translated large-scale media traces into issue narratives, topic distributions, network visualizations, and communication implications for a public institution.",
  },
  nongming: {
    eyebrow: "Education design project · UNESCO GHE 2025 finalist",
    title: "Nongming: Smart Farming, Bright Future",
    summary: "A smart-farming simulation game that teaches elementary and middle school students through ten science-based missions.",
    role: "Team leader. Led the educational concept, prototype direction, and finalist presentation.",
    methods: "Unity WebGL; Photon networking; modular FSM design; smart-farming missions and block coding.",
    finding: "Uses game-based learning to build data literacy, systems thinking, and problem-solving without requiring additional school hardware.",
    image: "assets/detail/nongming/thumbnail.png",
    links: [{ label: "Presentation ↗", url: "https://www.canva.com/design/DAGo11pBMtY/EPZW78PrvzOjCZI_BeM6Vg/view" }],
  },
  standup: {
    eyebrow: "Inter-university academic festival · 2023",
    title: "Stand-Up Inter-University Convergence Academic Festival",
    summary: "A four-university convergence festival that brought approximately 100 students from related science and engineering programs into one shared academic community.",
    role: "Co-founder.",
    methods: "Partnership development; program planning; participant coordination; evaluation design; faculty and advisor recruitment.",
    finding: "Built the organizational conditions for students across institutions and disciplines to exchange work, receive feedback, and begin new collaborations.",
  },
  "missionary-film": {
    eyebrow: "Independent film project · 2025–Current",
    title: "Missionary Film",
    summary: "A short historical film using an AI-and-game-engine pipeline to work beyond the constraints of conventional production.",
    role: "Writer, director, and producer.",
    methods: "Unreal Engine 5; MetaHuman; generative visuals; cinematic rendering; editing and sound design.",
    finding: "Experiments with representing real historical figures and events through digital humans and AI-assisted virtual production.",
    image: "assets/detail/missionary-film/image.png",
  },
  "missionary-theater": {
    eyebrow: "Creative productions · 2022–2023",
    title: "Missionary Theater Productions",
    summary: "Two creative stage productions reimagining biblical narratives through contemporary theatrical language.",
    role: "Writer, director, and production lead across concept, scripting, rehearsal, and performance.",
    methods: "Scriptwriting, directing, cast coordination, rehearsal, and live production.",
    finding: "Translated biblical narratives into collaborative contemporary performance.",
    image: "assets/detail/missionary-theater/scene-1.jpg",
  },
};

Object.assign(detailData, window.researchDetails || {});
Object.assign(detailData, window.projectDetails || {});

const publicationGroups = [
  {
    label: "Posters & Conference Proceedings",
    ids: ["pub-benevolence", "pub-goodbye", "pub-sss", "pub-phodong", "pub-on-the-desk", "pub-exploitation"],
  },
  {
    label: "In Submission",
    ids: ["pub-ai-cooperation", "pub-goodbyes-matter", "pub-proactive-profile", "pub-homophily", "pub-chatbots"],
  },
  {
    label: "Manuscripts in Preparation",
    ids: ["pub-virtual-celebrity"],
  },
  {
    label: "Journal Article",
    ids: ["pub-screenx"],
  },
];

function organizePublications() {
  const list = document.querySelector(".publication-list");
  if (!list) return;

  const articles = new Map(
    [...list.querySelectorAll(":scope > article")].map((article) => [article.id, article]),
  );
  list.replaceChildren();

  publicationGroups.forEach((group) => {
    const heading = document.createElement("div");
    heading.className = "publication-group-title";
    const title = document.createElement("strong");
    title.textContent = group.label;
    const count = document.createElement("span");
    count.textContent = `${group.ids.length} ${group.ids.length === 1 ? "work" : "works"}`;
    heading.append(title, count);
    list.append(heading);

    group.ids.forEach((id) => {
      const article = articles.get(id);
      if (article) list.append(article);
    });
  });

  ["pub-homophily", "pub-chatbots"].forEach((id) => {
    const meta = document.querySelector(`#${id} .pub-meta`);
    if (meta) meta.textContent = meta.textContent.replace("Under review", "In submission");
  });
}

organizePublications();

function applyRequestedPublicationPresentation() {
  const thumbnailUpdates = {
    "pub-goodbye": ["assets/detail/goodbye/thumbnail-photo.jpg", "Participant experiencing the immersive AI companion study"],
    "pub-sss": ["assets/detail/sss/thumbnail-photo.jpg", "Participant using AI glasses during the proactive ideation study"],
    "pub-on-the-desk": ["assets/detail/embodiment/thumbnail.png", "Participant interacting with a physically embodied AI companion"],
    "pub-proactive-profile": ["assets/detail/sss/followup-thumbnail.png", "Profile-granularity pipeline for proactive research ideation"],
    "pub-screenx": ["assets/detail/screenx/thumbnail.webp", "ScreenX immersive cinema environment"],
  };

  Object.entries(thumbnailUpdates).forEach(([id, [src, alt]]) => {
    const image = document.querySelector(`#${id} .pub-thumbnail img`);
    if (!image) return;
    image.src = src;
    image.alt = alt;
  });

  ["pub-exploitation", "pub-virtual-celebrity"].forEach((id) => {
    document.querySelector(`#${id}`)?.classList.add("publication-text-only");
  });

  const screenxCard = document.querySelector("#pub-screenx");
  if (screenxCard) screenxCard.dataset.detailCard = "screenx";

  document.querySelectorAll(".award-badge").forEach((badge) => {
    badge.textContent = badge.textContent.replace(/^\s*★\s*/, "🏆 ");
  });

  const alwaysOnMeta = document.querySelector("#project-proactive-ai .card-meta");
  if (alwaysOnMeta) alwaysOnMeta.textContent = "2026–2029 · Government-Funded Research (NRF · MSIT)";

  const youthSafetyThumbnail = document.querySelector("#project-youth-safety > img");
  if (youthSafetyThumbnail) youthSafetyThumbnail.src = "assets/detail/aisi/thumbnail.png";
  if (detailData["youth-safety"]) detailData["youth-safety"].image = "assets/detail/aisi/thumbnail.png";
}

applyRequestedPublicationPresentation();

const planetSystems = document.querySelectorAll(".planet-system");
const detailDialog = document.querySelector("#detail-dialog");
const detailEyebrow = document.querySelector("#detail-eyebrow");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const caseStudyContent = document.querySelector("#case-study-content");
const detailFacts = document.querySelector("#detail-facts");
const detailRole = document.querySelector("#detail-role");
const detailMethods = document.querySelector("#detail-methods");
const detailFinding = document.querySelector("#detail-finding");
const detailImage = document.querySelector("#detail-image");
const detailPlaceholder = document.querySelector("#detail-placeholder");
const detailGallery = document.querySelector("#detail-gallery");
const detailPaper = document.querySelector("#detail-paper");
const detailExtraLinks = document.querySelector("#detail-extra-links");
const researchField = document.querySelector(".research-field");
const fieldWorks = document.querySelectorAll("[data-field-work]");
const fieldIntro = document.querySelector("[data-field-intro]");
const fieldStory = document.querySelector("[data-field-story]");
const fieldEyebrow = document.querySelector("[data-field-eyebrow]");
const fieldTitle = document.querySelector("[data-field-title]");
const fieldSummary = document.querySelector("[data-field-summary]");
const fieldOpen = document.querySelector("[data-field-open]");
const fieldLinks = document.querySelectorAll(".field-link");
const fieldFocus = document.querySelector(".field-focus");

function activateFieldWork(work) {
  if (!researchField || !work) return;

  const key = work.dataset.fieldWork;
  const detail = detailData[key];
  if (!detail) return;

  researchField.dataset.activeWork = key;
  fieldWorks.forEach((item) => {
    const active = item === work;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  const styles = getComputedStyle(work);
  const x = styles.getPropertyValue("--x").trim().replace("%", "") || work.dataset.fieldX || "50";
  const y = styles.getPropertyValue("--y").trim().replace("%", "") || work.dataset.fieldY || "52";
  fieldLinks.forEach((line) => {
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
  });
  fieldFocus?.setAttribute("cx", x);
  fieldFocus?.setAttribute("cy", y);

  fieldEyebrow.textContent = detail.eyebrow;
  fieldTitle.textContent = detail.title;
  fieldSummary.textContent = detail.summary;
  fieldOpen.dataset.detailKey = key;
  fieldIntro.hidden = true;
  fieldStory.hidden = false;
}

function appendText(tag, className, text, parent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderCaseStudy(caseStudy) {
  caseStudyContent.replaceChildren();

  const meta = document.createElement("div");
  meta.className = "case-study-meta";
  caseStudy.meta.forEach((item) => appendText("span", "", item, meta));
  caseStudyContent.append(meta);

  const overview = document.createElement("section");
  overview.className = "case-study-overview";
  const overviewHeading = appendText("div", "case-study-overview-heading", "", overview);
  appendText("p", "case-kicker", "The project at a glance", overviewHeading);
  appendText("h3", "", "One question, five moves", overviewHeading);

  const map = document.createElement("div");
  map.className = "case-study-map";
  caseStudy.map.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "case-map-step";
    button.setAttribute("aria-label", `Jump to ${item.label}: ${item.title}`);
    appendText("span", "case-map-number", String(index + 1).padStart(2, "0"), button);
    appendText("strong", "", item.label, button);
    appendText("small", "", item.title, button);
    button.addEventListener("click", () => {
      caseStudyContent.querySelector(`#case-${caseStudy.sections[index].key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    map.append(button);
  });
  overview.append(map);

  const role = document.createElement("aside");
  role.className = "case-study-role";
  const roleCopy = document.createElement("div");
  appendText("p", "case-kicker", "Contribution", roleCopy);
  appendText("h3", "", caseStudy.role.title, roleCopy);
  appendText("p", "case-role-body", caseStudy.role.body, roleCopy);
  role.append(roleCopy);
  const tags = document.createElement("div");
  tags.className = "case-role-tags";
  caseStudy.role.tags.forEach((item) => appendText("span", "", item, tags));
  role.append(tags);
  overview.append(role);
  caseStudyContent.append(overview);

  const chapters = document.createElement("div");
  chapters.className = "case-study-chapters";
  caseStudy.sections.forEach((section, index) => {
    const chapter = document.createElement("article");
    chapter.className = "case-chapter";
    chapter.id = `case-${section.key}`;

    const copy = document.createElement("div");
    copy.className = "case-chapter-copy";
    appendText("p", "case-kicker", section.label, copy);
    appendText("h3", "", section.title, copy);
    section.paragraphs.forEach((paragraph) => appendText("p", "", paragraph, copy));

    const figure = document.createElement("figure");
    if (section.gallery?.length) {
      figure.classList.add("case-gallery");
      const track = document.createElement("div");
      track.className = "case-gallery-track";
      section.gallery.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "case-gallery-slide";
        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.alt || "";
        image.loading = "lazy";
        slide.append(image);
        if (item.caption) appendText("p", "case-gallery-caption", item.caption, slide);
        track.append(slide);
      });
      figure.append(track);
    } else if (section.image) {
      const image = document.createElement("img");
      image.src = section.image;
      image.alt = section.alt || "";
      image.loading = index > 1 ? "lazy" : "eager";
      figure.append(image);
    } else if (section.visual) {
      figure.classList.add("case-data-figure");
      const visual = document.createElement("div");
      visual.className = "case-data-visual";
      appendText("span", "case-data-kicker", section.visual.kicker, visual);
      appendText("strong", "", section.visual.title, visual);
      const list = document.createElement("div");
      list.className = "case-data-list";
      section.visual.items.forEach((item, itemIndex) => {
        const row = document.createElement("div");
        appendText("span", "", String(itemIndex + 1).padStart(2, "0"), row);
        appendText("p", "", item, row);
        list.append(row);
      });
      visual.append(list);
      figure.append(visual);
    }
    if (section.caption) appendText("figcaption", "", section.caption, figure);

    chapter.append(copy, figure);
    chapters.append(chapter);
  });
  caseStudyContent.append(chapters);

  const outcome = document.createElement("section");
  outcome.className = "case-study-outcome";
  const outcomeCopy = document.createElement("div");
  appendText("p", "case-kicker", caseStudy.outcome.label, outcomeCopy);
  appendText("h3", "", caseStudy.outcome.title, outcomeCopy);
  appendText("p", "", caseStudy.outcome.body, outcomeCopy);
  if (caseStudy.outcome.image) {
    const outcomeImage = document.createElement("img");
    outcomeImage.src = caseStudy.outcome.image;
    outcomeImage.alt = caseStudy.outcome.alt || "";
    outcomeImage.loading = "lazy";
    outcome.append(outcomeImage);
  } else {
    outcome.classList.add("case-study-outcome-copy-only");
  }
  outcome.append(outcomeCopy);
  caseStudyContent.append(outcome);
}

function renderResearchMap(researchMap) {
  caseStudyContent.replaceChildren();

  const intro = document.createElement("section");
  intro.className = "research-map-intro";

  const question = document.createElement("div");
  question.className = "research-question";
  appendText("p", "research-question-kicker", "The question that started it", question);
  appendText("h3", "", researchMap.question, question);
  appendText("p", "research-answer", researchMap.answer, question);
  intro.append(question);

  const meta = document.createElement("div");
  meta.className = "research-meta";
  researchMap.meta.forEach((item) => appendText("span", "", item, meta));
  intro.append(meta);
  caseStudyContent.append(intro);

  const mapShell = document.createElement("section");
  mapShell.className = "research-map-shell";
  const mapHeading = document.createElement("div");
  mapHeading.className = "research-map-heading";
  const headingCopy = document.createElement("div");
  appendText("p", "case-kicker", "Explore the paper", headingCopy);
  appendText("h3", "", "Open the argument one step at a time", headingCopy);
  const progress = appendText("p", "research-progress", "1 of " + researchMap.nodes.length, mapHeading);
  mapHeading.prepend(headingCopy);
  mapShell.append(mapHeading);

  const nodeMap = document.createElement("div");
  nodeMap.className = "research-node-map";
  nodeMap.style.setProperty("--research-node-count", String(researchMap.nodes.length));
  nodeMap.setAttribute("role", "tablist");
  nodeMap.setAttribute("aria-label", "Paper sections");

  const panels = document.createElement("div");
  panels.className = "research-node-panels";

  const activate = (index) => {
    nodeMap.querySelectorAll("button").forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle("is-active", active);
      if (buttonIndex <= index) button.classList.add("is-visited");
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panels.querySelectorAll(".research-node-panel").forEach((panel, panelIndex) => {
      panel.hidden = panelIndex !== index;
    });
    progress.textContent = `${index + 1} of ${researchMap.nodes.length}`;
  };

  researchMap.nodes.forEach((node, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "research-node";
    button.dataset.researchNode = node.key;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", `research-panel-${node.key}`);
    button.setAttribute("aria-selected", "false");
    appendText("span", "research-node-index", String(index + 1).padStart(2, "0"), button);
    appendText("strong", "", node.label.replace(/^\d+\s·\s/, ""), button);
    if (node.badge) appendText("small", "research-node-badge", node.badge, button);
    button.addEventListener("click", () => activate(index));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % researchMap.nodes.length;
      if (event.key === "ArrowLeft") next = (index - 1 + researchMap.nodes.length) % researchMap.nodes.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = researchMap.nodes.length - 1;
      activate(next);
      nodeMap.querySelectorAll("button")[next].focus();
    });
    nodeMap.append(button);

    const panel = document.createElement("article");
    panel.className = "research-node-panel";
    panel.id = `research-panel-${node.key}`;
    panel.setAttribute("role", "tabpanel");
    panel.hidden = true;

    const copy = document.createElement("div");
    copy.className = "research-node-copy";
    const panelLabel = document.createElement("div");
    panelLabel.className = "research-panel-label";
    appendText("span", "", node.label, panelLabel);
    if (node.badge) appendText("span", "research-panel-badge", node.badge, panelLabel);
    copy.append(panelLabel);
    appendText("h4", "", node.title, copy);
    node.paragraphs.forEach((paragraph) => appendText("p", "", paragraph, copy));
    if (node.bullets?.length) {
      const list = document.createElement("ul");
      node.bullets.forEach((item) => appendText("li", "", item, list));
      copy.append(list);
    }
    if (node.stats?.length) {
      const stats = document.createElement("div");
      stats.className = "research-stats";
      node.stats.forEach((stat) => {
        const item = document.createElement("div");
        appendText("strong", "", stat.value, item);
        appendText("span", "", stat.label, item);
        stats.append(item);
      });
      copy.append(stats);
    }
    panel.append(copy);

    if (node.figures?.length) {
      const figures = document.createElement("div");
      figures.className = "research-figures";
      node.figures.forEach((figureData, figureIndex) => {
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.src = figureData.src;
        image.alt = figureData.alt;
        image.loading = index === 0 && figureIndex === 0 ? "eager" : "lazy";
        figure.append(image);
        if (figureData.caption) appendText("figcaption", "", figureData.caption, figure);
        figures.append(figure);
      });
      panel.append(figures);
    }
    panels.append(panel);
  });

  mapShell.append(nodeMap, panels);
  caseStudyContent.append(mapShell);

  const role = document.createElement("aside");
  role.className = "research-role";
  const roleCopy = document.createElement("div");
  appendText("p", "case-kicker", "My part", roleCopy);
  appendText("h3", "", researchMap.role.title, roleCopy);
  appendText("p", "", researchMap.role.body, roleCopy);
  role.append(roleCopy);
  const tags = document.createElement("div");
  tags.className = "research-role-tags";
  researchMap.role.tags.forEach((item) => appendText("span", "", item, tags));
  role.append(tags);
  caseStudyContent.append(role);

  activate(0);
}

function closePlanetMenus(except = null) {
  planetSystems.forEach((system) => {
    if (system === except) return;
    system.classList.remove("is-open");
    system.querySelector(".hero-planet")?.setAttribute("aria-expanded", "false");
  });
}

function openDetail(key, researchNode = "") {
  const detail = detailData[key];
  if (!detail || !detailDialog) return;

  if (detail.page) {
    window.location.href = `${detail.page}${researchNode ? `#${researchNode}` : ""}`;
    return;
  }

  detailEyebrow.textContent = detail.eyebrow;
  detailTitle.textContent = detail.title;
  detailSummary.textContent = detail.summary;
  detailRole.textContent = detail.role;
  detailMethods.textContent = detail.methods;
  detailFinding.textContent = detail.finding;
  const hasCaseStudy = Boolean(detail.caseStudy);
  const hasResearchMap = Boolean(detail.researchMap);
  detailDialog.classList.toggle("is-case-study", hasCaseStudy);
  detailDialog.classList.toggle("is-research-map", hasResearchMap);
  caseStudyContent.setAttribute("aria-label", hasResearchMap ? "Interactive paper map" : "Project case study");
  caseStudyContent.hidden = !(hasCaseStudy || hasResearchMap);
  detailFacts.hidden = hasCaseStudy || hasResearchMap;
  if (hasResearchMap) renderResearchMap(detail.researchMap);
  else if (hasCaseStudy) renderCaseStudy(detail.caseStudy);
  else caseStudyContent.replaceChildren();

  const gallery = detail.gallery || (detail.image ? [detail.image] : []);
  const primaryImage = detail.image || gallery[0];
  detailDialog.classList.toggle("has-detail-image", Boolean(primaryImage));

  if (primaryImage) {
    detailImage.src = primaryImage;
    detailImage.alt = `${detail.title} visual`;
    detailImage.hidden = false;
    detailPlaceholder.hidden = true;
  } else {
    detailImage.removeAttribute("src");
    detailImage.alt = "";
    detailImage.hidden = true;
    detailPlaceholder.hidden = false;
  }

  detailGallery.replaceChildren();
  if (gallery.length > 1 && !hasCaseStudy && !hasResearchMap) {
    gallery.forEach((source, index) => {
      const button = document.createElement("button");
      const image = document.createElement("img");
      button.type = "button";
      button.classList.toggle("is-active", source === primaryImage || (!detail.image && index === 0));
      button.setAttribute("aria-label", `Show image ${index + 1} of ${gallery.length}`);
      image.src = source;
      image.alt = "";
      button.append(image);
      button.addEventListener("click", () => {
        detailImage.src = source;
        detailGallery.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
      });
      detailGallery.append(button);
    });
  }

  if (detail.paper) {
    detailPaper.href = detail.paper;
    detailPaper.hidden = false;
  } else {
    detailPaper.removeAttribute("href");
    detailPaper.hidden = true;
  }

  detailExtraLinks.replaceChildren();
  (detail.links || []).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.textContent = link.label;
    detailExtraLinks.append(anchor);
  });

  closePlanetMenus();
  detailDialog.showModal();
}

planetSystems.forEach((system) => {
  const trigger = system.querySelector(".hero-planet");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const willOpen = !system.classList.contains("is-open");
    closePlanetMenus(system);
    system.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });

  system.addEventListener("mouseenter", () => {
    trigger.setAttribute("aria-expanded", "true");
  });

  system.addEventListener("mouseleave", () => {
    if (!system.classList.contains("is-open")) trigger.setAttribute("aria-expanded", "false");
  });
});

fieldWorks.forEach((work) => {
  work.setAttribute("aria-pressed", "false");
  work.addEventListener("mouseenter", () => activateFieldWork(work));
  work.addEventListener("focus", () => activateFieldWork(work));
  work.addEventListener("click", () => activateFieldWork(work));
});

fieldOpen?.addEventListener("click", () => {
  if (fieldOpen.dataset.detailKey) openDetail(fieldOpen.dataset.detailKey);
});

document.querySelectorAll("[data-detail-open]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    openDetail(trigger.dataset.detailOpen, trigger.dataset.researchNode);
    if (trigger.dataset.researchNode && !detailData[trigger.dataset.detailOpen]?.page) {
      caseStudyContent
        .querySelector(`[data-research-node="${trigger.dataset.researchNode}"]`)
        ?.click();
    }
  });
});

document.querySelectorAll("[data-detail-card]").forEach((card) => {
  const key = card.dataset.detailCard;
  const title = detailData[key]?.title || "research detail";
  card.tabIndex = 0;
  card.setAttribute("aria-label", `View details: ${title}`);

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openDetail(key, card.dataset.researchNode);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openDetail(key, card.dataset.researchNode);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".planet-system")) closePlanetMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePlanetMenus();
});

detailDialog?.addEventListener("click", (event) => {
  if (event.target === detailDialog) detailDialog.close();
});
