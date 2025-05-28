// AI Tools Data
const aiTools = [
  // Chatbot Category
  {
    id: 1,
    name: "POPAI",
    category: "chatbot",
    description: "AI-powered presentation and document creation tool with intelligent automation features.",
    pricing: "freemium",
    price: "$9/month",
    icon: "🤖",
    website: "https://popai.pro"
  },
  {
    id: 2,
    name: "Chatbase",
    category: "chatbot",
    description: "Build custom AI chatbots trained on your data for customer support and engagement.",
    pricing: "freemium",
    price: "$19/month",
    icon: "💬",
    website: "https://chatbase.co"
  },
  {
    id: 3,
    name: "Gleap",
    category: "chatbot",
    description: "Customer feedback and bug reporting tool with AI-powered insights and automation.",
    pricing: "freemium",
    price: "$39/month",
    icon: "🔧",
    website: "https://gleap.io"
  },
  {
    id: 4,
    name: "COZE",
    category: "chatbot",
    description: "No-code chatbot builder with advanced AI capabilities and multi-platform deployment.",
    pricing: "free",
    price: "Free",
    icon: "🎯",
    website: "https://coze.com"
  },
  {
    id: 5,
    name: "GitMind",
    category: "chatbot",
    description: "AI-powered mind mapping and brainstorming tool with collaborative features.",
    pricing: "freemium",
    price: "$5/month",
    icon: "🧠",
    website: "https://gitmind.com"
  },
  {
    id: 6,
    name: "Dialogflow",
    category: "chatbot",
    description: "Google's conversational AI platform for building natural language interfaces.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🗣️",
    website: "https://dialogflow.cloud.google.com"
  },
  {
    id: 7,
    name: "Chatfuel",
    category: "chatbot",
    description: "Visual chatbot builder for Facebook Messenger and Instagram with AI integration.",
    pricing: "freemium",
    price: "$15/month",
    icon: "⚡",
    website: "https://chatfuel.com"
  },
  {
    id: 8,
    name: "Chatsimple",
    category: "chatbot",
    description: "Simple AI chatbot solution for websites with easy setup and customization.",
    pricing: "freemium",
    price: "$25/month",
    icon: "💫",
    website: "https://chatsimple.ai"
  },

  // Writing Category
  {
    id: 9,
    name: "ChatGPT",
    category: "writing",
    description: "OpenAI's advanced conversational AI for writing, coding, analysis, and creative tasks.",
    pricing: "freemium",
    price: "$20/month",
    icon: "✨",
    website: "https://chat.openai.com"
  },
  {
    id: 10,
    name: "Grammarly",
    category: "writing",
    description: "AI-powered writing assistant for grammar, spelling, style, and tone improvements.",
    pricing: "freemium",
    price: "$12/month",
    icon: "📝",
    website: "https://grammarly.com"
  },
  {
    id: 11,
    name: "QuillBot",
    category: "writing",
    description: "AI paraphrasing and writing enhancement tool with multiple writing modes.",
    pricing: "freemium",
    price: "$8.33/month",
    icon: "🪶",
    website: "https://quillbot.com"
  },
  {
    id: 12,
    name: "Notion AI",
    category: "writing",
    description: "AI writing assistant integrated into Notion for content creation and organization.",
    pricing: "paid",
    price: "$10/month",
    icon: "📋",
    website: "https://notion.so"
  },
  {
    id: 13,
    name: "Copy.ai",
    category: "writing",
    description: "AI copywriting tool for marketing content, social media, and business communications.",
    pricing: "freemium",
    price: "$36/month",
    icon: "📄",
    website: "https://copy.ai"
  },
  {
    id: 14,
    name: "Rytr",
    category: "writing",
    description: "AI writing assistant for creating high-quality content in multiple formats and tones.",
    pricing: "freemium",
    price: "$9/month",
    icon: "✍️",
    website: "https://rytr.me"
  },
  {
    id: 15,
    name: "HyperWrite",
    category: "writing",
    description: "AI writing companion that helps with research, writing, and communication tasks.",
    pricing: "freemium",
    price: "$19.99/month",
    icon: "🚀",
    website: "https://hyperwriteai.com"
  },
  {
    id: 16,
    name: "Claude",
    category: "writing",
    description: "Anthropic's AI assistant for analysis, research, writing, and complex reasoning tasks.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🎭",
    website: "https://claude.ai"
  },
  {
    id: 17,
    name: "Jenni AI",
    category: "writing",
    description: "AI writing assistant specifically designed for academic and research writing.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🎓",
    website: "https://jenni.ai"
  },
  {
    id: 18,
    name: "Perplexity",
    category: "writing",
    description: "AI-powered research and writing tool with real-time information and citations.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🔍",
    website: "https://perplexity.ai"
  },
  {
    id: 19,
    name: "Taskade",
    category: "writing",
    description: "AI-powered workspace for writing, planning, and collaboration with team features.",
    pricing: "freemium",
    price: "$8/month",
    icon: "📊",
    website: "https://taskade.com"
  },
  {
    id: 20,
    name: "Mindgrasp",
    category: "writing",
    description: "AI study tool that creates notes, summaries, and quizzes from any content.",
    pricing: "freemium",
    price: "$9.99/month",
    icon: "🧠",
    website: "https://mindgrasp.ai"
  },

  // Productivity Category
  {
    id: 21,
    name: "Sortext",
    category: "productivity",
    description: "AI-powered text organization and sorting tool for data management and analysis.",
    pricing: "freemium",
    price: "$15/month",
    icon: "📊",
    website: "https://sortext.ai"
  },
  {
    id: 22,
    name: "Pebblely",
    category: "productivity",
    description: "AI product photography tool that creates professional product images automatically.",
    pricing: "freemium",
    price: "$19/month",
    icon: "📸",
    website: "https://pebblely.com"
  },
  {
    id: 23,
    name: "Bright Eye",
    category: "productivity",
    description: "AI-powered mobile app with multiple AI tools for everyday productivity tasks.",
    pricing: "freemium",
    price: "$9.99/month",
    icon: "👁️",
    website: "https://brighteye.ai"
  },
  {
    id: 24,
    name: "Wix",
    category: "productivity",
    description: "Website builder with AI design intelligence for creating professional websites.",
    pricing: "freemium",
    price: "$14/month",
    icon: "🌐",
    website: "https://wix.com"
  },
  {
    id: 25,
    name: "Ballonnary",
    category: "productivity",
    description: "AI-powered balloon and event planning tool with automated design suggestions.",
    pricing: "paid",
    price: "$29/month",
    icon: "🎈",
    website: "https://ballonnary.com"
  },
  {
    id: 26,
    name: "Safurai",
    category: "productivity",
    description: "AI code assistant that helps developers write, debug, and optimize code efficiently.",
    pricing: "freemium",
    price: "$9.99/month",
    icon: "🛡️",
    website: "https://safurai.com"
  },
  {
    id: 27,
    name: "Replit",
    category: "productivity",
    description: "AI-powered collaborative coding platform with intelligent code completion.",
    pricing: "freemium",
    price: "$7/month",
    icon: "💻",
    website: "https://replit.com"
  },
  {
    id: 28,
    name: "GitFluence",
    category: "productivity",
    description: "AI tool that helps developers find the right Git commands for their needs.",
    pricing: "free",
    price: "Free",
    icon: "🔀",
    website: "https://gitfluence.com"
  },
  {
    id: 29,
    name: "Phind",
    category: "productivity",
    description: "AI search engine specifically designed for developers and technical questions.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🔎",
    website: "https://phind.com"
  },
  {
    id: 30,
    name: "Codeium",
    category: "productivity",
    description: "Free AI code completion tool that supports 70+ programming languages.",
    pricing: "freemium",
    price: "$12/month",
    icon: "⚡",
    website: "https://codeium.com"
  },

  // Marketing Category
  {
    id: 31,
    name: "Pencil",
    category: "marketing",
    description: "AI-powered ad creative generation tool for Facebook and Google advertising campaigns.",
    pricing: "paid",
    price: "$119/month",
    icon: "✏️",
    website: "https://trypencil.com"
  },
  {
    id: 32,
    name: "VidIQ",
    category: "marketing",
    description: "AI-powered YouTube optimization tool for growing channels and improving video performance.",
    pricing: "freemium",
    price: "$7.50/month",
    icon: "📹",
    website: "https://vidiq.com"
  },
  {
    id: 33,
    name: "Tldv",
    category: "marketing",
    description: "AI meeting recorder and transcription tool for sales and marketing teams.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🎥",
    website: "https://tldv.io"
  },
  {
    id: 34,
    name: "Semrush",
    category: "marketing",
    description: "Comprehensive SEO and digital marketing toolkit with AI-powered insights.",
    pricing: "paid",
    price: "$119.95/month",
    icon: "📈",
    website: "https://semrush.com"
  },
  {
    id: 35,
    name: "AdCopy",
    category: "marketing",
    description: "AI copywriting tool specialized in creating high-converting ad copy and marketing content.",
    pricing: "freemium",
    price: "$29/month",
    icon: "📢",
    website: "https://adcopy.ai"
  },
  {
    id: 36,
    name: "AdCreative",
    category: "marketing",
    description: "AI-powered platform for generating high-converting ad creatives and banners.",
    pricing: "paid",
    price: "$29/month",
    icon: "🎨",
    website: "https://adcreative.ai"
  },
  {
    id: 37,
    name: "Leap",
    category: "marketing",
    description: "AI platform for creating personalized images and marketing content at scale.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🦘",
    website: "https://tryleap.ai"
  },
  {
    id: 38,
    name: "Madgicx",
    category: "marketing",
    description: "AI-powered Facebook and Google ads optimization platform for e-commerce.",
    pricing: "paid",
    price: "$55/month",
    icon: "🎪",
    website: "https://madgicx.com"
  },
  {
    id: 39,
    name: "Plai",
    category: "marketing",
    description: "AI marketing assistant for creating and managing digital advertising campaigns.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🎯",
    website: "https://plai.team"
  },
  {
    id: 40,
    name: "Blogseo",
    category: "marketing",
    description: "AI-powered SEO content creation tool for blog posts and website optimization.",
    pricing: "freemium",
    price: "$19/month",
    icon: "📝",
    website: "https://blogseo.ai"
  },

  // Design Category
  {
    id: 41,
    name: "Midjourney",
    category: "design",
    description: "AI image generation tool creating stunning artwork and designs from text prompts.",
    pricing: "paid",
    price: "$10/month",
    icon: "🎨",
    website: "https://midjourney.com"
  },
  {
    id: 42,
    name: "DALL-E 2",
    category: "design",
    description: "OpenAI's AI image generator that creates realistic images from natural language descriptions.",
    pricing: "freemium",
    price: "$15/month",
    icon: "🖼️",
    website: "https://openai.com/dall-e-2"
  },
  {
    id: 43,
    name: "Leonardo",
    category: "design",
    description: "AI art generator with fine-tuned models for creating production-quality visual assets.",
    pricing: "freemium",
    price: "$10/month",
    icon: "🎭",
    website: "https://leonardo.ai"
  },
  {
    id: 44,
    name: "Firefly",
    category: "design",
    description: "Adobe's AI-powered creative tool for generating images, text effects, and design elements.",
    pricing: "freemium",
    price: "$22.99/month",
    icon: "🔥",
    website: "https://firefly.adobe.com"
  },
  {
    id: 45,
    name: "Logoai",
    category: "design",
    description: "AI logo maker that creates professional brand identities and logo designs.",
    pricing: "paid",
    price: "$29/month",
    icon: "🏷️",
    website: "https://logoai.com"
  },
  {
    id: 46,
    name: "MakeLogo",
    category: "design",
    description: "AI-powered logo creation tool with customizable templates and brand guidelines.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🎨",
    website: "https://makelogo.ai"
  },
  {
    id: 47,
    name: "Looka",
    category: "design",
    description: "AI brand designer that creates logos, business cards, and complete brand identities.",
    pricing: "paid",
    price: "$20/month",
    icon: "👁️",
    website: "https://looka.com"
  },
  {
    id: 48,
    name: "Brandmark",
    category: "design",
    description: "AI logo maker with advanced customization options and brand asset generation.",
    pricing: "paid",
    price: "$25/month",
    icon: "🏆",
    website: "https://brandmark.io"
  },
  {
    id: 49,
    name: "SeaArt",
    category: "design",
    description: "AI art generation platform with multiple models and styles for creative projects.",
    pricing: "freemium",
    price: "$9.99/month",
    icon: "🌊",
    website: "https://seaart.ai"
  },
  {
    id: 50,
    name: "Framer",
    category: "design",
    description: "AI-powered web design tool that generates responsive websites from simple prompts.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🖼️",
    website: "https://framer.com"
  },

  // Video Category
  {
    id: 51,
    name: "HeyGen",
    category: "video",
    description: "AI video generator that creates personalized videos with AI avatars and voices.",
    pricing: "freemium",
    price: "$24/month",
    icon: "🎬",
    website: "https://heygen.com"
  },
  {
    id: 52,
    name: "Veed.io",
    category: "video",
    description: "AI-powered video editing platform with automatic subtitles and editing features.",
    pricing: "freemium",
    price: "$12/month",
    icon: "📹",
    website: "https://veed.io"
  },
  {
    id: 53,
    name: "Fliki",
    category: "video",
    description: "AI video creation tool that converts text to video with realistic voiceovers.",
    pricing: "freemium",
    price: "$21/month",
    icon: "🎥",
    website: "https://fliki.ai"
  },
  {
    id: 54,
    name: "Simplified",
    category: "video",
    description: "All-in-one AI design and video creation platform for social media content.",
    pricing: "freemium",
    price: "$12/month",
    icon: "⚡",
    website: "https://simplified.com"
  },
  {
    id: 55,
    name: "11 Labs",
    category: "video",
    description: "AI voice generation and cloning platform for creating realistic speech audio.",
    pricing: "freemium",
    price: "$5/month",
    icon: "🔊",
    website: "https://elevenlabs.io"
  },
  {
    id: 56,
    name: "Suno",
    category: "video",
    description: "AI music generation tool that creates original songs and soundtracks from text.",
    pricing: "freemium",
    price: "$10/month",
    icon: "🎵",
    website: "https://suno.ai"
  },
  {
    id: 57,
    name: "Descript",
    category: "video",
    description: "AI-powered video and podcast editing with text-based editing and voice cloning.",
    pricing: "freemium",
    price: "$12/month",
    icon: "📝",
    website: "https://descript.com"
  },
  {
    id: 58,
    name: "Invideo",
    category: "video",
    description: "AI video creation platform with templates and automated editing features.",
    pricing: "freemium",
    price: "$15/month",
    icon: "🎬",
    website: "https://invideo.io"
  },
  {
    id: 59,
    name: "Canva",
    category: "video",
    description: "Design platform with AI-powered video creation and editing capabilities.",
    pricing: "freemium",
    price: "$12.99/month",
    icon: "🎨",
    website: "https://canva.com"
  },
  {
    id: 60,
    name: "Synthesys",
    category: "video",
    description: "AI video and voice synthesis platform for creating human-like avatars and speech.",
    pricing: "paid",
    price: "$27/month",
    icon: "🤖",
    website: "https://synthesys.io"
  },

  // Additional tools to reach 100
  {
    id: 61,
    name: "Alli AI",
    category: "marketing",
    description: "AI-powered SEO optimization tool that automatically improves website rankings.",
    pricing: "paid",
    price: "$249/month",
    icon: "🔍",
    website: "https://alliai.com"
  },
  {
    id: 62,
    name: "LongShot",
    category: "writing",
    description: "AI writing assistant for creating fact-checked, long-form content with research.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🎯",
    website: "https://longshot.ai"
  },
  {
    id: 63,
    name: "Seona AI",
    category: "marketing",
    description: "AI SEO assistant that optimizes websites automatically for better search rankings.",
    pricing: "freemium",
    price: "$49/month",
    icon: "📊",
    website: "https://seona.usestyle.ai"
  },
  {
    id: 64,
    name: "Respell",
    category: "productivity",
    description: "AI automation platform for creating custom workflows and business processes.",
    pricing: "freemium",
    price: "$19.99/month",
    icon: "🔄",
    website: "https://respell.ai"
  },
  {
    id: 65,
    name: "Word Stream",
    category: "marketing",
    description: "AI-powered PPC management and optimization tool for Google Ads campaigns.",
    pricing: "paid",
    price: "$264/month",
    icon: "💰",
    website: "https://wordstream.com"
  },
  {
    id: 66,
    name: "Clearscope",
    category: "writing",
    description: "AI content optimization platform for improving SEO and content performance.",
    pricing: "paid",
    price: "$170/month",
    icon: "🎯",
    website: "https://clearscope.io"
  },
  {
    id: 67,
    name: "Bing",
    category: "writing",
    description: "Microsoft's AI-powered search engine with integrated ChatGPT capabilities.",
    pricing: "free",
    price: "Free",
    icon: "🔍",
    website: "https://bing.com"
  },
  {
    id: 68,
    name: "Notefolio",
    category: "writing",
    description: "AI note-taking and organization tool for students and professionals.",
    pricing: "freemium",
    price: "$8/month",
    icon: "📓",
    website: "https://notefolio.ai"
  },
  {
    id: 69,
    name: "Google Bard",
    category: "writing",
    description: "Google's conversational AI for creative writing, research, and problem-solving.",
    pricing: "free",
    price: "Free",
    icon: "🎭",
    website: "https://bard.google.com"
  },
  {
    id: 70,
    name: "Copilot",
    category: "writing",
    description: "Microsoft's AI assistant integrated across Office applications and Windows.",
    pricing: "freemium",
    price: "$20/month",
    icon: "🤝",
    website: "https://copilot.microsoft.com"
  },
  {
    id: 71,
    name: "MarsAI",
    category: "writing",
    description: "AI content creation platform specialized in marketing and business writing.",
    pricing: "freemium",
    price: "$29/month",
    icon: "🚀",
    website: "https://mars-ai.com"
  },
  {
    id: 72,
    name: "Text FX",
    category: "writing",
    description: "Google's experimental AI tools for creative writing and text manipulation.",
    pricing: "free",
    price: "Free",
    icon: "✨",
    website: "https://textfx.withgoogle.com"
  },
  {
    id: 73,
    name: "Hix",
    category: "writing",
    description: "AI writing copilot with 120+ tools for content creation and optimization.",
    pricing: "freemium",
    price: "$19.99/month",
    icon: "🔧",
    website: "https://hix.ai"
  },
  {
    id: 74,
    name: "Monica",
    category: "writing",
    description: "AI assistant browser extension for writing, research, and productivity tasks.",
    pricing: "freemium",
    price: "$9.9/month",
    icon: "👩",
    website: "https://monica.im"
  },
  {
    id: 75,
    name: "Designs",
    category: "design",
    description: "AI-powered design platform for creating graphics, logos, and marketing materials.",
    pricing: "freemium",
    price: "$15/month",
    icon: "🎨",
    website: "https://designs.ai"
  },
  {
    id: 76,
    name: "Playground",
    category: "design",
    description: "AI image generation and editing platform with advanced creative controls.",
    pricing: "freemium",
    price: "$15/month",
    icon: "🎪",
    website: "https://playground.ai"
  },
  {
    id: 77,
    name: "Dribbble",
    category: "design",
    description: "Design community platform with AI-powered design discovery and inspiration.",
    pricing: "freemium",
    price: "$8/month",
    icon: "🏀",
    website: "https://dribbble.com"
  },
  {
    id: 78,
    name: "Ideogram",
    category: "design",
    description: "AI image generator specialized in creating images with accurate text rendering.",
    pricing: "freemium",
    price: "$7/month",
    icon: "💭",
    website: "https://ideogram.ai"
  },
  {
    id: 79,
    name: "Namecheap",
    category: "design",
    description: "Domain registrar with AI-powered logo maker and website building tools.",
    pricing: "freemium",
    price: "$8.88/year",
    icon: "🌐",
    website: "https://namecheap.com"
  },
  {
    id: 80,
    name: "Imagica",
    category: "video",
    description: "AI app builder that creates functional applications from natural language descriptions.",
    pricing: "freemium",
    price: "$30/month",
    icon: "📱",
    website: "https://imagica.ai"
  },
  {
    id: 81,
    name: "Durable",
    category: "video",
    description: "AI website builder that creates complete business websites in 30 seconds.",
    pricing: "freemium",
    price: "$12/month",
    icon: "🏗️",
    website: "https://durable.co"
  },
  {
    id: 82,
    name: "PixelMe",
    category: "video",
    description: "AI-powered link management and retargeting platform for digital marketing.",
    pricing: "freemium",
    price: "$24/month",
    icon: "🔗",
    website: "https://pixelme.me"
  },
  {
    id: 83,
    name: "Lucidpic",
    category: "video",
    description: "AI-powered stock photo generator creating realistic people photos for marketing.",
    pricing: "freemium",
    price: "$12/month",
    icon: "📷",
    website: "https://lucidpic.com"
  },
  {
    id: 84,
    name: "Shuffl",
    category: "video",
    description: "AI video creation platform for making engaging short-form content automatically.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🔀",
    website: "https://shuffl.ai"
  },
  {
    id: 85,
    name: "Zapier",
    category: "productivity",
    description: "Automation platform with AI features for connecting apps and workflows.",
    pricing: "freemium",
    price: "$19.99/month",
    icon: "⚡",
    website: "https://zapier.com"
  },
  {
    id: 86,
    name: "DeepAI",
    category: "design",
    description: "AI platform offering various AI tools including image generation and text analysis.",
    pricing: "freemium",
    price: "$5/month",
    icon: "🧠",
    website: "https://deepai.org"
  },
  {
    id: 87,
    name: "Jasper",
    category: "writing",
    description: "AI content platform for creating marketing copy, blog posts, and social media content.",
    pricing: "paid",
    price: "$39/month",
    icon: "💎",
    website: "https://jasper.ai"
  },
  {
    id: 88,
    name: "Writesonic",
    category: "writing",
    description: "AI writing tool for creating articles, ads, and marketing content with SEO optimization.",
    pricing: "freemium",
    price: "$16/month",
    icon: "🚀",
    website: "https://writesonic.com"
  },
  {
    id: 89,
    name: "Pictory",
    category: "video",
    description: "AI video creation tool that turns scripts and blog posts into engaging videos.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🎬",
    website: "https://pictory.ai"
  },
  {
    id: 90,
    name: "Loom",
    category: "video",
    description: "Video messaging platform with AI-powered transcription and editing features.",
    pricing: "freemium",
    price: "$8/month",
    icon: "🎥",
    website: "https://loom.com"
  },
  {
    id: 91,
    name: "Runway",
    category: "video",
    description: "AI-powered creative suite for video editing, image generation, and content creation.",
    pricing: "freemium",
    price: "$12/month",
    icon: "🛫",
    website: "https://runwayml.com"
  },
  {
    id: 92,
    name: "Stable Diffusion",
    category: "design",
    description: "Open-source AI image generation model for creating detailed images from text.",
    pricing: "free",
    price: "Free",
    icon: "🎨",
    website: "https://stability.ai"
  },
  {
    id: 93,
    name: "Tome",
    category: "productivity",
    description: "AI-powered presentation tool that creates compelling narratives and designs.",
    pricing: "freemium",
    price: "$8/month",
    icon: "📖",
    website: "https://tome.app"
  },
  {
    id: 94,
    name: "Beautiful.ai",
    category: "design",
    description: "AI presentation software that automatically designs slides as you create content.",
    pricing: "freemium",
    price: "$12/month",
    icon: "✨",
    website: "https://beautiful.ai"
  },
  {
    id: 95,
    name: "Gamma",
    category: "productivity",
    description: "AI-powered presentation and document creation tool with smart formatting.",
    pricing: "freemium",
    price: "$8/month",
    icon: "📊",
    website: "https://gamma.app"
  },
  {
    id: 96,
    name: "Murf",
    category: "video",
    description: "AI voice generator for creating realistic voiceovers and speech synthesis.",
    pricing: "freemium",
    price: "$19/month",
    icon: "🎤",
    website: "https://murf.ai"
  },
  {
    id: 97,
    name: "Speechify",
    category: "productivity",
    description: "AI text-to-speech tool for converting written content into natural-sounding audio.",
    pricing: "freemium",
    price: "$11.58/month",
    icon: "🔊",
    website: "https://speechify.com"
  },
  {
    id: 98,
    name: "Otter.ai",
    category: "productivity",
    description: "AI meeting assistant that records, transcribes, and summarizes conversations.",
    pricing: "freemium",
    price: "$8.33/month",
    icon: "🦦",
    website: "https://otter.ai"
  },
  {
    id: 99,
    name: "Krisp",
    category: "productivity",
    description: "AI-powered noise cancellation tool for clear audio in calls and recordings.",
    pricing: "freemium",
    price: "$5/month",
    icon: "🔇",
    website: "https://krisp.ai"
  },
  {
    id: 100,
    name: "Superhuman",
    category: "productivity",
    description: "AI-powered email client that helps users achieve inbox zero with smart features.",
    pricing: "paid",
    price: "$30/month",
    icon: "⚡",
    website: "https://superhuman.com"
  }
];

