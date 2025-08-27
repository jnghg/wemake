-- Seed data for WeMake database
-- Using profile_id: f02ae32c-33dd-40cb-b330-a3e5649ed345 for all records

-- Categories
INSERT INTO categories (name, description, created_at, updated_at) VALUES
('AI & Machine Learning', 'Artificial intelligence and machine learning products', now(), now()),
('Productivity', 'Tools to boost productivity and efficiency', now(), now()),
('Design', 'Design tools and creative software', now(), now()),
('Development', 'Developer tools and programming utilities', now(), now()),
('Marketing', 'Marketing and growth tools', now(), now());

-- Jobs
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range, created_at, updated_at) VALUES
('Senior Frontend Developer', 'Build amazing user experiences with React and TypeScript', 'Lead frontend development, mentor junior developers, implement best practices', '5+ years React experience, TypeScript proficiency, team leadership', 'Health insurance, remote work, stock options', 'React, TypeScript, Tailwind CSS, Next.js', 'TechCorp', 'https://example.com/logo1.png', 'San Francisco, CA', 'https://techcorp.com/careers', 'full-time', 'remote', '$120,000 - $150,000', now(), now()),
('Product Designer', 'Design intuitive and beautiful user interfaces', 'Create wireframes, prototypes, user research, design systems', '3+ years UI/UX design, Figma expertise, portfolio required', 'Flexible hours, creative environment, learning budget', 'Figma, Sketch, Adobe Creative Suite, User Research', 'DesignStudio', 'https://example.com/logo2.png', 'New York, NY', 'https://designstudio.com/jobs', 'full-time', 'hybrid', '$100,000 - $120,000', now(), now()),
('DevOps Engineer', 'Build and maintain scalable infrastructure', 'Manage cloud infrastructure, CI/CD pipelines, monitoring', 'AWS/Azure experience, Docker, Kubernetes, automation', 'Competitive salary, on-call compensation, certifications', 'AWS, Docker, Kubernetes, Terraform, Jenkins', 'CloudTech', 'https://example.com/logo3.png', 'Austin, TX', 'https://cloudtech.com/apply', 'full-time', 'in-person', '$100,000 - $120,000', now(), now()),
('Marketing Manager', 'Drive growth through strategic marketing initiatives', 'Campaign management, analytics, content strategy, team leadership', '5+ years marketing experience, data-driven approach, leadership', 'Performance bonuses, professional development, flexible PTO', 'Google Analytics, Facebook Ads, Content Marketing, SEO', 'GrowthCo', 'https://example.com/logo4.png', 'Los Angeles, CA', 'https://growthco.com/careers', 'full-time', 'hybrid', '$70,000 - $100,000', now(), now()),
('Data Scientist', 'Extract insights from complex data sets', 'Statistical analysis, machine learning models, data visualization', 'MS/PhD in Statistics/CS, Python/R, ML frameworks', 'Research opportunities, conference attendance, publication support', 'Python, R, TensorFlow, SQL, Statistics', 'DataLab', 'https://example.com/logo5.png', 'Seattle, WA', 'https://datalab.com/join', 'full-time', 'remote', '$150,000 - $250,000', now(), now());

-- Products
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at) VALUES
('TaskMaster Pro', 'Supercharge your productivity with AI-powered task management', 'An intelligent task manager that learns from your work patterns and optimizes your workflow automatically.', 'Uses machine learning to analyze your productivity patterns and suggests optimal task scheduling and prioritization.', 'https://example.com/taskmaster-icon.png', 'https://taskmaster.pro', '{"views": 1250, "reviews": 45}', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 2, now(), now()),
('DesignFlow', 'Streamline your design workflow with collaborative tools', 'A comprehensive design platform that brings together designers, developers, and stakeholders in one seamless workflow.', 'Real-time collaboration, version control, and automated handoff tools that bridge the gap between design and development.', 'https://example.com/designflow-icon.png', 'https://designflow.com', '{"views": 890, "reviews": 32}', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 3, now(), now()),
('CodeGenius', 'AI-powered code generation and review', 'Generate high-quality code, get instant reviews, and learn best practices with our AI coding assistant.', 'Analyzes your codebase, suggests improvements, generates boilerplate code, and provides real-time feedback during development.', 'https://example.com/codegenius-icon.png', 'https://codegenius.dev', '{"views": 2100, "reviews": 78}', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 4, now(), now()),
('GrowthAnalytics', 'Data-driven marketing insights for growth teams', 'Comprehensive analytics platform that helps marketing teams understand customer behavior and optimize campaigns.', 'Tracks user journeys, analyzes conversion funnels, and provides actionable insights to improve marketing ROI.', 'https://example.com/growthanalytics-icon.png', 'https://growthanalytics.com', '{"views": 1560, "reviews": 67}', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, now(), now()),
('AIAssistant', 'Your personal AI assistant for everyday tasks', 'An intelligent assistant that helps with scheduling, email management, research, and creative tasks.', 'Natural language processing to understand your requests and automate routine tasks while learning your preferences.', 'https://example.com/aiassistant-icon.png', 'https://aiassistant.app', '{"views": 3200, "reviews": 156}', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 1, now(), now());

