// Central content store for the site. Edit copy here to update it everywhere.

export const SITE = {
  name: "Khloe Obiegbu",
  role: "Brand Positioning Strategist",
  tagline: "The Nerdy Strategist",
  email: "hello@khloeobiegbu.com",
  bookingUrl: "/contact",
  shortBio:
    "Khloe Obiegbu is a Brand Positioning Strategist helping startups and growing businesses define their unique market position, communicate it effectively, and attract clients who genuinely value what they offer.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Positioning Lab", href: "/positioning-lab" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Speaking", href: "/speaking" },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Positioning Lab", href: "/positioning-lab" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export const DIFFERENTIATORS = [
  {
    title: "Clarity Before Marketing",
    body: "We identify what truly differentiates your business before building visibility.",
  },
  {
    title: "Strategy Before Content",
    body: "Content becomes effortless once your positioning is clear and decided.",
  },
  {
    title: "Sustainable Brand Growth",
    body: "Build authority that lasts beyond trends, algorithms, and fleeting attention.",
  },
  {
    title: "Collaborative Process",
    body: "No generic templates. Every strategy is built around your unique business reality.",
  },
];

export const SERVICES = [
  {
    slug: "brand-positioning-strategy",
    name: "Brand Positioning Strategy",
    short: "Define exactly where you belong in the market and why customers choose you.",
    body: "Helping businesses define exactly where they belong in the market and why customers should choose them over every alternative — including doing nothing.",
  },
  {
    slug: "messaging-strategy",
    name: "Messaging Strategy",
    short: "Transform positioning into clear, compelling communication.",
    body: "Transforming positioning into compelling communication your whole team can use — from the homepage headline to the sales call.",
  },
  {
    slug: "founder-brand-positioning",
    name: "Founder Brand Positioning",
    short: "Become a trusted, distinctive voice within your industry.",
    body: "Helping founders become trusted voices within their industries, so the personal brand actively pulls the business forward.",
  },
  {
    slug: "positioning-audit",
    name: "Positioning Audit",
    short: "Review your brand assets and surface the gaps holding you back.",
    body: "A structured review of your existing brand assets to identify exactly where your positioning is leaking clarity, trust, and conversions.",
  },
  {
    slug: "brand-clarity-session",
    name: "Strategic Brand Clarity Session",
    short: "A focused working session for founders who need direction now.",
    body: "Focused, intensive sessions for founders seeking direction — leave with a clear position, language, and next steps in a single engagement.",
  },
  {
    slug: "market-differentiation",
    name: "Market Differentiation Consulting",
    short: "Find the angle competitors can't easily copy.",
    body: "Deep competitive analysis to find and defend the angle that makes copying you a losing strategy for everyone else.",
  },
];

export const PROCESS = [
  { step: "01", title: "Discover", body: "Understand your business, market, and the real reason customers buy." },
  { step: "02", title: "Research", body: "Map competitors, audiences, and category conventions worth breaking." },
  { step: "03", title: "Differentiate", body: "Isolate the difference that actually matters to the right people." },
  { step: "04", title: "Position", body: "Decide the position you'll own — clearly and deliberately." },
  { step: "05", title: "Communicate", body: "Translate the position into messaging your team can run with." },
  { step: "06", title: "Scale", body: "Build authority and content systems that compound over time." },
];

export const RESULTS = [
  "Clearer messaging",
  "Better-fit clients",
  "Stronger brand recognition",
  "Easier content creation",
  "Increased trust",
  "More consistent growth",
];

export const BELIEFS = [
  { title: "Visibility Is Not Enough", body: "Attention without a position is rented, not owned." },
  { title: "Differentiation Drives Growth", body: "Being different is more profitable than being louder." },
  { title: "Strategy Creates Confidence", body: "Clarity removes the second-guessing from every decision." },
  { title: "Great Brands Are Intentional", body: "Memorable brands are designed, never accidental." },
  { title: "Positioning Shapes Perception", body: "You either decide how you're seen, or the market decides for you." },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "why-most-businesses-sound-the-same",
    title: "Why Most Businesses Sound The Same",
    category: "Brand Strategy",
    excerpt:
      "If your customers can swap your name for a competitor's and the sentence still works, you have a positioning problem.",
    readTime: "6 min read",
    date: "May 2026",
    body: [
      "Run a quick test. Take your homepage headline and replace your company name with your biggest competitor's. Does the sentence still make sense? For most businesses, it does — perfectly. That's the tell. You haven't said anything only you could say.",
      "It happens for an understandable reason: it feels safe to describe what you do in the language everyone in your category already uses. \"Innovative.\" \"Customer-focused.\" \"End-to-end solutions.\" These words feel professional, but they're wallpaper. Buyers have learned to read straight past them because every option says the same thing.",
      "The fix isn't louder adjectives — it's a decision. Decide the one thing you want to be known for, the thing a specific customer would genuinely miss if you disappeared. Then build your language around that, even at the cost of sounding less like everyone else. Especially at that cost.",
      "Sounding different isn't a creative exercise. It's the visible result of having actually chosen a position. When the choice is real, the words take care of themselves.",
    ],
  },
  {
    slug: "visibility-without-positioning-is-expensive",
    title: "Visibility Without Positioning Is Expensive",
    category: "Market Positioning",
    excerpt:
      "More reach amplifies whatever you already are. If the message is unclear, you're paying to confuse more people, faster.",
    readTime: "5 min read",
    date: "May 2026",
    body: [
      "Visibility is an amplifier, not a strategy. It takes whatever message you already have and pushes it in front of more people. If that message is clear and distinct, reach compounds your advantage. If it's vague, you're simply paying to confuse a larger audience.",
      "This is why so many businesses pour money into content and ads and feel like they're shouting into a void. The channels work fine. The problem sits upstream: there's no sharp idea for the audience to grab onto, so attention arrives and then leaks straight back out.",
      "Before scaling spend, get honest about conversion of attention into memory. When someone hears about you once, can they describe what you're for a week later? If not, more impressions won't save you — they'll just cost more.",
      "Positioning is the cheapest growth lever you have, because it makes every expensive lever work harder. Fix the message first; then turn up the volume.",
    ],
  },
  {
    slug: "building-a-brand-clients-remember",
    title: "Building a Brand Clients Remember",
    category: "Founder Branding",
    excerpt:
      "Memorability isn't about being everywhere. It's about meaning one specific thing in your customer's mind.",
    readTime: "7 min read",
    date: "Apr 2026",
    body: [
      "Memorable brands aren't the ones with the biggest presence. They're the ones that own a single, specific idea in the customer's mind. When a need comes up, one name surfaces first — not because it shouts loudest, but because it has come to mean exactly that thing.",
      "The mistake founders make is trying to be remembered for everything. Full-service. Any industry. Every use case. But a mind can't hold a brand that stands for ten things — it rounds you down to nothing. Breadth feels safe and reads as forgettable.",
      "Pick the corner of the market you want to own and repeat it with discipline. Say it on the homepage, on sales calls, in your content, in how you onboard. Repetition isn't boring; it's how meaning gets installed.",
      "You'll feel like you're saying the same thing too often long before your audience has heard it enough. That gap is exactly where memorable brands are built.",
    ],
  },
  {
    slug: "the-hidden-cost-of-generic-messaging",
    title: "The Hidden Cost of Generic Messaging",
    category: "Content Strategy",
    excerpt:
      "Generic messaging doesn't lose loudly. It quietly raises your cost of every lead, every sale, every hire.",
    readTime: "5 min read",
    date: "Apr 2026",
    body: [
      "Generic messaging rarely fails dramatically. There's no single lost deal you can point to. Instead it taxes everything quietly: leads cost a little more, sales cycles run a little longer, and the wrong-fit prospects take up just enough room to crowd out the right ones.",
      "Because the cost is spread thin, it's easy to misdiagnose. Teams respond by doing more — more content, more outreach, more discounting — when the real issue is that the message never made the choice obvious for the right buyer.",
      "Specific messaging does the opposite. It repels the wrong people early (a feature, not a bug) and pulls the right ones in already half-convinced. Your funnel gets shorter because the qualifying happened in the words themselves.",
      "If your messaging is trying not to exclude anyone, it's quietly costing you with everyone. Clarity has a price — being ignorable is more expensive.",
    ],
  },
  {
    slug: "positioning-before-marketing",
    title: "Positioning Before Marketing: The Growth Shortcut",
    category: "Business Growth",
    excerpt:
      "The fastest way to make marketing work is to stop marketing for a week and decide what you actually stand for.",
    readTime: "8 min read",
    date: "Mar 2026",
    body: [
      "It sounds backwards, but the fastest way to improve your marketing is often to pause it. Not forever — just long enough to answer the questions every campaign silently assumes you've already settled: who is this for, what do we want to be chosen for, and why us over the obvious alternatives?",
      "Most teams skip straight to execution because execution feels like progress. But tactics built on an undecided position just produce motion. You ship more and learn less, because nothing is anchored to a clear point of view.",
      "Spend the week getting specific. Interview your best customers and listen for the exact words they use. Map what competitors claim and find the space they've left open. Then commit to a position in a single, plain sentence the whole team can repeat.",
      "Once that sentence exists, marketing gets dramatically easier — content has a spine, ads have an angle, and sales have a story. Positioning isn't a delay before growth. It's the shortcut.",
    ],
  },
  {
    slug: "consumer-psychology-of-choice",
    title: "The Consumer Psychology of Choosing You",
    category: "Consumer Psychology",
    excerpt:
      "Customers don't choose the best option. They choose the option they understand fastest. Positioning wins the speed game.",
    readTime: "6 min read",
    date: "Mar 2026",
    body: [
      "We like to imagine customers carefully weighing every option and selecting the best one. In reality, people are cognitive minimalists. Faced with too many similar choices, they don't optimize — they pick the option they can understand fastest, or they delay deciding at all.",
      "This changes what 'winning' means. You're not competing only on quality; you're competing on clarity. The brand that can be grasped in one sentence has a structural advantage over the objectively-better brand that takes three paragraphs to explain.",
      "Good positioning works with this instinct instead of against it. It hands the buyer an easy mental shortcut: this is what we are, this is who it's for, this is when to choose us. You're reducing the effort it takes to say yes.",
      "Don't make people work to understand why you matter. The mind rewards whatever it can file quickly — so make yourself easy to file.",
    ],
  },
];