// Translation data
const translations = {
  en: {
    subtitle: "Top 100 AI Solutions",
    "hero-title": "Discover the Future of AI",
    "hero-description": "Explore our curated collection of the top 100 AI tools that are revolutionizing industries worldwide.",
    "stat-tools": "AI Tools",
    "stat-categories": "Categories",
    "stat-updated": "Updated",
    "search-placeholder": "Search AI tools...",
    "filter-category": "Category:",
    "filter-pricing": "Pricing:",
    "filter-all": "All",
    "category-chatbot": "Chatbots",
    "category-writing": "Writing",
    "category-productivity": "Productivity",
    "category-marketing": "Marketing",
    "category-design": "Design",
    "category-video": "Video",
    "pricing-free": "Free",
    "pricing-freemium": "Freemium",
    "pricing-paid": "Paid",
    "clear-filters": "Clear Filters",
    "results-text": "tools found",
    "no-results-title": "No tools found",
    "no-results-description": "Try adjusting your search terms or filters to find what you're looking for.",
    "footer-description": "Your ultimate directory for discovering the best AI tools and solutions.",
    "footer-categories": "Categories",
    "footer-resources": "Resources",
    "footer-about": "About",
    "footer-contact": "Contact",
    "footer-submit": "Submit Tool",
    "footer-privacy": "Privacy",
    "footer-copyright": "© 2024 AITools. All rights reserved.",
    "visit-website": "Visit Website"
  },
  tr: {
    subtitle: "En İyi 100 AI Çözümü",
    "hero-title": "AI'nin Geleceğini Keşfedin",
    "hero-description": "Dünya çapında endüstrileri devrim niteliğinde değiştiren en iyi 100 AI aracının özenle seçilmiş koleksiyonunu keşfedin.",
    "stat-tools": "AI Araçları",
    "stat-categories": "Kategori",
    "stat-updated": "Güncellendi",
    "search-placeholder": "AI araçlarını ara...",
    "filter-category": "Kategori:",
    "filter-pricing": "Fiyatlandırma:",
    "filter-all": "Tümü",
    "category-chatbot": "Sohbet Botları",
    "category-writing": "Yazma",
    "category-productivity": "Verimlilik",
    "category-marketing": "Pazarlama",
    "category-design": "Tasarım",
    "category-video": "Video",
    "pricing-free": "Ücretsiz",
    "pricing-freemium": "Freemium",
    "pricing-paid": "Ücretli",
    "clear-filters": "Filtreleri Temizle",
    "results-text": "araç bulundu",
    "no-results-title": "Araç bulunamadı",
    "no-results-description": "Aradığınızı bulmak için arama terimlerinizi veya filtrelerinizi ayarlamayı deneyin.",
    "footer-description": "En iyi AI araçlarını ve çözümlerini keşfetmek için nihai rehberiniz.",
    "footer-categories": "Kategoriler",
    "footer-resources": "Kaynaklar",
    "footer-about": "Hakkında",
    "footer-contact": "İletişim",
    "footer-submit": "Araç Gönder",
    "footer-privacy": "Gizlilik",
    "footer-copyright": "© 2024 AITools. Tüm hakları saklıdır.",
    "visit-website": "Web Sitesini Ziyaret Et"
  },
  ar: {
    subtitle: "أفضل 100 حل ذكي",
    "hero-title": "اكتشف مستقبل الذكاء الاصطناعي",
    "hero-description": "استكشف مجموعتنا المختارة بعناية من أفضل 100 أداة ذكاء اصطناعي تحدث ثورة في الصناعات حول العالم.",
    "stat-tools": "أدوات الذكاء الاصطناعي",
    "stat-categories": "فئات",
    "stat-updated": "محدث",
    "search-placeholder": "البحث عن أدوات الذكاء الاصطناعي...",
    "filter-category": "الفئة:",
    "filter-pricing": "التسعير:",
    "filter-all": "الكل",
    "category-chatbot": "روبوتات المحادثة",
    "category-writing": "الكتابة",
    "category-productivity": "الإنتاجية",
    "category-marketing": "التسويق",
    "category-design": "التصميم",
    "category-video": "الفيديو",
    "pricing-free": "مجاني",
    "pricing-freemium": "مجاني جزئياً",
    "pricing-paid": "مدفوع",
    "clear-filters": "مسح المرشحات",
    "results-text": "أداة موجودة",
    "no-results-title": "لم يتم العثور على أدوات",
    "no-results-description": "حاول تعديل مصطلحات البحث أو المرشحات للعثور على ما تبحث عنه.",
    "footer-description": "دليلك النهائي لاكتشاف أفضل أدوات وحلول الذكاء الاصطناعي.",
    "footer-categories": "الفئات",
    "footer-resources": "الموارد",
    "footer-about": "حول",
    "footer-contact": "اتصل",
    "footer-submit": "إرسال أداة",
    "footer-privacy": "الخصوصية",
    "footer-copyright": "© 2024 AITools. جميع الحقوق محفوظة.",
    "visit-website": "زيارة الموقع"
  },
  es: {
    subtitle: "Las Mejores 100 Soluciones de IA",
    "hero-title": "Descubre el Futuro de la IA",
    "hero-description": "Explora nuestra colección curada de las mejores 100 herramientas de IA que están revolucionando industrias en todo el mundo.",
    "stat-tools": "Herramientas de IA",
    "stat-categories": "Categorías",
    "stat-updated": "Actualizado",
    "search-placeholder": "Buscar herramientas de IA...",
    "filter-category": "Categoría:",
    "filter-pricing": "Precios:",
    "filter-all": "Todos",
    "category-chatbot": "Chatbots",
    "category-writing": "Escritura",
    "category-productivity": "Productividad",
    "category-marketing": "Marketing",
    "category-design": "Diseño",
    "category-video": "Video",
    "pricing-free": "Gratis",
    "pricing-freemium": "Freemium",
    "pricing-paid": "Pagado",
    "clear-filters": "Limpiar Filtros",
    "results-text": "herramientas encontradas",
    "no-results-title": "No se encontraron herramientas",
    "no-results-description": "Intenta ajustar tus términos de búsqueda o filtros para encontrar lo que buscas.",
    "footer-description": "Tu directorio definitivo para descubrir las mejores herramientas y soluciones de IA.",
    "footer-categories": "Categorías",
    "footer-resources": "Recursos",
    "footer-about": "Acerca de",
    "footer-contact": "Contacto",
    "footer-submit": "Enviar Herramienta",
    "footer-privacy": "Privacidad",
    "footer-copyright": "© 2024 AITools. Todos los derechos reservados.",
    "visit-website": "Visitar Sitio Web"
  }
};

