# gobot-board-agents

A collection of 25 plug-and-play board agents for the [gobot multi-agent Telegram bot framework](https://github.com/WaggaM/rubyAI_Bot).

Each agent is a TypeScript file with a rich, opinionated system prompt designed to genuinely embody its persona or professional role. Drop any agent into your gobot project and get an immediately useful, character-driven AI board member.

---

## What Is This?

The gobot framework allows you to run multiple AI agents in a Telegram group, each assigned to a topic thread. This repository is a curated library of pre-built agents across four categories:

| Category | Agents | Count |
|---|---|---|
| Professional Board | Legal, Operations, People & Culture, Tech, Customer, Investor, Psychologist, Futurist | 8 |
| Wisdom & Spiritual | Rabbi, Priest, Buddhist Monk | 3 |
| Historical Figures | Elon Musk, Donald Trump, Warren Buffett, Albert Einstein, Henry Ford, Steve Jobs, Madam C.J. Walker, John D. Rockefeller, P.T. Barnum, Estee Lauder, Sakichi Toyoda, Genghis Khan, Sun Tzu | 13 |
| Pop Culture | Bart Simpson | 1 |

---

## Agent Directory

| File | Name | Specialty | Reasoning |
|---|---|---|---|
| legal.ts | Legal Agent (CLO/General Counsel) | Contract review, IP, compliance, employment law | CoT |
| operations.ts | Operations Agent (COO) | Systems, workflows, SOPs, bottlenecks, OKRs | CoT |
| people.ts | People & Culture Agent (CHRO) | Hiring, culture, compensation, team dynamics | adaptive |
| tech.ts | Tech Agent (CTO) | Architecture, stack selection, build vs buy | ToT |
| customer.ts | Customer Agent (CCO) | CX, churn, NPS, onboarding, voice of customer | RoT |
| investor.ts | Investor Agent (VC Perspective) | Fundraising, valuation, term sheets, cap table | ToT |
| psychologist.ts | Psychologist Agent | Cognitive biases, decision-making, team dynamics | CoT |
| futurist.ts | Futurist Agent | Trends, disruption, scenario planning | ToT |
| rabbi.ts | Rabbi (Ethics & Wisdom) | Ethics, wisdom traditions, stakeholder impact | extended |
| priest.ts | Priest (Grace & Stewardship) | Christian ethics, servant leadership, stewardship | extended |
| buddhist-monk.ts | Buddhist Monk (Mindfulness & Impermanence) | Non-attachment, middle way, beginners mind | extended |
| elon-musk.ts | Elon Musk (First Principles & 10x Thinking) | First principles, 10x ambition, mission obsession | ToT |
| donald-trump.ts | Donald Trump (The Art of the Deal) | Negotiation, branding, leverage, deal-making | adaptive |
| bart-simpson.ts | Bart Simpson (Chaos & Creative Disruption) | Cutting through BS, irreverent honesty, creative disruption | adaptive |
| warren-buffett.ts | Warren Buffett (Value & Patience) | Value investing, moats, patience, long-term thinking | CoT |
| albert-einstein.ts | Albert Einstein (Thought Experiments & Simplicity) | Thought experiments, simplicity, questioning assumptions | ToT |
| henry-ford.ts | Henry Ford (Systems & Scale) | Systemisation, waste elimination, democratisation | CoT |
| steve-jobs.ts | Steve Jobs (Design Thinking & Saying No) | Product design, simplicity, saying no, taste | RoT |
| madam-cj-walker.ts | Madam C.J. Walker (Entrepreneurship Against All Odds) | Underserved markets, community-first, resilience | adaptive |
| john-rockefeller.ts | John D. Rockefeller (Vertical Integration & Ruthless Efficiency) | Cost control, vertical integration, long game | CoT |
| pt-barnum.ts | P.T. Barnum (Showmanship & Spectacle) | Marketing, spectacle, audience psychology | adaptive |
| estee-lauder.ts | Estee Lauder (Premium Brand & Word of Mouth) | Luxury branding, quality, word of mouth | RoT |
| sakichi-toyoda.ts | Sakichi Toyoda (Kaizen & 5 Whys) | Continuous improvement, root cause, waste elimination | CoT |
| genghis-khan.ts | Genghis Khan (Swift Action & Adaptive Strategy) | Speed, meritocracy, competitive intelligence | ToT |
| sun-tzu.ts | Sun Tzu (The Art of War Applied to Business) | Competitive strategy, positioning, indirect approach | extended |

---

## How to Install

### 1. Copy the agent file

Copy the .ts file(s) you want into your gobot project src/agents/ directory.

### 2. Register in your agent config

In your gobot project agent configuration file (typically src/agents/base.ts or wherever getAgentConfig lives), add a case to the switch statement:

    case "legal":
      return legalConfig;

And add a mapping in your topicAgentMap (mapping Telegram topic thread ID to agent name):

    const topicAgentMap: Record<number, string> = {
      // ... existing mappings
      123: "legal",   // Replace 123 with your actual topic thread ID
    };

### 3. Export from index

Add the export to your src/agents/index.ts:

    export { default as legal } from "./legal";

### 4. Create the Telegram topic thread

In your Telegram group, create a new topic thread (e.g., "Legal Counsel") and note the thread ID. Use that ID in your topicAgentMap.

---

## Reasoning Styles

| Style | Description |
|---|---|
| CoT | Chain of Thought -- walks through problems step by step |
| ToT | Tree of Thought -- explores multiple paths before recommending one |
| RoT | Relevance of Thought -- connects relevant patterns and data |
| adaptive | Adapts reasoning style to the type of question |
| extended | Deep, reflective reasoning for philosophical or ethical questions |

---

## Contributing

Agents are welcome via pull request. To maintain quality:

- System prompts should be substantive (not thin/generic)
- Include specific frameworks, questions, and output formats
- The agent should genuinely embody the persona or role
- Add an entry to this README agent directory table
- Export from agents/index.ts

---

## Related

- [gobot framework (rubyAI_Bot)](https://github.com/WaggaM/rubyAI_Bot) -- the multi-agent Telegram bot framework these agents are built for
