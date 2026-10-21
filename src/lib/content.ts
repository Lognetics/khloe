// Central content store for the site. Edit copy here to update it everywhere.

export const SITE = {
  name: "Khloe Obiegbu",
  logo: "Khloe SaaS Strategist",
  role: "Building GTM Expertise",
  tagline: "Building GTM Expertise",
  email: "khloeobiegbu@gmail.com",
  instagram: "https://www.instagram.com/khloe_obiegbu",
  instagramHandle: "khloe_obiegbu",
  linkedin: "https://www.linkedin.com/in/onyinye-obiegbu-",
  shortBio:
    "Exploring what it takes to turn a SaaS launch into repeatable revenue — how customers discover, adopt, pay for, and stay with software products.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Field notes", href: "/field-notes" },
  { label: "Resources", href: "/resources" },
  { label: "Work with me", href: "/work-with-me" },
];

export const FOOTER_LINKS = NAV_LINKS;

/* ---------------------------------------------------------------- HOME */

export const EXPLORING = [
  {
    title: "The founder's reality",
    body: "What founders say, what they struggle with, and what happens behind the scenes after launch.",
    image: "explore-founder.jpg",
  },
  {
    title: "The customer side",
    body: "Why people switch, hesitate, adopt, pay, stay, or keep using what they already know.",
    image: "explore-customer.jpg",
  },
  {
    title: "The GTM system",
    body: "How product, market, acquisition, activation, retention, and monetization connect.",
    image: "explore-system.jpg",
  },
];

export const PROOF = [
  { value: "270+", label: "Businesses onboarded at Netics AI in 2 months" },
  { value: "MD", label: "Managing Director at Lognetics" },
  { value: "2021 → now", label: "Banking, copywriting, brand strategy, then GTM" },
];

export const SYMPTOMS = [
  { stage: "Acquisition", question: "Why aren't people buying?" },
  { stage: "Activation", question: "Why aren't users activating?" },
  { stage: "Retention", question: "Why are customers leaving?" },
  { stage: "Monetization", question: "Why don't early sales repeat?" },
];

export const METHOD = [
  { title: "Observe", body: "What customers actually do, not what we assume." },
  { title: "Hypothesize", body: "Name the constraint and why it might exist." },
  { title: "Experiment", body: "Test the right intervention, not more activity." },
  { title: "Measure", body: "Activation, repeat usage, revenue. Not just views." },
  { title: "Decide", body: "Keep what the evidence supports. Change the rest." },
];

/* --------------------------------------------------------------- ABOUT */

export const ABOUT_INTRO =
  "Where do I even start??? First of all, tech was never in the plans for my life, I still look back and wonder how I got here, like seriously!!!!! Who knew I'd be THIS girlie.";

export const ABOUT_CHAPTERS = [
  {
    marker: "2021",
    title: "The bank job",
    paras: [
      "After University, I got a bank job in 2021 because at the moment that was what was available, even though I knew that wasn't a long term thing, I'm sure my fellow Nigerians know what I'm talking about.",
      "I won't say that was a waste of my time because it honestly wasn't, that was the start of me coming out of my shell, back in uni anyone who knew me would say I was a complete loner and introvert, and yes I still wonder how I made friends because indeed I was.",
    ],
  },
  {
    marker: "2024",
    title: "Switching lanes",
    paras: [
      "So that job was a good start, and then I quit because I wanted freedom, even though I didn't know what that meant. In 2024 I completely switched lanes and went into copywriting, and I must say I've always been a writer, used to write short movies, and even as a songwriter, so it came pretty natural to me.",
    ],
  },
  {
    marker: "2025",
    title: "Hold onnnn…",
    paras: [
      "Fast forward 2025, I said hold onnnn, why do people even need copywriting, then I geared into the whole branding and marketing strategy phase. I was curious about the whole idea of psychology and using content to make sales.",
    ],
  },
  {
    marker: "First client in tech",
    title: "Learning on the job",
    paras: [
      "I wasn't getting as many clients as I'd hoped though, so againnnn, I decided to step out of my comfort zone and boyyyyy, that was how the whole tech thing began. I met a founder, my first client in tech, he was so sweet and kind even though I'd never had experience in tech.",
      "I was learning on the job, bringing in my 2 years of knowledge about marketing and copywriting but trying to fit it into the tech space. There was a lot of market research, testing strategies, speaking with potential leads trying to pitch the product, I was soooooo shyyyy, but repetition does something to your brain chemistry I must say.",
      "Makes you want to confront the next hurdle because now you know what success and failure feel like, you're bolder and want to do more.",
    ],
  },
  {
    marker: "Lognetics",
    title: "Marketing Director → Managing Director",
    paras: [
      "Fast forward againnnnn to the best job of my life, working as a marketing director for 6 months and now managing director at Lognetics. Honestly when I was handed this role, I wasn't so sure of myself and if I could even bring anything to the table.",
      "But when you're surrounded with people who are intentional and want you to grow with them, everything just kinda works out. From there I got obsessed with understanding the tech ecosystem, started having proper talks with actual founders.",
    ],
  },
  {
    marker: "Now",
    title: "Down the GTM rabbit hole",
    paras: [
      "Did so much market research my brain and eyes practically fell out, but guess I'm a sucker for knowledge so I dug deep inside the rabbit hole and ended up at GTM. I understood the whole end to end process but I wanted to know what breaks down in between.",
      "There's so many frameworks about the individual parts in tech, but nothing really tells you what to do when some parts don't work, and how do you really turn your startup into a scalable business?",
    ],
  },
];

