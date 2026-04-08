// NRMA AI Contact Centre Vendor Data
// Source: NRMA Next-Gen Contact Centre AI Briefing, April 2026

export type VendorCategory = 'voice' | 'agent-assist' | 'orchestration' | 'analytics';

export type BusinessUnit =
  | 'roadside'
  | 'sixt'
  | 'parks-marine'
  | 'energy'
  | 'cross-portfolio';

export interface Vendor {
  id: string;
  name: string;
  tagline: string;
  category: VendorCategory;
  categoryLabel: string;
  description: string;
  whyNRMA: string;
  keyCapabilities: string[];
  businessUnits: BusinessUnit[];
  enterpriseExamples: string[];
  website: string;
  presalesAngle: string;
}

export const vendors: Vendor[] = [
  {
    id: 'polyai',
    name: 'PolyAI',
    tagline: 'Enterprise voice assistants that sound genuinely human',
    category: 'voice',
    categoryLabel: 'Voice-First AI',
    description:
      'PolyAI builds brand-aligned voice agents that replace traditional IVRs entirely. Their platform is engineered for messy, real-world conversations — handling interruptions, accents, background noise, and complex multi-turn exchanges with near-human latency. They focus on transactional completions: bookings, authentication, routing, and account management.',
    whyNRMA:
      'Proven ROI in high-volume travel and hospitality bookings (Hopper, Golden Nugget Hotels). Strong fit for Holiday Parks, Marine, and Sixt reservation lines where seasonal call spikes are significant.',
    keyCapabilities: [
      'End-to-end voice call automation',
      'Complex multi-turn conversation handling',
      'Booking & reservations automation',
      'Authentication and account management',
      'Real-time backend API integration',
      'Multi-language and accent support',
    ],
    businessUnits: ['sixt', 'parks-marine', 'roadside'],
    enterpriseExamples: ['Hopper', 'Golden Nugget Hotels', 'Marriott', 'FedEx'],
    website: 'https://poly.ai',
    presalesAngle:
      'Ask them to demo handling a Sixt reservation modification mid-call with an interruption. Request their latency benchmarks and how they handle backend API failures gracefully.',
  },
  {
    id: 'soundhound',
    name: 'SoundHound AI',
    tagline: 'Agentic AI for automotive, roadside, and enterprise voice',
    category: 'voice',
    categoryLabel: 'Voice-First AI',
    description:
      'Following its 2025 acquisition of enterprise AI pioneer Interactions, SoundHound has consolidated a formidable position in agentic voice AI. They are uniquely positioned in the automotive and roadside assistance space, with deep experience in emergency dispatch workflows, claims triage, and vehicle-context-aware conversations.',
    whyNRMA:
      'SoundHound already powers AI voice assistants in Jeep vehicles in Europe. Their Quálitas deployment in Mexico handles 74% of roadside assistance requests autonomously — a directly comparable use case to NRMA Roadside.',
    keyCapabilities: [
      'Autonomous roadside dispatch and triage',
      'Vehicle-context-aware conversations',
      'End-to-end agentic workflow execution',
      'Emergency scenario handling',
      'Fortune 100 enterprise integrations',
      'Acquired Interactions platform for workflow orchestration',
    ],
    businessUnits: ['roadside', 'sixt'],
    enterpriseExamples: [
      'Quálitas (74% autonomous roadside)',
      'Stellantis / Jeep',
      'Hyundai',
      'Multiple Fortune 100 accounts',
    ],
    website: 'https://www.soundhound.com',
    presalesAngle:
      'Request the Quálitas roadside case study. Ask specifically how their AI handles safety-critical escalations — when does it hand off to a human, and how fast?',
  },
  {
    id: 'teneo',
    name: 'Teneo.ai',
    tagline: '99% automation accuracy — the highest benchmark in enterprise voice AI',
    category: 'voice',
    categoryLabel: 'Voice-First AI',
    description:
      'Teneo.ai claims the highest automation accuracy in the industry (95%+ on the BANKING77 benchmark) and has surpassed 17,000 AI agents in production. They specialise in complex, multi-turn enterprise conversations and seamless overlay integration with existing CCaaS platforms. Their platform authenticates customers, retrieves live data, and applies corrections within defined authority — all without human intervention.',
    whyNRMA:
      'Highly relevant for Energy Retail, where billing queries, payment plans, and meter data retrieval require both accuracy and live backend integration. Their overlay model means no Avaya replacement required.',
    keyCapabilities: [
      '95%+ automation accuracy (BANKING77 benchmark)',
      '17,000+ AI agents in production',
      'Live billing data retrieval and anomaly detection',
      'Payment plan negotiation within defined authority',
      'Seamless CCaaS overlay — no rip-and-replace',
      'Perfect scores in DMG Consulting 2025 satisfaction report',
    ],
    businessUnits: ['energy', 'cross-portfolio'],
    enterpriseExamples: [
      'Major European utilities',
      'Tier-1 telcos',
      'Financial services enterprises',
    ],
    website: 'https://www.teneo.ai',
    presalesAngle:
      'Ask them to walk through a live energy billing dispute scenario — how does the AI handle a customer who disputes a bill and wants to escalate? What are the guardrails?',
  },
  {
    id: 'cresta',
    name: 'Cresta',
    tagline: 'Real-time AI coaching based on your top performers',
    category: 'agent-assist',
    categoryLabel: 'Real-Time Agent Assist',
    description:
      'Born out of Stanford\'s AI lab, Cresta is a real-time intelligence platform that acts as a live coach during every call. It identifies the behaviors of top-performing agents and surfaces those insights to all agents in real-time — prompting the right response, the right upsell, or the right de-escalation technique at exactly the right moment. Their Command Hub (launched Dec 2025) gives leaders on-demand Voice of Customer insights.',
    whyNRMA:
      'Excellent for upselling in the travel and parks division (upgrade to premium park site, add-on Coral Adventures excursion) and for handling complex energy billing disputes where agents need real-time guidance on negotiation and policy.',
    keyCapabilities: [
      'Real-time agent coaching from top-performer data',
      'Sales conversion optimization',
      'Complex dispute resolution guidance',
      'AI Analyst for natural language VOC queries',
      'Command Hub for leader insights',
      'Email channel support (launched 2025)',
    ],
    businessUnits: ['parks-marine', 'energy', 'cross-portfolio'],
    enterpriseExamples: [
      'Fortune 500 insurance company (7% revenue increase)',
      'Oportun (QA transformation)',
      'Multiple financial services enterprises',
    ],
    website: 'https://cresta.com',
    presalesAngle:
      'Ask them to demonstrate how quickly their system learns from NRMA\'s own top agents. What is the typical time-to-value from go-live to measurable coaching impact?',
  },
  {
    id: 'balto',
    name: 'Balto',
    tagline: 'Real-time compliance checklists and sales guidance, live on every call',
    category: 'agent-assist',
    categoryLabel: 'Real-Time Agent Assist',
    description:
      'Balto specialises in real-time call guidance with a strong focus on compliance execution and sales consistency. It provides dynamic, context-aware checklists that update as the conversation progresses, and alerts managers instantly if a call goes off-track. Balto claims a 26% increase in conversion rates within 45 days of deployment.',
    whyNRMA:
      'Ensures compliance during energy retail sign-ups (mandatory disclosure requirements) or complex rental agreement explanations, reducing errors and protecting NRMA from regulatory exposure.',
    keyCapabilities: [
      'Dynamic real-time compliance checklists',
      'Instant manager alerts for off-track calls',
      'Sales script adherence and optimization',
      '26% conversion rate improvement (claimed)',
      'Proactive outbound call guidance',
      'Manager coaching dashboard',
    ],
    businessUnits: ['energy', 'sixt', 'cross-portfolio'],
    enterpriseExamples: [
      'Multiple insurance and financial services firms',
      'Healthcare contact centres',
      'Retail energy providers',
    ],
    website: 'https://www.balto.ai',
    presalesAngle:
      'Ask them to show the compliance checklist feature for a regulated product disclosure scenario. How does it handle agents who skip required disclosures?',
  },
  {
    id: 'cogito',
    name: 'Cogito (Verint)',
    tagline: 'Emotion AI — real-time empathy coaching for high-stakes calls',
    category: 'agent-assist',
    categoryLabel: 'Emotion AI',
    description:
      'Cogito, now part of Verint, is the pioneer of Emotion AI in contact centres. It analyses the acoustic features of a voice — pitch, tone, pace, energy — in real-time to measure both customer frustration and agent fatigue. It provides live nudges to agents (e.g., "speak slower," "show more empathy," "take a breath") without interrupting the call. This is not sentiment analysis after the fact — it is live emotional coaching.',
    whyNRMA:
      'Highly relevant for Roadside Assistance, where members are often distressed, stranded, or in unsafe situations. Agents managing the emotional temperature of a breakdown call while coordinating dispatch is a uniquely high-stakes scenario that Cogito was built for.',
    keyCapabilities: [
      'Real-time acoustic emotion analysis',
      'Live agent empathy nudges',
      'Agent fatigue and stress monitoring',
      'Customer frustration detection',
      'Employee experience (EX) monitoring',
      'Integration with Verint\'s broader CX platform',
    ],
    businessUnits: ['roadside', 'cross-portfolio'],
    enterpriseExamples: [
      'MetLife',
      'Humana',
      'Multiple Fortune 500 contact centres',
    ],
    website: 'https://www.verint.com/cogito/',
    presalesAngle:
      'Ask them to demonstrate the agent nudge experience in a simulated distressed-customer scenario. What does the agent see, and how non-intrusive is it during a complex dispatch call?',
  },
  {
    id: 'cognigy',
    name: 'Cognigy',
    tagline: 'Enterprise AI orchestration with a formal Avaya integration partnership',
    category: 'orchestration',
    categoryLabel: 'AI Orchestration',
    description:
      'Cognigy is a leader in enterprise conversational AI orchestration, allowing businesses to build complex, agentic workflows that connect various LLMs (Google, OpenAI, Azure) with backend systems. Crucially, they hold a formal integration partnership with Avaya, making them the lowest-risk "overlay" candidate for NRMA\'s existing infrastructure. Their platform supports both voice and digital channels from a single workflow engine.',
    whyNRMA:
      'The Avaya partnership minimises integration risk and accelerates time-to-value. NRMA can build custom AI workflows across all business units — roadside dispatch, park bookings, energy billing — without replacing the core telephony engine.',
    keyCapabilities: [
      'Formal Avaya integration partnership',
      'Multi-LLM orchestration (Google, OpenAI, Azure)',
      'Agentic workflow builder (no-code/low-code)',
      'Voice and digital channel unification',
      'Enterprise-grade governance and guardrails',
      'Pre-built connectors for major CRMs and ERPs',
    ],
    businessUnits: ['roadside', 'sixt', 'parks-marine', 'energy', 'cross-portfolio'],
    enterpriseExamples: [
      'Lufthansa Group',
      'Toyota',
      'E.ON Energy',
      'Bosch',
    ],
    website: 'https://www.cognigy.com',
    presalesAngle:
      'Ask them to walk through the Avaya integration architecture specifically — what does the SIP/SIPREC connection look like, and what data flows back to Avaya vs. what Cognigy handles independently?',
  },
  {
    id: 'observe-ai',
    name: 'Observe.AI',
    tagline: '100% interaction analytics — Auto QA at enterprise scale',
    category: 'analytics',
    categoryLabel: 'Conversation Intelligence',
    description:
      'Observe.AI is a powerhouse in conversation intelligence and automated quality assurance. Their platform analyzes 100% of customer interactions — voice and chat — post-call to automate QA scoring, track compliance adherence, and surface coaching opportunities. This replaces the traditional 2-5% random sampling model with complete visibility across every agent interaction.',
    whyNRMA:
      'Provides unparalleled visibility into call drivers and agent performance across all NRMA divisions. Managers can identify exactly which call types are causing handle time blowouts, which agents need coaching, and which processes are generating repeat contacts.',
    keyCapabilities: [
      '100% interaction evaluation (voice and chat)',
      'Automated QA scoring with LLM-as-a-judge',
      'Compliance adherence tracking',
      'Agent performance benchmarking',
      'Root cause analysis for repeat contacts',
      'Screen recording and full audit trail',
    ],
    businessUnits: ['cross-portfolio', 'roadside', 'energy'],
    enterpriseExamples: [
      'Accolade Health',
      'Multiple healthcare payers',
      '350+ enterprise customers',
    ],
    website: 'https://www.observe.ai',
    presalesAngle:
      'Ask them to show the Auto QA calibration process — how do you define what "good" looks like for NRMA\'s specific call types, and how long does it take to get accurate scoring?',
  },
  {
    id: 'kore-ai',
    name: 'Kore.ai',
    tagline: '200+ production-ready AI agent templates for enterprise deployment',
    category: 'orchestration',
    categoryLabel: 'AI Orchestration',
    description:
      'Kore.ai accelerates enterprise AI deployment through their XO Platform, which offers over 200 production-ready AI agent templates across industries. Their platform supports both customer-facing and employee-facing workflows, with strong support for 120+ languages and proven integrations with major CCaaS platforms including Zoom Contact Center.',
    whyNRMA:
      'Their pre-built templates and strong enterprise integration track record make them a fast path to value for automating routine inquiries across rentals, parks, and energy — without starting from scratch.',
    keyCapabilities: [
      '200+ production-ready agent templates',
      'Voice and digital channel support',
      '120+ language support',
      'Customer and employee workflow automation',
      'Zoom Contact Center integration',
      'National insurance provider modernisation case study',
    ],
    businessUnits: ['sixt', 'parks-marine', 'energy', 'cross-portfolio'],
    enterpriseExamples: [
      'National insurance provider (voice + digital modernisation)',
      'Major health insurer (AI-driven front-end)',
      'Zoom Contact Center (90% request automation)',
    ],
    website: 'https://www.kore.ai',
    presalesAngle:
      'Ask them to show the closest template to NRMA\'s use cases (e.g., utility billing or travel booking). How much customisation is typically required, and what does the deployment timeline look like?',
  },
];