export const LAB_CATEGORIES = [
  "Brand Strategy",
  "Founder Branding",
  "Market Positioning",
  "Content Strategy",
  "Business Growth",
  "Consumer Psychology",
  "Marketing Analysis",
];

export const CASE_STUDIES = [
  {
    slug: "saas-startup-repositioning",
    client: "B2B SaaS Startup",
    industry: "Software",
    headline: "From \"another project tool\" to the category for remote-first teams",
    challenge:
      "A capable product was lost in a crowded category. Sales calls kept ending in \"how is this different from X?\" — a question the team couldn't answer in one sentence.",
    discovery:
      "Research revealed their happiest customers were all distributed teams who valued async-first workflows — a segment competitors served as an afterthought.",
    solution:
      "We narrowed the position to async-first remote teams and rebuilt messaging around that single, ownable promise.",
    results: ["41% lift in demo-to-trial", "Halved sales-call objection rate", "Clear, repeatable pitch for the whole team"],
  },
  {
    slug: "founder-personal-brand",
    client: "Fintech Founder",
    industry: "Financial Services",
    headline: "Turning a quiet founder into a category voice",
    challenge:
      "A brilliant founder with deep expertise was invisible online and indistinguishable from louder, less credible peers.",
    discovery:
      "We found a strong, contrarian point of view buried in how she actually talked about the industry in private.",
    solution:
      "Built a founder positioning platform and content pillars around that POV, with a consistent language system.",
    results: ["3x inbound speaking invites", "Featured in two industry publications", "Pipeline now warmed by content"],
  },
  {
    slug: "service-business-clarity",
    client: "Boutique Creative Agency",
    industry: "Professional Services",
    headline: "Saying no to everyone made them the obvious yes for someone",
    challenge:
      "A talented agency competed on price because they looked like every other 'full-service' shop.",
    discovery:
      "Their best work and best margins came from a single niche they'd been treating as just one of many services.",
    solution:
      "Repositioned the agency around that niche, with proof, language, and pricing to match the new specialism.",
    results: ["Average project value up 60%", "Inbound leads pre-qualified by niche", "Stopped competing on price"],
  },
];

