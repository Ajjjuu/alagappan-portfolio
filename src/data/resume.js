export const profile = {
  name: 'Alagappan PR',
  title: 'Product Data Analyst & AI Engineer',
  tagline: 'Turning data into product decisions, and applied AI into reliable solutions.',
  email: 'alagappanofficialoutlook@gmail.com',
  phone: '+91 9994792204',
  phoneHref: 'tel:+919994792204',
  linkedin: 'https://www.linkedin.com/in/alagappan-pr',
  github: 'https://github.com/Alagappan777',
  location: 'Bengaluru, India',
  // Put your photo at public/photo.jpg and set this to '/photo.jpg'
  photo: '/photo.jpeg',
  resume: '/Alagappan_Resume.pdf',
}

export const summary = [
  'Product Data Analyst with 1 year of experience using data to improve product decisions, user experience, and business outcomes. Skilled in Python, SQL, data analysis, dashboarding, KPI tracking, product metrics, and exploratory data analysis.',
  'Experienced in translating business questions into actionable insights, identifying trends in user behavior, and collaborating with product and engineering teams. Brings a strong foundation in data science and applied AI to build data-informed, scalable product solutions.',
  'Eager to contribute strong problem-solving, analytical thinking, and applied AI expertise to build impactful products at a product-focused organization.',
]

export const highlights = [
  { value: '1 yr', label: 'Experience' },
  { value: '3', label: 'Global regions: APJ, EMEA, AMER' },
  { value: 'RAG', label: 'Prototype built' },
  { value: 'IIT M', label: 'BS Data Science' },
]

export const skills = [
  {
    category: 'Programming & Analytics',
    items: [
      'Python', 'SQL', 'Advanced Excel', 'Data Analysis', 'Data Cleaning', 'EDA',
      'KPI Tracking', 'Product Metrics', 'Funnel Analysis', 'Cohort Analysis',
      'Retention Analysis', 'Churn Analysis', 'A/B Testing',
    ],
  },
  {
    category: 'BI & Visualization',
    items: ['Power BI', 'Dashboard Development', 'Data Visualization', 'Automated Reporting', 'Grafana'],
  },
  {
    category: 'Databases & Data Platforms',
    items: [
      'Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Azure Cosmos DB',
      'Databricks', 'MySQL Workbench', 'Azure Blob Storage',
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'Machine Learning', 'Applied AI', 'Predictive Analytics', 'Classification', 'Regression',
      'Clustering', 'Recommendation Systems', 'NLP', 'Generative AI', 'LLMs',
      'Prompt Engineering', 'Model Evaluation', 'Feature Engineering', 'scikit-learn',
    ],
  },
  {
    category: 'AI Frameworks & Tools',
    items: [
      'LangChain', 'LangGraph', 'LlamaIndex', 'Semantic Kernel', 'OpenAI API', 'Azure AI Foundry',
      'Azure Document Intelligence', 'Mistral AI', 'OpenAI Vision', 'Hugging Face',
    ],
  },
  {
    category: 'Generative AI & Governance',
    items: [
      'RAG', 'Agentic RAG', 'AI Agents', 'Grounded Responses', 'LLM Evaluation', 'Vector Databases',
      'Metadata Management', 'Data Quality', 'RBAC', 'Azure AD', 'Responsible AI', 'Model Monitoring',
    ],
  },
]

export const experience = [
  {
    company: 'Dell Technologies',
    role: 'Product Data Analyst',
    location: 'Bengaluru',
    period: '2026 - Present',
    groups: [
      {
        heading: 'Product data & financial analysis',
        bullets: [
          'Conducted product data and financial analysis for global Dell business regions, including APJ, EMEA, and AMER, supporting costing, pricing, and business-performance reporting.',
          'Used Dell LPM product data analysis tools, Dell Domino Express, SQL Server Management Studio (SSMS), SQL, and Advanced Excel to extract, validate, reconcile, and analyze product and financial datasets.',
          'Performed global cost analysis across product portfolios, identifying data discrepancies, cost variances, and trends to support accurate business and operational decisions.',
          'Created and maintained Advanced Excel reports, including PivotTables, lookups, data validation, conditional formatting, and automated calculations for recurring financial and product-data reporting.',
          'Collaborated with regional stakeholders and cross-functional teams to resolve product-data issues, validate costing information, and deliver timely analysis aligned with reporting timelines.',
          'Supported data-quality initiatives by reconciling data across systems, documenting findings, and improving the accuracy and consistency of product and costing records.',
        ],
      },
      {
        heading: 'Generative AI & RAG',
        bullets: [
          'Built a Retrieval-Augmented Generation (RAG) prototype to retrieve relevant product, costing, and financial information from internal datasets, improving the speed of business-data discovery.',
          'Prepared and indexed structured and unstructured business data for semantic and vector search using embeddings, enabling more relevant AI-assisted analysis.',
          'Developed prompt templates and evaluated LLM responses for accuracy, relevance, and business alignment in product-data analysis use cases.',
          'Explored AI-assisted anomaly detection to identify data-quality issues, cost variances, and inconsistencies in global product datasets.',
        ],
      },
    ],
  },
]

export const education = [
  {
    school: 'Indian Institute of Technology Madras (IIT Madras)',
    degree: 'BS in Data Science and Applications',
    period: 'Pursuing',
    note: 'Expected graduation: Oct 2026',
  },
  {
    school: 'The Oxford College of Engineering, Bengaluru',
    degree: 'Bachelor of Engineering in Information Science & Engineering',
    period: 'Aug 2019 - May 2023',
    note: 'CGPA: 7.1',
  },
]

export const projects = [
  {
    title: 'Dell Maverick: Global Application Data Analysis',
    description:
      'Dell global application data analysis project covering product data cost prediction and intelligence analysis, using BI, Microsoft SQL Server, Excel, automation, and AI for analysis.',
    tags: ['Power BI', 'SQL Server', 'Excel', 'Automation', 'AI'],
    placeholder: false,
  },
  {
    title: 'RAG Prototype for Business Data Discovery',
    description:
      'Retrieval-Augmented Generation prototype that surfaces product, costing, and financial information from internal datasets using embeddings and vector search.',
    tags: ['RAG', 'Embeddings', 'Vector Search', 'LLM Evaluation'],
    placeholder: false,
  },
  {
    title: 'Project Title (placeholder)',
    description: 'Placeholder: describe a dashboard, analysis, or ML project here. Edit in src/data/resume.js.',
    tags: ['Python', 'SQL', 'Power BI'],
    link: '',
    placeholder: true,
  },
]
