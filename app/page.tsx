'use client';
import { useState } from 'react';
import { ArrowUpRight, Cloud, Github, Linkedin, Mail, Menu, X, ShieldCheck, GitBranch, Boxes, Database, Activity, Download, ArrowRight, Layers3 } from 'lucide-react';
// EDIT THESE VALUES BEFORE PUBLISHING. Do not claim unfinished projects as completed.
const profile = {
  name: 'Pelumi Oke Papayaw',
  role: 'AWS Cloud Engineer | Solutions Architect',
  email: 'okepelumi5@gmail.com',
  github: 'https://github.com/fhyxx',
  linkedin: 'https://www.linkedin.com/in/oluwapelumioke',
  resume: '/Oke_Pelumi_Papayaw_CV_.pdf',
};

const projects = [
  {
    number: '01',
    name: 'AWS Three-Tier Architecture Foundation',
    type: 'SOLUTIONS ARCHITECTURE',
    status: 'Implemented · Terraform validated; independent deployment verified',
    description:
      'Built a cost-conscious AWS network and application foundation with a six-subnet VPC across two Availability Zones, tier-specific route tables, security groups and an EC2-hosted HTTP test application. Adopted existing infrastructure into modular Terraform and documented encrypted S3 remote state with versioning and native state locking. Added an independent fresh-account deployment guide, EC2 user-data bootstrap, Terraform formatting/validation workflow, and reproducible verification steps. A separate isolated deployment passed EC2 status checks and returned HTTP 200. This is a verified network and application foundation—not a production three-tier application: the baseline EC2 was terminated during cleanup, and private-tier application hosting, NAT Gateway, ALB and RDS are not currently deployed.',
    stack: [
      'VPC',
      'EC2',
      'Application Load Balancer',
      'Systems Manager',
      'AWS Budgets',
      'Terraform',
      'Amazon S3 state',
      'EBS encryption',
      'IAM',
    ],
    icon: Layers3,
    repo: 'https://github.com/fhyxx/aws-three-tier-architecture',
    diagram: 'https://github.com/fhyxx/aws-three-tier-architecture/blob/main/docs/architecture-diagram.md',
    deployment: 'https://github.com/fhyxx/aws-three-tier-architecture/blob/main/docs/independent-deployment-guide.md',
    workflow: '',
  },
  {
    number: '02',
    name: 'Containerized AWS CI/CD Pipeline',
    type: 'DEVOPS & AUTOMATION',
    status: 'Implemented · ECS/Fargate deployment verified; service scaled down',
    description:
      'Built and verified a GitHub Actions pipeline for a Node.js/Express app. The workflow installs dependencies, runs three automated tests, builds a Docker image, publishes latest and commit-SHA tags to GitHub Container Registry and private Amazon ECR, then deploys the ECR image to Amazon ECS on AWS Fargate. GitHub Actions authenticates to AWS using OIDC and an IAM role, without long-lived AWS access keys. The Fargate service deployment was verified with a successful HTTP 200 response and then scaled down to zero tasks; the temporary public inbound rule for TCP 3000 was removed during cleanup.',
    stack: [
      'GitHub Actions',
      'Docker',
      'Amazon ECR',
      'Amazon ECS',
      'IAM',
    ],
    icon: GitBranch,
    repo: 'https://github.com/fhyxx/pelumi-containerized-cicd',
    diagram: '',
    workflow: 'https://github.com/fhyxx/pelumi-containerized-cicd/actions/runs/41639511999',
  },
  {
    number: '03',
    name: 'On-Premises to AWS Migration Blueprint',
    type: 'CLOUD MIGRATION',
    status: 'Blueprint complete · Terraform validated · not deployed',
    description:
      'Designed and technically signed off a fictional end-to-end AWS migration blueprint covering workload discovery, a two-AZ target architecture, segmented VPC networking, hybrid VPN/BGP connectivity, AWS MGN for server rehosting, DMS for PostgreSQL migration, and DataSync for file transfer. Built an opt-in Terraform foundation for network, workload and migration resources, a migration runbook, rollback and readiness controls, a reconciled cost model, and automated synthetic CI validation. The architecture, diagrams, Terraform foundation, migration runbook and cost model are documented and validated; no AWS resources or migration services have been deployed. This project is a completed design-and-planning deliverable, not a live migration.',
    stack: [
      'AWS Application Migration Service (MGN)',
      'AWS Database Migration Service (DMS)',
      'AWS DataSync',
      'Amazon VPC',
      'Terraform',
      'Amazon RDS PostgreSQL',
      'Amazon EFS',
      'Amazon S3',
      'Site-to-Site VPN / BGP',
      'AWS IAM',
    ],
    icon: Database,
    repo: 'https://github.com/fhyxx/aws-cloud-migration-blueprint',
    diagram: 'https://github.com/fhyxx/aws-cloud-migration-blueprint/blob/main/architecture/target-architecture.md',
    workflow: 'https://github.com/fhyxx/aws-cloud-migration-blueprint/actions/runs/42650119868',
  },
  {
    number: '04',
    name: 'AWS Cost Visibility & Optimization Dashboard',
    type: 'COST OPTIMIZATION & FINOPS',
    status: 'Implemented · 28 tests passed · CI passed · hosted Streamlit app live',
    description:
      'Built a Python and Streamlit billing analytics dashboard that turns monthly AWS cost records into executive KPIs, spend trends, service/region/account breakdowns, explainable anomaly flags and evidence-led optimization reviews. Added validated CSV ingestion with common Cost and Usage Report header aliases, missing-month-aware comparisons, USD-only validation, duplicate-line-item handling, spreadsheet-safe exports and a downloadable analysis package. The repository includes an 18-month reproducible synthetic dataset, automated tests, Ruff and mypy checks, and GitHub Actions CI. All sample billing data is synthetic. A hosted Streamlit demonstration is available; the app does not connect to AWS or provision resources. Savings scenarios are illustrative and require service-specific telemetry and operational review.',
    stack: [
      'Python',
      'Streamlit',
      'Pandas',
      'Plotly',
      'Pydantic',
      'Pytest',
      'Ruff',
      'GitHub Actions',
      'AWS Cost & Usage Report data',
    ],
    icon: Activity,
    repo: 'https://github.com/fhyxx/aws-cost-optimization-dashboard',
    diagram: '',
    workflow: 'https://github.com/fhyxx/aws-cost-optimization-dashboard/actions/runs/42700928201',
    screenshots: [
      { label: 'Dashboard overview', url: 'https://github.com/fhyxx/aws-cost-optimization-dashboard/blob/main/docs/screenshots/dashboard-overview.png' },
      { label: 'Spend trends', url: 'https://github.com/fhyxx/aws-cost-optimization-dashboard/blob/main/docs/screenshots/spend-trends.png' },
      { label: 'Anomaly review', url: 'https://github.com/fhyxx/aws-cost-optimization-dashboard/blob/main/docs/screenshots/anomaly-review.png' },
      { label: 'Optimization recommendations', url: 'https://github.com/fhyxx/aws-cost-optimization-dashboard/blob/main/docs/screenshots/recommendations.png' },
    ],
  },
  {
    number: '05',
    name: 'AWS Serverless Task Management REST API',
    type: 'SERVERLESS & API ENGINEERING',
    status: 'Implemented · 10 tests passed · GitHub Actions CI passed · not deployed',
    description:
      'Designed and implemented a Python 3.12 serverless REST API using API Gateway HTTP API, AWS Lambda, Amazon DynamoDB and Amazon Cognito JWT authentication. Delivers five task-management endpoints with route-level OAuth scopes, per-user data isolation from the validated JWT subject, strict input validation, bounded pagination, consistent errors and structured logging. Infrastructure is defined in Terraform with least-privilege runtime IAM, encrypted DynamoDB storage, point-in-time recovery, deletion protection and retained CloudWatch logs. Includes an OpenAPI 3.1 contract, architecture and security decisions, deployment/teardown runbook, reproducible Lambda packaging, pytest/moto tests, Ruff checks and Terraform CI. The implementation and package were validated locally and in GitHub Actions; no AWS resources have been deployed and no live API behavior is claimed.',
    stack: [
      'Python 3.12',
      'AWS Lambda',
      'API Gateway HTTP API',
      'Amazon DynamoDB',
      'Amazon Cognito',
      'Terraform',
      'OpenAPI 3.1',
      'Pytest / Moto',
      'GitHub Actions',
    ],
    icon: Boxes,
    repo: 'https://github.com/fhyxx/fhyxx-aws-serverless-rest-api',
    diagram: 'https://github.com/fhyxx/fhyxx-aws-serverless-rest-api/blob/main/docs/architecture.md',
    deployment: 'https://github.com/fhyxx/fhyxx-aws-serverless-rest-api/blob/main/docs/deployment.md',
    workflow: 'https://github.com/fhyxx/fhyxx-aws-serverless-rest-api/actions',
  },
];