// Global variables
let currentLanguage = 'en';
let filteredTools = [...aiTools];
let searchTimeout;

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const pricingFilter = document.getElementById('pricingFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const toolsGrid = document.getElementById('toolsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const loadingSpinner = document.getElementById('loadingSpinner');
const languageBtn = document.querySelector('.language-btn');
const languageDropdown = document.querySelector('.language-dropdown');
const currentLangSpan = document.querySelector('.current-lang');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  renderTools(aiTools);
  updateResultsCount(aiTools.length);
});

// Initialize application
function initializeApp() {
  // Set initial language
  updateLanguage(currentLanguage);
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener('input', handleSearch);
  
  // Filter functionality
  categoryFilter.addEventListener('change', handleFilters);
  pricingFilter.addEventListener('change', handleFilters);
  
  // Clear filters
  clearFiltersBtn.addEventListener('click', clearAllFilters);
  
  // Language selector
  languageBtn.addEventListener('click', toggleLanguageDropdown);
  
  // Language options
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
  
  // Close language dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.language-selector')) {
      closeLanguageDropdown();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLanguageDropdown();
    }
  });
}

// Search functionality
function handleSearch() {
  clearTimeout(searchTimeout);
  showLoadingSpinner();
  
  searchTimeout = setTimeout(() => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFilters(searchTerm);
    hideLoadingSpinner();
  }, 300);
}