export const SPEAKING_TOPICS = [
  { title: "Brand Positioning", body: "How to find and own a position competitors can't easily copy." },
  { title: "Strategic Marketing", body: "Why strategy, not tactics, is the real growth lever." },
  { title: "Founder Visibility", body: "Building a founder brand that pulls the business forward." },
  { title: "Market Differentiation", body: "Standing out in categories where everyone sounds the same." },
  { title: "Building Distinctive Brands", body: "The systems behind brands people actually remember." },
];

export const RESOURCES = [
  { title: "Positioning Workbook", body: "A guided workbook to define your position step by step.", type: "Workbook" },
  { title: "Brand Clarity Checklist", body: "Audit your brand against the signals of a clear position.", type: "Checklist" },
  { title: "Messaging Framework Guide", body: "Turn your positioning into messaging that converts.", type: "Guide" },
  { title: "Founder Positioning Guide", body: "Build a personal brand around a distinctive POV.", type: "Guide" },
  { title: "Competitor Analysis Template", body: "Map the landscape and find your white space.", type: "Template" },
];

export const TESTIMONIALS = [
  {
    quote:
      "I came in thinking I had a marketing problem. I left realizing I'd never actually decided what we stood for. Khloe fixed the real thing.",
    name: "Startup Founder",
    title: "SaaS, Lagos",
  },
  {
    quote:
      "Our messaging finally sounds like us — and only us. Sales calls are easier because the difference is obvious now.",
    name: "Business Owner",
    title: "Professional Services",
  },
  {
    quote:
      "Khloe is genuinely nerdy about strategy in the best way. The research she brought changed how we see our own market.",
    name: "Marketing Lead",
    title: "Consumer Brand",
  },
  {
    quote:
      "Within a quarter of repositioning, we were attracting the exact clients we wanted instead of convincing the wrong ones.",
    name: "CEO",
    title: "Growth-stage Company",
  },
  {
    quote:
      "She made me sound like the expert I already was. My founder brand finally matches my actual expertise.",
    name: "Fintech Founder",
    title: "Financial Services",
  },
  {
    quote:
      "The clarity session alone was worth more than a year of agency retainers. We knew exactly what to do next.",
    name: "Co-founder",
    title: "Health Tech",
  },
];