export const categoryLabels: Record<VendorCategory, string> = {
  voice: 'Voice-First AI',
  'agent-assist': 'Real-Time Agent Assist',
  orchestration: 'AI Orchestration',
  analytics: 'Conversation Intelligence',
};

export const businessUnitLabels: Record<BusinessUnit, string> = {
  roadside: 'Roadside Assistance',
  sixt: 'Sixt Car Rental',
  'parks-marine': 'Parks & Marine',
  energy: 'Energy Retail',
  'cross-portfolio': 'Cross-Portfolio',
};

export const categoryColors: Record<VendorCategory, string> = {
  voice: 'badge-voice',
  'agent-assist': 'badge-emotion',
  orchestration: 'badge-orchestration',
  analytics: 'badge-analytics',
};

export const strategicContext = {
  title: 'The Strategic Landscape',
  subtitle: 'Augmenting Avaya + Google CCAI',
  body: `NRMA's existing stack of Avaya (core routing/telephony) and Google CCAI (conversational AI and analytics) is robust. However, legacy platforms often struggle with the agility required for rapid AI deployment. The emerging trend in 2025/2026 is the adoption of AI orchestration layers and specialised point solutions that sit on top of existing CCaaS infrastructure — augmenting rather than replacing.`,
  pillars: [
    {
      icon: '⚡',
      title: 'Agentic Capabilities',
      description:
        'Moving beyond basic FAQs to autonomous execution of tasks — booking a rental car, dispatching a tow truck, or managing an energy billing dispute — by integrating directly with backend APIs.',
    },
    {
      icon: '🎙️',
      title: 'Voice-First AI',
      description:
        'Advanced speech-to-text and generative voice models that eliminate robotic IVR experiences, handling interruptions, overtalk, and complex multi-turn conversations with near-human latency.',
    },
    {
      icon: '🧠',
      title: 'Real-Time Emotion & Coaching',
      description:
        'Systems that analyse customer sentiment and agent behaviour live on the call, providing dynamic compliance checklists, coaching prompts, and empathy nudges without interrupting the conversation.',
    },
  ],
};