const skills = [
  {
    heading: 'AWS Cloud Infrastructure',
    items: [
      'Amazon EC2',
      'Amazon S3',
      'Amazon VPC & Networking',
      'Amazon RDS',
      'AWS IAM',
      'Elastic Load Balancing',
      'Auto Scaling',
      'Amazon Route 53',
    ],
  },
  {
    heading: 'DevOps & CI/CD',
    items: [
      'Git & GitHub',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Deployment Automation',
      'AWS CodePipeline',
      'AWS CodeBuild',
    ],
  },
  {
    heading: 'Infrastructure as Code',
    items: [
      'Terraform',
      'AWS CloudFormation',
      'Infrastructure Provisioning',
      'Configuration Management',
    ],
  },
  {
    heading: 'Containers & Deployment',
    items: [
      'Docker',
      'Containerization',
      'Amazon ECS',
      'Amazon ECR',
      'Application Deployment',
    ],
  },
  {
    heading: 'Security & Monitoring',
    items: [
      'IAM Policies',
      'Security Groups',
      'Amazon CloudWatch',
      'AWS CloudTrail',
      'Cloud Security Best Practices',
    ],
  },
  {
    heading: 'Solutions Architecture',
    items: [
      'Cloud Migration',
      'High Availability',
      'Scalability',
      'Cost Optimization',
      'Disaster Recovery',
      'AWS Well-Architected Framework',
    ],
  },
];

