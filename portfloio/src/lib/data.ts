import {
  Project,
  SkillCategory,
  Certification,
  BlogPost,
  TimelineEvent,
  Stat,
  Testimonial,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Projects Built", value: 12, suffix: "+", icon: "project" },
  { label: "SQL Queries Written", value: 500, suffix: "+", icon: "sql" },
  { label: "Data Models Created", value: 25, suffix: "+", icon: "model" },
  { label: "GitHub Contributions", value: 200, suffix: "+", icon: "github" },
  { label: "Learning Hours", value: 1500, suffix: "+", icon: "clock" },
  { label: "Data Quality Checks", value: 100, suffix: "+", icon: "check" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Engineering",
    icon: "database",
    skills: [
      { name: "SQL Server", level: 90, category: "Data Engineering" },
      { name: "T-SQL", level: 88, category: "Data Engineering" },
      { name: "ETL/ELT Pipelines", level: 85, category: "Data Engineering" },
      { name: "Data Warehousing", level: 82, category: "Data Engineering" },
      { name: "Apache Airflow", level: 70, category: "Data Engineering" },
      { name: "Apache Kafka", level: 65, category: "Data Engineering" },
    ],
  },
  {
    name: "Analytics Engineering",
    icon: "chart",
    skills: [
      { name: "dbt", level: 88, category: "Analytics Engineering" },
      { name: "Data Testing", level: 85, category: "Analytics Engineering" },
      { name: "Documentation", level: 82, category: "Analytics Engineering" },
      { name: "Snapshots (SCD Type 2)", level: 80, category: "Analytics Engineering" },
      { name: "Incremental Models", level: 78, category: "Analytics Engineering" },
      { name: "Data Quality Frameworks", level: 85, category: "Analytics Engineering" },
    ],
  },
  {
    name: "Data Modeling",
    icon: "layers",
    skills: [
      { name: "Star Schema", level: 88, category: "Data Modeling" },
      { name: "Kimball Methodology", level: 85, category: "Data Modeling" },
      { name: "Fact Tables", level: 87, category: "Data Modeling" },
      { name: "Dimension Tables", level: 87, category: "Data Modeling" },
      { name: "Medallion Architecture", level: 82, category: "Data Modeling" },
      { name: "ERD Design", level: 80, category: "Data Modeling" },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      { name: "Git & GitHub", level: 88, category: "DevOps" },
      { name: "GitHub Actions CI/CD", level: 82, category: "DevOps" },
      { name: "Docker", level: 78, category: "DevOps" },
      { name: "Linux", level: 75, category: "DevOps" },
      { name: "AWS", level: 65, category: "DevOps" },
      { name: "Azure", level: 60, category: "DevOps" },
    ],
  },
  {
    name: "Analytics & BI",
    icon: "bar-chart",
    skills: [
      { name: "Power BI", level: 80, category: "Analytics" },
      { name: "Tableau", level: 75, category: "Analytics" },
      { name: "Apache Superset", level: 70, category: "Analytics" },
      { name: "Python", level: 78, category: "Analytics" },
      { name: "Pandas", level: 75, category: "Analytics" },
      { name: "Jupyter Notebooks", level: 72, category: "Analytics" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "dbt-analytics-engineering",
    title: "dbt Analytics Engineering",
    subtitle: "Modern Data Transformation Pipeline",
    description:
      "A learning-focused dbt + SQL Server project for retail analytics. Implements advanced dbt patterns including layered modeling, testing, documentation, snapshots, and CI/CD in a realistic data engineering workflow.",
    problemStatement:
      "Modern data teams need reliable, tested, and documented data transformations. Raw data must be cleaned, tested, and modeled into analytics-ready datasets while maintaining full traceability and reproducibility.",
    businessContext:
      "Retail analytics requires consistent, high-quality data products. This project demonstrates how dbt transforms raw retail data into reliable business intelligence through a modern analytics engineering approach.",
    architecture: "dbt layered architecture: Staging → Intermediate → Marts (Star Schema)",
    techStack: ["dbt 1.11", "SQL Server 2022", "Python 3.11", "Docker", "GitHub Actions", "SQLFluff"],
    dataFlow: [
      "Raw CSV data ingestion into SQL Server",
      "Staging models: source cleaning & standardization",
      "Intermediate models: business logic & joins",
      "Mart models: analytics-ready facts & dimensions",
      "Automated testing & documentation",
      "CI/CD pipeline with GitHub Actions",
    ],
    kpiImpact: [
      "100% source freshness monitoring",
      "Automated data quality tests on every model",
      "Full documentation generation",
      "SCD Type 2 snapshots for historical tracking",
    ],
    githubUrl: "https://github.com/Ritik574-coder/dbt-analytics-engineering",
    tags: ["dbt", "SQL Server", "CI/CD", "Testing", "Documentation", "Docker"],
    featured: true,
    status: "completed",
    date: "2026-06",
    metrics: [
      { label: "Models", value: "20+" },
      { label: "Tests", value: "50+" },
      { label: "Coverage", value: "100%" },
      { label: "Commits", value: "20" },
    ],
  },
  {
    slug: "medallion-data-warehouse",
    title: "Medallion Data Warehouse",
    subtitle: "Bronze → Silver → Gold Architecture",
    description:
      "A Microsoft SQL Server data warehouse implementing the Medallion Architecture for retail analytics. Features raw data ingestion, schema design, full-refresh loading, data quality profiling, and curated analytical tables.",
    problemStatement:
      "Enterprises need a structured approach to data warehousing that separates raw ingestion from transformation and analytics. The Medallion pattern provides clear layer boundaries for data quality and governance.",
    businessContext:
      "Retail businesses generate massive volumes of operational data across customers, products, stores, and transactions. This warehouse consolidates 8 core entities into a unified analytical platform.",
    architecture: "Medallion Architecture: Bronze (Raw) → Silver (Cleansed) → Gold (Curated)",
    techStack: ["SQL Server 2022", "T-SQL", "Docker", "CSV Ingestion", "Stored Procedures"],
    dataFlow: [
      "CSV source files loaded into Bronze layer",
      "Bronze: Raw data with source-aligned schema",
      "Silver: Cleansed & standardized with business rules",
      "Gold: Analytics-ready dimensional models",
      "Data quality profiling at each layer",
    ],
    kpiImpact: [
      "8 core entities modeled",
      "Comprehensive data quality rules",
      "Defensive SQL patterns (TRY_CONVERT, CASE)",
      "Containerized development environment",
    ],
    githubUrl: "https://github.com/Ritik574-coder/Medallion-Data-Warehouse",
    tags: ["SQL Server", "Medallion", "T-SQL", "Docker", "Data Quality", "ETL"],
    featured: true,
    status: "completed",
    date: "2026-04",
    metrics: [
      { label: "Entities", value: "8" },
      { label: "Commits", value: "44" },
      { label: "Transforms", value: "30+" },
      { label: "Quality Rules", value: "100+" },
    ],
  },
  {
    slug: "sqlserver-datawarehouse",
    title: "Business Data Warehouse",
    subtitle: "Multi-Source Enterprise Integration",
    description:
      "A comprehensive Business Data Warehouse built on SQL Server integrating CRM and ERP systems. Implements Medallion Architecture with Star Schema dimensional models for enterprise analytics.",
    problemStatement:
      "Organizations operate multiple source systems (CRM, ERP) with inconsistent data formats. A unified data warehouse is needed to integrate these sources into a single source of truth for business reporting.",
    businessContext:
      "Enterprise businesses need to combine customer data from CRM systems with operational data from ERP systems. This project demonstrates real-world multi-source integration patterns.",
    architecture: "Medallion Architecture with Star Schema: CRM + ERP → Bronze → Silver → Gold (Star Schema)",
    techStack: ["SQL Server", "T-SQL", "Python", "Apache Superset", "Docker", "Power BI"],
    dataFlow: [
      "CRM data: customers, products, sales",
      "ERP data: customer demographics, locations, categories",
      "Bronze: Raw ingestion from both sources",
      "Silver: Cleansing, standardization, deduplication",
      "Gold: Star Schema (dim_customers, dim_products, fact_sales)",
    ],
    kpiImpact: [
      "Multi-source integration (CRM + ERP)",
      "Star Schema dimensional modeling",
      "Automated data quality validation",
      "BI-ready views for reporting",
    ],
    githubUrl: "https://github.com/Ritik574-coder/sqlserver-datawarehouse",
    tags: ["SQL Server", "Star Schema", "CRM", "ERP", "Dimensional Modeling", "BI"],
    featured: true,
    status: "completed",
    date: "2026-03",
    metrics: [
      { label: "Sources", value: "2" },
      { label: "Dimensions", value: "3" },
      { label: "Facts", value: "1" },
      { label: "Commits", value: "53" },
    ],
  },
  {
    slug: "dbt-datawarehouse-project",
    title: "dbt Data Warehouse Pipeline",
    subtitle: "Modular Transformation Architecture",
    description:
      "A modular DBT data warehouse pipeline built on SQL Server, featuring staging, intermediate, and mart layers with automated data quality tests and documentation.",
    problemStatement:
      "Data warehouses need modular, maintainable transformation code. dbt provides a framework for version-controlled, tested, and documented data transformations.",
    businessContext:
      "This project demonstrates how to build a production-grade data warehouse pipeline using dbt's modular architecture, separating concerns across staging, intermediate, and mart layers.",
    architecture: "dbt Staging → Intermediate → Marts with automated testing",
    techStack: ["dbt", "SQL Server", "Python", "Docker", "GitHub Actions"],
    dataFlow: [
      "Source configuration and freshness checks",
      "Staging models for source standardization",
      "Intermediate models for business logic",
      "Mart models for analytics consumption",
    ],
    kpiImpact: [
      "Modular layer architecture",
      "Automated data tests",
      "Generated documentation",
    ],
    githubUrl: "https://github.com/Ritik574-coder/dbt-datawarehouse-project",
    tags: ["dbt", "SQL Server", "Modular", "Testing", "Documentation"],
    featured: false,
    status: "completed",
    date: "2026-03",
    metrics: [
      { label: "Layers", value: "3" },
      { label: "Models", value: "15+" },
      { label: "Tests", value: "30+" },
    ],
  },
  {
    slug: "bi-dashboards",
    title: "BI Dashboard Collection",
    subtitle: "Interactive Analytics Dashboards",
    description:
      "A curated collection of interactive dashboards designed to transform complex data into clear, actionable insights through refined visuals and thoughtful user experience.",
    problemStatement:
      "Raw data and even well-modeled data need effective visualization to drive business decisions. Dashboards must be intuitive, performant, and actionable.",
    businessContext:
      "Business stakeholders need real-time visibility into key metrics. This collection demonstrates end-to-end analytics from data modeling to interactive visualization.",
    architecture: "Data Warehouse → BI Tool → Interactive Dashboards",
    techStack: ["Power BI", "Tableau", "Apache Superset", "SQL Server", "DAX"],
    dataFlow: [
      "Data from warehouse views",
      "Data modeling in BI tools",
      "Interactive dashboard creation",
      "KPI visualization and drill-down",
    ],
    kpiImpact: [
      "Interactive data exploration",
      "Real-time KPI monitoring",
      "Cross-functional analytics",
    ],
    githubUrl: "https://github.com/Ritik574-coder/Bi-Project-",
    tags: ["Power BI", "Tableau", "Superset", "DAX", "Visualization"],
    featured: false,
    status: "completed",
    date: "2026-01",
    metrics: [
      { label: "Dashboards", value: "5+" },
      { label: "KPIs", value: "20+" },
    ],
  },
  {
    slug: "python-foundations",
    title: "Python Foundations to Mastery",
    subtitle: "Comprehensive Python Learning Path",
    description:
      "A structured Python learning repository covering fundamentals to advanced concepts, with real-world examples, best practices, and practical use cases for data analysis, data engineering, and software development.",
    problemStatement:
      "Python is essential for data engineering and analytics. A structured learning path ensures comprehensive coverage of language fundamentals and advanced patterns.",
    businessContext:
      "Building strong Python foundations enables efficient data pipeline development, automation, and analytical computing.",
    architecture: "Progressive learning modules from basics to advanced",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "PySpark", "Jupyter"],
    dataFlow: [
      "Fundamentals: variables, control flow, functions",
      "Data structures: lists, dicts, sets, tuples",
      "OOP: classes, inheritance, polymorphism",
      "Data analysis: Pandas, NumPy, visualization",
      "Advanced: decorators, generators, context managers",
    ],
    kpiImpact: [
      "Structured learning progression",
      "Real-world examples",
      "Best practices documentation",
    ],
    githubUrl: "https://github.com/Ritik574-coder/python-foundations-to-mastery",
    tags: ["Python", "Pandas", "NumPy", "Learning", "Data Analysis"],
    featured: false,
    status: "completed",
    date: "2026-05",
    metrics: [
      { label: "Modules", value: "20+" },
      { label: "Examples", value: "100+" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "dbt Fundamentals",
    issuer: "dbt Labs",
    date: "2026",
    category: "dbt",
    status: "planned",
  },
  {
    id: "cert-2",
    title: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2026",
    category: "Cloud",
    status: "planned",
  },
  {
    id: "cert-3",
    title: "SQL Server Certification",
    issuer: "Microsoft",
    date: "2026",
    category: "SQL",
    status: "planned",
  },
  {
    id: "cert-4",
    title: "GitHub Actions Certification",
    issuer: "GitHub",
    date: "2026",
    category: "DevOps",
    status: "planned",
  },
  {
    id: "cert-5",
    title: "AWS Certified Data Analytics",
    issuer: "Amazon Web Services",
    date: "2026",
    category: "Cloud",
    status: "planned",
  },
  {
    id: "cert-6",
    title: "dbt Analytics Engineering",
    issuer: "dbt Labs",
    date: "2026",
    category: "dbt",
    status: "in-progress",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "medallion-architecture-deep-dive",
    title: "Medallion Architecture: A Deep Dive into Bronze, Silver, and Gold Layers",
    excerpt:
      "Understanding the Medallion Architecture pattern and how it brings structure to data warehousing through layered data quality and governance.",
    category: "Data Engineering",
    date: "2026-06-10",
    readTime: "8 min read",
    tags: ["Architecture", "Data Warehousing", "Best Practices"],
    status: "draft",
  },
  {
    slug: "dbt-testing-strategies",
    title: "Advanced dbt Testing Strategies for Data Quality",
    excerpt:
      "Exploring singular tests, schema tests, and custom generic tests in dbt to build robust data quality frameworks.",
    category: "Analytics Engineering",
    date: "2026-06-05",
    readTime: "10 min read",
    tags: ["dbt", "Testing", "Data Quality"],
    status: "draft",
  },
  {
    slug: "star-schema-design",
    title: "Star Schema Design Patterns for Modern Data Warehouses",
    excerpt:
      "A practical guide to designing fact and dimension tables using Kimball methodology for optimal query performance.",
    category: "Data Modeling",
    date: "2026-05-28",
    readTime: "12 min read",
    tags: ["Star Schema", "Kimball", "Dimensional Modeling"],
    status: "draft",
  },
  {
    slug: "ci-cd-for-data-pipelines",
    title: "CI/CD Automation for Data Pipelines with GitHub Actions",
    excerpt:
      "Setting up automated testing, linting, and deployment for dbt projects using GitHub Actions workflows.",
    category: "DevOps",
    date: "2026-05-20",
    readTime: "7 min read",
    tags: ["CI/CD", "GitHub Actions", "Automation"],
    status: "draft",
  },
  {
    slug: "sql-server-performance",
    title: "SQL Server Performance Optimization for Data Warehouses",
    excerpt:
      "Techniques for optimizing query performance, indexing strategies, and partitioning in SQL Server data warehouses.",
    category: "SQL",
    date: "2026-05-15",
    readTime: "9 min read",
    tags: ["SQL Server", "Performance", "Optimization"],
    status: "draft",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "SQL Learning Journey",
    description:
      "Started learning SQL fundamentals, database concepts, and query optimization techniques. Built a strong foundation in relational database management.",
    icon: "database",
    tags: ["SQL", "MySQL", "Database Fundamentals"],
  },
  {
    year: "2025",
    title: "Data Cleaning & Python",
    description:
      "Expanded into Python for data engineering. Learned Pandas, NumPy, and data cleaning techniques. Completed structured Python learning path.",
    icon: "code",
    tags: ["Python", "Pandas", "Data Cleaning"],
  },
  {
    year: "2025",
    month: "Mid",
    title: "SQL Server & ETL",
    description:
      "Deep-dived into SQL Server, T-SQL, and ETL pipeline development. Built stored procedures, views, and complex transformations.",
    icon: "server",
    tags: ["SQL Server", "T-SQL", "ETL", "Stored Procedures"],
  },
  {
    year: "2026",
    title: "Analytics Engineering with dbt",
    description:
      "Discovered dbt and analytics engineering. Started building modern data transformation pipelines with testing, documentation, and CI/CD.",
    icon: "tool",
    tags: ["dbt", "Analytics Engineering", "Testing"],
  },
  {
    year: "2026",
    month: "Q1",
    title: "Data Warehouse Architecture",
    description:
      "Built end-to-end data warehouses using Medallion Architecture. Implemented Bronze → Silver → Gold layers with comprehensive data quality rules.",
    icon: "building",
    tags: ["Medallion", "Star Schema", "Dimensional Modeling"],
  },
  {
    year: "2026",
    month: "Q2",
    title: "CI/CD & DevOps",
    description:
      "Implemented GitHub Actions CI/CD pipelines for automated testing, linting, and deployment of data transformation projects.",
    icon: "rocket",
    tags: ["GitHub Actions", "CI/CD", "Docker", "DevOps"],
  },
  {
    year: "2026",
    month: "Current",
    title: "Building Portfolio & Open Source",
    description:
      "Creating a professional portfolio and contributing to the data engineering community through open-source projects and technical writing.",
    icon: "star",
    tags: ["Portfolio", "Open Source", "Technical Writing"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mentor Review",
    role: "Data Engineering Lead",
    content:
      "Ritik demonstrates strong fundamentals in data engineering and a genuine passion for building reliable data systems. His dbt projects show maturity in testing and documentation practices.",
  },
  {
    name: "Peer Review",
    role: "Analytics Engineer",
    content:
      "Impressive attention to detail in data quality frameworks. The Medallion Architecture implementation shows understanding of production-grade data patterns.",
  },
  {
    name: "Code Review",
    role: "Senior Data Engineer",
    content:
      "Well-structured code with clear separation of concerns. The CI/CD automation and testing strategies demonstrate engineering maturity beyond typical junior-level work.",
  },
];

export const contactInfo = {
  email: "ritik.kumar@example.com",
  linkedin: "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
  github: "https://github.com/Ritik574-coder",
  discord: "https://discord.gg/gqPKwWjKA",
};