export const FOR_FREE = [
  "More marketing isn't always the answer.",
  "Customer behaviour matters more than founder assumptions.",
  "A launch is not proof of repeatable demand.",
  "Acquisition, activation, retention, and monetization cannot be treated as completely separate problems.",
  "The goal is to find the constraint and test the right intervention.",
];

export const ABOUT_CLOSING = [
  "I'm currently part of the team building Netics AI, and I'm testing all I'm learning in real time, and still actively helping other founders figure out their GTM strategy and all the messy in betweens, because trust me, there will always be.",
  "Glad to have you on this journey with me, if you're building as well, I hope I can guide you in the right direction too.",
];

/* --------------------------------------------------------- FIELD NOTES */

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string; label?: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: { label?: string; text: string }[] }
  | { type: "note"; text: string }
  | { type: "callout"; text: string };

export type FieldNote = {
  slug: string;
  series: string;
  kind: string;
  title: string;
  dek: string;
  image: string;
  blocks: Block[];
};

export const FIELD_NOTES: FieldNote[] = [
  {
    slug: "founder-diaries-001",
    series: "Founder Diaries, Entry 001",
    kind: "Founder interviews",
    title: "The messy middle between building a product and building a business",
    dek: "What founders told me happens after the launch announcement goes out and they have to face the market.",
    image: "lab-featured.jpg",
    blocks: [
      { type: "h2", text: "01. How I ended up in these conversations" },
      { type: "p", text: "I knew I wanted to work with founders, but before I went ahead to package an offer and start telling them how I could help them grow, I wanted to get something first." },
      { type: "p", text: "What were they actually struggling with? Not what articles or social media said and not what I assumed they needed based on my experience in branding, marketing, and strategy, I wanted to hear it from the people living through it." },
      { type: "p", text: "I wanted to understand what happened after the idea, after the product was built, after the launch announcement had gone out, and the founder had to face the market." },
      { type: "p", text: "So I started researching." },
      { type: "p", text: "I legit created a spreadsheet and began building a list of founders I wanted to speak with. I looked for companies, studied what they were building, and reached out to founders individually on LinkedIn." },
      { type: "p", text: "One by one, some never responded as expected, but some were surprisingly open with me. They didn't just give me a neat explanation of their product or a rehearsed pitch about their vision, they took me into the actual work of building a company. They talked about the decisions they had made, the things that had gone wrong, the things they were still trying to understand, and the realities behind what people could see from the outside." },
      { type: "p", text: "And I started taking notes." },
      { type: "p", text: "Not just notes about their products, target markets, or acquisition channels. I was paying attention to how they talked about their experiences. Lots of times the conversation moved away from my prepared questions because there was something more important they wanted me to understand." },
      { type: "p", text: "One founder walked me through the experience of trying to build a real estate platform while dealing with a team that wasn't being paid consistently. Finding a team was difficult, and progress was slower because, as the founder explained, when you're not paying people, you can't reasonably expect to dictate their time." },
      { type: "p", text: "Another described how a designer had gone silent after weeks of waiting. A replacement designer started over rather than continuing the work, and the founder eventually decided to build the MVP without designers for the time being." },
      { type: "p", text: "And then there was the founder who, when I asked what a good day looked like, gave me an answer I kept thinking about afterward:" },
      { type: "quote", text: "A good day. You don't die. Just don't die." },
      { type: "p", text: "It was such a striking way to describe the experience of running a company. I had gone into these convos looking for problems I could eventually build an offer around, but the more founders I spoke with, the more I realized that the problem wasn't always what I expected it to be." },
      { type: "p", text: "Sometimes it was acquisition, or economics of the market. Sometimes the product needed to change and even funding was limiting what the team could do. Sometimes the founder was trying to understand whether the traction they had worked so hard to get was actually leading anywhere sustainable." },
      { type: "p", text: "And often, these things were connected. That's where my interest in the gap between product launch and repeatable revenue really began." },
      { type: "p", text: "I stopped thinking about GTM as simply helping a company put itself out there and started becoming more interested in the whole journey: what happens between building a product, finding the right customers, getting them to experience its value, keeping them, making money from that value, and figuring out how to repeat the process." },
      { type: "p", text: "I hadn't arrived at all the answers. I still haven't, but I had found a much better set of questions, and that was enough to keep going." },

      { type: "h2", text: "02. The frustrations that kept showing up" },
      { type: "p", text: "After several conversations, I started noticing that the frustrations weren't identical, but there were patterns." },
      { type: "p", text: "Different industries. Different products. Different founders. Yet some of the same pressures kept appearing beneath the surface:" },
      { type: "callout", text: "The exhaustion of trying to make things happen with limited resources." },
      { type: "p", text: "Building a company is often described in terms of vision, innovation, and ambition. Those things were present in these conversations, too, but so was the reality of trying to execute that vision without enough money, time, or reliable help." },
      { type: "p", text: "I kept thinking about how much of the founder's energy was going into simply getting the business to the next stage, and when you're the founder, you don't always get to focus on one problem at a time." },
      { type: "p", text: "Several founders were building products around problems they genuinely believed mattered. They could explain the problem. They could describe the people experiencing it. They could tell me why the current way of doing things was inefficient, expensive, or frustrating." },
      { type: "p", text: "But knowing that a problem exists doesn't automatically make it a viable business." },
      { type: "p", text: "One founder building an education platform explained that the technology could technically connect students with institutions, but the economics of the market made the original approach difficult to sustain. The institutions that needed help attracting students were not necessarily the ones with the greatest ability to pay. Trust, institutional reputation, and students' purchasing power all complicated the picture." },
      { type: "p", text: "The problem was bigger than building a platform that worked. That conversation stayed with me because it challenged a simple assumption: if you solve a real problem, the business should work." },
      { type: "p", text: "Sometimes you can be solving a real problem and still have a difficult business model. Sometimes the market needs more education. Sometimes the customer who experiences the pain isn't the person who pays. Sometimes the cost of reaching the customer makes the opportunity harder to pursue than it first appeared." },
      { type: "p", text: "I began to see how important it is to investigate not only whether a problem exists, but also how that problem connects to willingness to pay, customer acquisition, and the ability to sustain the business." },
      { type: "p", text: "One of the more interesting patterns was the tension between activity and actual progress." },
      { type: "p", text: "A company can have signups, it can have website traffic, can even have people talking about the product or even have thousands of users. But what does that activity mean for the business?" },
      { type: "p", text: "In one conversation, a founder described having nearly 4,000 students using a platform monthly. The company had experienced substantial growth in usage, yet the founder was still questioning whether its direction was economically sustainable. The team was reconsidering its approach rather than assuming that growing usage meant the business model was already working." },
      { type: "p", text: "Another founder described using analytics across acquisition channels to identify what was actually driving growth. Social media posting was reduced after the team found it wasn't bringing the traffic they needed. Their efforts were redirected toward the channels that were working better." },
      { type: "p", text: "I noticed a difference between these situations and the way growth is sometimes discussed online. There's a lot of pressure to keep doing more: publish more content, get more visibility, attract more users, launch more features." },
      { type: "p", text: "But these founders were confronting a more difficult question. Which of these activities is actually moving the business forward? I started to understand why measuring growth is not just about reporting numbers. It is about making better decisions with them." },
      { type: "p", text: "There was another kind of frustration that was harder to quantify: the willingness to reconsider a direction after investing so much in it." },
      { type: "p", text: "One founder described changing the original approach after realizing that the market economics did not support the business they had initially imagined. They had data, traction, and a product, but they were still working toward a more sustainable direction." },
      { type: "p", text: "Another founder spoke about a product that had evolved through different ideas and iterations as they learned more about the market." },
      { type: "p", text: "These decisions aren't always easy to make. A founder has invested time, money, energy, and sometimes their reputation in a particular vision. Changing direction means admitting that what looked promising earlier may not be the best path forward now." },
      { type: "p", text: "I don't think every pivot is a sign of failure, and I don't think every founder needs to change direction. But I noticed how important it is to remain willing to question assumptions, even after a great deal of work has gone into them." },
      { type: "p", text: "The product is not the goal in itself, the product is supposed to help build a business that works, and sometimes protecting the business means changing the product, the audience, or the approach." },

      { type: "h2", text: "03. Decisions they make differently now" },
      { type: "p", text: "In a lot of these convos, what I found were decisions they had to revisit, trade-offs they had learned from, and assumptions that became harder to defend once they encountered the market." },
      { type: "p", text: "These are the lessons I took from those moments, rather than a claim that every founder explicitly called their decisions regrets." },
      { type: "h3", text: "Moving quickly can still be expensive" },
      { type: "p", text: "One founder described trying to speed up a process because the company was working toward a launch deadline; they paid extra to accelerate an administrative requirement, expecting the product to be ready sooner. But the app took roughly three months longer than expected to go live." },
      { type: "p", text: "He reflected on the things nobody tells you when you're trying to get a product out on time: you can spend money trying to save time and still find yourself waiting." },
      { type: "p", text: "The pressure to launch is understandable. You want the product out there, you want people to use it, you want to stop building in isolation and start learning from the market." },
      { type: "p", text: "The lesson I took was not to delay launches unnecessarily, it was to understand dependencies better, make room for uncertainty, and avoid treating every delay as something money alone can solve." },
      { type: "h3", text: "Building what is possible isn't the same as building what is economically viable" },
      { type: "p", text: "Who experiences the problem? Who has the authority to buy? Who has the budget? What does it cost to reach them? Can the company deliver the value and still make enough money to sustain itself?" },
      { type: "p", text: "Those questions need answers alongside product development, not only after a product has been built." },
      { type: "h3", text: "More visibility isn't automatically better marketing" },
      { type: "p", text: "This challenged the version of marketing advice that simply tells businesses to be more visible." },
      { type: "p", text: "Visibility matters, but its value depends on what it produces. If a channel attracts people who never become relevant prospects, increasing activity may not solve the actual problem." },
      { type: "p", text: "I took away a question I want to keep asking:" },
      { type: "callout", text: "What outcome are we expecting this activity to produce, and what evidence would tell us whether it is working?" },
      { type: "p", text: "That is a much more useful starting point than assuming that every business needs to post more." },
      { type: "h3", text: "Traction can make it harder to ask whether the business is working" },
      { type: "p", text: "This was perhaps the most important decision-making lesson for me." },
      { type: "p", text: "When a product has users, it is tempting to interpret that as confirmation that the business is heading in the right direction. But one founder described continuing to question the company's direction even after reaching thousands of monthly users." },
      { type: "p", text: "I found that interesting because traction can create its own pressure. Once people are using the product, there is an expectation to keep growing what already exists. It can feel counterintuitive to question the model when there are visible signs of progress." },
      { type: "p", text: "But growth and sustainability are not interchangeable." },
      { type: "p", text: "The question is not only whether more people are using the product, it's whether the company is learning enough about those users, delivering value, and finding an economically sustainable way to keep serving them." },

      { type: "h2", text: "04. What they're still trying to figure out after launch" },
      { type: "p", text: "They are no longer only asking whether the idea is good or whether the product can be built but trying to understand what the market is telling them and what to do with that information." },
      { type: "h3", text: "“Are we reaching the right people?”" },
      { type: "p", text: "Several convos pointed toward the difficulty of finding the right customer, not simply finding more customers." },
      { type: "p", text: "The underlying question was the same: who is most likely to get value from this product, and how do we reach them efficiently?" },
      { type: "p", text: "I started seeing customer acquisition less as a volume problem and more as a question of fit. More leads are useful only if they are the right leads. More signups are useful only if those users have a reason to adopt the product and continue using it." },
      { type: "h3", text: "“How do we get people to trust us enough to use this?”" },
      { type: "p", text: "For some businesses, it was about convincing customers to use a new platform. For others, it was about getting institutions, vendors, or service providers to participate in a system that required them to change familiar ways of working." },
      { type: "p", text: "These are different industries, but both reveal something important: adoption is not just about whether a product has useful features." },
      { type: "p", text: "People need a reason to trust it. They need to believe that using it is worth the risk, effort, or disruption involved." },
      { type: "p", text: "For some products, that might mean better proof, clearer onboarding, or a more reliable experience. For others, it might require education, partnerships, or a different way of entering the market." },
      { type: "p", text: "The right solution depends on what is making customers hesitate." },
      { type: "h3", text: "“What should we improve first?”" },
      { type: "p", text: "Founders often have more potential improvements than they have resources to execute them." },
      { type: "p", text: "When the team is small and resources are limited, every feature competes with something else: customer conversations, sales, onboarding, support, or the work required to improve the existing experience." },
      { type: "p", text: "The question is what needs to be improved now, and what evidence supports that decision." },
      { type: "p", text: "I began to see how easily a team could stay busy building without knowing whether the next feature would address the main reason customers weren't adopting or paying." },
      { type: "h3", text: "“How do we make this sustainable?”" },
      { type: "p", text: "The business needs to understand what customers value, who is willing to pay for it, what it costs to acquire and serve them, and whether customers continue receiving enough value to stay." },
      { type: "p", text: "And if the answers aren't encouraging, the founder needs to decide what to change." },
      { type: "h3", text: "“How do we know what's actually working?”" },
      { type: "p", text: "It isn't enough to know that signups increased, you want to know where they came from, whether the users activated, whether they received value, and whether that value translated into revenue." },
      { type: "p", text: "It isn't enough to know that a feature was launched, you want to know whether it changed user behaviour." },
      { type: "p", text: "And it isn't enough to know that a sales channel produced a customer, you want to understand whether you can repeat that result without starting from scratch every time." },
      { type: "p", text: "I started to understand the post-launch stage as a continuous process of learning. Founders are trying to reduce uncertainty, but they have limited time and money to do it. The better they can identify the question that matters most, the better they can decide what to test next." },
    ],
  },
  {
    slug: "customer-behaviour-notes",
    series: "Customer Behaviour Notes",
    kind: "Customer behaviour",
    title: "What makes people choose a product, trust it, and keep using it?",
    dek: "Noticing a product is only the beginning. Six things I'm paying closer attention to on the customer side.",
    image: "explore-customer.jpg",
    blocks: [
      { type: "p", text: "We often focus on getting people to notice a product, but noticing it is only the beginning. They still have to believe it can help them, trust it enough to try it, fit it into their existing lives, and eventually decide it's worth paying for." },
      { type: "p", text: "Here are a few things I'm paying closer attention to." },
      { type: "h2", text: "01. People aren't buying features, they're trying to get somewhere." },
      { type: "p", text: "A customer might say they want an AI tool, a dashboard, or an easier way to manage their work, but underneath that request is a desired outcome." },
      { type: "p", text: "They want to save time, make fewer mistakes, stop doing repetitive work, feel more in control and get something done without the usual stress." },
      { type: "p", text: "That distinction matters, if we only listen to what customers say they want, we might build the feature and still miss the problem." },
      { type: "note", text: "Understand what a person is trying to accomplish before deciding what to sell them." },
      { type: "h2", text: "02. Switching is harder than we sometimes think." },
      { type: "p", text: "People already have routines, they use familiar tools, spreadsheets, manual processes, and workarounds they've learned to live with. Switching means learning something new, changing habits, and risking disruption." },
      { type: "p", text: "So you need to ask:" },
      { type: "callout", text: "Is it better enough to justify the effort of changing?" },
      { type: "p", text: "The easier it is to try, understand, and fit into someone's existing workflow, the less intimidating that change becomes." },
      { type: "h2", text: "03. Trust grows when people can see the value for themselves." },
      { type: "p", text: "People need reasons to believe your product will do what you say it will. Sometimes that means a clear demonstration, a trial or seeing results in a task they already understand." },
      { type: "p", text: "I'm especially interested in the moment a customer moves from “This sounds useful” to “I can see how this helps me.” That moment matters because the promise has started becoming an experience." },
      { type: "h2", text: "04. Signing up doesn't mean someone has experienced value." },
      { type: "p", text: "Someone can create an account, explore a few screens, and never return. They may have been curious, but curiosity alone doesn't mean the product has become useful to them." },
      { type: "p", text: "I want to pay more attention to what happens between signup and that first meaningful result:" },
      {
        type: "list",
        items: [
          { text: "What is the first thing the user tries to do?" },
          { text: "Where do they get stuck?" },
          { text: "How long does it take before the product becomes useful?" },
          { text: "Do they come back to do the same job again?" },
        ],
      },
      { type: "note", text: "The real question is how many reach the outcome they came for." },
      { type: "h2", text: "05. People stay when the product keeps earning its place." },
      { type: "p", text: "If a tool consistently helps someone do important work faster, more affordably, or with fewer mistakes, there is a reason to return. But if the value disappears, the process becomes frustrating, or another option does the job better, staying becomes harder to justify." },
      { type: "p", text: "I want to understand what customers repeatedly accomplish with a product and whether that outcome is important enough to keep coming back for." },
      { type: "h2", text: "06. Willingness to pay starts with perceived value, not just pricing." },
      { type: "p", text: "What is the problem costing them today? How important is it to solve? What happens if they do nothing? And do they believe this product can deliver a better outcome than their current alternative?" },
      { type: "p", text: "A product can be cheap and still feel unnecessary, it can be expensive and still feel worth it." },
      { type: "p", text: "The difference is often in how clearly the value connects to something the customer genuinely cares about." },
      { type: "h2", text: "What I'm taking away" },
      { type: "p", text: "The more I study customer behaviour, the more I see that it's about understanding what they're trying to achieve, what makes change difficult, what earns their trust, where they experience value, and what gives them a reason to stay." },
      { type: "p", text: "These are the questions I want to keep investigating not just in theory, but through real customer conversations and what people actually do." },
    ],
  },
  {
    slug: "gtm-experiments-netics-ai",
    series: "GTM Experiments",
    kind: "Experiments",
    title: "What we're learning while building Netics AI",
    dek: "270+ businesses in two months is a signal, not the whole story. The experiments and questions shaping our next moves.",
    image: "explore-system.jpg",
    blocks: [
      { type: "p", text: "Building Netics AI has been an opportunity to apply GTM thinking to a real product, not just frameworks on paper." },
      { type: "p", text: "We've launched officially, attracted over 270 businesses within 2 months, and continued refining how we position, introduce, and take the product to market. But onboarded businesses are only one part of the story. We still need to understand how many people experience value, return to use the product, and eventually become paying customers." },
      { type: "p", text: "Here are some of the experiments and questions shaping our next moves." },
      { type: "h2", text: "01. Rethinking how we define our ideal customer" },
      {
        type: "list",
        items: [
          { label: "What we did", text: "We initially approached GTM by separating our target markets into different industries." },
          { label: "What we observed", text: "Netics has capabilities that can serve different types of businesses, from real estate to restaurants to healthcare. Defining our market too narrowly by industry risked limiting how we thought about our potential customers." },
          { label: "What we changed", text: "We started defining our ideal customer around their most pressing frustrations and most important desired outcomes, rather than industry alone." },
          { label: "What we're still testing", text: "Which customer groups have the strongest need, experience value most quickly, and are most likely to keep using and paying for Netics." },
        ],
      },
      { type: "h2", text: "02. Simplifying the onboarding experience" },
      {
        type: "list",
        items: [
          { label: "What we observed", text: "Our onboarding flow felt more complicated than necessary." },
          { label: "Our hypothesis", text: "New users might abandon the process before experiencing what Netics can actually do for them." },
          { label: "What we changed", text: "We simplified the onboarding flow to make getting started easier." },
          { label: "What we need to measure", text: "Onboarding completion, time to first meaningful action, activation, and repeat usage. Until we compare those numbers before and after the change, we can't say how much the redesign has improved adoption." },
        ],
      },
      { type: "h2", text: "03. Testing how we communicate Netics' value" },
      { type: "p", label: "What we did", text: "We explored different positioning approaches to find a compelling way to communicate what we're building while staying aligned with the company's vision." },
      { type: "p", text: "Netics brings together capabilities such as ERP and CRM, inbound and outbound calls, inventory management, tracking activities across branches, managing customer conversations across all channels, and even an ads centre. The challenge is communicating this breadth without leaving people confused about why they should care." },
      {
        type: "list",
        items: [
          { label: "Our hypothesis", text: "People may respond more strongly when we lead with a problem they recognise and a useful outcome, rather than a long list of AI capabilities." },
          { label: "What we're looking for", text: "Which messages help people understand the product, recognise its relevance to their lives, and take the next step." },
        ],
      },
      { type: "h2", text: "04. Confronting our sales and marketing bottleneck" },
      { type: "p", text: "Netics has attracted over 270 signups since its launch. That's a meaningful early signal of interest, but it doesn't tell us the whole story. Signups alone don't tell us how many people activate, return, or pay." },
      {
        type: "list",
        items: [
          { label: "What we've identified", text: "Sales and marketing are important areas we need to strengthen as we work with limited resources." },
          { label: "The question we're working through", text: "How do we turn early interest into meaningful product adoption and sustainable revenue without spreading our time and budget too thin?" },
        ],
      },
      { type: "p", text: "That means getting more deliberate about which customer segments we prioritise, which channels we invest in, and which metrics tell us whether our efforts are working." },
      { type: "h2", text: "05. Our next experiments: Let people experience the value" },
      { type: "p", text: "We're now exploring two approaches:" },
      {
        type: "list",
        items: [
          { label: "Experiential marketing", text: "Giving people opportunities to experience Netics directly instead of relying only on descriptions of what it can do." },
          { label: "A more structured social media strategy", text: "Combining educational content, product demonstrations, tutorials, and examples of the practical outcomes Netics can help users achieve." },
        ],
      },
      { type: "p", text: "Our hypothesis is that showing people how the product fits into real situations will make its value easier to understand." },
      { type: "p", text: "We'll need to measure whether these activities lead to more than views and engagement: product visits, signups, activation, repeat usage, and eventually paid conversions." },
      { type: "h2", text: "What I'm learning" },
      { type: "p", text: "Working on Netics is teaching me to separate three things: what we know, what we believe, and what we still need to test." },
      { type: "p", text: "We know the MVP has launched and gotten signups, we've made changes to onboarding and explored different positioning approaches. We also know we need to strengthen sales and marketing." },
      { type: "p", text: "But we still need the data to establish which changes improve activation, which messages convert, and which channels bring in customers who stay." },
      { type: "callout", text: "A GTM experiment isn't validated because an idea sounds right or a change has been implemented. It's validated when customer behaviour gives us evidence about what works." },
      { type: "p", text: "That's the process we're building towards: observe, form a hypothesis, run the experiment, measure the result, and decide what to do next." },
    ],
  },
];

