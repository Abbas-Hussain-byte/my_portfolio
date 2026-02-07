export const projectsData = [
    {
        slug: 'personal-career-advisor',
        name: 'Nhetis (Career Advisor)',
        constraint: 'Students lack personalized career guidance and awareness of government opportunities.',
        strategy: 'Aptitude-based recommendations, dynamic skill mapping charts, and location-based scholarship alerts.',
        stack: ['React', 'Node.js', 'Chart.js', 'Vercel'],
        impact: 'Provided data-driven career paths and real-time scholarship alerts for students.',
        metrics: {
            users: 'Active Demo',
            features: 'Dynamic Charts',
            focus: 'Career Guide'
        },
        status: 'LIVE',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/nhetis-demo',
            demo: 'https://nhetis-demo.vercel.app/',
            detail: '#'
        },
        description: `
## Overview
A personal career and education advisor helping students navigate their future.

## Key Features
- **Aptitude & Interest Recommendations**: Suggests courses based on user profile.
- **Course-Skill-Career Mapping**: Visualized via dynamic charts.
- **Government Programs**: Location-based discovery of college programs.
- **Alerts**: Notifications for admissions and scholarships.
        `
    },
    {
        slug: 'insurance-policy-rag',
        name: 'Insurance RAG Assistant',
        constraint: 'Insurance policies are complex, making it hard for users to understand eligibility and terms.',
        strategy: 'Implemented Retrieval-Augmented Generation (RAG) for accurate, context-aware policy Q&A.',
        stack: ['Python', 'LLM', 'RAG Framework', 'NLP'],
        impact: 'Simplified policy analysis with high accuracy for eligibility checks during Bajaj HackRx.',
        metrics: {
            event: 'Bajaj HackRx',
            tech: 'GenAI / RAG',
            result: 'High Accuracy'
        },
        status: 'IN PROGRESS',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/bajaj-finserv-hackrx',
            demo: null,
            detail: '#'
        },
        description: `
## Overview
An AI-powered assistant built for the **Bajaj Finserv HackRx** hackathon. It helps users understand complex insurance terms and check their eligibility instantly.

## Key Features
- **Policy Simplification**: Converts legal jargon into easy-to-understand summaries.
- **Eligibility Check**: Automatically validates user criteria against policy documents.
- **RAG Architecture**: Ensures answers are grounded in the actual policy documents, minimizing hallucinations.
        `
    },
    {
        slug: 'task-manager-rbac',
        name: 'Enterprise Task Manager',
        constraint: 'Scalable task management requires secure access controls and robust backend architecture.',
        strategy: 'MERN stack with strict Role-Based Access Control (RBAC) implementation.',
        stack: ['MongoDB', 'Express', 'React', 'Node.js'],
        impact: 'Delivered a production-ready API ensuring secure data access across different user roles.',
        metrics: {
            security: 'RBAC',
            stack: 'Full MERN',
            api: 'RESTful'
        },
        status: 'IN PROGRESS',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/primetrade_assignment',
            demo: null,
            detail: '#'
        },
        description: `
## Overview
A robust, full-stack task management application focusing on security and role management.

## Technical Highlights
- **Role-Based Access Control (RBAC)**: secure hierarchy for Admins, Managers, and Users.
- **Production-Ready API**: Clean architecture with validation and error handling.
- **Modern Frontend**: Responsive React UI for seamless task tracking.
        `
    },
    {
        slug: 'bus-journey-tracking',
        name: 'Bus Journey Tracking',
        constraint: 'Retrieving complex bus route details and sorting options efficiently is difficult.',
        strategy: 'PL/SQL implementation for optimized route querying and custom sorting logic.',
        stack: ['PL/SQL', 'RDBMS', 'SQL'],
        impact: 'Streamlined bus journey data retrieval with user-defined start/end stops.',
        metrics: {
            efficiency: 'Optimized Queries',
            type: 'Backend Logic',
            data: 'Structured Output'
        },
        status: 'ARCHIVED',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/RDBMS_MINI',
            demo: null,
            detail: '#'
        },
        description: `
## Overview
A PL/SQL backend system for managing and tracking bus journeys.

## Technical Implementation
- **Efficient Querying**: Retrieval based on user inputs (Start/End stops).
- **Sorting Mechanisms**: Custom logic to order journey details.
- **Data Integrity**: Robust RDBMS structure for public transport data.
        `
    },
    {
        slug: 'agriconnect',
        name: 'Agriconnect',
        constraint: 'Farmers struggle with market access, lack of localized advice, and community isolation.',
        strategy: 'Unified platform for e-commerce, geolocation-based farming tips, and peer networking.',
        stack: ['React', 'Node.js', 'Geolocation API'],
        impact: 'Connected farmers to direct markets and provided critical soil/location insights.',
        metrics: {
            role: 'Full Stack',
            features: 'Marketplace',
            tech: 'Geo-Location'
        },
        status: 'LIVE',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/Final-RTRP',
            demo: 'https://agriconnect-frontend-two.vercel.app/',
            detail: '#'
        },
        description: `
## Overview
An all-in-one digital ecosystem empowering farmers.

## Features
- **Marketplace**: Direct selling of agricultural products.
- **Smart Recommendations**: Farming advice based on location and soil data.
- **Community**: Networking platform connecting farmers for knowledge sharing.
        `
    },
    {
        slug: 'bus-ticket-gui',
        name: 'Bus Ticket GUI',
        constraint: 'Manual bus ticketing management is error-prone and inefficient for administrators.',
        strategy: 'Developed a Java-based Desktop GUI for seamless ticket generation and fleet management.',
        stack: ['Java', 'Swing/AWT', 'OOP'],
        impact: 'Simplified ticketing operations with an intuitive interface for admins and users.',
        metrics: {
            type: 'Desktop App',
            lang: 'Java',
            scope: 'G-LOB Lab'
        },
        status: 'ARCHIVED',
        links: {
            github: 'https://github.com/Abbas-Hussain-byte/JAVA_GLOB',
            demo: null,
            detail: '#'
        },
        description: `
## Overview
A Java desktop application for managing bus ticketing operations, developed as part of the G-LOB course.

## Key Features
- **Ticket Generation**: Automates the booking process for passengers.
- **Fleet Management**: Tools for admins to manage bus details and schedules.
- **User Interface**: Clean GUI built with Java Swing/AWT.
        `
    }
]