export const useCaseMatrix = [
  {
    unit: 'Roadside Assistance',
    useCase: 'Autonomous Triage & Dispatch',
    detail:
      'Voice AI agents that answer instantly 24/7, capture location and vehicle data, assess safety, and autonomously dispatch the nearest service vehicle via API integration — bypassing human triage for standard breakdowns.',
    vendors: ['SoundHound AI', 'PolyAI', 'Cogito (Verint)'],
    vendorIds: ['soundhound', 'polyai', 'cogito'],
  },
  {
    unit: 'Sixt Car Rental',
    useCase: 'Conversational Booking & Fleet Management',
    detail:
      'Voice agents that handle reservations, modifications, and extensions naturally over the phone, integrating directly with inventory systems and handling complex scenarios like one-way rentals or vehicle upgrades.',
    vendors: ['PolyAI', 'Kore.ai'],
    vendorIds: ['polyai', 'kore-ai'],
  },
  {
    unit: 'Holiday Parks & Marine',
    useCase: 'Concierge & Upselling',
    detail:
      'Digital or voice agents managing high-volume seasonal inquiries (availability, amenities, pet policies) and proactively offering upgrades or excursion bookings — including Coral Adventures reef experiences.',
    vendors: ['Cognigy', 'Cresta'],
    vendorIds: ['cognigy', 'cresta'],
  },
  {
    unit: 'Energy Retail',
    useCase: 'Proactive Outbound & Billing Support',
    detail:
      'Predictive AI that identifies customers at risk of bill shock and initiates proactive outbound voice or SMS outreach to arrange payment plans, alongside inbound agents handling routine meter queries and tariff changes.',
    vendors: ['Teneo.ai', 'Balto'],
    vendorIds: ['teneo', 'balto'],
  },
  {
    unit: 'Cross-Portfolio',
    useCase: '100% Interaction Analytics & Auto QA',
    detail:
      'Automatically evaluating every call for compliance, sentiment, and agent performance across all NRMA divisions — providing managers with actionable coaching insights rather than relying on 2-5% random sampling.',
    vendors: ['Observe.AI', 'Cogito (Verint)'],
    vendorIds: ['observe-ai', 'cogito'],
  },
];

export const presalesQuestions = [
  {
    number: '01',
    question: 'Avaya & Google Interoperability',
    detail:
      'How exactly does your platform overlay onto an Avaya core? Can it ingest data from or export analytics to our existing Google CCAI/BigQuery setup?',
  },
  {
    number: '02',
    question: 'Agentic Execution',
    detail:
      'Show us how your AI moves beyond intent recognition to actual task execution — modifying a rental reservation, dispatching a roadside vehicle, or arranging an energy payment plan — via live API calls.',
  },
  {
    number: '03',
    question: 'Latency & Voice Realism',
    detail:
      'For voice vendors: what is your average latency (time to first byte), and how does your system handle a customer interrupting the AI in a stressful situation such as a roadside breakdown?',
  },
  {
    number: '04',
    question: 'Hallucination & Compliance Control',
    detail:
      'How do you guarantee that your generative AI models will not hallucinate pricing details, incorrect terms, or unavailable services? What guardrails exist, and how are they audited?',
  },
];