export function readTime(note: FieldNote) {
  const words = note.blocks
    .map((b) => ("items" in b ? b.items.map((i) => i.text).join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

/* ----------------------------------------------------------- RESOURCES */

export const RESOURCES = [
  {
    slug: "post-launch-gtm-checkup",
    title: "The Post-Launch GTM Checkup",
    type: "Self-assessment",
    paid: true,
    body: "A self-assessment that helps founders examine product clarity, customer fit, acquisition, activation, retention, and monetization. Then a simple worksheet to record the growth problem you've discovered, your hypothesis, experiment, metric, result, and next action.",
    includes: [
      "Product clarity",
      "Customer fit",
      "Acquisition",
      "Activation",
      "Retention",
      "Monetization",
    ],
    note: "Results are preliminary hypotheses to investigate, not a definitive diagnosis. That needs your company's data.",
  },
  {
    slug: "founder-interview-guide",
    title: "The Founder Interview Guide",
    type: "Guide",
    paid: false,
    body: "The questions I use for uncovering customer workarounds, purchase triggers, adoption friction, value, and retention.",
    includes: ["Workarounds", "Purchase triggers", "Adoption friction", "Value", "Retention"],
    note: "",
  },
];

/* -------------------------------------------------------- WORK WITH ME */

export const SPRINT = {
  name: "GTM Revenue Sprint",
  summary:
    "For founders ready to work through a prioritized set of problems, run experiments, and build a more repeatable GTM process.",
  steps: [
    { title: "Find the constraint", body: "Look across acquisition, activation, retention, and monetization to find where growth is actually breaking down." },
    { title: "Prioritize the problems", body: "Decide what needs fixing now, and what evidence supports that decision." },
    { title: "Run the experiments", body: "Observe, form a hypothesis, run the experiment, measure the result." },
    { title: "Make it repeatable", body: "Keep what customer behaviour proves works, and decide what to do next." },
  ],
};