-- Reviews
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, 'Amazing productivity tool! The AI suggestions are incredibly accurate.', now(), now()),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, 'Perfect for team collaboration. The handoff features are game-changing.', now(), now()),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, 'This has completely changed how I write code. Highly recommended!', now(), now()),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, 'Incredible insights for our marketing campaigns. ROI increased by 40%!', now(), now()),
(5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 5, 'My daily productivity has skyrocketed since using this AI assistant.', now(), now());

-- Product Upvotes
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345');

-- Topics
INSERT INTO topics (name, slug, created_at, updated_at) VALUES
('Product Development', 'product-development', now(), now()),
('Design Tips', 'design-tips', now(), now()),
('Marketing Strategies', 'marketing-strategies', now(), now()),
('Tech News', 'tech-news', now(), now()),
('Career Advice', 'career-advice', now(), now());

-- Posts
INSERT INTO posts (title, content, topic_id, profile_id, created_at, updated_at) VALUES
('How to Build a Successful SaaS Product', 'Building a SaaS product requires careful planning, market research, and continuous iteration. Here are the key steps...', 1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now(), now()),
('Design Principles Every Developer Should Know', 'Understanding basic design principles can significantly improve your UI/UX skills. Let me share some essential concepts...', 2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now(), now()),
('Growth Hacking Strategies for Startups', 'Growth hacking is all about rapid experimentation across marketing channels. Here are proven strategies...', 3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now(), now()),
('The Future of AI in Software Development', 'AI is transforming how we write and maintain code. Let''s explore the current state and future possibilities...', 4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now(), now()),
('Transitioning from Developer to Tech Lead', 'Moving from individual contributor to leadership role requires new skills and mindset. Here''s my experience...', 5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now(), now());

-- Post Upvotes
INSERT INTO post_upvotes (post_id, profile_id) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345');

-- Post Replies
INSERT INTO post_replies (post_id, profile_id, reply, created_at, updated_at) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Great insights! I would also add that customer feedback is crucial in the early stages.', now(), now()),
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Agreed! Market validation should be the first step before building anything.', now(), now()),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'These design principles are fundamental. I use them in every project now.', now(), now()),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Growth hacking is all about data-driven decisions. Great article!', now(), now()),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'AI pair programming tools are already changing how I code. Exciting times!', now(), now());

-- GPT Ideas
INSERT INTO gpt_ideas (idea, views, created_at) VALUES
('AI-powered personal finance advisor that analyzes spending patterns and provides investment recommendations', 150, now()),
('Collaborative whiteboard tool with real-time AI assistance for brainstorming sessions', 89, now()),
('Smart meal planning app that considers dietary restrictions, budget, and cooking time', 234, now()),
('Virtual reality platform for remote team building and collaboration', 67, now()),
('Blockchain-based platform for freelance developers to showcase skills and get paid in crypto', 189, now());

-- GPT Ideas Likes
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345'),
(5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345');

-- Teams
INSERT INTO teams (product_name, team_size, equity_split, product_state, roles, product_description, created_at, updated_at) VALUES
('EcoTracker', 4, 25, 'mvp', 'Frontend Developer, Backend Developer, Designer, Marketing', 'Sustainable living app that tracks carbon footprint and suggests eco-friendly alternatives', now(), now()),
('HealthAI', 6, 20, 'prototype', 'ML Engineer, Data Scientist, Mobile Developer, UI/UX Designer, Product Manager, DevOps', 'AI-powered health monitoring platform using smartphone sensors', now(), now()),
('EduTech', 3, 33, 'idea', 'Full-stack Developer, Content Creator, Business Development', 'Personalized learning platform with adaptive algorithms', now(), now()),
('FinTech', 5, 20, 'product', 'Backend Developer, Frontend Developer, Security Engineer, Data Analyst, Product Manager', 'Cryptocurrency portfolio management with automated trading strategies', now(), now()),
('SocialVR', 7, 15, 'prototype', 'VR Developer, 3D Artist, Backend Developer, UI Designer, Community Manager, Marketing, Business Development', 'Virtual reality social platform for remote collaboration', now(), now());

-- Message Rooms
INSERT INTO message_rooms (created_at) VALUES
(now()),
(now()),
(now()),
(now()),
(now());

-- Message Room Members
INSERT INTO message_room_members (message_room_id, profile_id, created_at) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
(5, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now());

-- Messages
INSERT INTO messages (message_room_id, sender_id, content, seen, created_at) VALUES
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Hey! I saw your product on WeMake. Really impressive work!', true, now()),
(1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Thanks! I''ve been working on it for months. Would love to get your feedback.', false, now()),
(2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Are you interested in collaborating on a new project?', true, now()),
(3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Great article you wrote about AI in development!', true, now()),
(4, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'Looking for a designer for our startup. Any recommendations?', false, now());

-- Notifications
INSERT INTO notifications (source_id, product_id, target_id, type, created_at) VALUES
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 1, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'review', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 2, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'review', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', NULL, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'follow', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 3, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'review', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', NULL, 'f02ae32c-33dd-40cb-b330-a3e5649ed345', 'replay', now());

-- Follows
INSERT INTO follows (follower_id, following_id, created_at) VALUES
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now()),
('f02ae32c-33dd-40cb-b330-a3e5649ed345', 'f02ae32c-33dd-40cb-b330-a3e5649ed345', now());
