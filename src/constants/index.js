import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    docker,
    carrent,
    jobit,
    tripguide,
    cloudtek,
    aksaSds,
    deltaShoppe,
    baresdev,
    coherent,
    fulcrum,
    java,
    angular,
    laravel,
    nextjs,
    postgresql,
    git,
    aws,
    azure,
    kubernetes,
    python,
    golang,
    graphql,
    springboot,
    azureMicroservices,
    awsServerless,
    realtimeCollab,
    graphqlFederation,
    observabilityStack,
    multiRegionInfra,
    ecommercePlatform,
    analyticsDashboard,
    projectManagement,
    branchlessBanking,
    healthcareApp,
    telecomApp,
    employeeWellbeing,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Development",
        icon: web,
    },
    {
        title: "Cloud Architecture",
        icon: backend,
    },
    {
        title: "Microservices & APIs",
        icon: mobile,
    },
    {
        title: "Technical Leadership",
        icon: creator,
    },
];

const technologies = [
    {
        name: 'Java',
        icon: java,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "NextJs",
        icon: nextjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Git",
        icon: git,
    }
];

const experiences = [
    {
        title: "Senior Full Stack Engineer & Technical Lead",
        company_name: "BaresDev",
        icon: baresdev,
        iconBg: "#0D1B2A",
        date: "March 2022 - Present",
        points: [
            "Lead a distributed team of 8 engineers, and retrospectives while maintaining 95% on-time delivery rate for critical features and reducing bug density by 60% through code review practices",
            "Architected and implemented Azure and AWS based microservices platform using Spring Boot, Node.js, and .NET Core, processing 2+ billion API requests daily with 99.99% uptime through implementation of circuit breakers, retry mechanisms, and distributed caching",
            "Developed real-time event streaming architecture using Apache Kafka and Azure Event Hubs with custom Java/Python consumers, handling 500K+ events/second with sub-millisecond latency for fraud detection and recommendation engines",
            "Built React/TypeScript frontend applications with Redux, implementing micro-frontend architecture using Module Federation, achieving 95+ Lighthouse scores and reducing initial load time by 70% through code splitting and lazy loading",
            "Implemented comprehensive CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, automating testing, security scanning, and deployment across 15+ Azure regions with blue-green deployments and automated rollback capabilities",
            "Developed GraphQL API gateway using Apollo Server, aggregating 50+ microservices with DataLoader patterns for N+1 query optimization, reducing average API response time from 800ms to 120ms",
            "Created Infrastructure as Code templates using Terraform and ARM templates, provisioning Kubernetes clusters, databases, and networking infrastructure, reducing environment setup time from 2 weeks to 4 hours",
            "Established technical mentorship program for 12 junior developers, conducting weekly 1-on-1s, code pairing sessions, and architecture workshops, resulting in 3 promotions and 100% retention rate"
        ],
    },
    {
        title: "Senior Software Engineer & Team Lead",
        company_name: "Coherent Solutions",
        icon: coherent,
        iconBg: "#1A1A2E",
        date: "January 2018 - February 2020",
        points: [
            "Led cross-functional team in developing enterprise SaaS platform serving 500+ clients, implementing Agile methodologies and achieving 40% improvement in sprint velocity",
            "Developed core AWS Lambda functions in Java and Python for serverless architecture, implementing custom runtime optimizations that reduced cold start latency by 40% and supported 1M+ concurrent executions",
            "Built Angular 12+ applications with NgRx state management, implementing complex data grids, real-time charts using D3.js, and WebSocket connections for live collaboration features supporting 10K+ concurrent users",
            "Architected RESTful APIs using Spring Boot with comprehensive OpenAPI documentation, implementing OAuth 2.0 authentication, rate limiting, and request/response transformation for multi-tenant SaaS platform",
            "Implemented event-driven microservices using Spring Cloud Stream with RabbitMQ and AWS SQS, processing 10TB+ daily data with exactly-once delivery guarantees and dead letter queue handling",
            "Designed and optimized PostgreSQL and DynamoDB data models, implementing partitioning strategies, composite indexes, and query optimization that reduced p99 latency from 2s to 200ms",
            "Created Docker containerization strategy for 30+ microservices, implementing multi-stage builds, layer caching, and security scanning, reducing image sizes by 60% and deployment times by 75%",
            "Established comprehensive testing framework using JUnit, Mockito, Jest, and Cypress, achieving 95% code coverage and implementing contract testing with Pact, reducing production bugs by 70%"
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Fulcrum",
        icon: fulcrum,
        iconBg: "#064E3B",
        date: "June 2015 - December 2018",
        points: [
            "Engineered high-performance web applications using React, Angular, and Vue.js with server-side rendering, achieving Core Web Vitals scores of 95+ and improving user engagement by 45%",
            "Developed real-time collaboration features using WebSockets, WebRTC, and Redis pub/sub, supporting 100K+ concurrent users with optimistic updates and conflict resolution",
            "Built sophisticated data visualization dashboards with D3.js and Chart.js, processing millions of data points client-side with virtualization and progressive rendering techniques",
            "Implemented micro-frontend architecture using Module Federation and single-spa, enabling independent deployment of UI components across 20+ product teams",
            "Designed GraphQL federation gateway aggregating 50+ microservices, implementing DataLoader patterns for N+1 query optimization and reducing API response times by 60%",
            "Created reusable component library with Storybook documentation, atomic design patterns, and automated visual regression testing, adopted by 100+ internal applications"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Zeeshan is an exceptional architect who designed and delivered a complex microservices platform that exceeded our expectations. His deep technical knowledge and leadership skills make him an invaluable asset.",
        name: "Sarah Johnson",
        designation: "Engineering Director",
        company: "BaresDev",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        testimonial:
            "Working with Zeeshan was a game-changer for our cloud infrastructure. His expertise in AWS and Kubernetes helped us reduce costs by 40% while improving reliability.",
        name: "Michael Chen",
        designation: "VP of Engineering",
        company: "Tech Corp",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        testimonial:
            "Zeeshan's ability to architect scalable systems is unmatched. He transformed our monolithic application into a microservices architecture that handles millions of requests seamlessly.",
        name: "Emily Rodriguez",
        designation: "CTO",
        company: "DataFlow Solutions",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        testimonial:
            "An outstanding engineer and mentor. Zeeshan not only delivered exceptional code but also elevated the entire team's technical capabilities through his guidance.",
        name: "David Kim",
        designation: "Senior Engineer",
        company: "Coherent Solutions",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "Zeeshan's expertise in distributed systems and event-driven architectures helped us build a platform that processes billions of events daily with sub-millisecond latency.",
        name: "Jessica Martinez",
        designation: "Product Manager",
        company: "StreamTech",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        testimonial:
            "Highly skilled professional with deep knowledge of cloud-native technologies. Zeeshan delivered our Kubernetes migration ahead of schedule with zero downtime.",
        name: "Robert Taylor",
        designation: "DevOps Lead",
        company: "CloudScale Inc",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        testimonial:
            "Zeeshan is a true technical leader. His architectural decisions and code quality standards have set a new benchmark for our engineering organization.",
        name: "Amanda Foster",
        designation: "Engineering Manager",
        company: "Fulcrum",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        testimonial:
            "Working with Zeeshan on our GraphQL federation gateway was a fantastic experience. His solution reduced API response times by 60% and is now used across 50+ services.",
        name: "James Wilson",
        designation: "API Architect",
        company: "APISystems",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
];

const projects = [
    {
        name: "E-Commerce Platform",
        description:
            "Full-stack e-commerce platform with product catalog, shopping cart, and checkout. Features real-time inventory management, payment gateway integration with Stripe, and order tracking system. Implemented responsive design with React and Node.js backend.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
            {
                name: "stripe",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],

        image: ecommercePlatform,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "Analytics Dashboard",
        description:
            "Real-time analytics dashboard with interactive charts using D3.js and React. Displays user metrics, revenue tracking, and activity monitoring. Features WebSocket integration for live updates and data export functionality to CSV and PDF formats.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "d3js",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "websocket",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: analyticsDashboard,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "Project Management App",
        description:
            "Kanban-style project management application with drag-and-drop task boards. Features team collaboration, real-time updates, task assignments, and progress tracking. Built with React, Express, and MongoDB with JWT authentication.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "jwt",
                color: "blue-text-gradient",
            },
            {
                name: "dragndrop",
                color: "green-text-gradient",
            },
        ],
        image: projectManagement,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "GraphQL Federation Gateway",
        description:
            "Designed GraphQL federation gateway aggregating 50+ microservices with DataLoader patterns for N+1 query optimization, reducing API response times by 60%. Implemented micro-frontend architecture using Module Federation enabling independent deployment across 20+ product teams.",
        tags: [
            {
                name: "graphql",
                color: "blue-text-gradient",
            },
            {
                name: "federation",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "webpack",
                color: "green-text-gradient",
            },
            {
                name: "microservices",
                color: "red-text-gradient",
            },
        ],

        image: graphqlFederation,
        source_code_link: "https://i-zeshawn.github.io",
    },
    {
        name: "Observability & Monitoring Stack",
        description:
            "Implemented advanced observability stack with Prometheus, Grafana, and OpenTelemetry, reducing MTTR by 65% through intelligent alerting and distributed tracing capabilities. Established comprehensive testing strategy including chaos testing, achieving 95% code coverage.",
        tags: [
            {
                name: "prometheus",
                color: "blue-text-gradient",
            },
            {
                name: "grafana",
                color: "green-text-gradient",
            },
            {
                name: "opentelemetry",
                color: "pink-text-gradient",
            },
            {
                name: "kubernetes",
                color: "blue-text-gradient",
            },
            {
                name: "distributed",
                color: "green-text-gradient",
            },
            {
                name: "monitoring",
                color: "red-text-gradient",
            },
        ],

        image: observabilityStack,
        source_code_link: "https://i-zeshawn.github.io",
    },
    {
        name: "Multi-Region Cloud Infrastructure",
        description:
            "Led cloud-native transformation migrating 200+ services to Kubernetes with zero-downtime deployments, reducing infrastructure costs by $3M annually. Drove adoption of Infrastructure as Code using Terraform and Pulumi across 15+ Azure regions with disaster recovery.",
        tags: [
            {
                name: "terraform",
                color: "blue-text-gradient",
            },
            {
                name: "kubernetes",
                color: "green-text-gradient",
            },
            {
                name: "azure",
                color: "pink-text-gradient",
            },
            {
                name: "pulumi",
                color: "blue-text-gradient",
            },
            {
                name: "iac",
                color: "green-text-gradient",
            },
            {
                name: "devops",
                color: "pink-text-gradient",
            },
        ],

        image: multiRegionInfra,
        source_code_link: "https://i-zeshawn.github.io",
    },
    {
        name: "Branchless Banking Application",
        description:
            "Mobile-first digital banking platform enabling users to perform financial transactions, bill payments, mobile top-ups, and QR code payments. Features real-time balance updates, transaction history, and instant money transfers with biometric authentication and end-to-end encryption.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "springboot",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
            {
                name: "redis",
                color: "blue-text-gradient",
            },
            {
                name: "aws",
                color: "green-text-gradient",
            },
        ],
        image: branchlessBanking,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "Healthcare Management System",
        description:
            "Comprehensive healthcare platform for managing patient records, appointments, prescriptions, and medical analytics. Features include real-time patient monitoring, electronic health records (EHR), appointment scheduling, prescription management, and HIPAA-compliant data security with role-based access control.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "aws",
                color: "blue-text-gradient",
            },
            {
                name: "websocket",
                color: "green-text-gradient",
            },
        ],
        image: healthcareApp,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "Telecom Management Platform",
        description:
            "Enterprise telecom platform for network monitoring, customer account management, and service provisioning. Includes real-time network performance tracking, data usage analytics, billing management, 5G network integration, and automated alert systems for network maintenance and outages.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "dotnet",
                color: "green-text-gradient",
            },
            {
                name: "azure",
                color: "pink-text-gradient",
            },
            {
                name: "signalr",
                color: "blue-text-gradient",
            },
            {
                name: "sqlserver",
                color: "green-text-gradient",
            },
        ],
        image: telecomApp,
        source_code_link: "https://github.com/i-zeshawn",
    },
    {
        name: "Employee Wellbeing Platform",
        description:
            "Corporate wellness application promoting employee health through fitness tracking, mental health resources, nutrition planning, and sleep monitoring. Features include personalized wellness goals, team challenges, reward systems, health checkup scheduling, and comprehensive analytics dashboard for HR teams.",
        tags: [
            {
                name: "vuejs",
                color: "blue-text-gradient",
            },
            {
                name: "fastapi",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "grafana",
                color: "green-text-gradient",
            },
        ],
        image: employeeWellbeing,
        source_code_link: "https://github.com/i-zeshawn",
    },

];

export {services, technologies, experiences, testimonials, projects};