export default function Home() {
  const [menu, setMenu] = useState(false); const nav = ['About', 'Skills', 'Projects', 'Certifications', 'Contact']; return <main>
    <header className="header"><a className="brand" href="#home"><span className="brandmark"><Cloud size={19} /></span> PO<span className="accent">.</span> / CLOUD</a><nav className={menu ? 'nav open' : 'nav'}>{nav.map(n => <a onClick={() => setMenu(false)} key={n} href={'#' + n.toLowerCase()}>{n}</a>)}<a className="navcontact" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15} /></a></nav><button className="menu" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></header>
    <section id="home" className="hero shell"><div className="heroCopy"><div className="eyebrow"><span className="dot" /> AWS CLOUD ENGINEERING · PORTFOLIO</div><p className="hello">HELLO, I'M {profile.name.toUpperCase()}</p><h1>Building secure,<br /><span>scalable cloud</span><br />solutions<span className="accent">.</span></h1><p className="lede">I focus on designing reliable AWS infrastructure, streamlining deployments and aligning cloud decisions with business goals.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowRight size={17} /></a><a className="secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a></div><div className="social"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('AWS Cloud Portfolio Inquiry')}`}
      target="_blank"
      rel="noopener noreferrer"><Mail size={17} /> Email</a><a href={profile.resume} download><Download size={17} /> Resume </a></div></div><div className="heroArt" aria-label="Decorative cloud architecture illustration"><div className="orb orb1" /><div className="orb orb2" /><div className="diagram"><div className="diagramTop"><span className="windowdots">● ● ●</span> CLOUD / ARCHITECTURE <span>↗</span></div><div className="diagramBody"><div className="node central"><Cloud size={32} /><strong>AWS CLOUD</strong><small>DESIGN · DEPLOY · OPTIMIZE</small></div><div className="connections"><span /><span /><span /></div><div className="nodes"><div className="node"><ShieldCheck size={23} /><b>SECURE</b><small>IAM + VPC</small></div><div className="node"><Boxes size={23} /><b>SCALE</b><small>COMPUTE</small></div><div className="node"><Activity size={23} /><b>OBSERVE</b><small>MONITORING</small></div></div></div><div className="diagramFoot"><span><span className="dot" /> ARCHITECTURE FIRST</span><span>01 / 03</span></div></div></div></section>
    <div className="ticker"><div className="shell tickinner">AWS ARCHITECTURE <span>✳</span> CLOUD MIGRATION <span>✳</span> DEVOPS & CI/CD <span>✳</span> CONTAINERIZATION <span>✳</span> COST OPTIMIZATION</div></div>
    <section id="about" className="section shell"><div className="sectionHead"><span className="kicker">01 / ABOUT</span><h2>Cloud thinking.<br /><span>Business impact.</span></h2></div><div className="aboutGrid"><p className="bodyBig">I am an AWS-focused cloud professional specializing in cloud architecture, infrastructure design, deployment automation and cost optimization. I am passionate about building secure, scalable and reliable cloud solutions that address real business needs.
      My interests include AWS infrastructure migration, CI/CD pipelines, containerization, cloud security and operational efficiency. Through practical projects, I aim to demonstrate sound architectural decisions, automation, and cost-conscious infrastructure design.</p><div><p>My portfolio explores infrastructure architecture, deployment automation, migration planning and cost-conscious design. I aim to document not just what a solution uses, but why each architectural decision makes sense.</p><p>Explore the projects below as they move from reference designs into tested, documented implementations.</p><a className="textlink" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div></div></section>
    <section id="skills" className="section alternate"><div className="shell"><div className="sectionHead"><span className="kicker">02 / EXPERTISE</span><h2>Tools of the <span>trade.</span></h2><p>Technologies and focus areas shaping my cloud engineering work.</p></div><div className="skillsGrid">{skills.map((s, i) => <article className="skill" key={s.heading}><div className="skillTop"><span>0{i + 1}</span><Cloud size={23} /></div><h3>{s.heading}</h3><ul>{s.items.map(item => <li key={item}><span className="bullet" />{item}</li>)}</ul></article>)}</div></div></section>
    <section id="projects" className="section shell"><div className="sectionHead"><span className="kicker">03 / SELECTED WORK</span><h2>Architecture in <span>action.</span></h2><p>Explore the documented AWS deployment, architecture diagram and roadmap for different cloud engineering projects.</p></div><div className="projects">{projects.map(p => { const Icon = p.icon; return <article className="project" key={p.number}><div className="projectVisual"><div className="visualHeader"><span>{p.type}</span><span>{p.number} / 05</span></div><div className="projectIcon"><Icon size={52} strokeWidth={1.2} /></div><div className="visualFooter">AWS / SOLUTION DESIGN <span>↗</span></div></div><div className="projectContent"><div className="projectMeta"><span>{p.type}</span><span className="status">{p.status}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div><div className="projectLinks">{p.repo ? <a href={p.repo} target="_blank" rel="noopener noreferrer">View GitHub repository <ArrowUpRight size={16} /></a> : <span>Repository coming soon</span>}{p.diagram && <a href={p.diagram} target="_blank" rel="noopener noreferrer">Architecture diagram <ArrowUpRight size={16} /></a>}{p.deployment && <a href={p.deployment} target="_blank" rel="noopener noreferrer">Fresh-account deployment guide <ArrowUpRight size={16} /></a>}{p.workflow && <a href={p.workflow} target="_blank" rel="noopener noreferrer">View successful CI/CD run <ArrowUpRight size={16} /></a>}{Array.isArray(p.screenshots) && p.screenshots.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} <ArrowUpRight size={16} /></a>)}</div></div></article> })}</div></section>

    <section id="certifications" className="section alternate">
      <div className="shell">
        <div className="sectionHead">
          <span className="kicker">04 / CREDENTIALS</span>
          <h2>Certified to <span>architect.</span></h2>
          <p>
            AWS professional certifications demonstrating foundational cloud
            knowledge and solutions architecture expertise.
          </p>
        </div>

        <div className="skillsGrid">
          <article className="skill">
            <div className="skillTop">
              <span>AWS / ASSOCIATE</span>
              <ShieldCheck size={26} />
            </div>

            <h3>AWS Certified Solutions Architect – Associate</h3>

            <p>Amazon Web Services Training and Certification</p>

            <p>Issued: June 30, 2025</p>
            <p>Expires: June 30, 2028</p>

            <a
              className="textlink"
              href="https://www.credly.com/badges/e33418b2-b5f6-43c0-9955-b101d2041400/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify on Credly <ArrowUpRight size={16} />
            </a>
          </article>

          <article className="skill">
            <div className="skillTop">
              <span>AWS / FOUNDATIONAL</span>
              <ShieldCheck size={26} />
            </div>

            <h3>AWS Certified Cloud Practitioner</h3>

            <p>Amazon Web Services Training and Certification</p>

            <p>Issued: September 16, 2023</p>
            <p>Expires: June 30, 2028</p>

            <a
              className="textlink"
              href="https://www.credly.com/badges/8dd03523-b93e-4837-9be3-bccac6b0c3d2/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify on Credly <ArrowUpRight size={16} />
            </a>
          </article>
        </div>

        <div style={{ marginTop: '32px' }}>
          <a
            className="textlink"
            href="https://www.credly.com/users/pelumi-oke.38928bbb"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all credentials on Credly <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
    <section id="contact" className="section shell contact"><span className="kicker">05 / CONTACT</span><h2>Have a cloud challenge?<br /><span>Let's connect.</span></h2><p>Open to cloud engineering opportunities, architecture conversations and technical collaboration.</p><div className="actions"><a className="primary" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={17} /></a><a className="secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a></div></section>
    <footer><div className="shell footerInner"><a className="brand" href="#home">PO<span className="accent">.</span> / CLOUD</a><span>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</span><a href="#home">Back to top ↑</a></div></footer></main >
}