// Filter functionality
function handleFilters() {
  showLoadingSpinner();
  setTimeout(() => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFilters(searchTerm);
    hideLoadingSpinner();
  }, 200);
}

// Apply all filters
function applyFilters(searchTerm = '') {
  const categoryValue = categoryFilter.value;
  const pricingValue = pricingFilter.value;
  
  filteredTools = aiTools.filter(tool => {
    // Search filter
    const matchesSearch = !searchTerm || 
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm);
    
    // Category filter
    const matchesCategory = categoryValue === 'all' || tool.category === categoryValue;
    
    // Pricing filter
    const matchesPricing = pricingValue === 'all' || tool.pricing === pricingValue;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });
  
  renderTools(filteredTools);
  updateResultsCount(filteredTools.length);
}

// Clear all filters
function clearAllFilters() {
  searchInput.value = '';
  categoryFilter.value = 'all';
  pricingFilter.value = 'all';
  
  filteredTools = [...aiTools];
  renderTools(filteredTools);
  updateResultsCount(filteredTools.length);
  
  // Add visual feedback
  clearFiltersBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    clearFiltersBtn.style.transform = 'scale(1)';
  }, 150);
}

// Render tools grid
function renderTools(tools) {
  if (tools.length === 0) {
    toolsGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  toolsGrid.style.display = 'grid';
  noResults.style.display = 'none';
  
  toolsGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
  
  // Add staggered animation
  const cards = toolsGrid.querySelectorAll('.tool-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

// Create tool card HTML
function createToolCard(tool) {
  const pricingClass = tool.pricing.toLowerCase();
  const pricingText = translations[currentLanguage][`pricing-${tool.pricing}`] || tool.pricing;
  const categoryText = translations[currentLanguage][`category-${tool.category}`] || tool.category;
  const visitText = translations[currentLanguage]['visit-website'] || 'Visit Website';
  
  return `
    <article class="tool-card" role="gridcell" tabindex="0">
      <div class="tool-header">
        <div class="tool-icon" aria-hidden="true">${tool.icon}</div>
        <div class="tool-info">
          <h3 class="tool-name">${tool.name}</h3>
          <span class="tool-category">${categoryText}</span>
        </div>
      </div>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-footer">
        <div class="tool-pricing">
          <span class="pricing-status ${pricingClass}">${pricingText}</span>
          <span class="pricing-amount">${tool.price}</span>
        </div>
        <a href="${tool.website}" 
           class="tool-link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Visit ${tool.name} website">
          ${visitText}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </article>
  `;
}

// Update results count
function updateResultsCount(count) {
  resultsCount.textContent = count;
  
  // Add animation
  resultsCount.style.transform = 'scale(1.1)';
  setTimeout(() => {
    resultsCount.style.transform = 'scale(1)';
  }, 200);
}

// Language functionality
function toggleLanguageDropdown() {
  const isOpen = languageBtn.getAttribute('aria-expanded') === 'true';
  
  if (isOpen) {
    closeLanguageDropdown();
  } else {
    openLanguageDropdown();
  }
}

function openLanguageDropdown() {
  languageBtn.setAttribute('aria-expanded', 'true');
  languageDropdown.classList.add('active');
}

function closeLanguageDropdown() {
  languageBtn.setAttribute('aria-expanded', 'false');
  languageDropdown.classList.remove('active');
}

function changeLanguage(lang) {
  currentLanguage = lang;
  updateLanguage(lang);
  closeLanguageDropdown();
  
  // Update current language display
  const langMap = {
    'en': 'EN',
    'tr': 'TR',
    'ar': 'AR',
    'es': 'ES'
  };
  currentLangSpan.textContent = langMap[lang];
  
  // Re-render tools with new language
  renderTools(filteredTools);
  
  // Update document direction for RTL languages
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder text
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

// Loading spinner
function showLoadingSpinner() {
  loadingSpinner.classList.add('active');
}

function hideLoadingSpinner() {
  loadingSpinner.classList.remove('active');
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Add intersection observer for lazy loading animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.tool-card, .hero-content, .controls-section');
  animateElements.forEach(el => observer.observe(el));
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
  // Could implement user-friendly error messaging here
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}